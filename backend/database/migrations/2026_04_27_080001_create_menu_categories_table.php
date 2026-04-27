<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('menu_categories', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 150)->unique();
            $table->string('title', 150);
            $table->text('description')->nullable();
            $table->string('image_url', 500)->nullable();
            $table->string('icon', 50)->default('fa-utensils');
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('menu_categories'); }
};
