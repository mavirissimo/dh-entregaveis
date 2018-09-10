<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Filme extends Model
{
    protected $table = 'movies';

    protected $fillable = ['title', 'rating', 'release_date', 'genre_id', 'length', 'revenue', 'director_id'];
}
