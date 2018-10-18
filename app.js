let button = document.querySelector('#button');
let name = document.querySelector('#name');

function getInfo(){
    axios.get('https://swapi.co/api/people/1/').then(function(response){
        updateInfo(response.data);
    })
}

function updateInfo(data){
    name.innerText = data.name;
}

button.addEventListener('click', getInfo);