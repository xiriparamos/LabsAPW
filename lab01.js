const o = {a: 1, b: 'Thor', c: [1, 2, 3], d: {x: 10}};

function showProperties(param1) {
  
     for (let key in param1) {
     const type = typeof param1[key];
      console.log(`${key}: ${type}`);
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
        if (typeof arr1[i] == 'function')
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
     for (let key in obj) {

     if ( obj[key].price >= minPrice ) {
        console.log(obj[key])
     } 
  }  
}

const expensive = filterProduct(products, 4)

// expensive: [
//   {name: 'Apple', price: 5},
//   {name: 'Orange', price: 10}
// ]


//  mapProduct

const products = [
  {name: 'Apple', price: 5},
  {name: 'Orange', price: 10},
  {name: 'Banana', price: 3}
]

const names = mapProduct(products)

// names: ['Apple', 'Orange', 'Banana']