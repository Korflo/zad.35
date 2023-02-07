
// Stwórz plik "main.js".

// Napisz funkcję, która przyjmuje jako parametr liczbę n.
// Dowolną liczbę należy przekazać do parametru podczas wywoływania funkcji.

// Funkcja ma sprawdzać, czy liczba n znajduje się w przedziale 100-200.
// Jeżeli tak, w konsoli ma wyświetlić się napis "Liczba znajduje się w przedziale".
// Jeżeli nie, w konsoli pojawi się "Liczba nie znajduje się w przedziale".

// let number = 2;
 
// if (number === 2) {
//     console.log('Spełniony warunek: number == 2');
// } else if (number === 3) {
//     console.log('Spełniony warunek: number == 3');

let liczba = 99;

function isBigger(n) {
 
    if( n >= 100 && n <= 200 ){
        console.log('Liczba znajduje się w przedziale');
    } else {
      console.log("Liczba nie znajduje się w przedziale");
    }
}
isBigger(liczba);