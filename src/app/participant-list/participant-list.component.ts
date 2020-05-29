import { Component, OnInit } from '@angular/core';
import { ParticipantService} from '../participant.service';
import {Participant} from '../models/participant';
import { Router } from '@angular/router';
import {EditParticipantComponent} from '../edit-participant/edit-participant.component';

/**
 * Définition du composant (templete,style et tag)
 */
/**
 * Component
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
  

  /**
   * Columns  of participant list component
   */
  columns = ["Particpant Id","Nom","Prenom", "Email", "Date de naissance", "Actions"];
  /**
   * Index  of participant list component
   */
  index = ["id", "lastname", "firstname", "email", "datenaissance"];
  /**
   * Participants  of participant list component
   */
  participants : Participant[] = [];


/**
 * on init 
 * we load the participant list in the init of our request
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
/**
 * Adds participant list component
 */
add() : void{
    this.router.navigate(['AddParticipant']);
  }
/**
 * Edits participant
 * @param participant 
 */
editParticipant(participant: Participant): void {
    window.localStorage.setItem("EditParticipant", participant.id.toString());
    this.router.navigate(['EditParticipant']);
  };
/**
 * Deletes participant
 * @param participant 
 */
deleteParticipant(participant: Participant): void{
     this.pservice.deleteParticipant(participant.id);
     this.participants= this.participants.filter(u => u !== participant);
  }

  
}


