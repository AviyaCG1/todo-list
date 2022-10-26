
export function navContentLoad(){
    const NAV = document.querySelector('#nav');

    const TITLE = document.createElement('div');
    TITLE.id = 'nav-title';
    TITLE.textContent = 'My Projects';
    NAV.appendChild(TITLE);

    const PROJECTS_LIST = document.createElement('ul');
    PROJECTS_LIST.id = 'projects-list';
    NAV.appendChild(PROJECTS_LIST);

    const CREATE_PROJECT = document.createElement('button');
    CREATE_PROJECT.id = 'create-project-button';
    CREATE_PROJECT.textContent = '+ New Project';
    PROJECTS_LIST.appendChild(CREATE_PROJECT);
}

export function navAddProject(project){
    let button = document.createElement('button');
    button.classList.add('nav-project-button');
    button.textContent = project.getTitle();
    addElementToProjectList(button);
}

function addElementToProjectList(elemnet){
    const PROJECTS_LIST = getProjectList();
    let listNode = document.createElement('li');
    listNode.appendChild(elemnet);
    PROJECTS_LIST.appendChild(listNode);
}

function getProjectList(){
    const NAV = document.querySelector('#nav');
    const PROJECTS_LIST = NAV.childNodes.item(1);
    return PROJECTS_LIST;
}