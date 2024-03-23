import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
  user?:string
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
       this.user = params['user'];
      // Hacer lo que necesites con el usuario en este componente
    });
  }

}
