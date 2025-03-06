// //  jehutu akhane khilam nai arrey tye tei  else ar maje    jeite ace oita  output  a dekhaben  


// const friends = [  'balam' ,  'kalam'  ,  'salam' ,  'gelam' ,   'pailam'] ;
// if (friends.includes('khilam'))  {

//     console.log("party")
// }
// else 
// { 

//     console.log(" no food ewe are  fasting ")
// }






/*jehutu akhane kalam  nam, ti  arrey 
  ar maje ace tai if ar maje  jeita ace  oita  output  a dekhaben    
*/

// const friends = [  'balam' ,  'kalam'  ,  'salam' ,  'gelam' ,   'pailam'] ;
// if (friends.includes('kalam'))  {

//     console.log("party")
// }
// else 
// { 

//     console.log(" no food ewe are  fasting ")
// }





//  gelam arrey te ace  but  capital letter ar   Gelam nam    
//   array te nai tai output a   false  ans asbe karon  Gelam arrey  te nai    

// const friends = [  'balam' ,  'kalam'  ,  'salam' ,  'gelam' ,   'pailam'] ;
//  const exist  =friends.includes('Gelam') ;
// console.log(exist)

 


//  jehetu arrey  ar maje Gelam nai tai index -1 diyece 
//  jode array ar maje upadan thake tobe  0 thke  boro index   dekhaben 

// const friends = [  'balam' ,  'kalam'  ,  'salam' ,  'gelam' ,   'pailam'] ;
//  const index  =friends.indexOf('Gelam') ;
// console.log(index)



// /* akhane  output dekhaben 3 karon 3  nomber index a   gelam ace    */
// const friends = [  'balam' ,  'kalam'  ,  'salam' ,  'gelam' ,   'pailam'] ;
//  const index  =friends.indexOf('gelam') ;
// console.log(index)

 





/* akhane  output dekhaben  balam   karon  shift ar kaj  holo je 1 st 
  // index ar value take delet korbe    and  1 st index ta ke delet kore  storeValue 
  // namok variable ar maje rekhe diyeci      */

// const friends = [  'balam' ,  'kalam'  ,  'salam' ,  'gelam' ,   'pailam'] ;
//  const deleteValue=friends.shift('shofikul') ;
// console.log(deleteValue)



 
/* akhane    1 st a value add korben  unshift ar kaj ee holo  suru te   value add korben      */

const friends = ['balam' ,  'kalam'  ,  'salam' ,  'gelam' ,   'pailam'] ;
friends.unshift('shofikul') ;
console.log(friends)

 