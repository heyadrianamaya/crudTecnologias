import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Persona} from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  API_ENDPOINT = '/personas/';
  constructor(private httpCliente: HttpClient) { }

  getAllPersonas() {
    return this.httpCliente.get(this.API_ENDPOINT + 'obtenerPersonas') ;
  }

  savePersona(persona: Persona) {
    const headers1 = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpCliente.post(this.API_ENDPOINT + 'altaPersona', persona, {headers: headers1});
  }

  updatePersona(persona: Persona, slug) {
    const headers1 = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpCliente.put(this.API_ENDPOINT + 'editarPersona/' + slug, persona, {headers: headers1});
  }

  getPersona(slug) {
    return this.httpCliente.get(this.API_ENDPOINT + 'obtenerPersona/' + slug);
  }

  deletePersona(slug) {
    return this.httpCliente.delete(this.API_ENDPOINT + 'eliminar/' + slug);
  }
}
