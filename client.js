// ЛК клиента v2 (bp-client) — клиентская половина машины сборки КП.
// Источник состояния — админка (bp-admin): по умолчанию ЛК грузит опубликованное
// состояние (published.json репо админки), ссылка «Предпросмотр ЛК клиента» из
// админки передаёт текущее состояние конструктора в адресе (#preview=…) — правки
// админы видны в ЛК сразу. Движок и данные подгружаются со страницы админки,
// поэтому изменения админы приходят в ЛК без дублирования кода.
// v2 (Иван 02.10): одна вкладка — КП; экранов сметы нет; выбор помещения —
// строка кнопок в документе, фильтрует таблицу работ; «Сохранить PDF» —
// полный документ.
(function () {
  // Локальная копия: движок, данные и published.json лежат в этой же папке
  const ADMIN = new URLSearchParams(location.search).get("admin") || "";
  const V = "37";

  const loadScript = (src) => new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = res;
    s.onerror = () => rej(new Error("не загрузился: " + src));
    document.head.appendChild(s);
  });
  // Форма документа — общий файл админ-репо (как engine.js): одна и та же
  // карточка КП в ЛК и в конструкторе, норма живёт в одном месте
  const loadCss = (src) => new Promise((res, rej) => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = src;
    l.onload = res;
    l.onerror = () => rej(new Error("не загрузился: " + src));
    document.head.appendChild(l);
  });

  // #preview=… — предпросмотр из админки: манифест + вариант + статус в адресе
  const decodePreview = () => {
    const m = location.hash.match(/^#preview=(.+)$/);
    if (!m) return null;
    try {
      const b64 = decodeURIComponent(m[1]);   // хэш приходит percent-encoded
      return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(b64), (c) => c.charCodeAt(0))));
    } catch (e) {
      return null;
    }
  };

  // Кабинет v2: герой (без экранов) + вкладка КП (engine renderEstimate).
  function render() {
    const a = build();
    document.getElementById("hero").innerHTML = renderHero(a);
    document.getElementById("content").innerHTML = renderEstimate(a);
    document.getElementById("print-doc").innerHTML = renderDoc(a, { print: true });
    wire();
  }

  function wire() {
    const content = document.getElementById("content");
    // Помещение фильтрует таблицу работ в документе (строка кнопок между
    // заголовком зоны и таблицей) — меняется только вкладка КП; печать
    // собирается от манифеста, выбор помещения в PDF не попадает.
    content.addEventListener("click", (e) => {
      if (e.target.closest("#btn-pdf")) { window.print(); return; }
      const roomBtn = e.target.closest("[data-room]");
      if (!roomBtn) return;
      STATE.room = roomBtn.dataset.room;
      document.getElementById("content").innerHTML = renderEstimate(build());
    });
  }

  // Опубликованное состояние (или предпросмотр) — хранится для тумблера RU/EN:
  // манифесты обоих языков переключаются без повторной загрузки
  let PUB = null;

  const applyChrome = (lang) => {
    document.body.classList.toggle("lang-en", lang === "en");
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang span[data-lang]").forEach((s) => s.classList.toggle("active", s.dataset.lang === lang));
  };

  const manifestFor = (lang) => (lang === "en" && PUB && PUB.manifest_en ? PUB.manifest_en : PUB ? PUB.manifest : MANIFEST_DEFAULT);

  const switchLang = (lang) => {
    if (STATE.lang === lang) return;
    setLang(lang);
    STATE.room = "all"; // названия помещений языковые — выбор сбрасывается
    STATE.manifest = clone(manifestFor(lang));
    try { localStorage.setItem("hs_lang", lang); } catch (e) {}
    applyChrome(lang);
    render();
  };

  (async () => {
    await loadCss(ADMIN + "document.css?v=" + V);
    await loadScript(ADMIN + "data.js?v=" + V);
    await loadScript(ADMIN + "engine.js?v=" + V);
    const preview = decodePreview();
    if (preview && preview.manifest) {
      PUB = { manifest: preview.manifest, variant: preview.variant || "base", status: preview.status || "sent" };
    } else {
      try {
        const r = await fetch(ADMIN + "published.json", { cache: "no-cache" });
        PUB = await r.json();
      } catch (e) {
        PUB = null; // локальная папка недоступна — рендер из манифеста по умолчанию
      }
    }
    let lang = "ru";
    try { lang = localStorage.getItem("hs_lang") === "en" ? "en" : "ru"; } catch (e) {}
    setLang(lang);
    STATE.manifest = clone(manifestFor(lang));
    if (PUB) { STATE.variant = PUB.variant || "base"; STATE.status = PUB.status || "sent"; }
    applyChrome(lang);
    document.querySelectorAll(".lang span[data-lang]").forEach((s) => s.addEventListener("click", () => switchLang(s.dataset.lang)));
    render();
  })();
})();
