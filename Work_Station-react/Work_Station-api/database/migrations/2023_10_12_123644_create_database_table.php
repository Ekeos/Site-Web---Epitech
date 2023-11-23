<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('type', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type');
        });

        Schema::create('sector', function (Blueprint $table) {
            $table->increments('id');
            $table->string('libelle');
        });


        Schema::create('people', function (Blueprint $table) {
            $table->increments('id');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email')->unique();
            $table->unsignedInteger('id_type');
            $table->string('password');
            $table->date('created_at');
            $table->string('phone_number');
            $table->string('address');
            $table->boolean('isAdmin')->default(false);

            $table->foreign('id_type')
                ->references('id')
                ->on('type')
                ->onDelete('cascade');
        });

        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('company_name');
            $table->string('main_address');
            $table->unsignedInteger('id_sector');
            $table->string('mail');
            $table->string('phone_number');
            $table->integer('number_of_employees');

            $table->foreign('id_sector')
                ->references('id')
                ->on('sector')
                ->onDelete('cascade');
        });


        Schema::create('advertisement', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_type');
            $table->unsignedInteger('id_sector');
            $table->unsignedInteger('id_company');
            $table->string('title');
            $table->longText('description');
            $table->string('address');
            $table->bigInteger('wages');
            $table->string('schedule');

            $table->foreign('id_type')
                ->references('id')
                ->on('type')
                ->onDelete('cascade');
            $table->foreign('id_sector')
                ->references('id')
                ->on('sector')
                ->onDelete('cascade');
            $table->foreign('id_company')
                ->references('id')
                ->on('companies')
                ->onDelete('cascade');
        });

        Schema::create('postulate', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_people');
            $table->unsignedInteger('id_ad');
            $table->date('date');

            $table->foreign('id_people')
                ->references('id')
                ->on('people')
                ->onDelete('cascade');
            $table->foreign('id_ad')
                ->references('id')
                ->on('advertisement')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('database');
    }
};
