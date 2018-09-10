<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Filmes;

class formController extends Controller
{
    public function form () {
        return view ('form');
    }

    public function formAtores () {
        return view ('actorsadd');
    }


    public function exibirFilmes () {
        $filmes = Filme::all();

        return view('todosFilmes')->with('filmes', $filmes);
    }

    public function editForm ($id) {
        $filme = Filme::find($id);

        return view('editForm')->with('filme', $filme);
    }

    public function adicionar (Request $request) {
        $this->validate($request, [
            'title' => 'required',
            'rating' => 'required|numeric|min:0|max:10',
            'awards' => 'required|numeric|min:0',
            'length' => 'required|numeric|min:0',
            'release_date' => 'required|date'
            
        ]);


        $filme = Filmes::create([
            'title' => $request->input('title'),
            'rating' => $request->input('rating'),
            'awards' => $request->input('awards'),
            'length' => $request->input('length'),
            'release_date' =>$request->input('release_date')
           
            ]);

        $sucesso = $filme->save();

        if ($sucesso) {
            return view('form')->with('sucesso', true);
        } else {
            return view ('form')->with('erro', true);
        }
            
        return view('form')->with('request', $request);
    }



}
