<?php

namespace App\Filament\Widgets;

use App\Models\BlogPost;
use App\Models\ContactMessage;
use App\Models\MenuCategory;
use App\Models\MenuItem;
use App\Models\Reservation;
use App\Models\Testimonial;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends StatsOverviewWidget
{
    protected ?string $heading = 'Genel Bakış';

    protected function getStats(): array
    {
        $todayRez   = Reservation::whereDate('reservation_date', today())->count();
        $pendingRez = Reservation::where('status', 'pending')->count();
        $unreadMsg  = ContactMessage::where('is_read', false)->count();

        return [
            Stat::make('Toplam Yemek', MenuItem::count())
                ->description(MenuCategory::count() . ' kategori altında')
                ->descriptionIcon('heroicon-m-rectangle-stack')
                ->color('success'),

            Stat::make('Bugünkü Rezervasyon', $todayRez)
                ->description($pendingRez . ' bekleyen onay')
                ->descriptionIcon('heroicon-m-calendar-days')
                ->color($todayRez > 0 ? 'warning' : 'gray'),

            Stat::make('Okunmamış Mesaj', $unreadMsg)
                ->description('Toplam ' . ContactMessage::count() . ' mesaj')
                ->descriptionIcon('heroicon-m-envelope')
                ->color($unreadMsg > 0 ? 'danger' : 'success'),

            Stat::make('Müşteri Yorumları', Testimonial::where('is_active', true)->count())
                ->description('Aktif yorum sayısı')
                ->descriptionIcon('heroicon-m-chat-bubble-left-right')
                ->color('info'),

            Stat::make('Blog Yazıları', BlogPost::count())
                ->description(BlogPost::sum('views') . ' toplam görüntülenme')
                ->descriptionIcon('heroicon-m-newspaper')
                ->color('warning'),
        ];
    }

    protected function getColumns(): int
    {
        return 3;
    }
}
