import { PeopleSection, type Person } from "@/components/PeopleSection";

const judges: Person[] = [
  {
    name: "Paul Burca",
    company: "Assista",
    image: "/images/constanta/mentors/paul-burca.jpg",
    linkedIn: "https://www.linkedin.com/in/burcapaul/",
  },
  {
    name: "Oana Radu",
    company: "CiTyINNOHub",
    image: "/images/constanta/mentors/oana-radu.jpeg",
    linkedIn: "https://www.linkedin.com/in/raduoanaroxana/",
  },
  {
    name: "George Serban",
    company: "Monsson Alma",
    image: "/images/constanta/mentors/george-serban.jpeg",
    linkedIn: "https://www.linkedin.com/in/georgeserban/",
  },
];

export function ConstantaJudgesSection() {
  return (
    <PeopleSection
      title="Meet your judges"
      subtitle="Industry experts who will evaluate your final pitches"
      people={judges}
    />
  );
}
