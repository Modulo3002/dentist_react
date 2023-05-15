export const inputboxFirstName = (state = "", action) => {
  switch (action.type) {
    case "ADD_FIRST_NAME":
      return action.payload;
    default:
      return state;
  }
};

export const inputboxLastName = (state = "", action) => {
  switch (action.type) {
    case "ADD_LAST_NAME":
      return action.payload;
    default:
      return state;
  }
};

export const inputboxPhoneNumber = (state = "", action) => {
  switch (action.type) {
    case "ADD_PHONE":
      return action.payload;
    default:
      return state;
  }
};

export const inputboxEmail = (state = "", action) => {
  switch (action.type) {
    case "ADD_EMAIL":
      return action.payload;
    default:
      return state;
  }
};
export const inputboxBirthDate = (state = "", action) => {
  switch (action.type) {
    case "ADD_BIRTHDATE":
      return action.payload;
    default:
      return state;
  }
};
