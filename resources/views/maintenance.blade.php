<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>@section('title')@show</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    @vite(['resources/css/fabdb.css'])
    <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet">

    <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
</head>
<body class="font-sans theme-bg bg-gray-200 text-white md:text-lg flex items-center">
    <div class="mx-auto text-4xl bg-semi-black rounded-xl p-8">
        <div class="text-4xl flex">
            <div class="font-serif uppercase mr-8">@section('code')@show</div>
            <div>@section('message')@show</div>
        </div>
        <div class="text-lg mt-4">
            Hi there! We're currently doing a major upgrade to our servers and data storage.<br>
            Please bear with us as we complete this move and check back in approximately an hour.
        </div>
    </div>
</body>
</html>
