import { Project } from './project';
import { pubsub } from './pub-sub';

export function navContentLoad(projects) {
  const NAV = document.querySelector('#nav');

  const MY_PROJECTS = document.createElement('button');
  MY_PROJECTS.id = 'my-projects';
  MY_PROJECTS.textContent = 'My Projects';
  NAV.appendChild(MY_PROJECTS);

  const PROJECTS_LIST = document.createElement('ul');
  PROJECTS_LIST.id = 'projects-list';
  NAV.appendChild(PROJECTS_LIST);

  projects.forEach((project) => navAddProject(project));

  const CREATE_PROJECT = document.createElement('button');
  CREATE_PROJECT.id = 'create-project-button';
  CREATE_PROJECT.textContent = '+ New Project';
  CREATE_PROJECT.addEventListener('click', newProjectForm);
  NAV.appendChild(CREATE_PROJECT);
}

function newProjectForm() {
  const FORM = document.createElement('div');
  FORM.id = 'new-project-form';

  const INPUT = document.createElement('input');
  INPUT.placeholder = 'e.g buy stuff';
  FORM.appendChild(INPUT);

  const CREATE = document.createElement('button');
  CREATE.id = 'create';
  CREATE.textContent = 'Create';
  CREATE.addEventListener('click', (e) => {
    const title = document.querySelector('#new-project-form input').value;
    if (title === '') return;

    const newProject = new Project(title);
    pubsub.publish('ADD_PROJECT', newProject);
  });
  FORM.appendChild(CREATE);

  const CANCEL = document.createElement('button');
  CANCEL.id = 'cancel';
  CANCEL.textContent = 'cancel';
  FORM.appendChild(CANCEL);

  // replace the button with the form
  document.querySelector('#create-project-button').remove();
  document.querySelector('#nav').appendChild(FORM);
}

export function navAddProject(project) {
  const button = document.createElement('button');
  button.classList.add('nav-project-button');
  button.textContent = project.getTitle();
  button.dataset.project = project.getTitle();
  addElementToProjectList(button);
}

export function navRemoveProject(project) {
  const button = document.querySelector(
    `#nav [data-project="${project.getTitle()}"]`,
  );
  button.parentNode.remove();
}

function addElementToProjectList(element) {
  const PROJECTS_LIST = getProjectList();
  const listNode = document.createElement('li');
  listNode.appendChild(element);
  PROJECTS_LIST.appendChild(listNode);
}

function getProjectList() {
  return document.querySelector('#projects-list');
}
