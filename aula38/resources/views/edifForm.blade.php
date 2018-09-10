<html>
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Adicionar Filme</title>
    </head>
    <body>


        <h1 align="center">Formulário</h1>
        <form action="/adicionar" id="adicionarFilme" name="/filme/add" method="POST">

            {{ csrf_field() }}
            
            <div class="form-group col-6 m-auto">
                <label for="titulo">Título</label>
                <input type="text" class="form-control" name="title" value="{{ old('title') }}" id="titulo"/>
            </div>
            <div class="form-group col-6 m-auto">
                <label for="classificacao">Classificação</label>
                <input type="text" class="form-control" name="rating" value="{{ old('rating') }}" id="classificacao"/>
            </div>
            <div class="form-group col-6 m-auto">
                <label for="premios">Prêmios</label>
            <input type="text" class="form-control" name="awards" value="{{ old('awards') }}" id="premios"/>
            </div>
            <div class="form-group col-6 m-auto">
                <label for="duracao">Duração</label>
                <input type="text" class="form-control" name="length" value="{{ old('length') }}" id="duracao"/>
            </div>
            <div class="form-group col-6 m-auto">
                <label for="data_estreia">Data de Estreia</label>
                <input type="date" name="release_date" id="">
            </div>
            <br>
            <div class="form-group col-6 m-auto">
              <input type="submit" value="Atualizarp Filme" name="submit" class="btn btn-primary"/>
            </div>
        </form>
    </body>
</html>
