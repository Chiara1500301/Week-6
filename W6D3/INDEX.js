//js RECAP
//keyword moderne per definire le varibili sono 2:
//let<-- che definisce una variabile il cui valore può cambiare nel tempo.
let n1 = 10
//valori possibili: stringhe,numeri, booleani, undefined, null, Symbol
let n2 = true
let n3 = 'Stefano'
//- const <-- definisce una costante, ovvero una variabile il cui valore non potrà venire assegnato dopo la dichiarazione iniziale
const size= 100
const area= size * size
console.log('VALORE DI AREA', area)

let variable
console.log('VALORE DI VARIABLE',variable)
let Nullvariable=null
console.log('VALORE DI Nullvariable', Nullvariable)
//JS è un linguaggio debolmente tipizzato
variable=100
variable='stefano'
variable=null

let num1= 50
let num2= '50'
console.log(num1+num2)
//100
let greet='Buongiorno'
let myName='Chiara'
console.log(greet+ myName)
//JA possiede anche delle strutture dati 
//1) ARRAY
let array1=[1,2,3,4,5]
let array2=['a','b','c','d','e','f','g']
//let array3 =[1,'a',2,'b']<-- si può fare in JS,ma è inutile/sconsigliato
console.log(array2[3])
console.log('lunghezza array 1',array1.length)
console.log('lunghezza array 2 ', array2.length)
console.log('ultimo elemento di array1',array1[array1.length-1])
//2)OBJECT
let obj1={
    //un oggetto è composto da coppie chiave: valore
    firstName:'Chiara',
    lastName:'Andria',
    age:21,
    nationality:'Italian',
    //METODO
    greets:function(){
        console.log('Hello!')
    },
    "zip-code":12345,
}
console.log(obj1.age)//<--tira fuori il valore di age, 21 
console.log(obj1.nationality)
obj1.greets()
console.log(obj1['zip-code'])// quando il nome della proprieà ha caratteri non
//ammessi,potete comunque leggere/srivere il valore utilizzando la
//square-brackets 
console.log(obj1['lastName'])
obj1.gender='famale'
console.log('OBJ1', obj1)
obj1.age =22
//Esempio di algoritmo per acquisto e-commerce
let totalCost=35
let shippinCart=50
let cartPrice=40
//l'e-commerce sa che deve offrire la spedizione gratuita per tutti gli ordini superiori a 50.
if(cartPrice>50){
    shippinCart=0
}else{
    shippinCart=5
}
let totslCost=cartPrice+shippinCart
console.log('CART PRICE E', cartPrice)
console.log('IL COSTO TOTALE E', totalCost)
//CICLI
//I cicli è una direttiva che permette di eseguire un'operazione diverse vole
//for,while. do...while
//scriviamo un array di 5 valore
let myArray=[60,43,5,8,10]
//un ciclo for ha bisogno di un punto di inizio un punto di fine e quanto velocemnte vogliamo raggiungere il punto di fine
for(let i=0; i<5;i++){
    //questa cosa verrà eseguita 5 volte
    console.log('bau',i)
console.log(myArray[i])
}
//WHILE
//questo random number sceglierà un valore tra 5 e 15
let randomNumber=Math.ceil(Math.random() * 10)+4
/*console.log(randomNumber)
console.log(Math.ceil(8.8))
console.log(Math.floor(8.8))*/
while(randomNumber<13){
console.log('valore randomNumer:',randomNumber)
randomNumber=Math.ceil(Math.random()*10)+4
}
//FUNCTION
//una funzione è un blocco riutilizzabile di codice

const hello=function(){
    console.log('hello')
}
hello()
//DEFINIZIONE DI FUNZIONE
const calculateArea = function(){
    let l1=25
    let l2=15
    let sum= l1+l2
    //consople.log('RISULTATO DELL AREA', sum)
    return sum
}
//INVOCAZIONE DI FUNZIONE
calculateArea()//375
console.log(calculateArea()+25)

const canDrive=function(){
    let birthday=18
    if(birthday>=18){
        return true
    }else{
        return false
    }
}
if (canDrive()){
    console.log('Posso fare la patente')
}else{
    console.log('Non posso fare la patente')
}

const func1=function(){
    console.log('ciao')
    console.log(this)
}
const func2=()=>{
    console.log('ciao')
    console.log(this)
}
func1()
func2()
const obj2={
    firstName: 'Vicenzo',
    saluta: function(){
        console.log('ciao, il mio nome è',this.firstName)
    },
}
obj2.saluta()


const calculateAreaImproved= function(L1,L2){
    let area=L1*L2
    return area
}
console.log(calculateAreaImproved(16,17))
console.log(calculateAreaImproved(43,12))

let animals=['tiger', 'cat','dog', 'elephant']
console.log(animals[3])
animals.push('hamster')
//Push aggiunge in coda
console.log(animals.length)
//animals.shift()//'tiger'
//console.log(animals.shift())
animals.reverse()
console.log(animals)
animals.slice(1);
console.log(animals.slice(1))
console.log(animals)
//3metodi degli array nuovi di ES6
let fileterdAnimals = animals.filter(function(animal){
    return animal.length===3
})
console.log('filteredAnimals', fileterdAnimals)

let mappedAnimals = animals.map((animal) => animal.toUpperCase())
console.log('mappedAnimals', mappedAnimals)

let foundAnimal = animals.find((animal) => animal.slice(0,1)==='e' )
console.log('foundAnimal',foundAnimal)

//NOVITA ES6 IN GENERALE

let x= 30
let y= x 
y= y + 10
//y=40
console.log(y)
console.log(x)

let objx={
    type:'dog',
    breed:'corgi'
}
let objY=objx
//JS non crea un nuovo oggetto

objY.breed='golden'
console.log(objx.breed)
//METODI FUNZIONANTI PER CLONARE UN OGGETTO
//1)OBJECT.ASSIGN
let objxx={
    type:'dog',
    breed:'corgi'
}
let objYY= Object.assign({},objxx)
//AABIAMO CREATO UN OGGETTO DIVERSO
objYY.breed='golden'
console.log(objxx.breed)
//2)SPREAD OPERATOR
let objxxx={
    type:'dog',
    breed:'corgi'
}
let objyyy={...objxxx}
objyyy.breed='golden'
console.log(objxxx.breed)


