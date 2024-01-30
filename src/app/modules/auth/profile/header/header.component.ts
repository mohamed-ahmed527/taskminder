import { Component, EventEmitter, Output } from '@angular/core';
import { GetuserService } from 'src/app/all-services/getuser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private getuserservice:GetuserService ){};

  user!:any ;
  ngOnInit () {
    this.user = this.getuserservice.getUser();
  }
  /******search function ****/
  enteredSearchValue:string = '';
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>() ;
  onSearchTextChange(){
    this.searchTextChanged.emit(this.enteredSearchValue)
  }
  
}
