import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getTaskById(id: number): Task | undefined {
    return this.getTasks().find(task => task.id === id);
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  updateTask(updatedTask: Task): void {
    const tasks = this.getTasks().map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  deleteTask(id: number): void {
    const tasks = this.getTasks().filter(task => task.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
