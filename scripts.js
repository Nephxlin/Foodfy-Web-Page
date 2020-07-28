const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalContent = document.querySelector('.modal-content')

for (let card of cards){
  card.addEventListener("click", function(){
    
    const imgCard = card.querySelector("img").src
    console.log(imgCard)
    const h2Card = card.querySelector("h2")
    const pCard = card.querySelector("p")
    modalOverlay.classList.add('active')
    modalContent.innerHTML = `<img src="${imgCard}"><h2>${h2Card.innerText}</h2><p>${pCard.innerText}</p>`

  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active")
})


