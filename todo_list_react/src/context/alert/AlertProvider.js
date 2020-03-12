import React, { useReducer } from "react";
import AlertReducer from "./AlertReducer";
import AlertContext from "./AlertContext";

export const AlertProvider = props => {
  const initialState = {
    alerts: []
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (text, type) => {
    const alertObject = {
      id: Date.now(),
      text,
      type
    };

    dispatch({
      type: "SET_ALERT",
      payload: alertObject
    });

    setTimeout(() => {
      removeAlert(alertObject.id);
    }, 3000);
  };

  const removeAlert = id => {
    dispatch({
      type: "REMOVE_ALERT",
      payload: id
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
