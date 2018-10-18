let button = document.querySelector('#button');
let name = document.querySelector('#name');

function getInfo(){

    let randomNumber = Math.floor((Math.random() * 88) + 1)
    let apiUrl = 'https://swapi.co/api/people/' + randomNumber;
    axios.get(apiUrl).then(function(response){
        updateInfo(response.data);
    })
}

function updateInfo(data){
    name.innerText = data.name;
}

button.addEventListener('click', getInfo);