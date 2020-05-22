import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Participant} from './participant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url: string="http://localhost:3000/participant";
  constructor(private http: HttpClient) { 
    
  }
  
  getParticipants()
  {
      return this.http.get<Participant[]>(this.url);
  }

}
