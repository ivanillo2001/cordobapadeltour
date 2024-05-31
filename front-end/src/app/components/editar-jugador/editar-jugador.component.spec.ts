import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarJugadorComponent } from './editar-jugador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa este módulo
import { UsuarioService } from '../../servicios/usuario.service';
describe('EditarJugadorComponent', () => {
  let component: EditarJugadorComponent;
  let fixture: ComponentFixture<EditarJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarJugadorComponent, ReactiveFormsModule, HttpClientTestingModule],
      providers: [UsuarioService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
