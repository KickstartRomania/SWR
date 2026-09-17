import { CityAgendaSection, type CityAgenda } from "@/components/CityAgendaSection";

const agenda: CityAgenda = {
  Friday: [
    { time: "17:30 - 18:00", title: "Registration", description: "Arrive at the venue and get checked in" },
    { time: "18:00 - 18:30", title: "Dinner & networking", description: "Eat food, share ideas, practice pitches, and get to know your fellow participants" },
    { time: "18:30 - 19:00", title: "Welcome", description: "Meet our Techstars facilitator and review agenda for the weekend" },
    { time: "19:00 - 20:00", title: "Pitches", description: "Facilitator gives a walk-through of the pitching process and then pitches begin! Optionally line up to give your pitch" },
    { time: "20:00 - 21:00", title: "Vote for top pitches and form teams", description: "Network, share questions, vote for the top pitches and form teams" },
    { time: "21:00 - 21:30", title: "Workshop: From Idea to Reality", description: "Learn how to validate your idea and start building" },
    { time: "21:30 - 00:00", title: "Start building!", description: "Set up your team workspace for the weekend and start work on the idea. You may stay as late as the venue will allow" },
  ],
  Saturday: [
    { time: "09:00 - 10:00", title: "Breakfast", description: "Arrive, have breakfast, and get ready for the day" },
    { time: "10:00 - 12:00", title: "Work with your team", description: "Continue working on your prototype and validation" },
    { time: "12:00 - 13:00", title: "Lunch", description: "Grab a bite and network with other teams" },
    { time: "13:00 - 18:00", title: "Mentorship sessions", description: "Mentors will circulate to help you with your challenges" },
    { time: "18:00 - 19:00", title: "Dinner", description: "Refuel for the evening" },
    { time: "19:00 - 00:00", title: "Keep building", description: "Work as late as you need to get your MVP ready" },
  ],
  Sunday: [
    { time: "09:00 - 10:00", title: "Breakfast", description: "Final day begins!" },
    { time: "10:00 - 12:00", title: "Pitch prep", description: "Work on your final presentation and pitch" },
    { time: "12:00 - 13:00", title: "Lunch", description: "Last meal before the big pitches" },
    { time: "13:00 - 15:00", title: "Tech check", description: "Test your slides and demo on the main stage" },
    { time: "15:00 - 17:00", title: "Final Presentations", description: "Pitch your startup to the judges" },
    { time: "17:00 - 18:00", title: "Judging & Awards", description: "Judges deliberate and winners are announced" },
    { time: "18:00 - 20:00", title: "Wrap-up Party", description: "Celebrate with your new friends and network" },
  ],
};

export function OradeaAgendaSection() {
  return <CityAgendaSection agenda={agenda} />;
}
