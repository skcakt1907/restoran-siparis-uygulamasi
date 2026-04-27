<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 150);
            $table->string('email', 150);
            $table->string('phone', 30);
            $table->date('reservation_date');
            $table->time('reservation_time');
            $table->unsignedTinyInteger('guests')->default(2);
            $table->string('occasion', 100)->nullable();
            $table->text('notes')->nullable();
            $table->enum('status', ['pending','confirmed','cancelled','completed'])->default('pending');
            $table->timestamps();
            $table->index('reservation_date');
        });
    }
    public function down(): void { Schema::dropIfExists('reservations'); }
};
