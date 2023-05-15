import React from "react";

const Inputbox = (props) => {
  return (
    <form>
      <input
        type="text"
        placeholder={props.placeholder}
        value={null}
        onChange={null}
      />
    </form>
  );
};

export default Inputbox;
