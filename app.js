let price = [10, 20, 30, 40];
console.log(price);
function addTax() {
    let a = price.map(element=> (element+(element*(20/100))))
    console.log(a)
} 
addTax()