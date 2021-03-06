<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Filmes extends Model
{
    protected $table = 'movies';

    protected $fillable = ['title', 'rating', 'awards', 'length', 'release_date'];

    public function getReleaseDate () {
        $release_date = new \Datetime($this->release_date);
        return $release_date->format('d/m/Y');
    }
    
}
