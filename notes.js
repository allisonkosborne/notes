const notes = [
  {
    id: 1,
    subject: "javascript",
    date: 10 / 31 / 2021,
    feeling: "confident",
    timeSpent: "60",
  },

  {
    id: 2,
    subject: "gitHub",
    date: 10 / 30 / 2021,
    feeling: "confused",
    timeSpent: "45",
  },
];

const noteAboutToday = {
  id: 3,
  subject: "push",
  date: 11 / 01 / 2021,
  feeling: "confident",
  timeSpent: 30,
};

notes.push(noteAboutToday);

console.log(notes);

console.log(`Notes ${notes[0].id}`);
console.log(notes[0].id);
console.log(`I learned ${notes[0].subject}.`);
console.log(`I spent ${notes[0].timeSpent} minutes on it.`);
console.log(`I felt ${notes[0].feeling}.`);

for (const scribblings of notes) {
  console.log(`Notation Number ${scribblings.id} 
  Subject is $[scribblings.subject]
  Time spent is ${scribblings.timeSpent}`);
}
