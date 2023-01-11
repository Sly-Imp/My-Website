const myNav = document.getElementsByClassName('ftitle-bar')[0];
const goUp = document.getElementsByClassName('goup')[0];

window.onscroll = ()=>{
    if(window.scrollY >= 705){
        myNav.style.display='flex';
    }
    else{
        myNav.style.display='none';
    }
    if(window.scrollY >=4312){
        goUp.style.bottom='1rem';
    }
    else{
        goUp.style.bottom='-3rem';
    }
};