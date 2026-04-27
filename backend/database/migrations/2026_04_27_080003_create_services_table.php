<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 150)->unique();
            $table->string('title', 200);
            $table->string('short_desc', 500)->nullable();
            $table->longText('full_desc')->nullable();
            $table->string('image_url', 500)->nullable();
            $table->string('icon', 50)->default('fa-glass-cheers');
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('services'); }
};
