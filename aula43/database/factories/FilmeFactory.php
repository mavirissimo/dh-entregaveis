<?php

use Faker\Generator as Faker;

$factory->define(App\Filme::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'awards' => $faker->numberBetween(1,10),
        'length' => $faker->numberBetween(1,9),
        'revenue' => $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 5),
        'release_date' => $faker->dateTimeBetween(
            $startDate='-2 months',
            $endDate = 'now',
            $timezone = null
        )
    ];
});

