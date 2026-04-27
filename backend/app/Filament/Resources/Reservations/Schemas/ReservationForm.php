<?php

namespace App\Filament\Resources\Reservations\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TimePicker;
use Filament\Schemas\Schema;

class ReservationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('full_name')
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required(),
                TextInput::make('phone')
                    ->tel()
                    ->required(),
                DatePicker::make('reservation_date')
                    ->required(),
                TimePicker::make('reservation_time')
                    ->required(),
                TextInput::make('guests')
                    ->required()
                    ->numeric()
                    ->default(2),
                TextInput::make('occasion'),
                Textarea::make('notes')
                    ->columnSpanFull(),
                Select::make('status')
                    ->options([
            'pending' => 'Pending',
            'confirmed' => 'Confirmed',
            'cancelled' => 'Cancelled',
            'completed' => 'Completed',
        ])
                    ->default('pending')
                    ->required(),
            ]);
    }
}
