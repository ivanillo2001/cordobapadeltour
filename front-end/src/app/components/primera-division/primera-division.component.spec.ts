import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraDivisionComponent } from './primera-division.component';

describe('PrimeraDivisionComponent', () => {
  let component: PrimeraDivisionComponent;
  let fixture: ComponentFixture<PrimeraDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeraDivisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeraDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
