const btn = document.querySelector('.button');
const list = document.querySelector('.myLinks')

btn.addEventListener('click', menu);

function menu (){
    if(list.style.display === 'none'){
        list.style.display = 'block';
    } else {
        list.style.display = "none"
    }
   
}
