const myNav = document.getElementsByClassName('fnav')[0];
const goUp = document.getElementsByClassName('goup')[0];

window.onscroll = ()=>{
    if(window.scrollY >= 100 && window.scrollY <= 950){
        myNav.style.right='4rem';
    }
    else{
        myNav.style.right='-5rem';
    }
    if(window.scrollY >=1200){
        goUp.style.bottom='1rem';
    }
    else{
        goUp.style.bottom='-3rem';
    }
};