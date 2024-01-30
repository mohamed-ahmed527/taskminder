import { Component, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetuserService } from 'src/app/all-services/getuser.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  constructor (private getuserservice: GetuserService) {}
  @Input () public task: any ;

  deleteTask(id:number) {
    let user = JSON.parse(localStorage.getItem('user')!) 
    let tasks = user.tasks ;
    console.log(id)
    let newTasks = tasks.filter((e:any)=>{return e.id != id});
    console.log('new tasks',newTasks);
    user.tasks = newTasks;
    console.log(user)
    fetch('http://localhost:3000/users/'+user.id,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });

    localStorage.setItem('user', JSON.stringify(user));
  }
  
}
