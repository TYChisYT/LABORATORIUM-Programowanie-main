/*
 Zadanie 1 
*/

class Prostokąt {

    constructor(wysokość, szerokość, nazwa) {
        this.wysokość = wysokość;
        this.szerokość = szerokość;
        this.nazwa = nazwa;
 }
     wypisz() {
        console.log('Wysokość = ' + this.wysokość);
        console.log('Szerokość = ' + this.szerokość);
        console.log('Nazwa figury ' + this.nazwa);
     }
     oliczObwód() {
        console.log(2 * (this.wysokość + this.szerokość)+' = obwód');
     }
     obliczPole() {
        console.log(this.wysokość*this.szerokość + ' = pole') ;
     }
     porównajPola(prostokąt2) {
        let pole1 = this.obliczPole();
        let pole2 = prostokąt2.obliczPole();
        if (pole1 > pole2) {
            return this.nazwa;
        } else {
            return prostokąt2.nazwa;
        }
    }
    
}
const prostokąt = new Prostokąt(10, 5, 'prostokąt');
const prostokąt2 = new Prostokąt(31, 25, 'prostokąt 2');
const prostokąt3 = new Prostokąt(6, 5, 'prostokąt 3');
prostokąt.wypisz();
prostokąt2.wypisz();
prostokąt3.wypisz();

prostokąt.oliczObwód();

prostokąt.obliczPole();

let porównajPola = prostokąt.porównajPola(prostokąt2);
console.log('Większy Prostokąt ' + porównajPola); 






/*
 Zadanie 2 
*/





class Trójkąt {
    constructor(wysokość, długość, długośćPodstawy, nazwa) {
        this.wysokość = wysokość;
        this.długość = długość;
        this.nazwa = nazwa;
    }
    wypisz() {
        console.log('Wysokość = ' + this.wysokość);
        console.log('Długość = ' + this.długość);
        console.log('Nazwa figury ' + this.nazwa);
     }
    obliczPole() {
        console.log('Pole = ' + (this.wysokość * this.długość)/2 );
    }
    porównajPola2(trójkąt2) {
        let pole1 = this.obliczPole();
        let pole2 = trójkąt2.obliczPole();
        if (pole1 > pole2) {
            return this.nazwa;
        } else {
            return trójkąt2.nazwa;
        }
    }
}
const trójkąt = new Trójkąt(10, 5, 'trójkąt 1');
const trójkąt2 = new Trójkąt(5, 5, 'trójkąt 2');
const trójkąt3 = new Trójkąt(5, 10, 'trójkąt 3');

trójkąt.wypisz();
trójkąt2.wypisz();
trójkąt3.wypisz();

trójkąt.obliczPole();

let porównajPola2 = trójkąt.porównajPola2(trójkąt2);
console.log('Większy trójkąt ' + porównajPola); 




/*
 Zadanie 3 
*/





class Trapez {
    constructor(wysokość, podstawa1, podstawa2, nazwa) {
        this.wysokość = wysokość;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }
    wypisz() {
        console.log('Wysokość = ' + this.wysokość);
        console.log('Podstawa 1 = ' + this.podstawa1);
        console.log('Podstawa 2 = ' + this.podstawa2);
        console.log('Nazwa figury ' + this.nazwa);
     }
    obliczPole() {
        console.log('Pole = ' + ((this.podstawa1 + this.podstawa2)*this.wysokość)/2 );
    }
}

const trapez = new Trapez(10, 5, 5, 'trapez 1');
const trapez2 = new Trapez(5, 5, 5, 'trapez 2');
const trapez3 = new Trapez(4, 15, 35, 'trapez 3');

trapez.wypisz();
trapez2.wypisz();
trapez3.wypisz();

trapez.obliczPole();

/*
    Zadanie 4
*/



function NajwiększaFigura(trójkąt, prostokąt, trapez) {
    let max = trójkąt.Pole();
    let figurName = trójkąt.nazwa;
    if (prostokąt.Pole() > max) {
        max = prostokątt.Pole();
        figurName = prostokąt.nazwa;
    }
    if (trapez.Pole() > max) {
        max = trapez.Pole();
        figurName=trapez.name;
    }
    console.log('Największą figurą jest' + figurName);
}

NajwiększaFigura(trójkąt, prostokąt, trapez)


/*
    Zadanie 1+
*/

const tablicaliczb = [];

const min = 1;
const max = 20;

for (i = 1; i < 10; i++) {
    tablicaliczb.push(Math.floor(Math.random() * (max - min + 1) + min));
}

console.log(tablicaliczb + " Niezedytowana wygenerowana tablica");

const suma = tablicaliczb.reduce((a, b) => a + b, 0);
console.log("Suma liczb z tablicy wynosi " + suma);

const parzyste = tablicaliczb.filter(element => element % 2 === 0);
console.log("Następujące liczby są parzyste: " + parzyste);

const mnozenienatrzy = tablicaliczb.map(element => element * 3);
console.log("Następujące liczby zostali pomnożone przez trzy: " + mnozenienatrzy)

znumerem = tablicaliczb;
znumerem.push(68141);
console.log("Tablica zawierająca numer albumu " + znumerem);
for (i = 0; i < znumerem.length; i++){
    if (znumerem[i] === 68115) {
        console.log(znumerem[i] + " znajduje się na pozycji " + i);
    } else {
        continue;
    }
}

tablicaliczb.pop(); //usuwanie numeru albumu

sr_aryt = suma / (tablicaliczb.length + 1);
console.log("Średnia arytmetyczna tablicy wynosi " + sr_aryt.toFixed(2));

function najwiekszaliczba(tablica) {
    let max = tablica[0];
    for (i = 1; i < tablica.length; i++){
        if (tablica[i] > max) {
            max = tablica[i]
        }
    }
    return max;
}
console.log("Największa liczba w tablice to " + najwiekszaliczba(tablicaliczb));

wystliczba = Math.floor(Math.random() * (max - min + 1) + min);
console.log("Wyszukiwana wartość to " + wystliczba);
licznik = 0;
for (i = 0; i < tablicaliczb.length; i++){
    if (tablicaliczb[i] === wystliczba) {
        licznik++;
    } else {
        continue;
    }
}
console.log("Liczba " + wystliczba + " występuje " + licznik + " razy w liscie.");