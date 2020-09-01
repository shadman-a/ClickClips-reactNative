import Firebase from "../../config/Firebase.js";

export const FETCH = "FETCH";

export const fetch = (barber) => {
  return {
    type: FETCH,
    payload: barber,
  };
};
