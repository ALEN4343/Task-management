import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task';
import { HighlightDirective } from '../../directives/highlight';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HighlightDirective,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSliderModule,
    MatDialogModule
  ],
  templateUrl: './task-list.html'
})
export class TaskListComponent implements OnInit {

  tasks$!: Observable<Task[]>;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // 🔴 REQUIRED: seed the observable stream
   

    // main observable used by template
    this.tasks$ = this.taskService.getTasksAsync();
  }

  markCompleted(task: Task) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Are you sure you want to mark this task as completed?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedTask: Task = {
          ...task,
          status: 'Completed',
          progress: 100
        };

        // 🔴 MUST SUBSCRIBE
        this.taskService.updateTask(updatedTask).subscribe(() => {
          this.router.navigate(['/completed']);
        });
      }
    });
  }

  updateProgress(task: Task, value: number | null | undefined) {
    if (value == null) return;

    const updatedTask: Task = {
      ...task,
      progress: value
    };

    // 🔴 MUST SUBSCRIBE
    this.taskService.updateTask(updatedTask).subscribe();
  }
}
