const buttons = document.getElementsByTagName('button')


for (const button of buttons){
  button.addEventListener('click',function(){  
    
      if(button.textContent == 'Mostrar') {
        button.innerText = 'Esconder'
        //Dom navigation to class : InfoContent
        changeDisplay = button.previousElementSibling.previousSibling.parentElement.nextElementSibling.style = 'display:block'
      }else {
        button.innerText = 'Mostrar'
        //Dom navigation to class : InfoContent
        changeDisplay = button.previousElementSibling.previousSibling.parentElement.nextElementSibling.style = 'display:none'
      }
    })
}

var a
var b = (a = 3) ? true : false