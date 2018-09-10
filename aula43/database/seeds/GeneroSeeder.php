<?php

use Illuminate\Database\Seeder;
use App\Genero;

class GeneroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // $generos = Genero::all();
        // $generos->delete();

        // $genero = Genero::create(['name' => "Genero 1", 'ranking' => 20]);
        // $genero->active = true;
        // $genero->save();
        
        // $genero = Genero::create(['name' => "Genero 2", 'ranking' => 21]);
        // $genero->active = true;
        // $genero->save();]]

        $generos = factory(Genero::class)->times(10)->create();
        

    }
}
