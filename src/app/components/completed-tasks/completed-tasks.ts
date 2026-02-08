import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-tasks.html'
})
export class CompletedTasksComponent implements OnInit {

  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.getTasksAsync().pipe(
      map(tasks => tasks.filter(task => task.status === 'Completed'))
    );
  }
}
