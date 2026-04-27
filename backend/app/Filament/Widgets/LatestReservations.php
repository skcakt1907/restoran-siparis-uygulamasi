<?php

namespace App\Filament\Widgets;

use App\Models\Reservation;
use Filament\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class LatestReservations extends TableWidget
{
    protected static ?string $heading = 'Son Rezervasyonlar';

    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 2;

    public function table(Table $table): Table
    {
        return $table
            ->query(fn (): Builder => Reservation::query()->latest()->limit(8))
            ->columns([
                TextColumn::make('full_name')
                    ->label('Ad Soyad')
                    ->searchable()
                    ->weight('bold'),
                TextColumn::make('phone')
                    ->label('Telefon'),
                TextColumn::make('reservation_date')
                    ->label('Tarih')
                    ->date('d.m.Y')
                    ->sortable(),
                TextColumn::make('reservation_time')
                    ->label('Saat')
                    ->time('H:i'),
                TextColumn::make('guests')
                    ->label('Kişi')
                    ->badge()
                    ->color('info'),
                TextColumn::make('status')
                    ->label('Durum')
                    ->badge()
                    ->formatStateUsing(fn ($state) => match ($state) {
                        'pending'   => 'Bekliyor',
                        'confirmed' => 'Onaylandı',
                        'cancelled' => 'İptal',
                        'completed' => 'Tamamlandı',
                        default     => $state,
                    })
                    ->colors([
                        'warning' => 'pending',
                        'success' => 'confirmed',
                        'danger'  => 'cancelled',
                        'gray'    => 'completed',
                    ]),
                TextColumn::make('created_at')
                    ->label('Geliş')
                    ->since()
                    ->color('gray')
                    ->size('sm'),
            ])
            ->paginated(false);
    }
}
