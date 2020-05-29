import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import {AddParticipantComponent} from './add-participant/add-participant.component';
import {EditParticipantComponent} from './edit-participant/edit-participant.component';
import {AppComponent} from './app.component';

/**
 * In this file we define our rooting path
 */


const routes: Routes = [

    {
    path: 'Participant/list',
    component: ParticipantListComponent
    },
    {
    path: 'AddParticipant',
    component: AddParticipantComponent
      
    },
    {
    path: 'EditParticipant',
    component: EditParticipantComponent
        
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
