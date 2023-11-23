<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\type;
use App\Models\secteur;
use App\Models\companies;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\advertisement>
 */
class AdvertisementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => $this->faker->sentence,
            "description" => $this->faker->word,
            "address" => $this->faker->address,
            "wages" => $this->faker->randomDigit,
            "schedule" => $this->faker->word,
            "id_type" => type::factory(),
            "id_secteur" => secteur::factory(),
            "id_company" => companies::factory()
        ];
    }
}
