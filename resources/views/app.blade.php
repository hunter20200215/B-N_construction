<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>B & N Construction</title>
  <link rel="icon" href="./images/favicon.png" sizes="32x32">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body class="antialiased">

  <div id="app"></div>

  <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>
