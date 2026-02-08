import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task';
import { HighlightDirective } from '../../directives/highlight';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HighlightDirective, FormsModule],
  templateUrl: './task-list.html'
})
export class TaskListComponent implements OnInit {

  tasks$!: Observable<Task[]>;   // ✅ MUST be Observable

  constructor(private taskService: TaskService,private router: Router) {}

  ngOnInit() {
    this.tasks$ = this.taskService.getTasksAsync(); // ✅ Observable returned
  }

  markCompleted(task: Task) {
  const updatedTask: Task = {
    ...task,
    status: 'Completed',
    progress: 100
  };

  this.taskService.updateTask(updatedTask);
  this.router.navigate(['/completed']);
}

}

