
export function pageLoad(){
    const CONTENT = document.createElement('div');
    CONTENT.id = 'content';
    document.body.appendChild(CONTENT);

    const HEADER = createHeader();
    CONTENT.appendChild(HEADER);

    const NAV = createNav();
    CONTENT.appendChild(NAV);

    const CONTAINER = createCardsContainer();
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

function createCardsContainer(){
    const CONTAINER = document.createElement('div');
    CONTAINER.id = 'cards-container';

    return CONTAINER;
}

function createFooter(){
    const FOOTER = document.createElement('div');
    FOOTER.id = 'footer';

    return FOOTER;
}