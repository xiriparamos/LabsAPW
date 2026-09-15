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


//
