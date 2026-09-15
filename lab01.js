const o = {a: 1, b: 'Thor', c: [1, 2, 3], d: {x: 10}};

function showProperties(param1) {
  
     for (let key in param1) {
     const type = typeof param1[key];
      console.log(`${key}: ${type}`);
      
      console.log( key +  " : " + type); //versão stor
  
  }
};


showProperties(o)

// ` para escrever :)
// Output:   
// a: number
// b: string
// c: object
// d: object




//  executeFunctions 

function sayHi() {
    console.log('Hi')
}

function sayBye() {
    console.log('Bye')
}

function executeFunctions(arr1){
    for (let i in arr1){
        if (typeof arr1[i] === 'function')
           arr1[i]()
    } 

}

executeFunctions([sayHi, "Oops", , sayBye])

// Output:
// Hi
// Bye


// filterProducts

const products = [
  {name: 'Apple', price: 5},
  {name: 'Orange', price: 10},
  {name: 'Banana', price: 3}
]



function filterProduct(obj, minPrice){
    const filtered =[]
    let idx = 0
     for (let key in obj) {

     if ( obj[key].price >= minPrice ) {
        filtered[idx] = obj[key];
        idx++;
     } 
  } return console.log(filtered)
}

const expensive = filterProduct(products, 4)

// expensive: [
//   {name: 'Apple', price: 5},
//   {name: 'Orange', price: 10}
// ]


//  mapProduct


function mapProduct(obj) {
    const maped =[]
    let idx = 0
    for (let i in obj){
      maped[idx] = obj[i].name;
      idx++;
    }  return console.log(maped)
}

const names = mapProduct(products)

// names: ['Apple', 'Orange', 'Banana']


function f4(p1,p2, ...rest){
    console.log(p1);
    console.log(p2);
console.log(...rest)

}

f4(1, 2,4,5,7,9,0,5)

