import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-primera-division',
  standalone: true,
  imports: [],
  templateUrl: './primera-division.component.html',
  styleUrl: './primera-division.component.css'
})
export class PrimeraDivisionComponent {
  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }
}
