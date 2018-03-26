import { Component, OnInit } from '@angular/core';
import { Enquete } from '../enquete';
import { EnqueteService } from '../enquete.service';

@Component({
  selector: 'app-all-enquete',
  templateUrl: './all-enquete.component.html',
  styleUrls: ['./all-enquete.component.css']
})
export class AllEnqueteComponent implements OnInit {
  enquetes: Enquete[];

  constructor(private enqueteService: EnqueteService) { }

  ngOnInit() {
    this.getAllEnquete();
  }

  getAllEnquete(): void {
    this.enqueteService.getAllEnquete().subscribe(enq => this.enquetes = enq);
}
}
