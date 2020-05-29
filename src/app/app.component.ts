import { Component } from '@angular/core';



/** Définition du composant (templete,style et tag)
 *  Component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  /**
   * Title  of app component
   */
  title = 'VirtualClass';
  /**
   * Creates an instance of app component.
   */
  
  constructor() { }
  
 
}
