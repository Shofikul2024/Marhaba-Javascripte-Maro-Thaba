const numbers=[4,5,2,8,10] ;

function  doubleAll(numbers){

const doubled=[] ;
for (const num of numbers) {

const value=num*2 ;

doubled.push(value) ;

}
return doubled ;

}

console.log(doubleAll(numbers)) ;