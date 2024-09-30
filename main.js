let tulos = 0;

function klikkaakuva(){
    tulos++;
    document.getElementById('pisteet').innerText = "Pisteet:" + " " + tulos;
}
    

function nollaapeli() {
    tulos = 0;
    document.getElementById('pisteet').innerText = "Pisteet:";
}

document.getElementById('klikkaa').addEventListener('click', klikkaakuva);
document.getElementById('nollaapeli').addEventListener('click', nollaapeli);
