
<?php
use Illuminate\Support\Facades\Route;

$view = Route::currentRouteName() === 'decks.embed' ? 'embed' : 'app';
$user = auth()->user();
$settings = compile_settings();
$lang = compile_lang();
$theme = $user ? object_get($user, 'theme', 'default') : 'default';
$jsFile = $view === 'embed' ? 'embed' : 'app';
?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>@lang('app.title')</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset(mix('/css/fabdb.css')) }}">
        <style type="text/css">
            @if ($user && $user->width == 'wide')
                .container {
                    max-width: 1800px !important;
                }
            @endif
        </style>
        <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet">

        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">

        @if (env('ANALYTICS_ID'))
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id={{ env('ANALYTICS_ID') }}"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '{{ env('ANALYTICS_ID') }}');
            </script>
        @endif

        @if (env('SENTRY_LARAVEL_DSN'))
            <script
                src="https://browser.sentry-cdn.com/5.29.2/bundle.min.js"
                integrity="sha384-wF7Jc4ZlWVxe/L8Ji3hOIBeTgo/HwFuaeEfjGmS3EXAG7Y+7Kjjr91gJpJtr+PAT"
                crossorigin="anonymous"></script>
            <script>
                <?php $version = 'fab-db@'.fab_version(); ?>
                Sentry.init({
                    release: '{{ $version }}',
                    dsn: '{{ env('SENTRY_LARAVEL_DSN') }}'
                });

                @if ($user)
                    Sentry.configureScope(function(scope) {
                        scope.setUser({id: "{{ $user->slug }}" });
                    });
                @endif
            </script>
        @endif
    </head>
    <body class="<?php echo $view === 'app' ? 'theme-bg theme-'.$theme : '' ?> font-sans h-full xl:text-lg">
        <div id="app"></div>
        <script>
            window.session = {"user": <?php echo $user ? $user->toJson() : 'null'; ?>};
            window.version = '{{ fab_version()  }}';
            window.settings = {!! json_encode($settings) !!};
            window.lang = '{!! base64_encode(json_encode($lang)) !!}';
        </script>

        <script src="{{ fab_asset($jsFile) }}"></script>
    </body>
</html>
