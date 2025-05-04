// const url = "https://jsonplaceholder.typicode.com/users";
//   fetch(url)
//    .then((res) => res.json())
//    .then((data) => console.log(data));




// const url = 'https://example.com/api/user';
//   const user = { name: 'John Doe', email: 'john.doe@example.com' }
//   const options = {
//    method: 'POST',
//    body: JSON.stringify(user),
//    headers: {
//     'Content-type': 'application/json',
//    },
//   }

//   fetch(url, options)
//    .then(res => res.json())
//    .then(data => console.log(data))
//    .catch(error => console.error(error));




//  practice  
const url = 'https://example.com/api/user';
  const user = { name: 'John Doe', email: 'john.doe@example.com' }
  const options = {
   method: 'POST',
   body: JSON.stringify(user),
   headers: {
    'Content-type': 'application/json',
   },
  }

  fetch(url, options)
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(error => console.error(error));