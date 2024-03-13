<?php
use Illuminate\Support\Facades\Route;

$view = Route::currentRouteName() === 'decks.embed' ? 'embed' : 'app';
$user = auth()->user();

if ($user) {
    $user->append('hasCollection');
    $user->makeVisible('email');
}

$settings = compile_settings();
$lang = compile_lang();
$theme = $user ? object_get($user, 'theme', 'default') : 'default';
$jsFile = $view === 'embed' ? 'resources/js/embed.js' : 'resources/js/app.js';
?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
    <head>
        <title>@lang('app.title')</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#4285f4">

        @vite('resources/js/app.js')

        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
    </head>
    <body class="<?php echo $view === 'app' ? 'theme-bg theme-'.$theme : '' ?> font-sans font-normal h-full">
        <div id="app"></div>
        <script>
            window.session = {"user": <?php echo $user ? $user->toJson() : 'null'; ?>};
            window.version = '{{ fab_version()  }}';
            window.settings = {!! json_encode($settings) !!};
            window.lang = '{!! base64_encode(json_encode($lang)) !!}';
        </script>

        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Playfair+Display&family=Raleway:wght@200;400&display=swap" rel="stylesheet">
        <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet">
    </body>
</html>
