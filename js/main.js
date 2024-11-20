let navWrapper=document.querySelector('.nav-wrapper');
window.addEventListener('resize',function (){
    if (this.body.innerWidth<992){
        navWrapper.classList.add('d-none')
    }else if (this.innerWidth>=992){
        navWrapper.classList.remove('d-none');
    }
})



//.................... ...........................
let mobile=document.querySelector('.mobile');
//let navWrapper=document.querySelector('.nav-wrapper');
let navBox=document.querySelector('.nav-box');
let close=document.querySelector('.close-box>.close');
mobile.addEventListener('click',function (){

    navWrapper.classList.remove('d-none')
     navWrapper.style.display='block';
  //  navWrapper.classList.add('d-block')
    setTimeout(function (){
        navBox.style.right=0
    },100)

})
close.addEventListener('click',function (){
    navBox.style.right='-1000px';
    setTimeout(function (){
        navWrapper.style.display='none';
    },100)

})
//............................... logos slider ....................


//............................ requests ...............................
let flag=true;
const requestItems=document.querySelectorAll('.request-item');
let disMore=document.querySelector('.dis-more');
requestItems.forEach((elem)=>{
    elem.addEventListener('click',function (){
        if (flag===true){
            this.children[0].lastElementChild.classList.remove('fa-chevron-down');
            this.children[0].lastElementChild.classList.add('fa-chevron-up');
            this.children[1].style.display='block';
            flag=false;
        }else {
            this.children[0].lastElementChild.classList.remove('fa-chevron-up');
            this.children[0].lastElementChild.classList.add('fa-chevron-down');
            this.children[1].style.display='none';
            flag=true;
        }
    })
})
