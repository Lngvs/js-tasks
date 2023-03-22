var x = 7;
var y = 8 ;
var kartu = x + y;
console.log (kartu)


kartu += 2;
kartu -= 1;

console.log(kartu)

if( x > y){
    console.log("Maryte turi daugiau");
}else if(y > x){
    console.log("Jonas turi daugiau");
}else if(x == y){
    console.log("Obouolius Editai");
}

switch(kartu) {
    case 7:
    console.log("Just turite"+ kartu + "Obuolius");
      break;
    case 16:
        console.log("Just turite"+ kartu + "Obuolius");
      break;
    default:
        console.log(kartu + "obouliai");}

var vaisiai = ['obuolys', 'kriause', 'bananas', 'mangas', 'apelsinas', 'abrikoas'];
console.log(vaisiai[2], vaisiai[4]);

for (let vieta = 0; vieta < vaisiai.length; vieta++){
    console.log(vaisiai[vieta]);
}

var ID = document.getElementById('moku');
ID.innerHTML = 'valio';
ID.style.backgroundColor = "blue";
ID.style.width = "300px";
ID.style.height = "300px";
ID.style.marginInline = "auto";

var moku = document.createElement('div')
moku.setAttribute('id', 'moku2')
moku.style.width = "300px";
moku.style.height = "300px";
moku.style.marginInline = "auto";
moku.innerHTML = 'valio pavyko';
moku.style.backgroundColor = 'red';
document.body.appendChild(moku)
console.log(moku);
var btn = document.createElement('button');
console.log('btn');
btn.setAttribute('id', 'spaudaliukas');
btn.style.height = "150px";
btn.style.width = "150px";
btn.innerHTML = 'spaudaliukas'
document.body.appendChild(btn);
btn.addEventListener('click', function(){
    this.style.display= 'none';
    moku.style.display= 'none';

})

var trigger = document.getElementById('karamba')
trigger.addEventListener('click', function(){
    var langas = document.createElement('iframe');
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/c0-hvjV2A5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    langas.style.width = '560px'
    langas.style.height = '315px'
    langas.style.display = 'block'
    langas.style.margin = '0 auto'
    langas.setAttribute('src', 'https://www.youtube.com/embed/c0-hvjV2A5Y ')
    langas.setAttribute('frameborder', '0');
    document.body.appendChild(langas);
})
