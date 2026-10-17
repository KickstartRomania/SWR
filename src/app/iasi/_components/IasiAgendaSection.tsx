import { CityAgendaSection, type CityAgenda } from "@/components/CityAgendaSection";

const agenda: CityAgenda = {
  Saturday: [
    { time: "09:00 – 09:30", title: "Check-in", description: "Get your badge, meet fellow participants, and settle in." },
    { time: "09:30 – 10:00", title: "Breakfast", description: "Fuel up and start making connections." },
    { time: "10:00 – 10:30", title: "Kickoff", description: "Meet the community, discover the format, and get ready to build." },
    { time: "10:30 – 11:00", title: "Idea Pitches", description: "Pitch your idea or find a challenge you want to work on." },
    { time: "11:00 – 11:30", title: "Voting & Team Formation", description: "Vote for your favourites and find your team." },
    { time: "11:30 – 13:00", title: "Start Building", description: "Align on the problem, define your first steps, and get to work." },
    { time: "13:00 – 14:00", title: "Lunch", description: "Take a break and recharge with your team." },
    { time: "14:00 – 15:00", title: "Teamwork", description: "Test your assumptions and start shaping your solution." },
    { time: "15:00 – 17:00", title: "Mentor Sessions", description: "Get feedback from mentors and turn their insights into next steps." },
    { time: "17:00 – 18:30", title: "Build & Validate", description: "Keep developing your solution and testing what matters." },
    { time: "18:30 – 19:30", title: "Dinner", description: "Refuel before the evening session." },
    { time: "19:30 – 20:00", title: "Pitching Workshop", description: "Cosmin Pirvu from Veridion shows how to turn your weekend's work into a clear, compelling pitch." },
    { time: "20:00 – 23:00", title: "Keep Building", description: "Develop your prototype, refine your business model, and start on your presentation." },
  ],
  Sunday: [
    { time: "09:00 – 09:30", title: "Breakfast", description: "Start the final day together and align on what still needs to get done." },
    { time: "09:30 – 11:00", title: "Pitch Preparation", description: "Refine your solution, build your deck, and practise your pitch." },
    { time: "11:00 – 12:30", title: "Final Build Sprint", description: "Push through the last build window and prepare for presentation time." },
    { time: "12:30 – 13:30", title: "Lunch", description: "Reset, regroup, and get ready for the final stretch." },
    { time: "13:30 – 14:00", title: "Final Run-through", description: "Rehearse your presentation, check your demo, and get ready for the stage." },
    { time: "14:00 – 15:00", title: "Final Presentations", description: "Present your startup to the judges and audience." },
    { time: "15:00 – 16:00", title: "Jury Deliberation & Awards", description: "Take a break while the judges deliberate, then celebrate the winning teams." },
    { time: "16:00 – 17:00", title: "Networking & Closing", description: "Wrap up the weekend, celebrate together, and stay connected." },
  ],
};

export function IasiAgendaSection() {
  return <CityAgendaSection agenda={agenda} />;
}
