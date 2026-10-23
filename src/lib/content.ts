/* ============================================================
   SITE CONTENT DATA
   Single source of truth for all copy, numbers and project data.
   Update here — components reference these constants.
   ============================================================ */

export const COMPANY = {
  name: "Abhyanand Engineering",
  promoter: "Shri Pramod Kumar Sharma",
  promoterExperience: "13+",
  phone1: "+91 8873100219",
  phone1Raw: "+918873100219",
  phone2: "+91 8340722748",
  phone2Raw: "+918340722748",
  email: "pramod.abhyanand@gmail.com",
  whatsappNumber: "918873100219", // UPDATE when client confirms WhatsApp number
  whatsappMessage: "Hello%2C+I+want+a+quote+for...",
  address: {
    line1: "Qrt. No.-3/954, Near Vikram Bridge",
    line2: "Pushpraj Nagar, Rewa, M.P. 486001",
    full: "Qrt. No.-3/954, Near Vikram Bridge, Pushpraj Nagar, Rewa, M.P. 486001",
  },
  operatingSites: ["Bokaro (JH)", "Rajgangpur (OD)", "Shahabad (KA)"],
  gstin: "20BTFPK4771H1ZU",
  udyam: "UDYAM-JH-01-0004061",
};

export const NUMBERS = [
  { figure: "232", label: "Workers across 13 trades" },
  { figure: "30", label: "Certified welders" },
  { figure: "25", label: "Riggers" },
  { figure: "110 MT", label: "Heaviest component handled" },
  { figure: "2,000 MT", label: "Largest silo built" },
];

export const HERO = {
  headline: "Fabrication and erection crews for cement, steel and power plants.",
  subline:
    "232 trained workers in 13 trades. 17 plant jobs delivered, from a 110 MT gearbox lift to a 2,000 MT silo.",
  // Ad landing variants — keyed by ?service= URL param
  variants: {
    fabrication: {
      headline: "Structural fabrication and erection crews for cement, steel and power plants.",
      service: "Structural fabrication",
    },
    manpower: {
      headline: "232 trained workers in 13 trades, ready to mobilise to your plant.",
      service: "Manpower supply",
    },
    maintenance: {
      headline: "Plant maintenance, shutdowns and overhauls. Executed safely.",
      service: "Plant maintenance or shutdown",
    },
  },
};

export const SERVICES = [
  {
    num: "01",
    title: "Structural fabrication and erection",
    body: "Heavy steel structure fabrication and precision site erection for cement, steel and power plant infrastructure.",
  },
  {
    num: "02",
    title: "Mechanical equipment erection, piping and commissioning",
    body: "Full mechanical erection: equipment setting, piping, alignment and commissioning. From packers to 110 MT gearboxes.",
  },
  {
    num: "03",
    title: "Plant maintenance, shutdowns and overhauls",
    body: "Planned and emergency shutdowns. Mill overhauls, rotary equipment servicing, dismantling and refixing at running plants.",
  },
  {
    num: "04",
    title: "Skilled manpower supply",
    body: "232 engineers, supervisors, certified welders, riggers and fitters mobilised to your site, with safety compliance documents.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    client: "Jaypee Bokaro Cement (Jaiprakash Associates Ltd.)",
    site: "Bokaro, JH",
    work: "Fabrication and erection of fabricated parts",
    size: null,
  },
  {
    id: 2,
    client: "Jaypee Shahabad Cement",
    site: "Karnataka",
    work: "Fabrication and erection of steel structures and plant equipment",
    size: null,
  },
  {
    id: 3,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Packer-3: fabrication, equipment erection, commissioning",
    size: "240 TPH",
  },
  {
    id: 4,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Cement steel silo: fabrication, erection, commissioning",
    size: "1,000 MT",
  },
  {
    id: 5,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Truck tippler: fabrication, erection, commissioning",
    size: "7 tipplings/hr",
  },
  {
    id: 6,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Bag house: fabrication, erection, commissioning",
    size: "200,000 m\u00b3/hr",
  },
  {
    id: 7,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Hot air duct replacement: erection of fabricated parts, commissioning",
    size: null,
  },
  {
    id: 8,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Dry flyash steel silo: fabrication, erection, commissioning",
    size: "2,000 MT",
  },
  {
    id: 9,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Packer-4: fabrication, erection, commissioning",
    size: "240 TPH",
  },
  {
    id: "10\u201311",
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Transfer lines (3 nos) erection; FBC-1 and FBC-2 dismantling",
    size: "120 TPH",
  },
  {
    id: 12,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Mill rank gearbox: removing and fixing at 6,500 TPH mill",
    size: "110 MT",
  },
  {
    id: 13,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Slag and clinker rotary: dismantling and fixing",
    size: "17 MT, 300 TPH",
  },
  {
    id: 14,
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Mill hub and roller hub: heavy dismantling and fixing",
    size: "41 MT",
  },
  {
    id: "15\u201317",
    client: "Dalmia Cement",
    site: "Bokaro, JH",
    work: "Mill liners (roller and table) and main shaft: dismantling and fixing",
    size: null,
  },
];

export const FEATURED_PROJECTS = [
  {
    id: 8,
    title: "Dry Flyash Steel Silo",
    client: "Dalmia Cement, Bokaro",
    work: "Fabrication, erection and commissioning",
    size: "2,000 MT",
    // image: "/images/silo-2000mt.webp",
    photoCaption: "Photo: Dalmia Bokaro. 2,000 MT dry flyash silo",
  },
  {
    id: 12,
    title: "Mill Rank Gearbox",
    client: "Dalmia Cement, Bokaro",
    work: "Removing and fixing at 6,500 TPH mill",
    size: "110 MT",
    // image: "/images/gearbox-110mt.webp",
    photoCaption: "Photo: Dalmia Bokaro. 110 MT mill rank gearbox",
  },
  {
    id: 3,
    title: "Packer-3 and Packer-4",
    client: "Dalmia Cement, Bokaro",
    work: "Fabrication, equipment erection and commissioning",
    size: "240 TPH each",
    // image: "/images/packer-240tph.webp",
    photoCaption: "Photo: Dalmia Bokaro. 240 TPH packer",
  },
];

export const HEAVY_COMPONENTS = [
  { label: "Slag & Clinker Rotary", value: 17, unit: "MT", max: 110 },
  { label: "Mill Hub & Roller Hub", value: 41, unit: "MT", max: 110 },
  { label: "Mill Rank Gearbox", value: 110, unit: "MT", max: 110 },
];

export const WORKFORCE = [
  { trade: "Engineer supervisors", count: 3 },
  { trade: "Diploma supervisors", count: 4 },
  { trade: "Safety supervisors", count: 4 },
  { trade: "Foremen", count: 5 },
  { trade: "Millwright fitters", count: 4 },
  { trade: "Mechanical fitters", count: 15 },
  { trade: "Certified welders", count: 30 },
  { trade: "Riggers", count: 25 },
  { trade: "Fabricators", count: 3 },
  { trade: "Electricians", count: 2 },
  { trade: "Khalasis", count: 75 },
  { trade: "Helpers", count: 50 },
];
// NOTE: Total of above rows = 220. PPT states 232 (226 in chart).
// Confirm with client before publishing the "232" figure.

export const CLIENTS = [
  {
    name: "Dalmia Bharat Cement",
    unit: "Bokaro unit (Jharkhand)",
    note: "15 executed packages across silos, packers and mill overhauls.",
  },
  {
    name: "Dalmia Bharat Cement",
    unit: "Rajgangpur unit (Odisha)",
    note: "Mechanical maintenance partner.",
  },
  {
    name: "Jaypee Bokaro Cement",
    unit: "Bokaro (Jharkhand)",
    note: "Structural fabrication and erection. (Jaiprakash Associates Ltd.)",
  },
  {
    name: "Jaypee Shahabad Cement",
    unit: "Shahabad (Karnataka)",
    note: "Heavy steel structure and equipment erection.",
  },
];

export const HOW_IT_WORKS = [
  {
    num: "1",
    title: "Send your requirement",
    body: "Fill the form or call directly. State the equipment, plant location and rough scope.",
  },
  {
    num: "2",
    title: "Site visit and written quote",
    body: "We visit the site and submit a written, itemised quotation.",
    // NOTE: Add turnaround time once confirmed with client
  },
  {
    num: "3",
    title: "Team mobilised",
    body: "Crew mobilised with safety documents, PPE and compliance papers.",
    // NOTE: Add mobilisation time once confirmed with client
  },
  {
    num: "4",
    title: "Work handed over",
    body: "Execution, commissioning and formal handover with documentation.",
  },
];

export const FAQ = [
  {
    q: "Which states and sites do you work in?",
    a: "We currently operate in Jharkhand (Bokaro), Odisha (Rajgangpur) and Karnataka (Shahabad). We can mobilise to other plant sites. Contact us to discuss.",
  },
  {
    q: "How large is your team and how quickly can you mobilise?",
    a: "232 workers across 13 trades. Contact us to discuss mobilisation timelines for your scope.",
  },
  {
    q: "Can you work alongside our main contractor?",
    a: "Yes. We work as a fabrication, erection or manpower subcontractor to main contractors.",
  },
  {
    q: "What safety documents do you provide?",
    a: "4 dedicated safety supervisors, PPE for all crew, and full compliance with GST, EPF, ESIC and labour law requirements. Specific safety documents are provided during vendor onboarding.",
  },
  {
    q: "Are your workers certified?",
    a: "30 certified welders and 25 riggers. Full certification details are provided during vendor onboarding.",
  },
  {
    q: "Do you provide a written quotation?",
    a: "Yes. After a site visit, we submit an itemised written quotation. Quotes are not binding until issued as a formal written offer.",
  },
];

export const SERVICE_OPTIONS = [
  "Structural fabrication",
  "Equipment erection and piping",
  "Plant maintenance or shutdown",
  "Manpower supply",
  "Other",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
