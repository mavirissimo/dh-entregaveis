<?php

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        // $this->call(GeneroSeeder::class);

        // $this->call(DirectorSeeder::class);

        $this->call(ActorSeeder::class);
    }
}