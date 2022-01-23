<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TweetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "userId"  => $this->faker->numberBetween(1, 100),
            "content" => $this->faker->realText(20),
            "likes"   => $this->faker->numberBetween(0, 10),
        ];
    }
}
