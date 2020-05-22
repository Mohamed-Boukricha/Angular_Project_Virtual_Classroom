import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';
import {Participant} from '../participant';


@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  constructor(private rs : RestService) { }
  
  columns = ["Particpant Id","Nom","Prenom", "Email", "Age"];
  index = ["id", "nom", "prenom", "email", "age"];

  participants : Participant[] = [];


  ngOnInit(): void {
    
    this.rs.getParticipants().subscribe
    (
      (response)=>
      {
        this.participants = response;
      },
      (error) => console.log(error)
    )
  }
  }



