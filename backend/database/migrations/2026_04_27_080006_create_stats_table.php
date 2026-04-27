<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('stats', function (Blueprint $table) {
            $table->id();
            $table->string('label', 150);
            $table->unsignedInteger('value');
            $table->string('suffix', 10)->default('+');
            $table->string('icon', 50)->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('stats'); }
};
