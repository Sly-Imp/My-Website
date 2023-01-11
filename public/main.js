const myNav = document.getElementsByClassName('fnav')[0];
const goUp = document.getElementsByClassName('goup')[0];
const bars = document.querySelectorAll('.anim');
const width = [95, 80, 65, 20, 25, 5]


window.onscroll = ()=>{
    if(window.scrollY >= 705){
        myNav.style.left='0';
    }
    else{
        myNav.style.left='-6rem';
    }
    if(window.scrollY >=4312){
        goUp.style.bottom='1rem';
    }
    else{
        goUp.style.bottom='-3rem';
    }
    if(window.scrollY >= 1300){
        for (var i=0;i<=5;i++){
            bars[i].style.width=`${width[i]}%`;
        };
    }
};