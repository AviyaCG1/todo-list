import { Task } from "./task";

export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  getTaskList() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }
}
