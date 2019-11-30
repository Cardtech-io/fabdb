<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@lang('app.title')</title>

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
        <div id="app">
            <authenticator></authenticator>

            <div class="container sm:mx-auto">
                <!-- Header -->
                <div class="pt-4 pb-8">
                    <div class="clearfix">
                        <div class="sm:float-left overflow-visible">
                            <div class="mx-auto relative overflow-visible logo">
                                <div class="font-serif text-xs font-bold text-gray-200 uppercase logo-text absolute">Card Database</div>
                                <img src="/img/fab-logo.png" class="h-16">
                            </div>
                        </div>

                        <navigation></navigation>
                    </div>
                </div>

                <!-- Content -->
                <div class="clearfix">
                    <router-view></router-view>
                </div>

                <!-- Footer -->
                <div class="py-8">
                    <div class="text-center text-sm text-gray-600">
                        <p><a href="/" class="link">fabdb.net</a> is a free online resource for the Flesh &amp; Blood™ TCG by <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                        <p><a href="/" class="link">fabdb.net</a> is in no way affiliated with <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                        <p>All intellectual IP belongs to <a href="https://legendstory.com" class="link">Legend Story Studios®</a>, Flesh &amp; Blood™, and set names are trademarks of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>. Flesh and Blood™ characters, cards, logos, and art are property of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                        <p><a href="/" class="link">fabdb.net</a> is not a digital gaming product.</p>
                        <br>
                        <p>An application and community project by <a href="https://kirkbushell.me" class="link">Kirk Bushell</a>.</p>
                    </div>
                </div>
            </div>

            <messages></messages>
        </div>

        <script src="/js/app.js"></script>
    </body>
</html>
