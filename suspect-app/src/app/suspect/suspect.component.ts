import { Component, OnInit } from '@angular/core';
import { Suspect } from '../suspect';
import { SuspectService } from '../suspect.service';



@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.css']
})
export class SuspectComponent implements OnInit {
   suspects: Suspect[];


  constructor( private suspectService: SuspectService) { }

  ngOnInit() {
   this.getAllSuspect();
  }

  getAllSuspect(): void {
    this.suspectService.getAllSuspect().subscribe(sus => this.suspects = sus );
  }

}
