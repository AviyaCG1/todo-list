import { Project } from "./project";

export function mainContentLoad(){
    const MAIN_CONTENT = getMainContent();
}

export function mainAddProject(project){
    const MAIN_CONTENT = getMainContent();

    const CARD = document.createElement('div');
    CARD.classList.add('card');
    CARD.dataset.project = project.getTitle();
    MAIN_CONTENT.appendChild(CARD);

    const TITLE = document.createElement('div');
    TITLE.classList.add('card-title');
    TITLE.textContent = project.getTitle();
    CARD.appendChild(TITLE);
}

export function mainRemoveProject(project){
    const CARD = document.querySelector(`#main-content [data-project="${project.getTitle()}"]`);
    CARD.remove();
}

function getMainContent(){
    return document.querySelector('#main-content');
}