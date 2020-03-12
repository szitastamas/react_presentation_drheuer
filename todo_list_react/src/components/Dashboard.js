import React, { useContext, useEffect } from "react";
import TodoForm from "./todo/TodoForm";
import TodoTable from "./todo/TodoTable";
import TodoContext from "../context/todo/TodoContext";
import AlertContext from "../context/alert/AlertContext";
import Alert from "./alert/Alert";

const Dashboard = () => {
  const { getTodos } = useContext(TodoContext);
  const { alerts } = useContext(AlertContext);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h3 className="teal-text flow-text">Todo Dashboard</h3>
      <TodoForm />
      {alerts.length > 0 &&
        alerts.map(alert => (
          <Alert key={alert.id} text={alert.text} type={alert.type} />
        ))}
      <TodoTable />
    </div>
  );
};

export default Dashboard;
