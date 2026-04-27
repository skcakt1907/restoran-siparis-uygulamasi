<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('team_members', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 150);
            $table->string('title', 150);
            $table->text('bio')->nullable();
            $table->string('specialty', 200)->nullable();
            $table->string('photo_url', 500)->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('team_members'); }
};
