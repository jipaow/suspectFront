import { Component, OnInit } from '@angular/core';
import { SuspectService } from '../suspect.service';
import { Suspect } from '../suspect';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-suspect',
  templateUrl: './link-suspect.component.html',
  styleUrls: ['./link-suspect.component.css']
})
export class LinkSuspectComponent implements OnInit {
suspect = new Suspect();

constructor(private suspectService: SuspectService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.suspectService.linkSuspect(this.suspect).subscribe();
    setTimeout(() => {
      this.router.navigateByUrl('/suspects');
      }, 3000);
  }
}
