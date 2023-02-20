

let container = document.querySelector('.container');
let btnSize = document.querySelector('.button-size')
let btn = document.querySelector('.button')
let url = 'https://swapi.dev/api/planets';
let arr = [];
let triger = true;

async function server() {
    let res = await fetch(url)
    let resData = await res.json()
    arr = await resData.results
    return await arr;
}


function designer(arr) {

    arr.forEach((item) => {
        // ---------створення змінних------
        let card = document.createElement('div');
        card.classList.add('card');

        let ul = document.createElement('ul');

        let name = document.createElement('li');
        name.classList.add('item-list');
        name.innerText = `Name: ${item.name}`;

        let diameter = document.createElement('li');
        diameter.classList.add('item-list');
        diameter.innerHTML = `Diameter:  <span class = "diametr">${item.diameter}</span>`;

        let climate = document.createElement('li');
        climate.classList.add('item-list');
        climate.innerText = ` Climate: ${item.climate}`;

        let films = document.createElement('li');
        films.classList.add('item-list');
        films.innerHTML = `Films: <a href class="link"'>${item.films}</a>`

        let population = document.createElement('li');
        population.classList.add('item-list');
        population.innerText = ` Population: ${item.population}`;

        // ---------складання змінних------
        container.appendChild(card);
        card.appendChild(ul);
        ul.appendChild(name);
        ul.appendChild(diameter);
        ul.appendChild(climate);
        ul.appendChild(films);
        ul.appendChild(population);
    });
}
    
// function clickBtn(item) {
//     while (container.firstChild) {
//         container.removeChild(container.firstChild);
//     }

//     triger = !triger;

//     let res = arr.sort((a, b) => b.item - a.item)
//     if (!triger) {
//         res.reverse();
//     }
//     console.log(res);
//     designer(res)
// }
                                                                                      //Альтернатива  через одну функцію  з параметрами але працює не коректно не розумію чому
// async function createData() {
//     designer(arr)
//     btnSize.addEventListener('click', function () {
//         clickBtn('diameter');
//     })
//     btn.addEventListener('click', function () {
//         clickBtn('population');
//     })
// };



function clickBtn() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    triger = !triger;

    let res = arr.sort((a, b) => b.diameter - a.diameter)
    if (!triger) {
        res.reverse();
    }
    console.log(res);
    designer(res)
}

function clickButton() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    triger = !triger;

    let res = arr.sort((a, b) => b.population - a.population)
    if (!triger) {
        res.reverse();
    }
    console.log(res);
    designer(res)
}

async function createData() {
    designer(arr)
    btnSize.addEventListener('click', clickBtn)
    btn.addEventListener('click', clickButton)
};


async function go() {
    await server();
    await createData()
}
go()






