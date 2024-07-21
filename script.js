const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

var luffy = document.querySelector('#luffy');

luffy.addEventListener('click',function(){
    window.location.href = "https://onepiece.fandom.com/wiki/Monkey_D._Luffy";
})

var goku = document.querySelector('#goku');

goku.addEventListener('click',function(){
    window.location.href = "https://dragonball.fandom.com/wiki/Goku";
})

var naruto = document.querySelector('#naruto');

naruto.addEventListener('click',function(){
    window.location.href = "https://naruto.fandom.com/wiki/Naruto_Uzumaki";
})

var tanjiro = document.querySelector('#tanjiro');

tanjiro.addEventListener('click',function(){
    window.location.href = "https://kimetsu-no-yaiba.fandom.com/wiki/Tanjiro_Kamado";
})

var yuji = document.querySelector('#yuji');

yuji.addEventListener('click',function(){
    window.location.href = "https://jujutsu-kaisen.fandom.com/wiki/Yuji_Itadori";
})


