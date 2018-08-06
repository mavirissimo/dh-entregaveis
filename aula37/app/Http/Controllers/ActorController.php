<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Actor;

class ActorController extends Controller
{
    public function directory() {

        $atores = Actor::orderBy('first_name')->get();
        return view('atores')->with('atores', $atores);
    }

    public function show($id) {

        $ator = Actor::find($id);
        return view('ator')->with('ator', $ator);

    }

}

