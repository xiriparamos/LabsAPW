const o = {a: 1, b: 'Thor', c: [1, 2, 3], d: {x: 10}};

function showProperties(param1) {
  
     for (let key in param1) {
    let type = typeof param1[key];
     console.log(`${key}: ${type}`);
  }
};


showProperties(o)
