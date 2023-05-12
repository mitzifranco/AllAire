import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All Aire';
  todayDate = new Date();
  newDate = mm + '/' + dd + '/' + yyyy + '  ' + hh + ":" + mi + ":" + ss ;
  dpSwitchStatus = dpSwitch;
}
let todayDate = new Date();

//to get the date for todays date
var dd = String(todayDate.getDate()).padStart(2, '0');
var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); 
var yyyy = todayDate.getFullYear();
var hh = String(todayDate.getHours()).padStart(2, '0');
var mi = String(todayDate.getMinutes() + 1).padStart(2, '0'); 
var ss = String(todayDate.getSeconds()+ 1).padStart(2, '0'); 
//todayDate.toLocaleDateString(); could use this to pull GMT
console.log(todayDate)

//Here we will put the if statement for the DP Switch
//"OFF. At this time it is neccessary to change your air filter."
let dpSwitch ="ON. At this time it is not neccessary to clean your air filter"
