function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data Found"), 2000);
        setTimeout(() => reject("dataNot Found"), 3000);
    })
}
// fetchData()
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(data);
// })
//fetch data using fetch keyword 
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));
// // use of async and await
async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log("error",error);
    }
}
fetchData();