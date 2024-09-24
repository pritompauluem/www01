const todoList = require("../todo");

describe("Todo List Test Suite", () => {
  let todos;

  beforeEach(() => {
    todos = todoList();
    today = new Date().toISOString().split("T")[0];
  });

  test("Should add new todo", () => {
    const todoItem = { title: "Test todo", dueDate: today, completed: false };
    todos.add(todoItem);
    expect(todos.all.length).toBe(1);
    expect(todos.all[0].title).toBe("Test todo");
  });

  test("Should mark todo as complete", () => {
    const todoItem = { title: "Test todo", dueDate: today, completed: false };
    todos.add(todoItem);
    todos.markAsComplete(0);
    expect(todos.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const overdueItem = {
      title: "Overdue todo",
      dueDate: "2022-09-23", // Change to past date
      completed: false,
    };
    todos.add(overdueItem);
    const overdue = todos.overdue();
    expect(overdue.length).toBe(1);
    expect(overdue[0].title).toBe("Overdue todo");
  });

  test("Should retrieve due today items", () => {
    const todoItem = { title: "Today todo", dueDate: today, completed: false };
    todos.add(todoItem);
    const dueToday = todos.dueToday();
    expect(dueToday.length).toBe(1);
    expect(dueToday[0].title).toBe("Today todo");
  });

  test("Should retrieve due later items", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    const futureDateString = futureDate.toISOString().split("T")[0];

    const todoItem = {
      title: "Future todo",
      dueDate: futureDateString,
      completed: false,
    };
    todos.add(todoItem);
    const dueLater = todos.dueLater();
    expect(dueLater.length).toBe(1);
    expect(dueLater[0].title).toBe("Future todo");
  });

  test("Should format the list for display", () => {
    const todoItem1 = { title: "Task 1", dueDate: today, completed: false };
    const todoItem2 = {
      title: "Task 2",
      dueDate: "2022-09-23",
      completed: false,
    };
    const todoItem3 = { title: "Task 3", dueDate: today, completed: true };

    todos.add(todoItem1);
    todos.add(todoItem2);
    todos.add(todoItem3);

    const formattedList = todos.toDisplayableList(todos.all);
    const expectedList = `[ ] Task 1\n[ ] Task 2 2022-09-23\n[x] Task 3`;

    expect(formattedList).toBe(expectedList);
  });
});
