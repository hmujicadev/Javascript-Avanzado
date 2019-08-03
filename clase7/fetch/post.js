let url = "https://jsonplaceholder.typicode.com/posts";
let obj = {
    "userId":1,
    "id":1,
    "title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

fetch(url,{method:"POST",
body:JSON.stringify(obj), headers:{
    'Content-Type':'application/json'
}
}).then((res)=> res.json())
.then((objeto) => console.log('OK', objeto))
.catch((error)=> console.log('Error',error));