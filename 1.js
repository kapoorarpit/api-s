fetch("https://api.chucknorris.io/jokes/random")
.then((respnse)=>{
    return (respnse.json())
})
.then((data)=>{
    var joke= data.value;
    console.log(joke)
    appendData(joke)
})
.catch()

function appendData(data) {
    var mainContainer = document.getElementById("myData");
        mainContainer.innerHTML =data;
}