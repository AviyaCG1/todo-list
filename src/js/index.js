import { User } from "./user";
import { Project } from "./project";
import { Task } from "./task";
import { PubSub } from "./pub-sub";
import { pageLoad } from "./page-load";
import { navAddProject } from "./nav-content-load";
import { mainAddProject } from "./main-content-load";
import '../css/page-layout.css';

pageLoad();

// create a guest user
let user = new User('Guest');

// Load user projects from local storage
let project = new Project('Bananas');
navAddProject(project);
mainAddProject(project);


