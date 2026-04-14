/**
 * Bucharest mentors: names, roles, and display order from SW Romania Mentors sheet.
 * Images resolve to files in public/images/bucharest/mentors (slug-based, with overrides).
 * Constanța: last six Constanța-only mentors from the sheet; images when available.
 */

export type MentorEntry = {
  name: string;
  role: string;
  /** Lower = earlier in the grid */
  order: number;
  /** Public path under /public; omit when no photo yet */
  image?: string;
};

const BUCHAREST_IMAGE_FILES = new Set([
  "aleodor-tabarcea.jpg",
  "alex-dascalu.jpg",
  "alex-gavril.jpg",
  "alex-nicoara.jpg",
  "alexandru-anghel.jpg",
  "alexandru-stan.jpg",
  "alina-marin.jpg",
  "anamaria-onica.jpg",
  "anca-berca.jpg",
  "anca-marcu.jpg",
  "andra-iacob.jpg",
  "andrei-pavel.png",
  "andrei-zawrac-popescu.jpg",
  "bogdan-clipici.jpg",
  "bogdan-iordace.jpg",
  "bogdan-litescu.jpg",
  "bogdan-nicoara.jpg",
  "bogdan-predusca.jpg",
  "calin-spiridon.jpg",
  "claudiu-jojatu.jpg",
  "cosma-wolkonsky.jpg",
  "cosmin-cosma.jpg",
  "cosmin-posteuca.jpg",
  "costin-sorici.jpg",
  "cristian-culea.jpg",
  "cristian-george-farauanu.png",
  "cristina-toncu.jpg",
  "diana-seredenciuc.jpg",
  "florin-tufan.jpg",
  "ioana-anutoiu.jpg",
  "ioana-serban.jpg",
  "ionut-ilitescu.jpg",
  "ivaylo-ivanov.jpg",
  "laurentiu-victor-balasa.jpg",
  "liviu-gherghescu.jpg",
  "maria-luiza-niculescu-aron.jpg",
  "matei-dumitrescu.jpg",
  "matei-toader.jpg",
  "mihai-guran.jpg",
  "mircea-ghita.jpg",
  "nicolae-gudumac.jpg",
  "paul-burca.jpg",
  "petre-gherghinescu.jpg",
  "radu-rauta.jpg",
  "sacha-michaud.jpg",
  "silvia-ursu.webp",
  "sorin-sfetcu.jpg",
]);

/** Slug from display name → basename if it differs from automatic slug */
const BUCHAREST_SLUG_OVERRIDES: Record<string, string> = {
  "bogdan-iordache": "bogdan-iordace",
  "ionut-iliescu": "ionut-ilitescu",
  "andrei-zawrak-popescu": "andrei-zawrac-popescu",
};

function slugFromDisplayName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function bucharestImagePathForName(name: string): string | undefined {
  let slug = slugFromDisplayName(name);
  slug = BUCHAREST_SLUG_OVERRIDES[slug] ?? slug;
  const exts = [".jpg", ".jpeg", ".png", ".webp"] as const;
  for (const ext of exts) {
    const file = `${slug}${ext}`;
    if (BUCHAREST_IMAGE_FILES.has(file)) {
      return `/images/bucharest/mentors/${file}`;
    }
  }
  return undefined;
}

/** Bucharest rows: Name, Role, order (sheet column E). Sorted by order, then name. */
const BUCHAREST_ROWS: { name: string; role: string; order: number }[] = [
  { name: "Sacha Michaud", role: "Co-founder @ Glovo", order: 1 },
  { name: "Sorin Sfetcu", role: "Industry Manager @ Google", order: 2 },
  { name: "Bogdan Iordache", role: "General Partner @ Underline Ventures", order: 3 },
  { name: "Florin Tufan", role: "CEO & Co-founder @ Veridion", order: 4 },
  { name: "Laurențiu-Victor Bălașa", role: "Founder @ Bible Chat", order: 5 },
  { name: "Bogdan Nicoară", role: "CEO @ Bright Spaces", order: 6 },
  { name: "Mircea Ghiță", role: "Principal @ Metis Ventures", order: 7 },
  { name: "Maria Luiza Niculescu-Aron", role: "General Manager @ Bolt Romania", order: 9 },
  { name: "Aleodor Tabarcea", role: "Engineering Manager @ Stripe", order: 9 },
  { name: "Nicolae Gudumac", role: "Founder & CTO @ Planable", order: 11 },
  { name: "Alexandru Anghel", role: "Co-Founder @ SOLO", order: 12 },
  { name: "Matei Dumitrescu", role: "General Partner @ RocaX VC", order: 13 },
  { name: "Andrei Pavel", role: "Technology Lawyer @ Ventures'n'Law", order: 14 },
  { name: "Alex Gavril", role: "Co-founder & CEO @ Promocrat", order: 15 },
  { name: "George Diaconu", role: "Software Engineer @ Stripe", order: 16 },
  { name: "Theodor Filos", role: "Strategy & Operations @ Flip Romania", order: 17 },
  { name: "Bogdan Clipici", role: "Country Manager @ Bolt Business Romania", order: 18 },
  { name: "Alina Marin", role: "Retail Business Integration Manager @ BCR", order: 19 },
  { name: "Cristina Toncu", role: "Co-founder & CEO @ Techcelerator", order: 20 },
  { name: "Cosmin Cosma", role: "Co-Founder & CEO @ Finqware", order: 21 },
  { name: "Mihai Guran", role: "CEO & Founder @ SalesOMMO", order: 22 },
  { name: "Loredana Gavrilescu", role: "Consultant & Startup Ecosystem Coordinator @ Iceberg Plus", order: 24 },
  { name: "Silvia Ursu", role: "Community Office Romania @ EIT Community Hub", order: 25 },
  { name: "Diana Seredenciuc", role: "COO @ Bankata", order: 26 },
  { name: "Calin Spiridon", role: "CEO @ Minglr", order: 27 },
  { name: "Claudiu Jojatu", role: "Co-Founder @ Milk & Cookies Studio", order: 28 },
  { name: "Andrei-Zawrak Popescu", role: "Venture Partner @ Seedblink", order: 29 },
  { name: "Cosmin Posteucă", role: "Data Engineer @ Veridion", order: 30 },
  { name: "Alexandru Stan", role: "CEO @ Tekpon", order: 31 },
  { name: "Ionuț Iliescu", role: "Angel Investor @ TechAngels Romania", order: 32 },
  { name: "Ivaylo Ivanov", role: "Director @ Founder Institute CEE", order: 33 },
  { name: "Matei Toader", role: "IT Senior Director @ UiPath", order: 34 },
  { name: "Bogdan Litescu", role: "Founder @ Plant an App", order: 35 },
  { name: "Ioana Anuțoiu", role: "Senior Product Manager @ SOLO", order: 37 },
  { name: "George Covrig", role: "Java developer, founder @ cool-programmer.com", order: 38 },
  { name: "Petre Gherghinescu", role: "Product Manager @ Google", order: 39 },
  { name: "Liviu Gherghescu", role: "Head of Architecture @ Erste Bank Romania (BCR)", order: 40 },
  { name: "Irina Vasile", role: "Partner @ Lexters", order: 41 },
  { name: "Cosma Wolkonsky", role: "Product Manager @ Google", order: 42 },
  { name: "Șerban Buligă", role: "Founder @ Unfrosen", order: 43 },
  { name: "Bogdan Predușcă", role: "CEO @ Hyperhuman", order: 44 },
  { name: "Andra Iacob", role: "Managing Director @ Chapter 4 Communications Romania", order: 45 },
  { name: "Daniel Deaconu", role: "Founder @ The Simplifier", order: 46 },
  { name: "Anca Marcu", role: "CFO & Board Member @ AMSIMCEL", order: 47 },
  { name: "Aurelian Tanase", role: "Growth Marketer @ Veridion", order: 48 },
  { name: "Alex Nicoară", role: "Co-founder @ Solmag.ai", order: 50 },
  { name: "AnaMaria Onică", role: "Co-founder & CEO @ VOXivers", order: 51 },
  { name: "Tudor Petracovici", role: "Full-stack Engineer @ Veridion", order: 52 },
  { name: "Anca Bercă", role: "Product Manager @ Bitdefender", order: 53 },
  { name: "Ioana Serban", role: "Fractional CMO @ TechMarketers", order: 54 },
  { name: "Alex Dascalu", role: "Lead Director @ Founder Institute CEE", order: 55 },
];

function sortByOrderThenName<T extends { order: number; name: string }>(rows: T[]): T[] {
  return [...rows].sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.name.localeCompare(b.name, "ro");
  });
}

export const bucharestMentors: MentorEntry[] = sortByOrderThenName(
  BUCHAREST_ROWS.map((row) => ({
    name: row.name,
    role: row.role,
    order: row.order,
    image: bucharestImagePathForName(row.name),
  })),
);

/** Last six Constanța-only mentors from the sheet (display order 1–6). */
export const constantaMentors: MentorEntry[] = [
  {
    name: "Radu Răuță",
    role: "Cofounder @ dMonitor",
    order: 1,
    image: bucharestImagePathForName("Radu Răuță"),
  },
  {
    name: "Paul Burcă",
    role: "Founder @ Assista",
    order: 2,
    image: "/images/constanta/mentors/paul-burca.jpg",
  },
  {
    name: "Costin Sorici",
    role: "Founder @ Neuron English",
    order: 3,
    image: bucharestImagePathForName("Costin Sorici"),
  },
  {
    name: "Cristian-George Farauanu",
    role: "Business Development @ Featherless.ai",
    order: 4,
    image: bucharestImagePathForName("Cristian-George Farauanu"),
  },
  {
    name: "Cristian Culea",
    role: "Project Manager @ Websperience",
    order: 5,
    image: bucharestImagePathForName("Cristian Culea"),
  },
  {
    name: "Mihnea Călugăru",
    role: "Software Developer",
    order: 6,
    image: undefined,
  },
];
