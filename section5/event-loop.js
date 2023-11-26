//126. Event loop - pętla zdarzeń w JavaScript
console.log('126. Event loop - pętla zdarzeń w JavaScript')

/*
Event loop wykonuje prosty zadania a póżniej przechodzi do bardziej skomplikowanych

Stos wywołań (stack, call stack) to kolejka instrukcji do wywołania.
Gdy uruchamiamy funkcję to trafia na stos wywołań, jeśli ona
też wywoła funkcję tp również trafia na stos. Gdy funkcja się zakończy
jest zdejmowana z stosu. Tutaj mamy 3 instrukcje na stosie,
które będą wywołane jedna po drugiej.

Stos wywołań działa na zasadzie LIFO -  Last in, First out czyli
ostatnia funkcja wrzucona na stos, będzie pierwszą zdęta z stosu,
najlepiej to na funkcjach zagnieżdżonych
*/

//1 - wykona
console.log('msg 1')

//3 - wykona
setTimeout(()=>{
  console.log('msg 2')
},0)


//2 - wykona
for(let i = 0; i<10000000; i++){

}
console.log('msg 3')

/*
Kolejka renderowania
zbiera wszelkie zadania związane z operacjami graficznymi np.
Dodanie nowego elementu do drzewa DOM, zmiana stylu css, animacja itd.
Ta kolejka zawsze wykonywana  jest do końca, aż będzie pusta i ma wyższy priorytet
od kolejki zadań

Kolejka mikrozadań
ES6 wprodadził wsparcie dla Promisów i ich obsługę umiszczono w osobnej kolejce mikrozdarzeń\tzw. microtask queue.

Kolejka mokrozdarzeń jest wywoływana po stsie wywołań, co więcej zdejmowane są kolejne zadania,
aż będzie pusta.

PODSUMOWANIE EVENT LOOP
1) Wykonywane jest wszystko ze stosu wywołań aż będzie pusty.
2)Wykonywane jest wszystko z kolejki mikrozadań, aż będzie pusta.
3)Wykonana jest cała koleka renderowania.
4) Następuje sprawdzenie czy stos wywołań jest pusty, jeśli tak pobierany jest pierwszy callback
z kolejki zadań na stos wywołań i wykonywany. Następuje przejście do punktu 1.
*/

