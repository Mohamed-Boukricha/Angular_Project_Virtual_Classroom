import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import{Participant} from '../models/participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {

  participant: Participant;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private sparticipant: ParticipantService) { }

  ngOnInit(): void {
    /* let participantId = window.localStorage.getItem("editParticpantId");
    if(!participantId) {
      alert("Invalid action.")
      this.router.navigate(['Participant/list']);
      return;
    }*/
    this.editForm = this.formBuilder.group({
      id: [],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      datenaissance: ['', Validators.required],
      email: ['', Validators.required],
      tele: ['', Validators.required]
    });
  }
  onSubmit() {
    this.sparticipant.updateUser(this.editForm.value)
      .subscribe( data => { 
        this.router.navigate(['Participant/list']);
        console.log(data);
      });
  }
   FooController(scope, window) {
    scope.removeUser = function() {
      var deleteUser = window.confirm('Are you absolutely sure you want to delete?');
  
      if (deleteUser) {
        window.alert('Going to delete the user');
      }
    }
  }
/*this.router.navigate(['Participant/list']);
        console.log(data);  */
}
