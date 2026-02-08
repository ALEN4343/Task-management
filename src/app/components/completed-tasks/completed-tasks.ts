import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-tasks.html'
})
export class CompletedTasksComponent implements OnInit {
  completedTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.completedTasks = this.taskService
      .getTasks()
      .filter(task => task.status === 'Completed');
  }
}
