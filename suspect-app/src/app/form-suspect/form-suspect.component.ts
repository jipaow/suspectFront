import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuspectService } from '../suspect.service';
import { Suspect } from '../suspect';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-suspect',
  templateUrl: './form-suspect.component.html',
  styleUrls: ['./form-suspect.component.css']
})
export class FormSuspectComponent implements OnInit {
  suspect = new Suspect();




  constructor( private suspectService: SuspectService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.suspectService.postSuspect(this.suspect).subscribe();
    setTimeout(() => {
      this.router.navigateByUrl('/lierSuspect');
      }, 3000);
      }


}
