<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\secteur;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\companies>
 */
class companiesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "company_name" => $this->faker->company,
            "main_address" => $this->faker->address,
            "mail" => $this->faker->email,
            "phone_number" => $this->faker->phoneNumber,
            "number_of_employees" => $this->faker->randomDigit,
            "id_secteur" => secteur::factory()
        ];
    }
}
