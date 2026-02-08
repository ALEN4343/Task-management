import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html'
})
export class TaskFormComponent {

  title: string = '';
  description: string = '';
  priority: 'Low' | 'Medium' | 'High' = 'Medium';

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  addTask() {
    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      status: 'Pending',
      priority: this.priority,
      progress: 0,
      createdAt: new Date()   // ✅ THIS IS THE IMPORTANT PART
    };

    this.taskService.addTask(newTask).subscribe();
    this.router.navigate(['/']);
  }
}
