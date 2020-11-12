import TodoItem from "./todo-item";
import PropTypes from "prop-types";

export default function TodoList({ todos, title = "Default Title 2" }) {
  return (
    <div>
      {title} - {todos.length}
      <ul>
        {todos.map((item, index) => {
          return <TodoItem key={"todo-" + item.id} todo={item} />;
        })}
      </ul>
    </div>
  );
}

// //Define Default props
// TodoList.defaultProps = {
//   title: "Default Title"
// };

//Define the rules for props
TodoList.propTypes = {
  title: PropTypes.string.isRequired
};
