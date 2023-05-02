/*
    Zadanie 1 - "kalkulator"
*/

var a = 20;
var b = 10;
var add = a+b;
var sub = a-b;
var mul = a*b;
var div = a/b;
var mod = a%b;

// a)
console.log(add);
console.log("Wynik odejmowania to: "
+sub);


// b)
document.getElementById('addR').
innerHTML = add;
document.getElementById('subR').innerHTML = 'Wynik odejmowania '+a+' i '+b+' to '+sub; 

/*
    Zadanie 2
*/

let s1=3;
let s2=4;
let s3=5;
// powinno wyjść 6

// a)
let p = (s1+s2+s3) /2;
let area = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3))
console.log(area);

// b) wynik + wyjaśnienia
console.log('Dla 3-kąta z stronami a, b i c pole '+ area)
document.getElementById('strony').innerHTML = 'Dla 3-kąta z stronami a, b i c pole = '+area;


/*
    Zadania 3 - losowanie liczb
*/

let gnum=Math.ceil(Math.random()*10);
let num =prompt('podaj liczbę: ')
if(gnum === num){
    console.log('dobra robota!')
    document.getElementById('ran').innerHTML = 'Dobra robota!'

 }else{
    console.log('sprobuj ponownie')
    document.getElementById('ran').innerHTML = 'sprobuj ponownie'
 }

 /*
    Zadanie 4
*/

let num1=parseFloat(prompt('podaj pierwszą liczbę: '));
let num2=parseFloat(prompt('podaj drugą liczbę: '));
let num3=parseFloat(prompt('podaj trzecią liczbę: '));

if(num1==num2 && num2==num3){
    console.log('Liczby są równe');
}else{
    if(num1>num2 && num1>=num3){
        console.log('Największa jest pierwsza liczba: '+num1);
        document.getElementById('num').innerHTML = 'Największa jest pierwsza liczba: '+num1;
    }else if(num2>= num1 && num2> num3){
        console.log('Największa jest druga liczba: '+num2);
        document.getElementById('num').innerHTML = 'Największa jest druga liczba: '+num2;
        
    }else if(num3>=num1 && num3> num2){
        console.log('Największa jest trzecią liczba: '+num3);
        document.getElementById('num').innerHTML = 'Największa jest trzecią liczba: '+num3;
}}
