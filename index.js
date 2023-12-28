
const items =  document.getElementsByClassName('item');
const titems = items.length;
let cnt = 0;


let prev = document.getElementById('btn-p');
let next = document.getElementById('btn-n');

next.addEventListener('click',clickNext);
prev.addEventListener('click',clickPrev);


function clickNext(){
    if(cnt === titems-1){
        cnt=0
    }else{
        cnt++;
    }
    items[cnt].classList.add('item-visible');
    if(cnt === 0 )
    {
        items[cnt+2].classList.remove('item-visible');
    }else{
        items[cnt-1].classList.remove('item-visible');
    }
}



