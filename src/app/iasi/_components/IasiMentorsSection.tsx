import { PeopleSection, type Person } from "@/components/PeopleSection";

const mentors: Person[] = [
  {
    name: "Cosmin Pirvu",
    company: "GTM Engineer, Veridion",
    image: "/images/constanta/mentors/cosmin-pirvu.png",
    linkedIn: "https://www.linkedin.com/in/cosminpirvu/",
  },
  {
    name: "Roxana Botez",
    company: "Leadership Coach",
    image: "/images/iasi/mentors/roxana-botez.jpg",
    linkedIn: "https://www.linkedin.com/in/roxana-botez-b0408b11/",
  },
  {
    name: "Rares Chelmus",
    company: "Mental Coach, The Upgrade",
    image: "/images/iasi/mentors/rares-chelmus.jpg",
    linkedIn: "https://www.linkedin.com/in/rares-chelmus/",
  },
  {
    name: "Mihai Mircea Costea",
    company: "IT Delivery Director, Cegeka",
    image: "/images/iasi/mentors/mihai-mircea-costea.jpg",
    linkedIn: "https://www.linkedin.com/in/mihai-mircea-costea/",
  },
  {
    name: "Mircea Serediuc",
    company: "Co-founder, Narrio",
    image: "/images/iasi/mentors/mircea-serediuc.jpg",
    linkedIn: "https://www.linkedin.com/in/mirceaserediuc/",
  },
  {
    name: "Ionut Maxim",
    company: "Digital Product Designer, The Digital Vitamins",
    image: "/images/iasi/mentors/ionut-maxim.jpg",
    linkedIn: "https://www.linkedin.com/in/ionutmaxim/",
  },
  {
    name: "Teodor Simionescu",
    company: "Software & Product, Bitdefender",
    image: "/images/iasi/mentors/teodor-simionescu.jpg",
    linkedIn: "https://www.linkedin.com/in/teodor-simionescu/",
  },
];

export function IasiMentorsSection() {
  return (
    <PeopleSection
      title="Meet your mentors"
      subtitle="Expert guidance to help you build and validate your idea"
      people={mentors}
      teaser={{ title: "More mentors", subtitle: "announced soon" }}
    />
  );
}
