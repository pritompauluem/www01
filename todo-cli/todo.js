const todoList = () => {
  const all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    if (index >= 0 && index < all.length) {
      all[index].completed = true;
    }
  };

  const overdue = () => {
    return all.filter((item) => item.dueDate < today && !item.completed);
  };

  const dueToday = () => {
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((item) => item.dueDate > today);
  };

  const toDisplayableList = (list) => {
    return list
      .map((item) =>
        `[${item.completed ? "x" : " "}] ${item.title} ${
          item.dueDate !== today ? item.dueDate : ""
        }`.trim()
      )
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
