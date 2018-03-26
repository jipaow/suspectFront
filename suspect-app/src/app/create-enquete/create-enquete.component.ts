import { Component, OnInit } from '@angular/core';
import { Enquete } from '../enquete';
import { EnqueteService } from '../enquete.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-enquete',
  templateUrl: './create-enquete.component.html',
  styleUrls: ['./create-enquete.component.css']
})
export class CreateEnqueteComponent implements OnInit {
  enquete = new Enquete();
  constructor(private enqueteService: EnqueteService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.enqueteService.postEnquete(this.enquete).subscribe();
    setTimeout(() => {
      this.router.navigateByUrl('/enquetes');
      }, 3000);
   }
}
