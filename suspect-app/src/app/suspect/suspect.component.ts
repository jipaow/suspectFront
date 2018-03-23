import { Component, OnInit } from '@angular/core';
import { Suspect } from '../suspect';
import { SuspectService } from '../suspect.service';
import { MatTableDataSource } from '@angular/material';
import {MatTableModule} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';





@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.css']
})
export class SuspectComponent implements OnInit {
   suspects: Suspect[];
   displayedColumns = ['numero', 'nom', 'prenom'];
   dataSource = new MatTableDataSource(this.suspects);

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  constructor( private suspectService: SuspectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.getAllSuspect();
  }

  getAllSuspect(): void {
    this.suspectService.getAllSuspect().subscribe(sus => this.suspects = sus );
  }

  onRowClicked(row) {
    this.router.navigate(['/suspect/{{suspect.id}}']);
  }

}
