import { Project } from "./project";

export function myProjectsLoad(projects){
    const MAIN_CONTENT = getMainContent();
    MAIN_CONTENT.classList.add('my-projects');

    projects.forEach(project => mainAddProjectCard(project));
}

export function mainAddProjectCard(project){
    const MAIN_CONTENT = getMainContent();

    const CARD = document.createElement('div');
    CARD.classList.add('card');
    CARD.dataset.project = project.getTitle();
    MAIN_CONTENT.appendChild(CARD);

    const TITLE = document.createElement('div');
    TITLE.classList.add('card-title');
    TITLE.textContent = project.getTitle();
    CARD.appendChild(TITLE);

    project.getTaskList().forEach(task => {
        CARD.appendChild(createCardTask(task))
    });

    const ADD_TASK = document.createElement('button');
    ADD_TASK.classList.add('add-task-button');
    ADD_TASK.textContent = '+ Add task';
    CARD.appendChild(ADD_TASK);
}

// create a task div for project card display
function createCardTask(task){
    const TASK = document.createElement('div');
    TASK.classList.add('task');

    const TASK_TITLE = document.createElement('div');
    TASK_TITLE.classList.add('task-title');
    TASK_TITLE.textContent = task.getTitle();
    TASK.appendChild(TASK_TITLE);

    const CHECKBOX = document.createElement('div');
    CHECKBOX.classList.add('checkbox', task.isCompleted() ? 'checked' : null);
    TASK.appendChild(CHECKBOX);

    return TASK;
}

export function mainRemoveProject(project){
    const CARD = document.querySelector(`#main-content [data-project="${project.getTitle()}"]`);
    CARD.remove();
}

function getMainContent(){
    return document.querySelector('#main-content');
}