import { Component, OnInit } from '@angular/core';
import {Persona} from '../interfaces/persona';
import {PersonasService} from '../services/personas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  persona: Persona = {
    nombre: null,
    apellidoP: null,
    apellidoM: null,
    apodo: null
  };

  personas: Persona[];

  slug: any;
  editing = false;
  constructor(private personaService: PersonasService, private activatedRoute: ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.params['slug'];
    if (this.slug) {
      this.personaService.getPersona(this.slug).subscribe((data: Persona[]) => {
        this.personas = data;
        this.persona = this.personas.find((m) => {
          return m.slug == this.slug;
        });
        }, (err) => {
          console.log(err);
        }
      );
      this.editing = true;
    } else {
      this.editing = false;
    }
    console.log(this.slug);
  }

  ngOnInit() {
  }

  registrar() {
    if (this.editing) {
      this.personaService.updatePersona(this.persona, this.slug).subscribe((data) => {
        alert('Persona actualizada con éxito');
      }, (error => {
        console.log(error);
        alert('Ocurrió un error');
      }));
    } else {
      this.personaService.savePersona(this.persona).subscribe((data) => {
        alert('Persona registrada con éxito');
      }, (error => {
        console.log(error);
        alert('Ocurrió un error');
      }));
    }
  }

}
