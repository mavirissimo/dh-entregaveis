<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genero extends Model
{
    protected $table = 'genres';

    public function movies() {
        return $this->hasMany(Filme::class, 'genre_id','id');
    }

}

