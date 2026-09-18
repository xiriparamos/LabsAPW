const { element } = require("prop-types");

const o = {a: 1, b: 'Thor', c: [1, 2, 3], d: {x: 10}};

function showProperties(param1) {
  
     for (let key in param1) {
     const type = typeof param1[key];
      
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


// reduceProduct

const total = reduceProduct(products)

function reduceProduct(obj) {
    let idx = 0
    for (let i in obj){
      idx = idx + obj[i].price
    } return idx
}

console.log("total : " + total)


// filter

const numbers = [1, 2, 3, 4, 5]

const even = filter(numbers, n => n % 2 === 0)

function filter(array, predicate){   
    const result =[]
for (let i of array) {
  if (predicate(i))
   result.push(i)
} return result
}
console.log("even : " + even)

// even: [2, 4]


const numbers1 = [1, 2, 3]

function map(array, transformation){  
    let idx =0 
 const result =[]
for (let i of array) {
  result[idx]=(transformation(i)) 
  idx++;
} return result
}

const doubled = map(numbers1, n => n * 2)

console.log(doubled)

// doubled: [2, 4, 6]

//reduce

function reduce(array, operation, initialValue) {
    let acc = initialValue;
    for (let i of array) {
        acc = operation(acc, i);
    }
    return acc;
}


const sum = reduce(numbers, (acc, n) => acc + n, 0)
console.log(sum)
// sum: 15


// filterPropertiesN

const objs = [
   {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
   {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
   {x: 'Vision', y: false}
]

const props = ['b', 'd', 'g', 'a']






function filterProperties(prop, obj) {
    const result = []
    let idx = 0
     for (let i in obj) {
        if (i.prop[idx])
            result.push(i) 
        idx++;
    }
   return  result
}


function filterProperties(prop, obj) {
    const result = {}
     for (let i in obj) {
       if(prop.includes(i))
        result[i] = obj[i]
    }
   return  result
}




function filterPropertiesN(propNames,objs){
   return objs.map((element)=> 
     filterProperties(propNames, element)
)
}

const objsFiltered = filterPropertiesN(props, objs)

console.log(objsFiltered)

/*
 objsFiltered: [
   {a: 1, b: 'Thor', d: {x: 10}},
   {b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
   { }
 ]
*/

