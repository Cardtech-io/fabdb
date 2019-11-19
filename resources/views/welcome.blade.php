<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@lang('app.title')</title>

        <link rel="stylesheet" href="/css/fabdb.css">
        <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet" />
    </head>
    <body class="theme-bg text-gray-500 mx-4">
        <div id="app" class="container mx-auto">
            <!-- Header -->
            <div class="py-8">
                <div class="clearfix">
                    <div class="logo float-left relative overflow-visible">
                        <div class="font-serif text-xs font-bold text-gray-200 uppercase logo-text absolute">Card Database</div>
                        <img src="{{ cloudfront_url('assets/fab-logo.png') }}" class="h-16">
                    </div>

                    <nav class="float-left ml-4 mt-6">
                        <ol>
                            <li class="float-left"><router-link to="/" class="text-gray-500 bg-gray-900 hover:bg-gray-800 p-3 ml-4 rounded-lg">Database</router-link></li>
                            <li class="float-left"><router-link to="/collection/" class="text-gray-500 bg-gray-900 hover:bg-gray-800 p-3 ml-4 rounded-lg">Collection</router-link></li>
                            <li class="float-left"><router-link to="/support/" class="text-gray-500 bg-gray-900 hover:bg-gray-800 p-3 ml-4 rounded-lg">Support</router-link></li>
                        </ol>
                    </nav>
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

            <authenticator></authenticator>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
