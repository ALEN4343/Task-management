import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task';
import { TaskFilterPipe } from '../../pipes/task-filter-pipe';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [CommonModule, TaskFilterPipe],
  templateUrl: './completed-tasks.html'
})
export class CompletedTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}
