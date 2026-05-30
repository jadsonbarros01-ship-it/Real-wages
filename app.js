const provinces = [
  { id: "a-coruna", name: "A Coruña", short: "COR", zone: "Galicia", x: 70, y: 145, salary: 27400, rentM2: 10.2, costIndex: 49.4 },
  { id: "lugo", name: "Lugo", short: "LUG", zone: "Galicia", x: 150, y: 145, salary: 24800, rentM2: 7.6, costIndex: 46.4 },
  { id: "asturias", name: "Asturias", short: "AST", zone: "Asturias", x: 230, y: 145, salary: 28062, rentM2: 10.5, costIndex: 53.8 },
  { id: "cantabria", name: "Cantabria", short: "CAN", zone: "Cantabria", x: 310, y: 145, salary: 29075, rentM2: 11.5, costIndex: 52.0 },
  { id: "bizkaia", name: "Bizkaia", short: "BIZ", zone: "País Vasco", x: 390, y: 145, salary: 37000, rentM2: 15.9, costIndex: 55.0 },
  { id: "gipuzkoa", name: "Gipuzkoa", short: "GIP", zone: "País Vasco", x: 470, y: 145, salary: 36000, rentM2: 18.8, costIndex: 57.2 },
  { id: "girona", name: "Girona", short: "GIR", zone: "Cataluña", x: 630, y: 145, salary: 30200, rentM2: 16.8, costIndex: 55.2 },

  { id: "pontevedra", name: "Pontevedra", short: "PON", zone: "Galicia", x: 70, y: 220, salary: 26700, rentM2: 10.8, costIndex: 49.8 },
  { id: "ourense", name: "Ourense", short: "OUR", zone: "Galicia", x: 150, y: 220, salary: 24000, rentM2: 7.3, costIndex: 45.8 },
  { id: "leon", name: "León", short: "LEO", zone: "Castilla y León", x: 230, y: 220, salary: 27000, rentM2: 8.2, costIndex: 48.5 },
  { id: "palencia", name: "Palencia", short: "PAL", zone: "Castilla y León", x: 310, y: 220, salary: 27600, rentM2: 7.4, costIndex: 47.6 },
  { id: "alava", name: "Álava", short: "ALA", zone: "País Vasco", x: 390, y: 220, salary: 34500, rentM2: 12.5, costIndex: 52.6 },
  { id: "navarra", name: "Navarra", short: "NAV", zone: "Navarra", x: 470, y: 220, salary: 32605, rentM2: 10.6, costIndex: 52.5 },
  { id: "huesca", name: "Huesca", short: "HUE", zone: "Aragón", x: 550, y: 220, salary: 27800, rentM2: 8.9, costIndex: 48.7 },
  { id: "lleida", name: "Lleida", short: "LLE", zone: "Cataluña", x: 630, y: 220, salary: 29500, rentM2: 10.3, costIndex: 50.8 },

  { id: "zamora", name: "Zamora", short: "ZAM", zone: "Castilla y León", x: 150, y: 295, salary: 25200, rentM2: 7.0, costIndex: 46.0 },
  { id: "valladolid", name: "Valladolid", short: "VLL", zone: "Castilla y León", x: 230, y: 295, salary: 29000, rentM2: 9.4, costIndex: 50.2 },
  { id: "burgos", name: "Burgos", short: "BUR", zone: "Castilla y León", x: 310, y: 295, salary: 29500, rentM2: 8.8, costIndex: 49.7 },
  { id: "la-rioja", name: "La Rioja", short: "RIO", zone: "La Rioja", x: 390, y: 295, salary: 27855, rentM2: 9.3, costIndex: 49.5 },
  { id: "zaragoza", name: "Zaragoza", short: "ZAR", zone: "Aragón", x: 470, y: 295, salary: 30000, rentM2: 11.4, costIndex: 51.5 },
  { id: "tarragona", name: "Tarragona", short: "TAR", zone: "Cataluña", x: 550, y: 295, salary: 31500, rentM2: 12.6, costIndex: 53.0 },
  { id: "barcelona", name: "Barcelona", short: "BCN", zone: "Cataluña", x: 630, y: 295, salary: 33500, rentM2: 20.7, costIndex: 60.8 },

  { id: "salamanca", name: "Salamanca", short: "SAL", zone: "Castilla y León", x: 150, y: 370, salary: 25500, rentM2: 10.5, costIndex: 48.4 },
  { id: "avila", name: "Ávila", short: "AVI", zone: "Castilla y León", x: 230, y: 370, salary: 25000, rentM2: 8.5, costIndex: 46.8 },
  { id: "segovia", name: "Segovia", short: "SEG", zone: "Castilla y León", x: 310, y: 370, salary: 26500, rentM2: 9.6, costIndex: 48.5 },
  { id: "soria", name: "Soria", short: "SOR", zone: "Castilla y León", x: 390, y: 370, salary: 26800, rentM2: 7.7, costIndex: 46.6 },
  { id: "guadalajara", name: "Guadalajara", short: "GUA", zone: "Castilla-La Mancha", x: 470, y: 370, salary: 27500, rentM2: 9.8, costIndex: 49.4 },
  { id: "teruel", name: "Teruel", short: "TER", zone: "Aragón", x: 550, y: 370, salary: 26000, rentM2: 8.7, costIndex: 46.5 },
  { id: "castellon", name: "Castellón", short: "CAS", zone: "Comunitat Valenciana", x: 630, y: 370, salary: 26500, rentM2: 10.9, costIndex: 49.5 },

  { id: "caceres", name: "Cáceres", short: "CAC", zone: "Extremadura", x: 150, y: 445, salary: 24500, rentM2: 7.7, costIndex: 44.6 },
  { id: "madrid", name: "Madrid", short: "MAD", zone: "Madrid", x: 310, y: 445, salary: 34410, rentM2: 21.2, costIndex: 59.1 },
  { id: "cuenca", name: "Cuenca", short: "CUE", zone: "Castilla-La Mancha", x: 390, y: 445, salary: 25500, rentM2: 7.9, costIndex: 45.5 },
  { id: "toledo", name: "Toledo", short: "TOL", zone: "Castilla-La Mancha", x: 470, y: 445, salary: 26500, rentM2: 8.8, costIndex: 47.5 },
  { id: "valencia", name: "Valencia", short: "VAL", zone: "Comunitat Valenciana", x: 630, y: 445, salary: 27500, rentM2: 15.9, costIndex: 54.0 },
  { id: "illes-balears", name: "Illes Balears", short: "BAL", zone: "Illes Balears", x: 710, y: 445, salary: 28062, rentM2: 19.3, costIndex: 58.0 },

  { id: "badajoz", name: "Badajoz", short: "BAD", zone: "Extremadura", x: 150, y: 520, salary: 25200, rentM2: 7.5, costIndex: 44.9 },
  { id: "ciudad-real", name: "Ciudad Real", short: "CRE", zone: "Castilla-La Mancha", x: 310, y: 520, salary: 25500, rentM2: 7.2, costIndex: 45.0 },
  { id: "albacete", name: "Albacete", short: "ALB", zone: "Castilla-La Mancha", x: 390, y: 520, salary: 26000, rentM2: 8.8, costIndex: 46.4 },
  { id: "alicante", name: "Alicante", short: "ALI", zone: "Comunitat Valenciana", x: 550, y: 520, salary: 25500, rentM2: 13.8, costIndex: 51.5 },
  { id: "murcia", name: "Murcia", short: "MUR", zone: "Murcia", x: 630, y: 520, salary: 26349, rentM2: 9.2, costIndex: 47.0 },

  { id: "huelva", name: "Huelva", short: "HUL", zone: "Andalucía", x: 150, y: 595, salary: 25000, rentM2: 12.0, costIndex: 47.5 },
  { id: "sevilla", name: "Sevilla", short: "SEV", zone: "Andalucía", x: 230, y: 595, salary: 27200, rentM2: 13.7, costIndex: 50.5 },
  { id: "cordoba", name: "Córdoba", short: "CDB", zone: "Andalucía", x: 310, y: 595, salary: 25800, rentM2: 8.4, costIndex: 46.7 },
  { id: "jaen", name: "Jaén", short: "JAE", zone: "Andalucía", x: 390, y: 595, salary: 24800, rentM2: 6.8, costIndex: 44.8 },
  { id: "granada", name: "Granada", short: "GRA", zone: "Andalucía", x: 470, y: 595, salary: 25200, rentM2: 10.4, costIndex: 48.0 },
  { id: "almeria", name: "Almería", short: "ALM", zone: "Andalucía", x: 550, y: 595, salary: 25000, rentM2: 9.6, costIndex: 46.8 },

  { id: "cadiz", name: "Cádiz", short: "CAD", zone: "Andalucía", x: 230, y: 670, salary: 26000, rentM2: 12.2, costIndex: 49.0 },
  { id: "malaga", name: "Málaga", short: "MAL", zone: "Andalucía", x: 390, y: 670, salary: 26500, rentM2: 17.9, costIndex: 54.8 },
  { id: "las-palmas", name: "Las Palmas", short: "LPA", zone: "Canarias", x: 70, y: 670, salary: 25200, rentM2: 16.0, costIndex: 51.0 },
  { id: "tenerife", name: "Santa Cruz de Tenerife", short: "TFN", zone: "Canarias", x: 70, y: 595, salary: 25000, rentM2: 15.4, costIndex: 51.3 },
  { id: "ceuta", name: "Ceuta", short: "CEU", zone: "Ceuta", x: 550, y: 670, salary: 28500, rentM2: 11.4, costIndex: 50.0 },
  { id: "melilla", name: "Melilla", short: "MEL", zone: "Melilla", x: 630, y: 670, salary: 27500, rentM2: 10.5, costIndex: 49.0 }
];

const countryConfigs = {
  spain: {
    name: "Espanha",
    scope: "Províncias",
    currency: "EUR",
    locale: "pt-PT",
    livingBase: 830,
    social: 0.0647,
    allowance: 5550,
    regions: provinces
  },
  portugal: {
    name: "Portugal",
    scope: "Distritos",
    currency: "EUR",
    locale: "pt-PT",
    livingBase: 760,
    social: 0.11,
    allowance: 4104,
    regions: buildRegions([
      ["Lisboa", "LIS", 24500, 19.8, 58],
      ["Porto", "POR", 22000, 15.2, 53],
      ["Braga", "BRA", 19000, 10.4, 47],
      ["Aveiro", "AVE", 20500, 11.2, 48],
      ["Coimbra", "COI", 18800, 9.6, 46],
      ["Leiria", "LEI", 18500, 9.5, 45],
      ["Faro", "FAR", 19200, 15.8, 55],
      ["Setúbal", "SET", 20500, 13.2, 50],
      ["Viseu", "VIS", 17500, 7.8, 43],
      ["Évora", "EVO", 17800, 8.6, 44],
      ["Madeira", "MAD", 18500, 13.0, 52],
      ["Açores", "ACO", 18000, 9.4, 48]
    ])
  },
  france: makeCountry("França", "Regiões", "EUR", "fr-FR", 1040, 0.12, 11500, [
    ["Île-de-France", "IDF", 43000, 28.0, 72],
    ["Auvergne-Rhône-Alpes", "ARA", 35500, 15.2, 58],
    ["Nouvelle-Aquitaine", "NAQ", 32000, 12.4, 53],
    ["Occitanie", "OCC", 31500, 12.0, 52],
    ["Bretagne", "BRE", 31000, 11.2, 50],
    ["Pays de la Loire", "PDL", 31800, 11.4, 50],
    ["Grand Est", "GES", 32500, 10.8, 49],
    ["Provence-Alpes-Côte d'Azur", "PAC", 34000, 18.5, 60],
    ["Hauts-de-France", "HDF", 30500, 10.2, 48],
    ["Normandie", "NOR", 30000, 9.8, 47]
  ]),
  germany: makeCountry("Alemanha", "Estados", "EUR", "de-DE", 1050, 0.14, 11604, [
    ["Baviera", "BAY", 52000, 18.8, 63],
    ["Baden-Württemberg", "BWU", 51000, 17.6, 61],
    ["Berlim", "BER", 45500, 17.2, 60],
    ["Hamburgo", "HAM", 53500, 20.0, 64],
    ["Hesse", "HES", 52500, 18.0, 62],
    ["Renânia do Norte-Vestfália", "NRW", 46500, 12.8, 55],
    ["Saxônia", "SAX", 39000, 9.4, 47],
    ["Baixa Saxônia", "NDS", 44000, 10.8, 51],
    ["Bremen", "BRE", 43000, 11.5, 52],
    ["Turíngia", "THU", 38000, 8.8, 46]
  ]),
  italy: makeCountry("Itália", "Regiões", "EUR", "it-IT", 850, 0.092, 8500, [
    ["Lombardia", "LOM", 36000, 18.5, 60],
    ["Lazio", "LAZ", 32500, 16.2, 57],
    ["Emilia-Romagna", "EMR", 34000, 13.8, 53],
    ["Veneto", "VEN", 33000, 12.6, 51],
    ["Toscana", "TOS", 31500, 13.5, 52],
    ["Piemonte", "PIE", 32000, 11.5, 49],
    ["Liguria", "LIG", 30500, 14.2, 54],
    ["Campania", "CAM", 26000, 10.4, 46],
    ["Puglia", "PUG", 24500, 8.8, 43],
    ["Sicília", "SIC", 23500, 8.2, 42]
  ]),
  netherlands: makeCountry("Países Baixos", "Províncias", "EUR", "nl-NL", 1120, 0.12, 10700, [
    ["Noord-Holland", "NHO", 50500, 24.5, 70],
    ["Zuid-Holland", "ZHO", 48500, 21.5, 66],
    ["Utrecht", "UTR", 50000, 22.0, 67],
    ["Noord-Brabant", "NBR", 45500, 16.2, 58],
    ["Gelderland", "GEL", 43000, 14.2, 55],
    ["Overijssel", "OVE", 40500, 12.8, 52],
    ["Groningen", "GRO", 39000, 13.0, 51],
    ["Limburg", "LIM", 40000, 12.0, 50]
  ]),
  uk: makeCountry("Reino Unido", "Regiões", "GBP", "en-GB", 980, 0.12, 12570, [
    ["Londres", "LON", 48000, 31.0, 78],
    ["South East", "SEE", 38500, 19.0, 63],
    ["East of England", "EAS", 36000, 16.0, 58],
    ["North West", "NWE", 32500, 11.2, 50],
    ["West Midlands", "WMI", 31500, 10.8, 49],
    ["Scotland", "SCO", 34000, 12.5, 52],
    ["Wales", "WAL", 29500, 9.0, 45],
    ["Northern Ireland", "NIR", 29000, 8.8, 44]
  ]),
  brazil: makeCountry("Brasil", "Estados", "BRL", "pt-BR", 2300, 0.11, 24000, [
    ["São Paulo", "SP", 68000, 62, 62],
    ["Rio de Janeiro", "RJ", 61000, 58, 60],
    ["Distrito Federal", "DF", 76000, 50, 56],
    ["Santa Catarina", "SC", 56000, 42, 50],
    ["Paraná", "PR", 52000, 38, 48],
    ["Rio Grande do Sul", "RS", 50000, 34, 46],
    ["Minas Gerais", "MG", 47000, 32, 45],
    ["Bahia", "BA", 41000, 30, 43],
    ["Pernambuco", "PE", 42000, 34, 45],
    ["Ceará", "CE", 39000, 31, 42]
  ])
};

function buildRegions(rows) {
  const points = [
    [90, 160], [210, 160], [330, 160], [450, 160], [570, 160],
    [150, 265], [270, 265], [390, 265], [510, 265], [630, 265],
    [210, 370], [330, 370], [450, 370], [570, 370], [690, 370],
    [150, 475], [270, 475], [390, 475], [510, 475], [630, 475],
    [210, 580], [330, 580], [450, 580], [570, 580], [690, 580]
  ];
  return rows.map(([name, short, salary, rentM2, costIndex], index) => ({
    id: name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    short,
    zone: name,
    salary,
    rentM2,
    costIndex,
    x: points[index % points.length][0],
    y: points[index % points.length][1]
  }));
}

function makeCountry(name, scope, currency, locale, livingBase, social, allowance, rows) {
  return { name, scope, currency, locale, livingBase, social, allowance, regions: buildRegions(rows) };
}

const map = document.querySelector("#salaryMap");
const ranking = document.querySelector("#ranking");
const tableBody = document.querySelector("#tableBody");
const search = document.querySelector("#search");
const onlyViable = document.querySelector("#onlyViable");
const countrySelect = document.querySelector("#countrySelect");
const themeToggle = document.querySelector("#themeToggle");
const installApp = document.querySelector("#installApp");
const metersRange = document.querySelector("#metersRange");
const metersInput = document.querySelector("#metersInput");
const peopleInput = document.querySelector("#peopleInput");
const salaryOverride = document.querySelector("#salaryOverride");
const rentOverride = document.querySelector("#rentOverride");
const costOverride = document.querySelector("#costOverride");
const targetSavings = document.querySelector("#targetSavings");
const maxRentShare = document.querySelector("#maxRentShare");
const reserveTarget = document.querySelector("#reserveTarget");
const rankMode = document.querySelector("#rankMode");
let homeSize = 45;
let peopleCount = 1;
let selectedId = null;
let deferredInstallPrompt = null;

function currentCountry() {
  return countryConfigs[countrySelect.value] || countryConfigs.spain;
}

function activeRegions() {
  return currentCountry().regions;
}

function annualNet(gross) {
  const country = currentCountry();
  const social = gross * country.social;
  const taxable = Math.max(0, gross - social - country.allowance);
  const brackets = [
    [12450, 0.19],
    [20200 - 12450, 0.24],
    [35200 - 20200, 0.30],
    [60000 - 35200, 0.37]
  ];
  let remaining = taxable;
  let tax = 0;
  for (const [width, rate] of brackets) {
    const part = Math.min(remaining, width);
    if (part > 0) tax += part * rate;
    remaining -= part;
  }
  if (remaining > 0) tax += remaining * 0.45;
  return gross - social - tax;
}

function money(value) {
  const country = currentCountry();
  return new Intl.NumberFormat(country.locale, {
    style: "currency",
    currency: country.currency,
    maximumFractionDigits: 0
  }).format(value);
}

function scoreLabel(score) {
  if (score >= 82) return "Excelente";
  if (score >= 68) return "Muito boa";
  if (score >= 52) return "Boa";
  if (score >= 38) return "Tensa";
  return "Difícil";
}

function enrich() {
  const country = currentCountry();
  const livingBase = country.livingBase;
  const manualSalary = Number(salaryOverride.value) || 0;
  const manualRent = Number(rentOverride.value) || 0;
  const manualCost = Number(costOverride.value) || 0;
  const targetReserveMonths = Math.max(1, Number(reserveTarget.value) || 6);
  const computed = activeRegions().map((province) => {
    const netPerWorker = annualNet(province.salary) / 12;
    const net = manualSalary > 0 ? manualSalary : netPerWorker * peopleCount;
    const rent = manualRent > 0 ? manualRent : province.rentM2 * homeSize;
    const householdFactor = 1 + Math.max(0, peopleCount - 1) * 0.62;
    const living = manualCost > 0 ? manualCost : livingBase * (province.costIndex / 50) * householdFactor;
    const savings = net - rent - living;
    const savingsPerPerson = savings / peopleCount;
    const rentShare = rent / net;
    const projectedSavings = savings * targetReserveMonths;
    return { ...province, netPerWorker, net, rent, living, savings, savingsPerPerson, projectedSavings, rentShare };
  });

  const savingsValues = computed.map((r) => r.savings);
  const minSavings = Math.min(...savingsValues);
  const maxSavings = Math.max(...savingsValues);
  return computed
    .map((r) => {
      const savingsScore = ((r.savings - minSavings) / (maxSavings - minSavings)) * 66;
      const rentScore = Math.max(0, 24 - r.rentShare * 52);
      const costScore = Math.max(0, 10 - (r.costIndex - 44) * 0.85);
      return { ...r, score: Math.round(savingsScore + rentScore + costScore) };
    })
    .sort((a, b) => b.score - a.score);
}

function colorFor(savings) {
  if (savings >= 720) return "#5ee28c";
  if (savings >= 520) return "#c7f05a";
  if (savings >= 330) return "#f3c14b";
  if (savings >= 120) return "#ef8b5b";
  return "#c94646";
}

function decisionPool(data) {
  const minimum = Number(targetSavings.value) || 0;
  const maxShare = (Number(maxRentShare.value) || 100) / 100;
  return data.filter((r) => r.savings >= minimum && r.rentShare <= maxShare);
}

function activeRankMode() {
  return rankMode.value || "balanced";
}

function rankValue(region, mode = activeRankMode()) {
  if (mode === "savings") return region.savings;
  if (mode === "rent") return -region.rentShare;
  if (mode === "risk") return region.savings / Math.max(1, region.rent + region.living);
  return region.score;
}

function sortByMode(data, mode = activeRankMode()) {
  return [...data].sort((a, b) => rankValue(b, mode) - rankValue(a, mode));
}

function rankBadge(region, mode = activeRankMode()) {
  if (mode === "savings") return money(region.savings);
  if (mode === "rent") return `${Math.round(region.rentShare * 100)}%`;
  if (mode === "risk") return `${Math.round((region.savings / Math.max(1, region.rent + region.living)) * 100)}%`;
  return region.score;
}

function modeLabel(mode = activeRankMode()) {
  if (mode === "savings") return "maior sobra";
  if (mode === "rent") return "menor aluguel/renda";
  if (mode === "risk") return "menor risco";
  return "melhor equilíbrio";
}

function singularScope(scope) {
  if (scope === "Regiões") return "Região";
  if (scope === "Províncias") return "Província";
  if (scope === "Distritos") return "Distrito";
  if (scope === "Estados") return "Estado";
  return scope.replace(/s$/, "");
}

function drawMap(data) {
  map.innerHTML = "";
  const byId = Object.fromEntries(data.map((r) => [r.id, r]));
  activeRegions().forEach((base) => {
    const r = byId[base.id];
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("class", `region ${selectedId === r.id ? "selected" : ""}`);
    rect.setAttribute("x", base.x);
    rect.setAttribute("y", base.y);
    rect.setAttribute("width", 68);
    rect.setAttribute("height", 58);
    rect.setAttribute("rx", 10);
    rect.setAttribute("fill", colorFor(r.savings));
    rect.dataset.id = r.id;
    rect.addEventListener("click", () => {
      selectedId = selectedId === r.id ? null : r.id;
      render();
    });

    const name = document.createElementNS("http://www.w3.org/2000/svg", "text");
    name.setAttribute("class", "map-label");
    name.setAttribute("x", base.x + 34);
    name.setAttribute("y", base.y + 24);
    name.setAttribute("text-anchor", "middle");
    name.textContent = base.short;

    const value = document.createElementNS("http://www.w3.org/2000/svg", "text");
    value.setAttribute("class", "map-value");
    value.setAttribute("x", base.x + 34);
    value.setAttribute("y", base.y + 43);
    value.setAttribute("text-anchor", "middle");
    value.textContent = money(r.savings).replace(/\s/g, "");

    const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "title");
    tooltip.textContent = `${r.name}: ${money(r.savings)} de poupança real mensal`;
    group.append(rect, name, value, tooltip);
    map.appendChild(group);
  });
}

function renderRanking(data) {
  const filtered = decisionPool(data);
  const source = sortByMode(filtered.length ? filtered : data);
  ranking.innerHTML = source
    .slice(0, 10)
    .map(
      (r, index) => `
        <button class="rank-row" data-id="${r.id}">
          <span class="rank-number">${index + 1}</span>
          <span><strong>${r.name}</strong><span>${r.zone} · ${money(r.savings)} casa · ${money(r.savingsPerPerson)} por pessoa</span></span>
          <span class="pill">${rankBadge(r)}</span>
        </button>
      `
    )
    .join("");
  ranking.querySelectorAll(".rank-row").forEach((row) => {
    row.addEventListener("click", () => {
      selectedId = row.dataset.id;
      render();
    });
  });
}

function renderTable(data) {
  const query = search.value.trim().toLowerCase();
  const rows = sortByMode(data).filter((r) => {
    const haystack = `${r.name} ${r.zone}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    const matchesViable = !onlyViable.checked || decisionPool([r]).length > 0;
    return matchesSearch && matchesViable;
  });
  const max = Math.max(...data.map((r) => r.savings));
  const min = Math.min(...data.map((r) => r.savings));
  tableBody.innerHTML = rows
    .map((r) => {
      const width = Math.max(5, ((r.savings - min) / (max - min)) * 100);
      return `
        <tr class="${selectedId === r.id ? "selected-row" : ""}">
          <td><strong>${r.name}</strong><small>${r.zone}</small></td>
          <td>${money(r.net)}</td>
          <td>${money(r.rent)} <small>(${r.rentM2.toFixed(1)} €/m²)</small></td>
          <td>${money(r.living)}</td>
          <td class="bar-cell"><strong>${money(r.savings)}</strong><div class="bar"><i style="width:${width}%"></i></div></td>
          <td>${Math.round(r.rentShare * 100)}%</td>
          <td class="quality">${scoreLabel(r.score)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderInsights(data) {
  const filtered = decisionPool(data);
  const best = sortByMode(filtered.length ? filtered : data)[0];
  const salaryKing = [...data].sort((a, b) => b.salary - a.salary)[0];
  const rentTrap = [...data].sort((a, b) => b.rentShare - a.rentShare)[0];
  const quiet = data.find((r) => r.salary < 27000 && r.score >= 72) || data[2];

  document.querySelector("#heroBest").textContent = best.name;
  document.querySelector("#bestSavings").textContent = best.name;
  document.querySelector("#bestSavingsText").textContent = `${money(best.savings)} por mês após aluguel e custo de vida. É a província onde a folga mensal aparece mais limpa no cenário atual.`;
  document.querySelector("#rentTrap").textContent = rentTrap.name;
  document.querySelector("#rentTrapText").textContent = `O aluguel consome cerca de ${Math.round(rentTrap.rentShare * 100)}% do salário líquido estimado. Salário alto não resolve tudo quando o m² dispara.`;
  document.querySelector("#quietWinner").textContent = quiet.name;
  document.querySelector("#quietWinnerText").textContent = `Não lidera em salário como ${salaryKing.name}, mas entrega melhor qualidade de vida quando aluguel e despesas entram na conta.`;
}

function renderDecision(data) {
  const viable = sortByMode(decisionPool(data));
  const selected = data.find((r) => r.id === selectedId) || (viable[0] || sortByMode(data)[0]);
  const targetReserveMonths = Math.max(1, Number(reserveTarget.value) || 6);
  document.querySelector("#selectedProvince").textContent = selected.name;
  document.querySelector("#selectedSavings").textContent = money(selected.savings);
  document.querySelector("#reserveLabel").textContent = `Sobra em ${targetReserveMonths} ${targetReserveMonths === 1 ? "mês" : "meses"}`;
  document.querySelector("#reserveMonths").textContent = money(selected.projectedSavings);

  const topNames = viable.slice(0, 3).map((r) => r.name).join(", ");
  if (viable.length) {
    document.querySelector("#decisionAdvice").textContent = `${viable.length} províncias passam sua meta. Critério ativo: ${modeLabel()}. Em ${selected.name}, sobram ${money(selected.savings)} por mês e ${money(selected.projectedSavings)} em ${targetReserveMonths} ${targetReserveMonths === 1 ? "mês" : "meses"}. Melhores candidatas: ${topNames}.`;
  } else {
    document.querySelector("#decisionAdvice").textContent = "Nenhuma província passa os filtros atuais. Reduza a meta de poupança, aumente renda, escolha menos m² ou suba o limite de esforço de aluguel para abrir opções.";
  }
}

function renderCountryUI(data) {
  const country = currentCountry();
  const salaryKing = [...data].sort((a, b) => b.salary - a.salary)[0];
  const rentTrap = [...data].sort((a, b) => b.rentShare - a.rentShare)[0];
  document.querySelector("#countryEyebrow").textContent = `${country.name}, 2026`;
  document.querySelector("#appTitle").textContent = `Mapa dos Salários Reais em ${country.name}`;
  document.querySelector("#heroTitle").textContent = `Onde prosperar em ${country.name}?`;
  document.querySelector("#scopeEyebrow").textContent = `${country.scope}, 2026`;
  document.querySelector("#heroSalary").textContent = salaryKing.name;
  document.querySelector("#heroRent").textContent = rentTrap.name;
  document.querySelector("#mapTitle").textContent = `Poupança real mensal por ${country.scope.toLowerCase()}`;
  document.querySelector("#selectedLabel").textContent = `${singularScope(country.scope)} selecionada`;
  document.querySelector("#regionHeader").textContent = singularScope(country.scope);
  map.setAttribute("aria-label", `Mapa esquemático de ${country.scope.toLowerCase()} em ${country.name}`);
}

function render() {
  const data = enrich();
  renderCountryUI(data);
  drawMap(data);
  renderRanking(data);
  renderTable(data);
  renderInsights(data);
  renderDecision(data);
}

document.querySelectorAll(".scenario").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".scenario").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    homeSize = Number(button.dataset.size);
    peopleCount = homeSize >= 90 ? 4 : homeSize >= 70 ? 2 : 1;
    metersRange.value = homeSize;
    metersInput.value = homeSize;
    peopleInput.value = peopleCount;
    render();
  });
});

function syncMeters(value) {
  homeSize = Math.max(25, Math.min(200, Number(value) || 45));
  metersRange.value = Math.min(140, homeSize);
  metersInput.value = homeSize;
  document.querySelectorAll(".scenario").forEach((b) => b.classList.remove("active"));
  render();
}

metersRange.addEventListener("input", (event) => syncMeters(event.target.value));
metersInput.addEventListener("input", (event) => syncMeters(event.target.value));
peopleInput.addEventListener("input", (event) => {
  peopleCount = Math.max(1, Math.min(8, Number(event.target.value) || 1));
  peopleInput.value = peopleCount;
  render();
});
[salaryOverride, rentOverride, costOverride, targetSavings, maxRentShare, reserveTarget, rankMode].forEach((input) => {
  input.addEventListener("input", render);
});
countrySelect.addEventListener("change", () => {
  selectedId = null;
  salaryOverride.value = "";
  rentOverride.value = "";
  costOverride.value = "";
  search.value = "";
  render();
});
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light", themeToggle.checked);
  document.querySelector("meta[name='theme-color']").setAttribute("content", themeToggle.checked ? "#f4f1e8" : "#12120f");
});
search.addEventListener("input", render);
onlyViable.addEventListener("change", render);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installApp.hidden = false;
});

installApp.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installApp.hidden = true;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installApp.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

render();
