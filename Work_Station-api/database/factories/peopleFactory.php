<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\type;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\people>
 */
class PeopleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'firstname' => $this->faker->firstName,
            'lastname' => $this->faker->lastName,
            'email' => $this->faker->email,
            'password' => $this->faker->password,
            'created_at' => $this->faker->dateTimeThisYear,
            'phone_number' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'id_type' => type::factory()
        ];
    }
}
