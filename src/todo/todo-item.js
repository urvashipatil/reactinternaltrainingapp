import React from "react";
import PropTypes from "prop-types";

export default function TodoItem(props) {
  return (
    <li>
      {props.todo.title} - {props.todo.completed ? "Completed" : "Not Started"}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool
  })
};
