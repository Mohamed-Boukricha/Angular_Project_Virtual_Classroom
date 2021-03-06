import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { ParticipantService } from './participant.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';

/**
 * Ng module
 */
@NgModule({
  
  declarations: [
    
    AppComponent,
    
    NavBarComponent,
    ParticipantListComponent,
    AddParticipantComponent,
    EditParticipantComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ParticipantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
