import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {Participant} from './models/participant';


/**
 * 
 */
@Injectable({
  providedIn: 'root'
})
/**
 * 
 */
export class ParticipantService {
  url: string="http://localhost:3000/participant/";
  constructor(private http: HttpClient) { 
    
  }
  /**
   * 
   */
  getParticipants()
  {
      return this.http.get<Participant[]>(this.url);
  }
  getParticipantById(id: number): Observable<Participant> {
    return this.http.get<Participant>(this.url + id);
  }

  createParticipant(participant: Participant): Observable<Participant[]> {
    return this.http.post<Participant[]>(this.url, participant);
  }
  updateUser(participant: Participant): Observable<Participant> {
    return this.http.put<Participant>(this.url + participant.id, participant);
  }
  deleteParticipant(id: number): void {
    this.http.delete<Participant>(this.url + id);
  }
}
