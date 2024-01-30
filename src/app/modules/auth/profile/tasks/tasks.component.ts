import { Component } from '@angular/core';
import { GetuserService } from './../../../../all-services/getuser.service';
import { TaskCardComponent } from './task-card/task-card.component';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  constructor (private getuserservice:GetuserService ) {}
  
  user = this.getuserservice.getUser();
  allTasks = this.user.tasks;
  
  /***search function****/
  searchText: string = '';
  onSearchTextEntered(searchValue:string) {
    this.searchText = searchValue;
  }

}
