import React, { useState } from "react";
import AboutItem from "./AboutItem";

const About = () => {
  const [aboutState, setAboutState] = useState([
    {
      title: "Add Todo",
      description: "Add a todo item to the list.",
      color: "blue"
    },
    {
      title: "Edit Todo",
      description: "Update the title of a Todo.",
      color: "orange"
    },
    {
      title: "Delete Todo",
      description: "Delete a Todo from the Todolist.",
      color: "red"
    }
  ]);

  return (
    <div>
      <h3 className="teal-text flow-text">About the Todo App</h3>
      <ul className="collection">
        {aboutState.map(item =>  <AboutItem key={item.title} item={item} />)}
      </ul>
    </div>
  );
};

export default About;
