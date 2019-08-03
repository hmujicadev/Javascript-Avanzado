fetch("https://jsonplaceholder.typicode.com/posts").then((response)=> {
    return response.json();
}).then((response)=> {
    console.log(JSON.stringify(response))
})