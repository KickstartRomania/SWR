import { PeopleSection, type Person } from "@/components/PeopleSection";

const mentors: Person[] = [
  {
    name: "Cosmin Pirvu",
    company: "Veridion",
    image: "/images/constanta/mentors/cosmin-pirvu.png",
    linkedIn: "https://www.linkedin.com/in/cosminpirvu/",
  },
  {
    name: "George Faraunu",
    company: "featherless.ai",
    image: "/images/constanta/mentors/george-faraunu.png",
    linkedIn: "https://www.linkedin.com/in/george-farauanu/",
  },
  {
    name: "Paul Burca",
    company: "Assista",
    image: "/images/constanta/mentors/paul-burca.jpg",
    linkedIn: "https://www.linkedin.com/in/burcapaul/",
  },
  {
    name: "Catalin Cenac",
    company: "OKAPI",
    image: "/images/constanta/mentors/catalin-cenac.jpg",
    linkedIn: "https://www.linkedin.com/in/gcatalin/",
  },
  {
    name: "Teodora Moraru",
    company: "Ambasada.pro",
    image: "/images/constanta/mentors/teodora-moraru.jpg",
    linkedIn: "https://www.linkedin.com/in/teodora-moraru-7582bb183/",
  },
  {
    name: "Costin Sorici",
    company: "Neuron English",
    image: "/images/constanta/mentors/costin-sorici.jpg",
    linkedIn: "https://www.linkedin.com/in/costin-sorici-888904/",
  },
  {
    name: "Daniel Draga",
    company: "Platform as a Service",
    image: "/images/constanta/mentors/daniel-draga.jpeg",
    linkedIn: "https://www.linkedin.com/in/daniel-draga/",
  },
  {
    name: "Catalin Draga",
    company: "KubeSage",
    image: "/images/constanta/mentors/catalin-draga.jpeg",
    linkedIn: "https://www.linkedin.com/in/catalin-draga/",
  },
  {
    name: "Mihai Dragan",
    company: "Oveit",
    image: "/images/constanta/mentors/mihai-dragan.jpeg",
    linkedIn: "https://www.linkedin.com/in/mihaidragan/",
  },
  {
    name: "Cosmin Budinschi",
    company: "Software Architect",
    image: "/images/constanta/mentors/cosmin-budinschi.jpeg",
    linkedIn: "https://www.linkedin.com/in/budinschi/",
  },
];

export function ConstantaMentorsSection() {
  return (
    <PeopleSection
      title="Meet your mentors"
      subtitle="Expert guidance to help you build and validate your idea"
      people={mentors}
    />
  );
}
