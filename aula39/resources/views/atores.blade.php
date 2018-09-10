<html>
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Adicionar Filme</title>
    </head>
    <body>


        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif


        <h1 align="center">Atores</h1>
        <form action="/actors/add" name="adicionarAtor" method="POST">

            {{ csrf_field() }}
            
            <div class="form-group col-6 m-auto">
                <label for="Nome">Nome</label>
                <input type="text" class="form-control" name="first_name"/>
            </div>
            <div class="form-group col-6 m-auto">
                <label for="sobrenome">Sobrenome</label>
                <input type="text" class="form-control" name="last_name"/>
            </div>
            <div class="form-group col-6 m-auto">
                <label for="rating">Rating</label>
            <input type="text" class="form-control" name="rating" value="" id="premios"/>
            </div>
            <br>
            <div class="form-group col-6 m-auto">
              <input type="submit" value="Adicionar Ator" name="submit" class="btn btn-primary"/>
            </div>
        </form>
    </body>
</html>