import { CityAgendaSection, type CityAgenda } from "@/components/CityAgendaSection";

const agenda: CityAgenda = {
  Friday: [
    { time: "17:30 – 18:00", title: "Registration", description: "Arrive, check in, grab a badge, and settle in before kickoff." },
    { time: "18:00 – 18:30", title: "Networking & Dinner", description: "Meet fellow participants over dinner and start exchanging ideas." },
    { time: "18:30 – 19:00", title: "Welcome & Kickoff", description: "Get the weekend overview, rules, and what to expect next." },
    { time: "19:00 – 19:30", title: "Idea Pitches", description: "Anyone can step up, pitch an idea, and inspire a team." },
    { time: "19:30 – 20:00", title: "Voting & Team Formation", description: "Vote for the strongest ideas and gather into teams." },
    { time: "20:00 – Late", title: "Startup Building", description: "Start shaping your concept, dividing roles, and building together." },
  ],
  Saturday: [
    { time: "09:00 – 09:30", title: "Breakfast", description: "Fuel up, reconnect with your team, and plan the day ahead." },
    { time: "10:00 – 11:00", title: "Value Proposition Workshop", description: "Costin Sorici from OVIDIUS University Constanta will help teams sharpen their customer value proposition." },
    { time: "11:00 – 13:00", title: "Build Sprint", description: "Use the morning momentum to test assumptions and move your startup forward." },
    { time: "13:00 – 14:00", title: "Lunch", description: "Take a break, recharge, and compare progress with other teams." },
    { time: "14:00 – 17:00", title: "Mentor Sessions", description: "Meet mentors, get feedback, and pressure-test your direction." },
    { time: "18:00 – 19:00", title: "Pitching Workshop", description: "Cosmin Pirvu from Veridion will share how to craft a stronger, clearer final pitch." },
    { time: "19:00 – 20:00", title: "Dinner", description: "Pause for dinner before heading into the final evening push." },
    { time: "20:00 – Late", title: "Late Build", description: "Keep building late into the night and bring your idea closer to launch." },
  ],
  Sunday: [
    { time: "09:00 – 09:30", title: "Breakfast", description: "Start the final day together and align on what still needs to get done." },
    { time: "10:00 – 11:00", title: "Founder-led Sales Workshop", description: "Learn practical sales lessons founders can apply from day one." },
    { time: "11:00 – 12:30", title: "Final Build Sprint", description: "Push through the last build window and prepare for presentation time." },
    { time: "12:30 – 13:30", title: "Lunch", description: "Reset, regroup, and get ready for the final stretch." },
    { time: "14:00 – 15:00", title: "Final Presentations", description: "Take the stage and present your startup to the judges and audience." },
    { time: "15:30 – 16:00", title: "Awards", description: "Celebrate the standout teams as the weekend winners are announced." },
    { time: "16:00 – 17:00", title: "Networking & Closing", description: "Wrap up the weekend, celebrate together, and stay connected." },
  ],
};

export function ConstantaAgendaSection() {
  return <CityAgendaSection agenda={agenda} />;
}
