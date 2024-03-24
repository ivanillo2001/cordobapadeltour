import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-primera-division',
  standalone: true,
  imports: [],
  templateUrl: './primera-division.component.html',
  styleUrl: './primera-division.component.css'
})
export class PrimeraDivisionComponent {
  constructor(
    private location: Location,
    private router: Router
    ) { }
  goBack(): void {
    this.location.back();
  }
  segundaDivision(){
    this.router.navigate(['/segundaDivision']);
  }
}
