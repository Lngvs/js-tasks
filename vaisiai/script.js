// function yey(){
//     console.log('Megstu programuoti yey ');
// }
// yey()

// function skaiciafke(kaina, pavadinimas){
//     var vaisausKaina = kaina * 4;
//     return 'Penki' +" "+ pavadinimas + ' ' + 'kainiuoja'+ " " + vaisausKaina;
// }
// var res = skaiciafke(4, 'sausaiai');
// var ats = document.createElement('div')
// ats.innerHTML = res;
// document.body.appendChild(ats)

// var btn = document.getElementById('skai');
// console.log(btn);
// btn.addEventListener('click', function(){
//     var pav = document.getElementById('pav').value 
//     console.log(pav);
//     var skai = document.getElementById('skaic').value
//     console.log(skai)
//     var kie = document.getElementById('kie').value
//     console.log(kie);
//     var kaina = skai * kie
//     var kont = document.createElement('div')
//     kont.innerHTML =  kie + " " + pav + " " + "kainuotu" + " " + kaina
//     document.body.appendChild(kont)
// })

// var hiro =[
//     {
//         name: 'garen',
//         abi: 'spin'
//     },
//     {
//         name: 'lee',
//         abi: 'blind'
//     },
//     {
//         name: 'vayne',
//         abi: 'roll'
//     },
//     {
//         name: 'pyke',
//         abi: 'print'
//     }
// ];
// hiro.forEach((element, index)  => {
//     console.log(element);
//     var divas = document.createElement('div')
//     console.log(divas);
//     divas.innerHTML = element.name + " " + element.abi
//     document.body.appendChild(divas)
//     var kasAntras = index +1
//     if (kasAntras % 2 == 0){
//         divas.style.backgroundColor = 'blue'
//         divas.style.color = 'white'
//     }
    
// });

// const players = [ {
//         name: 'halland',
//         sur: 'city',
//         speed: '45',
//         height: '190',
//         age: '25'
//     },
//  {
//         name: 'ronaldo',
//         sur: 'saudo',
//         speed: '25',
//         height: '185',
//         age: '37'
//     },
//  {
//         name: 'abraomas',
//         sur: 'psg',
//         speed: '30',
//         height: '169',
//         age: '34'
//     }];

// /pagal varda/////

// players.sort((a, b) => {
//   const nameA = a.name;
//   const nameB = b.name;
//   if (nameA < nameB) {
//     return -1;
//   } else if (nameA > nameB) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// players.forEach(function (element) {
//   let divas = document.createElement('div');
//   divas.innerHTML =
//     element.name +
//     ' ' +
//     element.sur +
//     ' greitis yra ' +
//     element.speed +
//     ' km/h';
//   document.body.appendChild(divas);
// });

// pagal varda ir pavarde/////

// const sortArrayObjs = function (arr, prop1, prop2) {
//   let sort1 = [...arr].sort((a, b) => {
//     if (a[prop1] == b[prop1]) {
//       if (a[prop2] === b[prop2]) return 0;
//       return a[prop2] < b[prop2] ? -1 : 1;
//     } else {
//       return a[prop1] < b[prop1] ? -1 : 1;
//     }
//   });
//   return sort1;
// };

// let newArray = sortArrayObjs(players, 'name', 'sur');
// newArray.forEach(function (element) {
//   let divas = document.createElement('div');
//   divas.innerHTML =
//     element.name +
//     ' ' +
//     element.sur +
//     ' greitis yra ' +
//     element.speed +
//     ' km/h';
//   document.body.appendChild(divas);
// });

// / pagal greiti /////

//  players.sort((a, b) =>  b.speed - a.speed);

// players.forEach(function (element) {
//   let divas = document.createElement('div');
//   divas.innerHTML =
//     element.name +
//     ' ' +
//     element.sur +
//     ' greitis yra ' +
//     element.speed +
//     ' km/h';
//   document.body.appendChild(divas);
// });




class Car{
    constructor(name, speed, rid){
        this.name = name
        this.speed = speed
        this.rid = rid
    }
     
}

const tacke = new Car('golf', 49, 48000)

console.log(tacke.speed*5);

var btn = document.getElementById('myg');
var cars = [];
console.log(btn);
btn.addEventListener('click', function(){
    for(let i=0; i<5; i++){
    let pavad = document.getElementById('pav').value
    let greit = document.getElementById('greit').value
    let rida = document.getElementById('rid').value
    var masina = new Car(pavad, greit, rida)
    cars.push(masina)
    }
    cars.forEach(element => {
    var divas = document.createElement('div')
    console.log(divas);
    divas.innerHTML = ' Masinos Modelis ' +  element.name + ' Masinos Greitis ' + element.speed + ' Masinos rida ' + element.rid
    document.body.appendChild(divas)
    });

})
