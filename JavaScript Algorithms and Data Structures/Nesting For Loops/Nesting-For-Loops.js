function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
        for (let a = 0; a < arr.length; a++) {
            for (let b = 0; b < arr[a].length; b++) {
                product *= arr[a][b]
            }
        }
    // Only change code above this line
    return product;
  }
  
var product =  multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product)