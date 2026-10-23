const mailList = [];
const committeeList = [];
const attribList = [];

let N = 16; // Number of sponsors
let altIs ; // alt displayed

document.addEventListener('DOMContentLoaded', function() {
    // For alt text
    if (window.location.pathname.includes('/fr/')) {
        altIs = "Un partenaire"
    }
    if (window.location.pathname.includes('/en/')) {
        altIs = "A sponsor"
    }
    if (window.location.pathname.includes('/es/')) {
        altIs = "Un mecenas"
    }
    
    // First sponsors section : Randomly selected
    sponsor_display()    
    
    // Second sponsors section : All sponsors   Only in home.html
    if (window.location.pathname.endsWith('home.html')) {
        let Sdiv2 = document.getElementById('s2');
        for (i = 0; i < N; i++) {
            Sdiv2.innerHTML += `<div class="col-xs-6 col-sm-4 col-lg-2 sponsors-element"><img src="../img/sponsors/s${i+1}.webp" alt="${altIs}"></div>`;
        }
    }
});

onresize = (event) => {
    sponsor_display()
}

function sponsor_display() {
    let Sdiv1 = document.getElementById('s1');
    let Lst = sponsor_list()
    if (Sdiv1 !== null & innerWidth<=580) { // in case of a small width window, carousel
        sponsor_carousel(Sdiv1,Lst)
    }
    else if (Sdiv1 !== null) { // in case of large window, normal apearance
        sponsor_row(Sdiv1,Lst)
    }
}

function sponsor_list() {
    let Lst = [];
    while (Lst.length < 6){
        let Random = Math.floor(Math.random() * N) + 1;
        if (!Lst.includes(Random)) {
            Lst.push(Random);
        }
        Lst.sort((a, b) => a - b);
    }
    return Lst
}

function sponsor_carousel(Sdiv1,Lst) {
    Sdiv1.innerHTML = `
    <div class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style="box-shadow: none;">
            <div class="carousel-item active">
                <div class="sponsors-slide">
                    <img src="../img/sponsors/s${Lst[0]}.webp" alt="${altIs}"><img src="../img/sponsors/s${Lst[1]}.webp" alt="${altIs}">
                </div>
            </div>
            <div class="carousel-item">
                <div class="sponsors-slide">
                    <img src="../img/sponsors/s${Lst[2]}.webp" alt="${altIs}"><img src="../img/sponsors/s${Lst[3]}.webp" alt="${altIs}">
                </div>
            </div>
            <div class="carousel-item">
                <div class="sponsors-slide">
                    <img src="../img/sponsors/s${Lst[4]}.webp" alt="${altIs}"><img src="../img/sponsors/s${Lst[5]}.webp" alt="${altIs}">
                </div>
            </div>
        </div>
    </div>` ;
}

function sponsor_row(Sdiv1,Lst) {
    let content = ``;
    for(let i = 0; i<6; i++) { 
        content += `<div class="col-sm-4 col-lg-2 sponsors-element"><img src="../img/sponsors/s${Lst[i]}.webp" alt="${altIs}"></div>`;
    }
    Sdiv1.innerHTML = content
}

function openDocs(doc) {
  window.open(doc);
}
function error(message) {
  alert(message)
}