@if ($segundoNumero)
    {{'o resultado dos números informados na url é ' . $primeiroNumero * $segundoNumero}}
@elseif ($primeiroNumero % 2 == 0)
    {{'é par'}}
@else
    {{'ímpar'}}
@endif


