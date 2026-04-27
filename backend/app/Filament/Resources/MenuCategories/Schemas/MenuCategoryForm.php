<?php

namespace App\Filament\Resources\MenuCategories\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class MenuCategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('slug')
                    ->required(),
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->columnSpanFull(),
                FileUpload::make('image_url')
                    ->label('Kategori Görseli')
                    ->image()
                    ->imageEditor()
                    ->disk('public')
                    ->directory('uploads/categories')
                    ->maxSize(4096)
                    ->columnSpanFull(),
                TextInput::make('icon')
                    ->required()
                    ->default('fa-utensils'),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
