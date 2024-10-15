<?php

namespace Database\Seeders;

use App\Models\Priority;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //User::factory(10)->create();
        $this -> call(RoleSeed::class);

         Priority::create([
             'highest_order' => 'Higher'
         ]);

         Priority::create([
             'highest_order' => 'Medium'
         ]);

         Priority::create([
             'highest_order' => 'Lower'
         ]);

       //User::factory()->create([
       //    'name' => 'Test User',
       //    'email' => 'test@example.com',
       //]);
    }
}
