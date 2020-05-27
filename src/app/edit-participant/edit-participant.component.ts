
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import{Participant} from '../models/participant';
import { ParticipantService } from '../participant.service';



/**
 * Définition du composant (templete,style et tag)
 * Component
 */
@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})



export class EditParticipantComponent implements OnInit {

  /**
   * Participant  of edit participant component
   */
  participant: Participant;
  /**
   * Edit form of edit participant component
   */
  editForm: FormGroup;
  /**
   * Creates an instance of edit participant component.
   * @param formBuilder 
   * @param router 
   * @param sparticipant 
   */
  constructor(private formBuilder: FormBuilder,private router: Router, private sparticipant: ParticipantService) { }
  
 
 /**
  * on init
  */
 ngOnInit(): void {
   
    
    this.editForm = this.formBuilder.group({
      
      id: [],
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
    this.sparticipant.updateparticipant(this.editForm.value)
      .subscribe( data => { 
        this.router.navigate(['Participant/list']);
        console.log(data);
      });
  }
}
