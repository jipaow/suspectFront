import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuspectService } from '../suspect.service';
import { Suspect } from '../suspect';

@Component({
  selector: 'app-form-suspect',
  templateUrl: './form-suspect.component.html',
  styleUrls: ['./form-suspect.component.css']
})
export class FormSuspectComponent implements OnInit {
  suspect = new Suspect();




  constructor( private suspectService: SuspectService) { }

  ngOnInit() {
  }


  onSubmit(suspect: Suspect): void {
    this.suspectService.postSuspect(this.suspect).subscribe();
      }


}
