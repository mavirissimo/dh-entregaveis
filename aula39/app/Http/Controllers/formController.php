<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Filmes;

class formController extends Controller
{
    public function form () {
        return view ('form');
    }

    public function adicionar (Request $request) {
        $this->validate($request, [
            'title' => 'required',
            'rating' => 'numeric|min:0|max:10',
            'awards' => 'numeric',
            'length' => 'numeric'
            
        ]);


        $usuario = Filmes::create([
            'title' => $request->input('title'),
            'rating' => $request->input('rating'),
            'awards' => $request->input('awards'),
            'length' => $request->input('length'),
            'release_date' =>$request->input('release_date')
           
            ]);
             $usuario->save();
            
        return view('form')->with('request', $request);
    }

    public function adicionarAtor(Request $request) {
        $this->validate($request, [


        ]);

    }


}
