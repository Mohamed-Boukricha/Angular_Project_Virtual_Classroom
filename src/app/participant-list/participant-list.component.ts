import { Component, OnInit } from '@angular/core';
import { ParticipantService} from '../participant.service';
import {Participant} from '../models/participant';
import { Router } from '@angular/router';


/**
 * Définition du composant (templete,style et tag)
 */

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {


/**
 * constructeur du composant liste composant
 * 
 * @param pservice 
 * @param router 
 */
  constructor(private pservice : ParticipantService,
              private router: Router
    ) { }
  

  
  columns = ["Particpant Id","Nom","Prenom", "Email", "Date de naissance", "Actions"];
  index = ["id", "lastname", "firstname", "email", "datenaissance"];

  participants : Participant[] = [];

/**
 * pour le traitement une seul méthode get
 */

  ngOnInit(): void {
    
    this.pservice.getParticipants()
    .subscribe
    (
      (response : Participant[])=>
      {
        this.participants = response;
      },
      (error) => console.log(error)
    )
  }

  add() : void{
    this.router.navigate(['AddParticipant']);
  }

 /* deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };



*/
  }

  


