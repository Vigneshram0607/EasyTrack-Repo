import { Component ,Input} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../data/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_USERS } from '../data/dummy-users';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service'; 

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name?: string;
  @Input({required: true}) userId!: string;

  isAddingTask:boolean = false;

  tasks = dummyTasks;

  constructor(private tasksService: TasksService){}

  get selectedUserTasks(){
    // return this.tasks.filter( task => task.userId == this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string){
  //   this.tasks = this.tasks.filter( task => task.id != id);
  // }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddtask(){
    this.isAddingTask = false;
  }

  onAddNewTask(taskData: NewTaskData){
    // TO add beginning of the array, we use unshift()
    // this.tasks.unshift({
    //   id: new Date().getTime().toString(),
    //   userId:this.userId,
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.date,
    // });
    this.tasksService.addTask(taskData, this.userId);
    
  }

}
