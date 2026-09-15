const o = {a: 1, b: 'Thor', c: [1, 2, 3], d: {x: 10}};



fun showProperties {
   for (let key in o){
    console.log( ${key} : ${o[key]});

   }
}


showProperties(o)