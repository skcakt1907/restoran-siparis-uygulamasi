<?php

namespace App\Filament\Resources\TeamMembers\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class TeamMemberForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('full_name')
                    ->required(),
                TextInput::make('title')
                    ->required(),
                Textarea::make('bio')
                    ->columnSpanFull(),
                TextInput::make('specialty'),
                FileUpload::make('photo_url')
                    ->label('Fotoğraf')
                    ->image()
                    ->imageEditor()
                    ->avatar()
                    ->disk('public')
                    ->directory('uploads/team')
                    ->maxSize(4096)
                    ->columnSpanFull(),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
