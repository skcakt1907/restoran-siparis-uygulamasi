<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use App\Filament\Widgets\LatestMessages;
use App\Filament\Widgets\LatestReservations;
use App\Filament\Widgets\StatsOverview;
use App\Models\Setting;
use Filament\Widgets\AccountWidget;
use Illuminate\Support\Facades\Schema;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        $logo    = $this->setting('admin_logo');
        $favicon = $this->setting('admin_favicon');

        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->brandName('ÇITIR Admin')
            ->brandLogo($logo ? asset('storage/' . $logo) : null)
            ->brandLogoHeight('2.5rem')
            ->favicon($favicon ? asset('storage/' . $favicon) : asset('favicon.ico'))
            ->colors([
                'primary' => Color::Amber,
            ])
            ->sidebarCollapsibleOnDesktop()
            ->navigationGroups([
                'Menü Yönetimi',
                'İçerik',
                'Sipariş & Mesaj',
                'Sistem',
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                AccountWidget::class,
                StatsOverview::class,
                LatestReservations::class,
                LatestMessages::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                PreventRequestForgery::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }

    private function setting(string $key): ?string
    {
        try {
            if (! Schema::hasTable('settings')) return null;
            return Setting::where('key', $key)->value('value');
        } catch (\Throwable $e) {
            return null;
        }
    }
}
