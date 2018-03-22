import { Component, OnInit } from '@angular/core';
import { Suspect } from '../suspect';
import { SuspectService } from '../suspect.service';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-suspect',
  templateUrl: './update-suspect.component.html',
  styleUrls: ['./update-suspect.component.css']
})
export class UpdateSuspectComponent implements OnInit {
  suspect:  Suspect;
   private id: number;

  constructor(private suspectService: SuspectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
this.getSuspect();
  }
  getSuspect(): void {
    this.id = +this.route.parent.snapshot.paramMap.get('id');
    this.suspectService
    .getSuspect(this.id)
    .do(suspect => console.log(suspect))
    .subscribe(suspect => this.suspect = suspect);
  }




  onSubmit(upDateform: NgForm) {
    this.suspectService.UpdateSuspect(this.suspect).subscribe();
    this.router.navigate(['/suspects']);
  }
}
