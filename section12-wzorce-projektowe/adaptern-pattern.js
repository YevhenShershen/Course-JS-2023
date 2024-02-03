//179. Wzorzec Adapter
console.log('179. Wzorzec Adapter')
/*
Adapter jako wzorzec pozwala na połączenie niekompatybilnych interfejsów. Typowym
scenariuszem jest sytuacja, gdy np nowe komponenty muszą być zintegrowane z aktualnymi,
przez co trzeba napisać adapter, który umożliwi im komunikację.

Typowym przykładem jest np użycie nowej biblioteki w systemie, która np wymaga nowego
formatu danych do rysowania wykresów na podstawie JSON. Nasz system używa jeszcze
formatu xml, dlatego musimy użyć adapteru, który połączy oba interfejsy przepisuj ac jeden format
danych na drugi.

Adapter może kojarzyć sięz fasadą, ale w jej przypadku tworzymy interfejs od zera, natomiast
w adapterze insteją już interfejsy, które musimy skomunikować.
*/

//stary intefejs
function Transport(credentials){
this.credentials= credentials;
this.send = function(addr, weight){
  //logika
  return 120
}
}

let addr = {country: "UK"};
let credentials = {token:"user:123"}
let oldTransport = new Transport(credentials);
let oldPrice = oldTransport.send(addr, 10)
console.log("stara cena " + oldPrice)

function NewTransport(){
  return{
    login: function(credentials){},
    setPriority:function(priority){},
    setDestination:function(addr){},
    getPrice:function(){return 110}
  }
}

function TrandsportAdapter(credentials){
  let shipping = NewTransport()
  shipping.login(credentials)

  return{
    send:function (addr, weight){
      shipping.setPriority("normal")
      shipping.setDestination(addr)
      return shipping.getPrice(weight)
    }
  }
}

let cheaperTransport = TrandsportAdapter(credentials);
let newPrice = cheaperTransport.send(addr, 10)
console.log("nowa cena " + newPrice)