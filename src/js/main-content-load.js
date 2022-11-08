import { Project } from "./project";

export function myProjectsLoad(projects) {
  const MAIN_CONTENT = getMainContent();
  MAIN_CONTENT.classList.remove("single-project");
  MAIN_CONTENT.classList.add("my-projects");
  MAIN_CONTENT.replaceChildren();
  projects.forEach((project) => mainAddProjectCard(project));
}

export function mainAddProjectCard(project) {
  const MAIN_CONTENT = getMainContent();

  const CARD = document.createElement("div");
  CARD.classList.add("card");
  CARD.dataset.project = project.getTitle();
  MAIN_CONTENT.appendChild(CARD);

  const TITLE = document.createElement("div");
  TITLE.classList.add("card-title");
  TITLE.textContent = project.getTitle();
  CARD.appendChild(TITLE);

  project.getTaskList().forEach((task) => {
    CARD.appendChild(createCardTask(task));
  });

  const ADD_TASK = document.createElement("button");
  ADD_TASK.classList.add("add-task-button");
  ADD_TASK.textContent = "+ Add task";
  CARD.appendChild(ADD_TASK);
}

export function mainRemoveProject(project) {
  const CARD = document.querySelector(
    `#main-content [data-project="${project.getTitle()}"]`
  );
  CARD.remove();
}

export function singleProjectLoad(project) {
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

function createCardTask(task) {
  const TASK = document.createElement("div");
  TASK.classList.add("task");

  const TASK_TITLE = document.createElement("div");
  TASK_TITLE.classList.add("task-title");
  TASK_TITLE.textContent = task.getTitle();
  TASK.appendChild(TASK_TITLE);

  const CHECKBOX = document.createElement("div");
  CHECKBOX.classList.add(
    "checkbox",
    task.isCompleted() ? "checked" : "unchecked"
  );
  TASK.appendChild(CHECKBOX);

  return TASK;
}

function getMainContent() {
  return document.querySelector("#main-content");
}
