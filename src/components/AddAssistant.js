import React from "react";
import Inputbox from "./Inputbox";
import Button from "./Button";

const AddAssistant = () => {
  return (
    <form>
      <label>
        <h3>Add an assistant:</h3>
      </label>
      <Inputbox placeholder="Firstname" value={null} onchange={null} />
      <Inputbox placeholder="Lastname" value={null} onchange={null} />
      <Inputbox placeholder="Ph0n3numb3r" value={null} onchange={null} />
      <Inputbox placeholder="Email@dres" value={null} onchange={null} />
      <Inputbox placeholder="Date of birth" value={null} onchange={null} />
      <Button onclick={null} />
    </form>
  );
};

export default AddAssistant;
