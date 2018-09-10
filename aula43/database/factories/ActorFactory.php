<?php

use Faker\Generator as Faker;

$factory->define(App\Actor::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'rating' => $faker->randomFloat($nbMaxDecimals = 1, $min = 0, $max = 9),
        'favorite_movie_id' => $faker->numberBetween($min = 1, $max = 21)
    ];
});

