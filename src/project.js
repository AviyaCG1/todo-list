import { Task } from "./task";

export class Project{
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task){
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }

    setTitle(title){
        this.title = title;
    }
}