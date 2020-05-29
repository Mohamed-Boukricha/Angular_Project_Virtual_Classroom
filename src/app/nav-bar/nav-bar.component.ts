import { Component, OnInit } from '@angular/core';

/**
 * Définition du composant (templete,style et tag)
 * Component
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
/**
 * Creates an instance of nav bar component.
 */
constructor() { }
/**
 * on init
 */
ngOnInit(): void {
  }

}
