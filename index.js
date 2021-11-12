const container = document.getElementById('container')
const cards = document.querySelectorAll('.box')

function addRemoveCard (){
    const targetThreshold = window.innerHeight - cards[0].getBoundingClientRect().height
    cards.forEach((card)=>{
        if(card.getBoundingClientRect().top < targetThreshold){
            card.classList.add('show-box')          
        }else{
            card.classList.remove('show-box')          
        }
    })
}

window.addEventListener('scroll',()=>{
    addRemoveCard()
})

addRemoveCard()
