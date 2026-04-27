<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class TestimonialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('full_name')
                    ->required(),
                TextInput::make('title'),
                Textarea::make('comment')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('rating')
                    ->required()
                    ->numeric()
                    ->default(5),
                FileUpload::make('photo_url')
                    ->label('Fotoğraf')
                    ->image()
                    ->imageEditor()
                    ->avatar()
                    ->disk('public')
                    ->directory('uploads/testimonials')
                    ->maxSize(4096)
                    ->columnSpanFull(),
                Toggle::make('is_active')
                    ->required(),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
