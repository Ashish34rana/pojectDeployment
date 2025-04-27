
let name1=document.querySelector('.input-name');

let pass=document.querySelector('.input-pass');

let btn=document.querySelector('.btn-1');


btn.addEventListener('click',check);

function check()
{
  if( name1.value === '' ||  pass.value === '')
  {
      alert("please enter name and password")
  }
  else{
    
 window.open("newPage.html","_black")
  }
}