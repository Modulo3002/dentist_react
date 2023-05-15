export const returnAllPeopleReducer = () => {
  return {
    type: "RETURN_ALL_PEOPLE",
    //   payload: { artist: Artist, song: Song, genre: Genre, rating: Rating },
  };
};

export const addFirstName = (name) => {
  return {
    type: "ADD_FIRST_NAME",
    payload: name,
  };
};

export const addLastName = (name) => {
  return {
    type: "ADD_LAST_NAME",
    payload: name,
  };
};

export const addPhoneNumber = (number) => {
  return {
    type: "ADD_PHONE",
    payload: number,
  };
};

export const addEmail = (email) => {
  return {
    type: "ADD_EMAIL",
    payload: email,
  };
};

export const addBirthDate = (date) => {
  return {
    type: "ADD_BIRTHDATE",
    payload: date,
  };
};
