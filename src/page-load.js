
export function pageLoad(){
    const CONTENT = document.createElement('div');
    CONTENT.id = 'content';
    CONTENT.style.minHeight = "100vh";
    CONTENT.style.border = "1px solid red";
    document.body.appendChild(CONTENT);


}