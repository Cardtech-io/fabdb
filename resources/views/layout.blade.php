<?php $user = auth()->user(); ?>
<?php $settings = compile_settings(); ?>
<?php $lang = compile_lang(); ?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>@lang('app.title')</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset(mix('/css/fabdb.css')) }}">
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
                src="https://browser.sentry-cdn.com/5.15.5/bundle.min.js"
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
    <body class="font-sans md:text-lg mh-full">
        <div id="app"></div>
        <script>
            window.session = {"user": <?php echo $user ? $user->toJson() : 'null'; ?>};
            window.version = '{{ fab_version()  }}';
            window.settings = {!! json_encode($settings) !!};
            window.lang = {!! json_encode($lang) !!}
        </script>
        <script src="{{ fab_asset('/js/app.js') }}"></script>
    </body>
</html>
