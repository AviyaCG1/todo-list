
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
    CREATE_PROJECT.textContent = 'Create Project';
    PROJECTS_LIST.appendChild(CREATE_PROJECT);
}