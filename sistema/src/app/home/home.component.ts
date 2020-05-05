import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Persona} from '../interfaces/persona';
import {PersonasService} from '../services/personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personas: Persona[];

  constructor(private personaService: PersonasService, private httpClient: HttpClient) {
    this.personaService.getAllPersonas().subscribe((data: Persona[]) => {
        this.personas = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

  eliminar(slug) {
    if (confirm('¿Deseas eliminar a esta persona?')) {
      this.personaService.deletePersona(slug).subscribe( (data) => {
          alert('Eliminado con exito');
        }, (error) => {
          console.log(error);
        }
      );
    }
  }
}
