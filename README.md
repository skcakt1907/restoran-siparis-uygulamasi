# Restoran Siparis Uygulamasi

Restoran icin ayri backend ve frontend olarak kurgulanmis online siparis uygulamasi.

## Ozellikler

- Laravel API backend + React (Vite) frontend ayrimi
- Menu, kategori ve urun yonetimi
- Sepet ve siparis akisi
- Ayarlarin API uzerinden frontend'e tasinmasi (SettingsContext)

## Kullanilan teknolojiler

Laravel 13 (API) - React 19 - Vite - PHP 8.3

## Bu depo hakkinda

Gercek bir musteri projesinin **portfolyo icin yayinlanmis** surumudur.
Yayina hazirlanirken canli alan adlari, gercek iletisim bilgileri, musteri
kayitlari ve uygulama anahtarlari ornek degerlerle degistirilmistir.
Kod ve mimari oldugu gibidir; veri gercek degildir.

## Kurulum

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```
