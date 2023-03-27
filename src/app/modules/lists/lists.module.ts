import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListsComponent } from './task-lists/task-lists.component';



@NgModule({
  declarations: [
    TaskListsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskListsComponent
  ]
})
export class ListsModule { }
