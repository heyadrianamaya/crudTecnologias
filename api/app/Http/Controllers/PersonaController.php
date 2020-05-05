<?php

namespace App\Http\Controllers;

use App\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    public function crear(Request $request){
        $persona = new Persona();
        $persona->nombre = $request->input('nombre');
        $persona->apellidoP = $request->input('apellidoP');
        $persona->apellidoM = $request->input('apellidoM');
        $persona->apodo = $request->input('apodo');
        $slug = str_replace(' ', '-',  strtolower($request->input('nombre')));
        $slug = $slug.'-'.str_replace(' ', '-',  strtolower($request->input('apellidoP')));
        $slug = $slug.'-'.str_replace(' ', '-',  strtolower($request->input('apellidoM')));
        $persona->slug = $slug;

        $persona->save();

    }

    public function editarPersona(Request $request, $slug){
        $persona = Persona::where('slug', '=', $slug)->firstOrFail();
        $persona->nombre = $request->input('nombre');
        $persona->apellidoP = $request->input('apellidoP');
        $persona->apellidoM = $request->input('apellidoM');
        $persona->apodo = $request->input('apodo');
        $slug = str_replace(' ', '-',  strtolower($request->input('nombre')));
        $slug = $slug.'-'.str_replace(' ', '-',  strtolower($request->input('apellidoP')));
        $slug = $slug.'-'.str_replace(' ', '-',  strtolower($request->input('apellidoM')));
        $persona->slug = $slug;

        $persona->save();

        echo json_encode($persona);
    }

    public function eliminarPersona($slug){
        $persona = Persona::where('slug', '=', $slug)->firstOrFail();
        $persona->delete();
    }

    public function subirFotografia(){

    }

    public function obtenerPersona($slug){
        try{
            $persona = Persona::all();
            return json_encode($persona);
        }catch (Exception $e){
            return $e;
        }
    }

    public function obtenerPersonas(){
        try{
            $persona = Persona::all();
            return json_encode($persona);
        }catch (Exception $e){
            return $e;
        }
    }

}
