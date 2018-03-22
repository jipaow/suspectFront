import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspectComponent } from './suspect/suspect.component';
import { EditSuspectComponent } from './edit-suspect/edit-suspect.component';
import { FormSuspectComponent } from './form-suspect/form-suspect.component';
import { UpdateSuspectComponent } from './update-suspect/update-suspect.component';

const routes: Routes = [
  {path: 'suspects', component: SuspectComponent},
  {path: 'editSuspect/:id', component: EditSuspectComponent,
children: [
 {path: 'update', component: UpdateSuspectComponent}
] },
  {path: 'formSuspect', component: FormSuspectComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
