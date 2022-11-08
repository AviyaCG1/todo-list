import { User } from "./user";
import { Project } from "./project";
import { Task } from "./task";
import { pubsub } from "./pub-sub";
import { pageLoad } from "./page-load";
import {
  navAddProject,
  navRemoveProject,
  navContentLoad,
} from "./nav-content-load";
import {
  mainAddProjectCard,
  mainRemoveProject,
  myProjectsLoad,
  singleProjectLoad,
} from "./main-content-load";
import { parseUser } from "./storage";

import "../css/page-layout.css";
import "../css/project-cards.css";
import "../css/single-project.css";
import "../css/nav.css";

pageLoad();
const USER = parseUser("Guest");
navContentLoad(USER.getProjectList());
singleProjectLoad(USER.getProjectList()[0]);

pubsub.subscribe("ADD_PROJECT", (data) => {
  USER.addProject(data);
});
pubsub.subscribe("ADD_PROJECT", navContentLoad);
