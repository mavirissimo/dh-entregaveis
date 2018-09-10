<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FilmesController extends Controller
{
    public function procurarFilmesId($id) {
        $filmes = [
            1 => "Toy Story",
            2 => "Procurando Nemo",
            3 => "Avatar",
            4 => "Star Wars: Episódio V",
            5 => "Up",
            6 => "Mary e Max"
            ];
        
            $filme = $filmes[$id];

        return view('filmes')->with('filme', $filme);

    }

    public function procurarFilmeNome($nome) {
        $filmes = [
            1 => "Toy Story",
            2 => "Procurando Nemo",
            3 => "Avatar",
            4 => "Star Wars: Episódio V",
            5 => "Up",
            6 => "Mary e Max"
            ];
        
        foreach ($filmes as $filme) {
            if ($filme === $nome) {
                $resultado = $nome;
                break;
            } else {
                $resultado = 'Amigo, seu filme não foi filmado'; 
            }
        }

        return view('filmes')->with('resultado', $resultado);

    }

    public function listaFilmes(){
        $filmes = [
            1 => "Toy Story",
            2 => "Procurando Nemo",
            3 => "Avatar",
            4 => "Star Wars: Episódio V",
            5 => "Up",
            6 => "Mary e Max"
            ];

        return view('filmes')->with('filmes', $filmes);
    }

    public function adicionarFilme($filme) {
        $filmes = [
            1 => "Toy Story",
            2 => "Procurando Nemo",
            3 => "Avatar",
            4 => "Star Wars: Episódio V",
            5 => "Up",
            6 => "Mary e Max"
            ];

        $filmes[] = $filme;

    return view('filmes')->with('filmes', $filmes);

    }

    public function listarFilmes() {
        $filmes = [
            1 => "Toy Story",
            2 => "Procurando Nemo",
            3 => "Avatar",
            4 => "Star Wars: Episódio V",
            5 => "Up",
            6 => "Mary e Max"
            ];

        return view('TodosOsFilmes')->with('joao', $filmes);

    }

}


