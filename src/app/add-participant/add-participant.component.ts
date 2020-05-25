import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import{Participant} from '../models/participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private pservice: ParticipantService) { }

  participant : Participant;
  messages: string[] = [];

  addForm: FormGroup;


  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      datenaissance: ['', Validators.required],
      email: ['', Validators.required],
      tele: ['', Validators.required]
    });

  }

  onSubmit() {
    this.pservice.createParticipant(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['Participant/list']);
        console.log(data);
      });
  
  }

}
