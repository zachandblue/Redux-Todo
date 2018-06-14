import React from "react";

export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          text: action.value,
          completed: false
        }
      ];
    case "DELETE":
      return state.filter((item, index) => {
        if (item.id !== action.id) {
          return item;
        }
      });

    case "COMPLETE":
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
}
