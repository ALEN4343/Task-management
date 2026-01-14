import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-detail.html'
})
export class TaskDetailComponent {
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTasks().find(t => t.id === id)!;
  }
}