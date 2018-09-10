<?php

use Illuminate\Database\Seeder;
use App\Actor;

class ActorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Actor::class)->times(10)->create();
    }
}
