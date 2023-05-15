import React from "react";
import Inputbox from "./Inputbox";
import AddAssistant from "./AddAssistant";
function addPeople(props) {
  //hier komt een functie om de opgehaalde tandartsen te verwijderen.
  // console.log(props);
  const dentists = props.allPeople.dentists.map((dentist) => {
    return (
      <li key={dentist.id}>
        Dit is een voornaam van een tandarts: {dentist.first_name}{" "}
        <button>delete dentist</button>
      </li>
    );
  });

  // const dentists = people.dentists
  return (
    <div>
      <li>Hier staat een tandarts met delete button</li>
      {dentists}
      <AddAssistant />
    </div>
  );
}

export default addPeople;
