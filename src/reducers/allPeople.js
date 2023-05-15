import people from "../data";

export const allPeopleReducer = (state = people, action) => {
  switch (action.type) {
    case "RETURN_ALL_PEOPLE":
      return state;
    default:
      return state;
  }
};
