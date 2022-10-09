const humb=document.getElementById('humb');
const dheader=document.getElementById('d-header'); 
const bodys=document.getElementById('body'); 
humb.addEventListener('click',() =>{
    humb.classList.toggle('humb-ex');
    dheader.classList.toggle('m-header');
    bodys.classList.toggle('no-flow');
});
