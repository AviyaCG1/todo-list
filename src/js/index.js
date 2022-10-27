import { User } from "./user";
import { Project } from "./project";
import { Task } from "./task";
import { PubSub } from "./pub-sub";
import { pageLoad } from "./page-load";
import { navAddProject, navRemoveProject,navContentLoad } from "./nav-content-load";
import { mainAddProjectCard, mainRemoveProject, myProjectsLoad } from "./main-content-load";
import '../css/page-layout.css';

pageLoad();

// create a guest user
const USER = new User('Guest');
let project1 = new Project('Project 1');
project1.addTask(new Task('Task 1', 'details', '01-11-2022', 'Must Do'));
project1.addTask(new Task('Task 2', 'details', '02-11-2022', 'Should Do'));
project1.addTask(new Task('Task 3', 'details', '03-11-2022', 'If Time'));
USER.addProject(project1);


let project2 = new Project('Project 2');
project2.addTask(new Task('Task 1', 'details', '01-11-2022', 'Must Do'));
project2.addTask(new Task('Task 2', 'details', '02-11-2022', 'Should Do'));
project2.addTask(new Task('Task 3', 'details', '03-11-2022', 'If Time'));
USER.addProject(project2);

myProjectsLoad(USER.getProjectList());



