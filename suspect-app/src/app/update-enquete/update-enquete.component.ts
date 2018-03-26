import { Component, OnInit } from '@angular/core';
import { Enquete } from '../enquete';
import { EnqueteService } from '../enquete.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-enquete',
  templateUrl: './update-enquete.component.html',
  styleUrls: ['./update-enquete.component.css']
})
export class UpdateEnqueteComponent implements OnInit {
  enquete: Enquete;
  private numeroDossier: number;

  constructor(private enqueteService: EnqueteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.getEnquete();
  }
  getEnquete(): void {
    this.numeroDossier = +this.route.parent.snapshot.paramMap.get('numeroDossier');
    this.enqueteService.getEnquete(this.numeroDossier)
    .subscribe(enquete => this.enquete = enquete);
  }

  onSubmit(upDateform: NgForm) {
    this.enqueteService.updateEnquete(this.enquete).subscribe();
    this.router.navigate(['/enquetes']);
}
}
