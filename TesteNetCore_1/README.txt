TESTE OK - Paula 06/08/2018

Este teste cria uma api em NET CORE que converte a unidade "pes" para a unidade "metros".
Lembrando que:
    Altura em m = Pes * 0,3048

Tutorial disponível em: https://medium.com/@renato.groffe/asp-net-core-criando-uma-api-em-linux-com-vs-code-e-net-core-cli-3c042b77ebc7

PASSO A PASSO (100% VALIDADO):

1) CRIANDO A SOLUTION:
$ dotnet new sln -o MySln1
$ cd MySln1/

2) IMPLEMENTANDO A CLASS LIBRARY "ALTURAS":
$ dotnet new classlib -n Alturas
$ dotnet sln add Alturas/Alturas.csproj
$ cd Alturas/
$ dotnet restore
$ mv Class1.cs ConversorAlturas.cs
$ dotnet build

3) IMPLEMENTANDO A API REST:
$ cd ..
$ dotnet new webapi -n APIAlturas
$ dotnet sln add APIAlturas/APIAlturas.csproj
$ cd APIAlturas/
$ dotnet add reference ../Alturas/Alturas.csproj
$ dotnet restore
$ cd Controllers/
$ ls
$ mv ValuesController.cs ConversorAlturasController.cs
$ dotnet run

4) TESTANDO:
Testar na url abaixo no browser:
http://localhost:5000/api/ConversorAlturas/PesMetros/10

Resultado:
{"alturaPes":10.0,"alturaMetros":3.048}
