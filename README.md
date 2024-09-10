<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
    <script>
        function kosztWesela(){
            var iloscGosci = document.getElementById('guests').value;
            var czyPoprawiny = document.getElementById('poprawiny');
            var koszt = 0;
            if(czyPoprawiny.checked){
                koszt = (iloscGosci * 100) * 1.30;
            }
            else
                koszt = iloscGosci * 100;

            document.getElementById('koszt').innerHTML = koszt;
        }

        function ileZaPizze(){
            var czyGdansk = document.getElementById('jestemGsdansk');
            var ileKM = document.getElementById('ileKM').value;
            var koszt = 0;

            if(czyGdansk.checked)
                document.getElementById('wynik').innerHTML = "Dowieziemy twoja pizze za darmo";
            else
                document.getElementById('wynik').innerHTML = "Dowóz bedzie Cie kosztowal " + koszt * ileKM * 2 + "zł";

        }

        function obliczAB(dzialanie){
            
            var a = document.getElementById('warA').value;
            var b = document.getElementById('warB').value;
            var wynik = document.getElementById('wynik');

            switch(dzialanie){
                case "Dodawanie" : 
                    wynik.innerHTML = a + b;
                    break;
                case "Odejmowanie" :
                    wynik.innerHTML = a - b;
                    break;
                case "Mnozenie" :
                    wynik.innerHTML = a * b;
                    break;
                case "Dzielenie" :
                    wynik.innerHTML = a / b;
                    break;
                case "Reszta" :
                    wynik.innerHTML = a % b;
            }
        }

        function cegly(){
            var ileCegliel = document.getElementById('ileCegliel').value;
            var czyCeglaPrem = document.getElementById('ceglaPremium');
            var koszt = 0;
            if(czyCeglaPrem.checked)
                
        }
    </script>

<body>
    <!--<div class="zad1">
        <form action="post">
            Ilość gości: <br> <input type="number" id="guests" onchange="kosztWesela()"> <br>
            Poprawiny: <input type="checkbox" id="poprawiny" onchange="kosztWesela()">
            <p id = "koszt"></p>
        </form>
    </div>
    <div class="zad2">
        <form method="post">
            Ilość kilometrów: <br> <input type="text" id="ileKM" onchange="ileZaPizze()"> <br>
            Jestem z Gdańska: <br> <input type="checkbox" id="jestemGdansk" onchange="ileZaPizze()">
            <p id = "wynik"></p>
        </form>
    </div>
    <div class="zad3">
        <form>
            Wprowadz a: <input type="number" id="warA"> <br>
            Wprowadz b: <input type="number" id="warB">
            <input type="button" value="Dodawanie" onclick="obliczAB('Dodawanie')">
            <input type="button" value="Odejmowanie" onclick="obliczAB('Odejmowanie')">
            <input type="button" value="Mnozenie" onclick="obliczAB('Mnozenie')">
            <input type="button" value="Dzielenie" onclick="obliczAB('Dzielenie')">
            <input type="button" value="Reszta" onclick="obliczAB('Reszta')">
            <input type="button" value="Dzielenie calkowite" onclick="obliczAB('Dodawanie')">
            <p id = "wynik"></p>
        </form>
    </div>-->
    <div class="zad6">
        <form>
            Ilosc cegiel: <input type="number" id="iloscCegiel"> <br>
            Cegla premium: <input type="checkbox" id="ceglaPremium"> <br>
            <p id="koszcegly"></p>
        </form>
    </div>
</body>    
</html>
