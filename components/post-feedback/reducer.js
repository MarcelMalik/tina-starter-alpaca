export const initialState = {
  formStatus: "IDLE",
  reaction: "",
  comment: "",
}

export const reducer = (state, { type, value }) => {
  switch (type) {
    case "set-value":
      return {
        ...state,
        [value.name]: value.value,
      }
    case "set-error":
      return {
        ...state,
        formStatus: "ERROR",
      }
    case "set-success":
      return {
        ...state,
        formStatus: "SUCCESS",
        comment: "",
      }
    default:
      return state
  }
}
