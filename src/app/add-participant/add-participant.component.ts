import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import{Participant} from '../models/participant';
import { ParticipantService } from '../participant.service';

/**
 * Définition du composant (templete,style et tag)
 * Component
 */
@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  /**
   * Creates an instance of add participant component.
   * @param formBuilder 
   * @param router 
   * @param pservice 
   */
  constructor(private formBuilder: FormBuilder,private router: Router, private pservice: ParticipantService) { }
/**
 * Participant  of add participant component
 */
participant : Participant;
/**
 * Messages  of add participant component
 */
messages: string[] = [];
/**
 * Add form of add participant component
 */
addForm: FormGroup;

/**
 * on init
 */
ngOnInit(): void {
    let participantId = window.localStorage.getItem("editParticipantId");
    if(!participantId) {
      alert("Invalid action.")
      this.router.navigate(['Participant/list']);
    }
    this.addForm = this.formBuilder.group({
      id: [''],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      datenaissance: ['', Validators.required],
      email: ['', Validators.required],
      tele: ['', Validators.required]
    });

  }
/**
 * Determines whether submit on
 */
onSubmit() {
    this.pservice.createParticipant(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['Participant/list']);
        console.log(data);
      });
  
  }

}
