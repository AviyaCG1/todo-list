
export function navContentLoad(projects){
    const NAV = document.querySelector('#nav');

    const MY_PROJECTS = document.createElement('button');
    MY_PROJECTS.id = 'my-projects';
    MY_PROJECTS.textContent = 'My Projects';
    NAV.appendChild(MY_PROJECTS);

    const PROJECTS_LIST = document.createElement('ul');
    PROJECTS_LIST.id = 'projects-list';
    NAV.appendChild(PROJECTS_LIST);

    projects.forEach(project => navAddProject(project));  

    const CREATE_PROJECT = document.createElement('button');
    CREATE_PROJECT.id = 'create-project-button';
    CREATE_PROJECT.textContent = '+ New Project';
    NAV.appendChild(CREATE_PROJECT);
}

export function navAddProject(project){
    let button = document.createElement('button');
    button.classList.add('nav-project-button');
    button.textContent = project.getTitle();
    button.dataset.project = project.getTitle();
    addElementToProjectList(button);
}

export function navRemoveProject(project){
    let button = document.querySelector(`#nav [data-project="${project.getTitle()}"]`);
    button.parentNode.remove();
}

function addElementToProjectList(element){
    const PROJECTS_LIST = getProjectList();
    let listNode = document.createElement('li');
    listNode.appendChild(element);
    PROJECTS_LIST.appendChild(listNode);
}

function getProjectList(){
    return document.querySelector('#projects-list')
}