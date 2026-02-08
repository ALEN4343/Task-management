import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) {}

  // 🔹 Async stream for components (MAIN SOURCE)
  getTasksAsync(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  // 🔹 Simulated GET (initial fetch)
  fetchTasks(): Observable<Task[]> {
    return of(this.tasks).pipe(
      delay(500),
      tap(tasks => this.tasksSubject.next([...tasks])), // ✅ new reference
      catchError(() => {
        return throwError(() => new Error('Failed to fetch tasks'));
      })
    );
  }

  // 🔹 Simulated POST (add task)
  addTask(task: Task): Observable<Task> {
    return of(task).pipe(
      delay(300),
      tap(newTask => {
        this.tasks = [...this.tasks, newTask];   // ✅ IMMUTABLE UPDATE
        this.tasksSubject.next(this.tasks);      // ✅ emit new array
      }),
      catchError(() => {
        return throwError(() => new Error('Failed to add task'));
      })
    );
  }

  // 🔹 Simulated PUT (update task)
  updateTask(task: Task): Observable<Task> {
    return of(task).pipe(
      delay(300),
      tap(updatedTask => {
        this.tasks = this.tasks.map(t =>
          t.id === updatedTask.id ? updatedTask : t
        );
        this.tasksSubject.next(this.tasks);      // ✅ emit new array
      }),
      catchError(() => {
        return throwError(() => new Error('Failed to update task'));
      })
    );
  }

  // 🔹 Get by ID (detail/edit)
  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }
}
