<?php $user = auth()->user(); ?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>@lang('app.title')</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

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
    </head>
    <body class="theme-bg bg-gray-200 text-gray-800">
        <div id="app"></div>

        @ifj (env('DATADOG_TOKEN))
            <script src = 'https://www.datadoghq-browser-agent.com/datadog-logs-us.js'></script>
            <script>
                window.DD_LOGS.init({
                    clientToken: 'pubdee16a4cab85ed70d1a5d55a00335d45',
                    datacenter: 'us',
                    forwardErrorsToLogs: true,
                    sampleRate: 100
                });
            </script>
        @endif
        <script>
            window.session = {"user": <?php echo $user ? $user->toJson() : 'null'; ?>};
        </script>
        <script src="{{ fab_asset('/js/app.js') }}"></script>
    </body>
</html>
