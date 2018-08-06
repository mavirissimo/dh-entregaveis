{{-- @foreach($atores as $ator)
    {{$ator->getNomeCompleto() . " - " . $ator->rating . " - " . $ator->favorite_movie_id}} <br>
@endforeach --}}

@foreach($atores as $ator)
    <a href="/ator/3"> {{$ator->getNomeCompleto()}} </a><br>
@endforeach




