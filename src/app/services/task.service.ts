import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  getTasksAsync(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  updateTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      this.tasksSubject.next(this.tasks);
    }
  }

  getTaskById(id: number): Task | undefined {
  return this.tasks.find(task => task.id === id);
}
}
