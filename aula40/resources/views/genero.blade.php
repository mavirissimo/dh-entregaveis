{{ $genero->name }}

<br>
<br>
   
@foreach($genero->movies as $movie)
{{ $movie->title }} <br>
@endforeach
