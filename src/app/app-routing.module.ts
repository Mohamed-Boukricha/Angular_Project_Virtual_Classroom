import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import {AddParticipantComponent} from './add-participant/add-participant.component';
import {EditParticipantComponent} from './edit-participant/edit-participant.component';

const routes: Routes = [
    {
    path: '',
    component: NavBarComponent
    },
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
