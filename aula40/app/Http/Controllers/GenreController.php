<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Genero;

class GenreController extends Controller
{
    public function show($id) {
        $genero = Genero::find($id);

        return view('genero')->with('genero', $genero);
    }
}

