import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {Participant} from './models/participant';


/**
 * In this file we declare our partipant service methods using a ParticipantService class
 */

/**
 * First we inject our application root
 */

@Injectable({
  providedIn: 'root'
})
/**
 * Here we declare our class called ParticipantService
 */
export class ParticipantService {
  url: string="http://localhost:3000/participant/"; // This is our database url

  /**
   * Creates an instance of participant service.
   * @param http 
   */
  constructor(private http: HttpClient) {  // to manipulate data we inject the Http protocle 
    
  }
  /**
   * This method is used to get participant list from database
   * @return list Participant
   */
  getParticipants()
  {
      return this.http.get<Participant[]>(this.url);
  }
  /**
   * This method is used to get a participant by id
   * @param id 
   * @return participant
   */
  getParticipantById(id: number): Observable<Participant> {
    return this.http.get<Participant>(this.url + id);
  }
  
  /**
   *This method is used to create a participant
   * @param participant 
   * @returns participant 
   */
  createParticipant(participant: Participant): Observable<Participant[]> {
    return this.http.post<Participant[]>(this.url, participant);
  }
  
  /**
  * This method is used to update a participant 
   * @param participant 
   * @returns updateparticipant 
   */
  updateparticipant(participant: Participant): Observable<Participant> {
    return this.http.put<Participant>(this.url + participant.id, participant);
  }


  /**
   * Deletes participant
   * This method is used to delete a participant by id
   * @param id 
   */
  deleteParticipant(id: number): void {
    this.http.delete<Participant>(this.url + id).subscribe(data => {
      console.log(data);
    });
  }
}
