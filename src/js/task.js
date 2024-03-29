export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  getTitle() {
    return this.title;
  }

  isCompleted() {
    return this.completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
