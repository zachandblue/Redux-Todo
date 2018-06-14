export default function reducer(state = "ALL", action) {
  switch (action.type) {
    case "COMPLETED":
      return action.filter;
    case "INCOMPLETE":
      return action.filter;
    case "ALL":
      return action.filter;
    default:
      return state;
  }
}
