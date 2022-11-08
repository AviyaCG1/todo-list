import Project from "./project";
import pubsub from "./pub-sub";

export function navContentLoad(projects) {
  const NAV = document.querySelector("#nav");

  projects.forEach((project) => addProject(project));

  const CREATE_PROJECT = document.createElement("button");
  CREATE_PROJECT.id = "new-project-button";
  CREATE_PROJECT.textContent = "+ New Project";
  CREATE_PROJECT.addEventListener("click", newProjectForm);
  NAV.appendChild(CREATE_PROJECT);
}

function newProjectForm() {
  const FORM = document.createElement("div");
  FORM.id = "new-project-form";

  const INPUT = document.createElement("input");
  INPUT.placeholder = "e.g buy stuff";
  FORM.appendChild(INPUT);

  const CREATE = document.createElement("button");
  CREATE.id = "create";
  CREATE.textContent = "Create";
  CREATE.addEventListener("click", (e) => {
    const title = document.querySelector("#new-project-form input").value;
    if (title === "") return;

    const newProject = new Project(title);
    pubsub.publish("ADD_PROJECT", newProject);
  });
  FORM.appendChild(CREATE);

  const CANCEL = document.createElement("button");
  CANCEL.id = "cancel";
  CANCEL.textContent = "cancel";
  FORM.appendChild(CANCEL);

  // replace the button with the form
  document.querySelector("#create-project-button").remove();
  document.querySelector("#nav").appendChild(FORM);
}

export function addProject(project) {
  const BUTTON = document.createElement("button");
  BUTTON.classList.add("nav-project-button");
  BUTTON.textContent = project.getTitle();
  BUTTON.dataset.project = project.getTitle();

  document
    .querySelector("#new-project-buttton")
    .previousElementSibling.append(BUTTON);
}

export function navRemoveProject(project) {
  const button = document.querySelector(
    `#nav [data-project="${project.getTitle()}"]`
  );
  button.parentNode.remove();
}
