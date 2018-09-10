<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Filme;

class FilmesController extends Controller
{
    public function formFilme() {
        return view ('form');
    }

    public function adicionar(Request $request) {
        $this->validate($request, [
            'title' => 'required|unique:movies',
            'rating' => 'numeric|min:0|max:10',
            'awards' => 'numeric|min:0',
            'length' => 'numeric',
            'release_date' => 'date',
        ]);

        $filme = Filme::create([
            'title' => $request->input('title'),
            'rating' => $request->input('rating'),
            'awards' => $request->input('awards'),
            'length' => $request->input('length'),
            'release_date' => $request->input('release_date'),
        ]); 
        
        $sucesso = $filme->save();

        return view ('form');
    }
}

