const size = document.querySelectorAll('.size')

document.addEventListener('click', function(e){
  if(e.path[0].className === 'size'){
    for(sizes of size){
      sizes.removeAttribute('id')
    }
    e.path[0].setAttribute('id', 'marked')
  }
})
