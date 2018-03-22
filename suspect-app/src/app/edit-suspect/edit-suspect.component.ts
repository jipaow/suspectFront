
import { Component, OnInit, Input } from '@angular/core';
import { Suspect } from '../suspect';
import { ActivatedRoute } from '@angular/router';
import { SuspectService } from '../suspect.service';
import { Location } from '@angular/common';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-edit-suspect',
  templateUrl: './edit-suspect.component.html',
  styleUrls: ['./edit-suspect.component.css']
})
export class EditSuspectComponent implements OnInit {
  @Input() suspect: Suspect;

  private id: number;
 // private nom: string;

  constructor(private route: ActivatedRoute,
              private suspectService: SuspectService,
              private location: Location) { }

  ngOnInit() {
    this.getSuspect();
  }

  getSuspect(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.suspectService
    .getSuspect(this.id)
    .do(suspect => console.log(suspect))
    .subscribe(suspect => this.suspect = suspect);
  }



}
