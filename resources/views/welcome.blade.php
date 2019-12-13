<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>@lang('app.title')</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="/css/fabdb.css">
        <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet"><x></x>

        @if (env('ANALYTICS_ID'))
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id={{ env('ANALYTICS_ID') }}"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '{{env('ANALYTICS_ID')}}');
            </script>
        @endif
    </head>
    <body class="theme-bg text-gray-500">
        <div id="app"></div>

        <script src="/js/app.js"></script>
    </body>
</html>
