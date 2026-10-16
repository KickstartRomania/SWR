import { PeopleSection, type Person } from "@/components/PeopleSection";

const judges: Person[] = [
  {
    name: "Bogdan Bob Chebac",
    company: "AI Implementation Strategist, Bonsai Labs",
    image: "/images/iasi/mentors/bogdan-chebac.jpg",
  },
  {
    name: "Tudor-Mihai Tarta",
    company: "Founder, Felie de meserie",
    image: "/images/iasi/mentors/tudor-mihai-tarta-founder.jpg",
    linkedIn: "https://www.linkedin.com/in/tartatudor-mihai/",
  },
  {
    name: "Florin Asavoaie",
    company: "Head of Technology, Digitail",
    image: "/images/iasi/mentors/florin-asavoaie.jpg",
    linkedIn: "https://www.linkedin.com/in/florin-asavoaie/",
  },
];

export function IasiJudgesSection() {
  return (
    <PeopleSection
      title="Meet your judges"
      subtitle="Industry experts who will evaluate your final pitches"
      people={judges}
    />
  );
}
