import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-segunda-division',
  standalone: true,
  imports: [],
  templateUrl: './segunda-division.component.html',
  styleUrl: './segunda-division.component.css'
})
export class SegundaDivisionComponent {
  constructor(
    private location: Location,
    private router: Router
    ) { }
  goBack(): void {
    this.location.back();
  }
  primeraDivision(){
    this.router.navigate(['/primeraDivision']);
  }
}
