import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent {
  title = '';
  description = '';

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  addTask(form: any) {
    if (form.invalid) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      status: 'Pending',
      progress: 0
    };

    this.taskService.addTask(newTask);
    this.router.navigate(['/']);
  }
}
