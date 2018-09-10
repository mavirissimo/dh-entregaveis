@foreach ($filmes as $filme)
{{ $filme->title }} - <a href="filme/edit/{{ $filme->id }}">Editar</a> - <a href="filme/remove/{{ $filme->id }}">Remover</a><br> 
@endforeach
