
export function pageLoad(){
    const CONTENT = document.createElement('div');
    CONTENT.id = 'content';
    document.body.appendChild(CONTENT);

    const HEADER = createHeader();
    CONTENT.appendChild(HEADER);

    const NAV = createNav();
    CONTENT.appendChild(NAV);

    const CONTAINER = createMainContent();
    CONTENT.appendChild(CONTAINER);

    const FOOTER = createFooter();
    CONTENT.appendChild(FOOTER);
}

function createHeader(){
    const HEADER = document.createElement('div');
    HEADER.id = 'header';

    return HEADER;
}

function createNav(){
    const NAV = document.createElement('div');
    NAV.id = 'nav';

    return NAV;
}

function createMainContent(){
    const MAIN_CONTENT = document.createElement('div');
    MAIN_CONTENT.id = 'main-content';

    return MAIN_CONTENT;
}

function createFooter(){
    const FOOTER = document.createElement('div');
    FOOTER.id = 'footer';

    return FOOTER;
}