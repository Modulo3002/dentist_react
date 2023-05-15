// import people from "../data";

const getRandomName = (people) => {
  const person = people[Math.floor(Math.random() * people.length)];
  return `${person.first_name} ${person.last_name}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = (AllPeople) => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomName(AllPeople.clients),
  dentist: getRandomName(AllPeople.dentists),
  assistant: getRandomName(AllPeople.assistants),
});

const generateRandomAppointments = (num, AllPeople) =>
  Array(num)
    .fill(0)
    .map((_) => generateRandomAppointment(AllPeople));

export default generateRandomAppointments;
