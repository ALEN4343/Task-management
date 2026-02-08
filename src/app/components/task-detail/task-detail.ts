import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-detail.html',
  styleUrls: ['./task-detail.css']
})
export class TaskDetailComponent implements OnInit {

  taskForm!: FormGroup;
  taskId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {
    
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      status: ['Pending'],
      progress: [0]
    });
  }

  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    const task = this.taskService.getTaskById(this.taskId);

    if (task) {
      this.taskForm.patchValue({
        title: task.title,
        description: task.description,
        status: task.status,
        progress: task.progress
      });
    }
  }

  saveTask() {
    if (this.taskForm.invalid) return;

    const updatedTask: Task = {
      id: this.taskId,
      title: this.taskForm.value.title!,
      description: this.taskForm.value.description!,
      status: this.taskForm.value.status!,
      progress: this.taskForm.value.progress!
    };

    this.taskService.updateTask(updatedTask);
    this.router.navigate(['/']);
  }
}
