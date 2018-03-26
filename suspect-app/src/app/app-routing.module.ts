import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspectComponent } from './suspect/suspect.component';
import { EditSuspectComponent } from './edit-suspect/edit-suspect.component';
import { FormSuspectComponent } from './form-suspect/form-suspect.component';
import { UpdateSuspectComponent } from './update-suspect/update-suspect.component';
import { AllEnqueteComponent } from './all-enquete/all-enquete.component';
import { GetEnqueteComponent } from './get-enquete/get-enquete.component';
import { UpdateEnqueteComponent } from './update-enquete/update-enquete.component';
import { CreateEnqueteComponent } from './create-enquete/create-enquete.component';
import { LinkSuspectComponent } from './link-suspect/link-suspect.component';

const routes: Routes = [
  {path: 'suspects', component: SuspectComponent},
  {path: 'editSuspect/:id', component: EditSuspectComponent,
children: [
 {path: 'update', component: UpdateSuspectComponent}
] },
  {path: 'formSuspect', component: FormSuspectComponent},
  {path: 'enquetes', component: AllEnqueteComponent},
  {path: 'enquete/:numeroDossier', component: GetEnqueteComponent,
  children: [
    {path: 'update', component: UpdateEnqueteComponent}
  ] },
  {path: 'creerEnquete', component: CreateEnqueteComponent},
  {path: 'lierSuspect', component: LinkSuspectComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
