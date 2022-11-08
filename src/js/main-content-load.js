export default function projectLoad(project) {
  const MAIN_CONTENT = getMainContent();
  MAIN_CONTENT.classList.remove("my-projects");
  MAIN_CONTENT.classList.add("single-project");
  MAIN_CONTENT.replaceChildren();

  const TITLE = document.createElement("div");
  TITLE.classList.add("project-title");
  TITLE.textContent = project.getTitle();
  MAIN_CONTENT.appendChild(TITLE);

  project.getTaskList().forEach((task) => addTask(task));

  const ADD_TASK = document.createElement("button");
  ADD_TASK.classList.add("add-task-button");
  ADD_TASK.textContent = "+ Add task";
  MAIN_CONTENT.appendChild(ADD_TASK);
}

function addTask(task) {
  const MAIN_CONTENT = getMainContent();
  const TASK = document.createElement("div");
  TASK.classList.add("task");

  const TASK_TITLE = document.createElement("div");
  TASK_TITLE.classList.add("task-title");
  TASK_TITLE.textContent = task.getTitle();
  TASK.appendChild(TASK_TITLE);

  const TASK_DESCRIPTION = document.createElement("div");
  TASK_DESCRIPTION.classList.add("task-description");
  TASK_DESCRIPTION.textContent = task.description;
  TASK.appendChild(TASK_DESCRIPTION);

  const TASK_DATE = document.createElement("div");
  TASK_DATE.classList.add("task-date");
  TASK_DATE.textContent = task.dueDate;
  TASK.appendChild(TASK_DATE);

  const TASK_PRIORITY = document.createElement("div");
  TASK_PRIORITY.classList.add("task-priority");
  TASK_PRIORITY.textContent = task.priority;
  TASK.appendChild(TASK_PRIORITY);

  const CHECKBOX = document.createElement("div");
  CHECKBOX.classList.add(
    "checkbox",
    task.isCompleted() ? "checked" : "unchecked"
  );
  TASK.appendChild(CHECKBOX);

  MAIN_CONTENT.appendChild(TASK);
}

function getMainContent() {
  return document.querySelector("#main-content");
}
