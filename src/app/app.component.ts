import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input Text Example - Angular';

  inTextBox: string="";
  outTextBox: string=""; 

  reverseString(str: string) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
  }

  getChange(mytext: any) {
    if (mytext.length > 4)
      this.outTextBox = this.reverseString(mytext);
  }
  
  clear(){
    this.inTextBox = "";
    this.outTextBox= "";
    
  }
  }
