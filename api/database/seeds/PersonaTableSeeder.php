<?php
use Illuminate\Database\Seeder;

use App\Persona;
class PersonaTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Persona::create([
            'nombre' => 'Adrian',
            'apellidoP' => 'Amaya',
            'apellidoM' => 'Padron',
            'apodo' => 'amaya',
            'slug' => 'amaya-padron'
        ]);
    }
}
