import { User } from "./user";
import { Project } from "./project";
import { Task } from "./task";


export function parseUser(key){
    const rawUser = JSON.parse(localStorage.getItem(key));
    
    const USER = new User(rawUser.name);
    rawUser.projectList.forEach( 
        rawProject => USER.addProject(parseProject(rawProject))
    );

    return USER;
}

function parseProject(rawProject){
    const project = new Project(rawProject.title);
    rawProject.tasks.forEach(
        rawTask => project.addTask(
            new Task(rawTask.title, rawTask.description, rawTask.dueDate, rawTask.priority)
        )
    );

    return project;
}