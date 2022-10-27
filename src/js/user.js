
export class User{
    constructor(name){
        this.name = name;
        this.projectList = [];
    }

    getName(){
        return this.name;
    }

    getProjectList(){
        return this.projectList;
    }

    addProject(project){
        this.projectList.push(project);
    }

    removeProject(project){
        const index = this.projectList.indexOf(project);
        this.projectList.splice(index, 1);
    }
}