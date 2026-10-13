// Данные локальной ребрендированной копии ЛК (High Standards LTD) на базе машины
// сборки КП (ТЗ: Meleshin-OS/tz/bp/2026-09-30-tz-bp.md). Все данные вымышлены:
// объект 2699-Limassol-Apartment, суммы, участники и контакты не существуют.
// Два языка: активный словарь FIXED и манифест переключает setLang (тумблер RU/EN);
// числа обеих языковых версий совпадают — EN-манифест наследует RU-манифест.

// Фиксированные блоки — дословно из ТЗ (раздел 6); машина не сочиняет текст.
const STRINGS_RU = {
  brand: "High Standards LTD",
  title: "Коммерческое предложение",
  description_h2: "Описание проекта",
  plans_h2: "План этажа",
  plan_caption: "План помещения",
  hero_include: "включая работы и черновые материалы",
  photos_h2_start: "Фото объекта",
  works_cols: ["#", "Работа", "Ед.", "Кол&#8209;во", "Цена за ед., €", "Стоимость, €"],
  related_cols: ["#", "Работа", "Ед.", "Кол&#8209;во", "Цена за ед., €"],
  related_h2: "Проектные сопутствующие работы",
  related_rows: [
    { name: "Работы по управлению проектом", unit: "мес.", qty: 8, price: 1400 },
    { name: "Сопутствующие работы", unit: "мес.", qty: 8, price: 350 },
  ],
  prelim_note: "Предложенный состав работ и их стоимость является предварительным и может быть уточнён в ходе подготовительных работ.",
  org_process_h3: "Организация строительного процесса",
  org_process: [
    "Координация и сопровождение работ в рамках зоны ответственности Исполнителя.",
    "Закупка черновых материалов, их разгрузка и перемещение.",
    "Уборка объекта.",
    "Вывоз строительного мусора.",
  ],
  also_included_h3: "В стоимость также входит",
  also_included: [
    "Все необходимые черновые материалы, их закупка, доставка и перемещение",
    "Уборка объекта, вывоз строительного мусора",
  ],
  prelim_volumes_h3: "Объёмы по следующим позициям определены предварительно",
  prelim_volumes_close: "Окончательные объёмы и стоимость по этим позициям согласуются с Заказчиком до начала соответствующих работ.",
  not_estimated_h3: "В оценку не вошло",
  not_included_h2: "В стоимость не входят",
  not_included_sections: ["Отделочные материалы", "Чистовая электрика", "Чистовая сантехника", "Дополнительные позиции"],
  extra_opener: "Отдельно, по запросу клиента, могут быть выполнены работы:",
  finish_note: "Выбор чистовых материалов осуществляется по согласованию с Заказчиком, с учетом стилистических и ценовых предпочтений, а также исходя из сроков поставки.",
  separate_h3: "Работы, стоимость которых определяется отдельной сметой",
  separate_close: "Объёмы и стоимость этих работ уточняются по результатам замеров на объекте; работы выполняются только после письменного согласования с Заказчиком и подписания дополнительной сметы.",
  engineering_h3: "Инженерные работы, требующие отдельной проработки",
  permits_h2: "Согласования и разрешительная документация",
  permits: [
    "В стоимость не входят подготовка, подача, согласование и сопровождение любых документов в государственных органах, муниципалитетах, коммунальных службах, пожарной инспекции, санитарных службах, арендодателях, управляющих компаниях и иных организациях.",
    "Получение разрешений, лицензий, согласований и сертификатов является зоной ответственности Заказчика либо привлекаемых им специалистов.",
  ],
  interaction_h2: "Формат взаимодействия",
  interaction_first: "Работы выполняются в соответствии с {basis}.",
  interaction_fixed: [
    "Все инструкции, изменения и замечания со стороны Заказчика передаются только через руководителя проекта. Прямые указания рабочим, мастерам и субподрядчикам не являются обязательными к исполнению и не считаются согласованными изменениями проекта.",
    "Исполнитель вправе использовать фото- и видеоматериалы выполненных работ в портфолио, социальных сетях и рекламных материалах, при условии что такие материалы не раскрывают конфиденциальную коммерческую информацию Заказчика. При наличии отдельных ограничений они должны быть согласованы сторонами письменно до начала работ.",
  ],
  reporting: "Отчётность предоставляется каждые 2 недели в видеоформате через согласованный мессенджер.",
  payment_h2: "Условия оплаты",
  vat_para: "VAT начисляется дополнительно в соответствии с законодательством Республики Кипр. Оплата производится в евро путём перечисления денежных средств на указанный Исполнителем расчётный счёт.",
  predoplata_purpose: "обеспечение резервирования ресурсов Исполнителя, а также закупки и доставки материалов",
  final_settlement: "Окончательный расчёт осуществляется по факту выполненных работ, после подписания акта приёмки-передачи.",
  term_h3: "Срок реализации",
  term_tail: "с момента подписания договора, предоплаты и передачи объекта в работу.",
  validity_h3: "Срок действия коммерческого предложения",
  validity: "14 дней.",
  manager: { name: "Андреас Николау", phone: "+357 99 452118", phone_href: "tel:+35799452118" },
  chrome_footer: "{brand} | +357 25 030140 | info@highstandards.com.cy | Instagram: highstandards.cy",
  status_sent: "Отправлен",
  status_agreed: "Согласован с клиентом",
  // Языковые метки рендера (кабинет + оба эмиттера)
  label_object: "Объект.",
  label_zone: "Зона работ.",
  label_materials: "Материалы и транспорт.",
  price_final_prefix: "Стоимость по проекту составляет ",
  price_estimate_prefix: "Ориентировочная стоимость по проекту составляет ",
  breakdown: "В том числе: черновые материалы.",
  itogo_label: "Итого:",
  predoplata_label: "Предоплата:",
  second_label: "Второй платёж:",
  hero_price_label: "Стоимость по проекту",
  variant_prefix: "Вариант: ",
  room_all: "Все",
  save_pdf: "Сохранить PDF",
};

const STRINGS_EN = {
  brand: "High Standards LTD",
  title: "Commercial Proposal",
  description_h2: "Project Description",
  plans_h2: "Floor Plan",
  plan_caption: "Apartment plan",
  hero_include: "including works and rough materials",
  photos_h2_start: "Site Photos",
  works_cols: ["#", "Work", "Unit", "Qty", "Unit price, €", "Cost, €"],
  related_cols: ["#", "Work", "Unit", "Qty", "Unit price, €"],
  related_h2: "Related Project Works",
  related_rows: [
    { name: "Project management works", unit: "months", qty: 8, price: 1400 },
    { name: "Related works", unit: "months", qty: 8, price: 350 },
  ],
  prelim_note: "The proposed scope of works and their cost are preliminary and may be refined during the preparation works.",
  org_process_h3: "Organisation of the Construction Process",
  org_process: [
    "Coordination and supervision of the works within the Contractor's area of responsibility.",
    "Purchase of rough materials, their unloading and movement.",
    "Cleaning of the property.",
    "Removal of construction waste.",
  ],
  also_included_h3: "Also Included in the Price",
  also_included: [
    "All necessary rough materials, their purchase, delivery and movement",
    "Cleaning of the property and removal of construction waste",
  ],
  prelim_volumes_h3: "The Quantities for the Following Items Are Preliminary",
  prelim_volumes_close: "The final quantities and cost of these items are agreed with the Client before the corresponding works begin.",
  not_estimated_h3: "Not Included in the Estimate",
  not_included_h2: "Not Included in the Price",
  not_included_sections: ["Finishing materials", "Finishing electrical works", "Finishing plumbing works", "Additional items"],
  extra_opener: "The following works can be carried out separately, at the Client's request:",
  finish_note: "Finishing materials are selected in agreement with the Client, taking into account stylistic and price preferences as well as delivery times.",
  separate_h3: "Works Priced by a Separate Estimate",
  separate_close: "The quantities and cost of these works are determined after on-site measurements; the works are carried out only after written agreement with the Client and signing of a separate estimate.",
  engineering_h3: "Engineering Works Requiring Separate Development",
  permits_h2: "Permits and Authorisation Documents",
  permits: [
    "The price does not include the preparation, submission, approval and support of any documents in government authorities, municipalities, utility services, the fire inspection, sanitary services, landlords, management companies and other organisations.",
    "Obtaining permits, licences, approvals and certificates is the responsibility of the Client or specialists engaged by the Client.",
  ],
  interaction_h2: "Communication Framework",
  interaction_first: "The works are carried out in accordance with {basis}.",
  interaction_fixed: [
    "All instructions, changes and comments from the Client are communicated only through the project manager. Direct instructions to workers, foremen and subcontractors are not binding and are not considered agreed changes to the project.",
    "The Contractor has the right to use photo and video materials of the completed works in its portfolio, social media and advertising materials, provided that such materials do not disclose confidential commercial information of the Client. Any specific restrictions must be agreed by the parties in writing before the works begin.",
  ],
  reporting: "Progress reports are provided every 2 weeks in video format via an agreed messenger.",
  payment_h2: "Payment Terms",
  vat_para: "VAT is charged additionally in accordance with the legislation of the Republic of Cyprus. Payment is made in euros by transfer to the bank account specified by the Contractor.",
  predoplata_purpose: "securing the Contractor's resources and the purchase and delivery of materials",
  final_settlement: "The final settlement is made upon completion of the works, after signing the acceptance and handover certificate.",
  term_h3: "Implementation Period",
  term_tail: "from the date of signing the contract, paying the advance and handing over the property for works.",
  validity_h3: "Validity Period of the Commercial Proposal",
  validity: "14 days.",
  manager: { name: "Andreas Nikolaou", phone: "+357 99 452118", phone_href: "tel:+35799452118" },
  chrome_footer: "{brand} | +357 25 030140 | info@highstandards.com.cy | Instagram: highstandards.cy",
  status_sent: "Sent",
  status_agreed: "Agreed with the client",
  label_object: "Property.",
  label_zone: "Works area.",
  label_materials: "Materials and transport.",
  price_final_prefix: "The project price is ",
  price_estimate_prefix: "The estimated project price is ",
  breakdown: "Including: rough materials.",
  itogo_label: "Total:",
  predoplata_label: "Advance payment:",
  second_label: "Second payment:",
  hero_price_label: "Project price",
  variant_prefix: "Variant: ",
  room_all: "All",
  save_pdf: "Save PDF",
};

// Активный словарь: движок читает FIXED, тумблер RU/EN переключает ссылку setLang-ом.
let FIXED = STRINGS_RU;

function setLang(lang) {
  FIXED = lang === "en" ? STRINGS_EN : STRINGS_RU;
  STATE.lang = lang;
}

// Источник — строки клиентской сметы (манифест sources.estimate: inline).
// Пакетный состав (крупные позиции, компл.) — помещение у строк отсутствует,
// фильтр по помещениям не показывается.
const ESTIMATE_ROWS = [
  { name: "Демонтажные работы", unit: "компл.", qty: 1, price: 7000 },
  { name: "Монтаж перегородок ГКЛ", unit: "компл.", qty: 1, price: 6000 },
  { name: "Электромонтажные работы (черновые)", unit: "компл.", qty: 1, price: 13000 },
  { name: "Сантехнические работы (черновые)", unit: "компл.", qty: 1, price: 9500 },
  { name: "Штукатурные работы", unit: "компл.", qty: 1, price: 17000 },
  { name: "Стяжка пола", unit: "компл.", qty: 1, price: 10000 },
  { name: "Гидроизоляция мокрых зон", unit: "компл.", qty: 1, price: 3500 },
  { name: "Укладка плитки и керамогранита", unit: "компл.", qty: 1, price: 15000 },
  { name: "Окраска стен и потолков", unit: "компл.", qty: 1, price: 7500 },
  { name: "Монтаж подвесных потолков", unit: "компл.", qty: 1, price: 5500 },
];

// EN-версия строк: те же числа, переведённые названия.
const ESTIMATE_ROWS_EN = [
  { name: "Demolition works", unit: "package", qty: 1, price: 7000 },
  { name: "Plasterboard partition installation", unit: "package", qty: 1, price: 6000 },
  { name: "Electrical works (first fix)", unit: "package", qty: 1, price: 13000 },
  { name: "Plumbing works (first fix)", unit: "package", qty: 1, price: 9500 },
  { name: "Plastering works", unit: "package", qty: 1, price: 17000 },
  { name: "Floor screed works", unit: "package", qty: 1, price: 10000 },
  { name: "Waterproofing of wet areas", unit: "package", qty: 1, price: 3500 },
  { name: "Tiling works", unit: "package", qty: 1, price: 15000 },
  { name: "Wall and ceiling painting", unit: "package", qty: 1, price: 7500 },
  { name: "Suspended ceiling installation", unit: "package", qty: 1, price: 5500 },
];

function estimateRows() {
  return STATE.lang === "en" ? ESTIMATE_ROWS_EN : ESTIMATE_ROWS;
}

// Секция материалов клиентской сметы — кабинетом v2 не показывается.
const MATERIALS_ROWS = [
  { name: "Штукатурная смесь (25 кг)", unit: "меш.", qty: 46, price: 13, room: "Зал" },
  { name: "Штукатурная смесь (25 кг)", unit: "меш.", qty: 18, price: 13, room: "Кухня" },
  { name: "Штукатурная смесь (25 кг)", unit: "меш.", qty: 46, price: 13, room: "Спальня 1" },
  { name: "Штукатурная смесь (25 кг)", unit: "меш.", qty: 46, price: 13, room: "Спальня 2" },
  { name: "Смесь для стяжки (25 кг)", unit: "меш.", qty: 36, price: 10, room: "Зал" },
  { name: "Смесь для стяжки (25 кг)", unit: "меш.", qty: 18, price: 10, room: "Кухня" },
  { name: "Смесь для стяжки (25 кг)", unit: "меш.", qty: 30, price: 10, room: "Спальня 1" },
  { name: "Смесь для стяжки (25 кг)", unit: "меш.", qty: 30, price: 10, room: "Спальня 2" },
  { name: "Лист ГКЛ (2600×1200)", unit: "шт.", qty: 14, price: 12, room: "Зал" },
  { name: "Лист ГКЛ (2600×1200)", unit: "шт.", qty: 8, price: 12, room: "Спальня 1" },
  { name: "Лист ГКЛ (2600×1200)", unit: "шт.", qty: 16, price: 12, room: "Спальня 2" },
  { name: "Профиль и обрешётка", unit: "м.п.", qty: 48, price: 6, room: "Зал" },
  { name: "Профиль и обрешётка", unit: "м.п.", qty: 26, price: 6, room: "Спальня 1" },
  { name: "Профиль и обрешётка", unit: "м.п.", qty: 52, price: 6, room: "Спальня 2" },
  { name: "Клей плиточный (25 кг)", unit: "меш.", qty: 15, price: 17, room: "Кухня" },
  { name: "Клей плиточный (25 кг)", unit: "меш.", qty: 17, price: 17, room: "Санузел" },
  { name: "Гидроизоляция (8 кг)", unit: "шт.", qty: 4, price: 45, room: "Санузел" },
  { name: "Кабель и короб (черновая электрика)", unit: "м.п.", qty: 90, price: 8, room: "Зал" },
  { name: "Кабель и короб (черновая электрика)", unit: "м.п.", qty: 55, price: 8, room: "Кухня" },
  { name: "Кабель и короб (черновая электрика)", unit: "м.п.", qty: 30, price: 8, room: "Санузел" },
  { name: "Кабель и короб (черновая электрика)", unit: "м.п.", qty: 75, price: 8, room: "Спальня 1" },
  { name: "Кабель и короб (черновая электрика)", unit: "м.п.", qty: 75, price: 8, room: "Спальня 2" },
  { name: "Трубы и фитинги (черновая сантехника)", unit: "м.п.", qty: 35, price: 18, room: "Санузел" },
  { name: "Грунтовка (10 л)", unit: "шт.", qty: 3, price: 26, room: "Зал" },
  { name: "Грунтовка (10 л)", unit: "шт.", qty: 2, price: 26, room: "Кухня" },
  { name: "Грунтовка (10 л)", unit: "шт.", qty: 2, price: 26, room: "Санузел" },
  { name: "Грунтовка (10 л)", unit: "шт.", qty: 3, price: 26, room: "Спальня 1" },
  { name: "Грунтовка (10 л)", unit: "шт.", qty: 3, price: 26, room: "Спальня 2" },
  { name: "Утеплитель и звукоизоляция", unit: "м²", qty: 20, price: 26, room: "Зал" },
  { name: "Утеплитель и звукоизоляция", unit: "м²", qty: 34, price: 26, room: "Спальня 1" },
  { name: "Утеплитель и звукоизоляция", unit: "м²", qty: 34, price: 26, room: "Спальня 2" },
  { name: "Расходные материалы и крепёж", unit: "компл.", qty: 3, price: 120, room: "Зал" },
  { name: "Расходные материалы и крепёж", unit: "компл.", qty: 2, price: 120, room: "Кухня" },
  { name: "Расходные материалы и крепёж", unit: "компл.", qty: 1, price: 120, room: "Санузел" },
  { name: "Расходные материалы и крепёж", unit: "компл.", qty: 3, price: 120, room: "Спальня 1" },
  { name: "Расходные материалы и крепёж", unit: "компл.", qty: 3, price: 120, room: "Спальня 2" },
];

const MANIFEST_RU = {
  object: {
    folder: "2699-Limassol-Apartment", // YYNN — только внутренние места: папка и имя файла, не клиентские поля
    subtitle: "Выполнение комплекса работ по капитальному ремонту",
    scope: "капитальному ремонту",
    opening: "Компания {brand} выполняет комплекс работ по капитальному ремонту квартиры на основании Проектной документации Заказчика.",
    field_object: "Квартира 65,5 м², Лимасол.",
    basis_doc: "Проектной документацией Заказчика",
    field_zone: "Кухня-зал, спальня ×2, санузел.",
    field_materials: "",
    language: "ru",
    date: "11.10.2026",
    date_iso: "2026-10-11",
  },
  sources: {
    card: "renovation/2699-Limassol-Apartment/2026-09-28-meleshin-2699-Limassol-Apartment-card.md",
    estimate: "inline (10 строк, см. ESTIMATE_ROWS)",
  },
  images: {
    hero: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    plans: ["fl1.png", "fl2.png"],
    photos: [],
    gallery: [],
  },
  commerce: {
    price: { kind: "final", clause: "" }, // final | estimate
    materials: 12000, // черновые материалы — в цене, не поле КП (ТЗ ЛК v2 §4)
    predoplata: 24000,
    second_payment: { amount: 48000, note: "после завершения черновых работ" },
    term: { value: "7–8", unit: "месяцев" },
    reporting: false, // пункт об отчётности — только длинные проекты
  },
  layout: {
    permits: true, // решение 3
    works_heading: "Строительно-монтажные, отделочные и сопутствующие работы",
    org_process: "on", // on | fold (fold → also_included)
    related_table: "separate", // separate | inline
    omit: [], // photos | permits
    not_included_form: "subsections", // subsections | prose
    prelim_volumes: ["объёмы штукатурки стен", "объёмы укладки плитки"],
    not_estimated: [],
    separate_estimate: ["Замена оконных блоков — 5 шт.", "Устройство барной стойки из бетона — 1 шт."],
    engineering: "",
    not_included_sections: {
      "Отделочные материалы": ["Плитка, керамогранит", "Ламинат", "Краска для стен и потолков"],
      "Чистовая электрика": ["Розетки и выключатели", "Светильники"],
      "Чистовая сантехника": ["Смесители", "Душевая система"],
    },
    extra_works: ["Перенос стен по утверждённому дизайн-проекту", "Гидроизоляция дополнительного санузла"],
  },
  variants: {
    base: { label: "Перегородки ГКЛ" },
    aerocrete: {
      label: "Газоблок",
      replace: [{ match: "Монтаж перегородок ГКЛ", row: { name: "Монтаж перегородок из газоблока", unit: "компл.", qty: 1, price: 7200 } }],
    },
    "no-partition": { label: "Без перепланировки", drop: ["Монтаж перегородок ГКЛ"] },
  },
};

// EN-манифест наследует числа RU-манифеста, заменяя только тексты.
const MANIFEST_EN = (function () {
  const en = JSON.parse(JSON.stringify(MANIFEST_RU)); // клона движка здесь ещё нет — data.js грузится раньше engine.js
  en.object.subtitle = "Complete Apartment Renovation Works";
  en.object.opening = "{brand} carries out a full range of apartment renovation works on the basis of the Client's design documentation.";
  en.object.field_object = "Apartment, 65.5 m², Limassol.";
  en.object.basis_doc = "the design documentation provided by the Client";
  en.object.field_zone = "Kitchen-living room, 2 bedrooms, bathroom.";
  en.object.language = "en";
  en.object.date = "10/11/2026";
  en.layout.works_heading = "Construction, Finishing and Related Works";
  en.layout.prelim_volumes = ["plastering quantities", "tiling quantities"];
  en.layout.separate_estimate = ["Replacement of window units — 5 pcs.", "Construction of a concrete bar counter — 1 pc."];
  en.layout.not_included_sections = {
    "Finishing materials": ["Tiles, porcelain stoneware", "Laminate flooring", "Wall and ceiling paint"],
    "Finishing electrical works": ["Sockets and switches", "Light fixtures"],
    "Finishing plumbing works": ["Taps", "Shower system"],
  };
  en.layout.extra_works = ["Relocation of walls according to the approved interior design", "Waterproofing of an additional bathroom"];
  en.commerce.second_payment.note = "after completion of the rough works";
  en.commerce.term.unit = "months";
  en.variants = {
    base: { label: "Plasterboard partitions" },
    aerocrete: {
      label: "Aerated block",
      replace: [{ match: "Plasterboard partition installation", row: { name: "Aerated block partition installation", unit: "package", qty: 1, price: 7200 } }],
    },
    "no-partition": { label: "No layout changes", drop: ["Plasterboard partition installation"] },
  };
  return en;
})();

const MANIFEST_DEFAULT = MANIFEST_RU;
