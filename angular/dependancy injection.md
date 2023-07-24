Sure, let's illustrate Angular's dependency injection system with an example. Suppose we are building a simple Angular application that allows users to display and manage a list of tasks. We'll create a service to manage the tasks, and two components: one to display the list of tasks, and another to add new tasks.

1. Task Service:
We'll start by creating a service that manages the tasks. The service will have methods to get the list of tasks and add new tasks.

```typescript
// task.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  private tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];

  getTasks(): string[] {
    return this.tasks;
  }

  addTask(newTask: string): void {
    this.tasks.push(newTask);
  }
}
```

2. Task List Component:
Next, we'll create a component to display the list of tasks. This component will depend on the `TaskService` to fetch the list of tasks.

```typescript
// task-list.component.ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  template: `
    <h2>Task List</h2>
    <ul>
      <li *ngFor="let task of tasks">{{ task }}</li>
    </ul>
  `,
})
export class TaskListComponent implements OnInit {
  tasks: string[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
```

3. Task Add Component:
Now, we'll create another component to add new tasks to the list. This component will also depend on the `TaskService` to add new tasks.

```typescript
// task-add.component.ts

import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-add',
  template: `
    <h2>Add New Task</h2>
    <input [(ngModel)]="newTask" placeholder="Enter task name" />
    <button (click)="addTask()">Add Task</button>
  `,
})
export class TaskAddComponent {
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }
}
```

4. App Module:
In the main `AppModule`, we need to configure Angular's dependency injection system to provide the `TaskService` as a singleton throughout the application.

```typescript
// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list.component';
import { TaskAddComponent } from './task-add.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskAddComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TaskService], // Configure the TaskService as a provider
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Now, when the application runs, the `TaskListComponent` and `TaskAddComponent` will have access to the same instance of the `TaskService`. This means they can share data and functionality, allowing the `TaskListComponent` to display the updated list of tasks when a new task is added using the `TaskAddComponent`.

Angular's dependency injection system manages the creation and sharing of the `TaskService` instance, ensuring that all components that depend on it receive the same instance throughout the application's lifecycle. This promotes code reusability, maintainability, and modular design in Angular applications.
