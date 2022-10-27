import { Task } from "./task";

export class Project{
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    getTaskList(){
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task){
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        this.title = title;
    }
}