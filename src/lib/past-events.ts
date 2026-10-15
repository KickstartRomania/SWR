export type PastEvent = {
  city: string;
  /** City page on this site, or the city's own website. */
  href: string;
  /** ISO start date, used for sorting and grouping. */
  startDate: string;
  /** Human-readable date range. */
  dates: string;
  venue?: string;
  /** Short highlight shown as a badge, e.g. a partner conference. */
  note?: string;
};

const BUCHAREST_URL = "https://startupweekendbucharest.com/";
const HOW_TO_WEB = "How to Web side event";
const ZBOR_TARGU_JIU = "Zbor Târgu Jiu";

// The page sorts by startDate and groups by year.
export const PAST_EVENTS: PastEvent[] = [
  { city: "Bucharest", href: BUCHAREST_URL, startDate: "2026-10-09", dates: "9–11 October 2026", venue: "QA DNA", note: HOW_TO_WEB },
  { city: "Bucharest", href: BUCHAREST_URL, startDate: "2026-04-24", dates: "24–26 April 2026", venue: "Nova Coworking Excelsior" },
  { city: "Constanța", href: "/constanta", startDate: "2026-04-17", dates: "17–19 April 2026", venue: "Marco Business Center" },

  { city: "Cluj-Napoca", href: "/cluj", startDate: "2025-11-21", dates: "21–23 November 2025", venue: "Founders Hive" },
  { city: "Târgu Jiu", href: "/targu-jiu", startDate: "2025-11-01", dates: "1–3 November 2025", venue: ZBOR_TARGU_JIU },
  { city: "Bucharest", href: BUCHAREST_URL, startDate: "2025-10-10", dates: "10–12 October 2025", venue: "Builders House", note: HOW_TO_WEB },
  { city: "Constanța", href: "/constanta", startDate: "2025-06-06", dates: "6–8 June 2025", venue: "Ovidius University" },
  { city: "Bucharest", href: BUCHAREST_URL, startDate: "2025-05-16", dates: "16–18 May 2025", venue: "Builders House" },
  { city: "Oradea", href: "/oradea", startDate: "2025-03-14", dates: "14–16 March 2025", venue: "Oradea Fortress" },

  { city: "Bucharest", href: BUCHAREST_URL, startDate: "2024-11-08", dates: "8–10 November 2024", venue: "Universitatea Româno-Americană" },
  { city: "Târgu Jiu", href: "/targu-jiu", startDate: "2024-11-15", dates: "15–17 November 2024", venue: ZBOR_TARGU_JIU },
  { city: "Constanța", href: "/constanta", startDate: "2024-09-26", dates: "26–28 September 2024", venue: "Ovidius University & Zbor Hub" },

  { city: "Târgu Jiu", href: "/targu-jiu", startDate: "2023-12-08", dates: "8–10 December 2023", venue: ZBOR_TARGU_JIU },
  { city: "Bucharest", href: BUCHAREST_URL, startDate: "2023-03-17", dates: "17–19 March 2023", venue: "V7 Startup Studio" },
];
