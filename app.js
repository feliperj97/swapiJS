let button = document.querySelector('#button');
let name = document.querySelector('#name');
let climate = document.querySelector('#climate');
let terrain = document.querySelector('#terrain');

function getInfo(){

    let randomNumber = Math.floor((Math.random() * 50) + 1)
    let apiUrl = 'https://swapi.co/api/planets/' + randomNumber;
    axios.get(apiUrl).then(response=>{
        updateInfo(response.data);
    }).catch(e => {
        updateInfoError();
    })
}

function updateInfo(data){
    name.innerText = data.name;
    climate.innerText = data.climate;
    terrain.innerText = data.terrain;
}

function updateInfoError(){
    name.innerText = 'Erro de busca';
    climate.innerText = '';
    terrain.innerText = '';
}

button.addEventListener('click', getInfo);