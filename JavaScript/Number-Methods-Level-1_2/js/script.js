
//-------arithmetische Operatoren-1-12

let values = [15.16698, 7.78714, "12.3", true, false, "321", "Supercode"];


values.forEach(value => {
    let num = Number(value);
    
    if (!isNaN(num)) {
        console.log(num.toFixed(2))
    } else {
        console.log( + value); 
    }
});