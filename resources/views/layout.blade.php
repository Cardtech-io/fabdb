
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
$jsFile = $view === 'embed' ? '/js/embed.js' : '/js/app.js';
?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>@lang('app.title')</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#4285f4">


        <link rel="stylesheet" href="{{ mix('css/fabdb.css') }}">
        @if ($user && $user->width == 'wide')
        <style type="text/css">
            .container {
                max-width: 1800px !important;
            }
        </style>
        @endif

        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">

        @if ($analyticsId = config('services.google.analytics.id'))
            <script async src="https://www.googletagmanager.com/gtag/js?id={{$analyticsId}}"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '{{$analyticsId}}');
            </script>
        @endif

        @if ($hotjarId = config('services.hotjar.id'))
            <script>
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:{{$hotjarId}},hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            </script>
        @endif
    </head>
    <body class="<?php echo $view === 'app' ? 'theme-bg theme-'.$theme : '' ?> font-sans font-normal h-full">
        <div id="app"></div>
        <script>
            window.session = {"user": <?php echo $user ? $user->toJson() : 'null'; ?>};
            window.version = '{{ fab_version()  }}';
            window.settings = {!! json_encode($settings) !!};
            window.lang = '{!! base64_encode(json_encode($lang)) !!}';
        </script>

        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Playfair+Display&family=Raleway:wght@200;400&display=swap" rel="stylesheet">¡
        <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet">
        <script src="{{ mix($jsFile) }}"></script>
    </body>
</html>
