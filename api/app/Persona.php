<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model {
    protected $table = 'personas';

    protected $fillable = [
        'nombre',
        'apellidoP',
        'apellidoM',
        'apodo',
        'created_at',
        'updated_at',
        'slug'
    ];

}
