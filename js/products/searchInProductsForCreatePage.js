let $id = ''

function searchInProducts(id){
  selectionItem = []
  for(product of allProducts){
    if(product[8] == id){
      return product
    }
  }
}
document.addEventListener('click', function(e){
  for(element of e.path){
    if(element.className != undefined){
      if(element.className.lastIndexOf('thisAProduct') >= 0){
        $id = element.innerHTML
          .slice(element.innerHTML.lastIndexOf('id-hidden') + 11,
          element.innerHTML.lastIndexOf('<'))
        localStorage.setItem('ID', searchInProducts($id))
        window.open('product.html', '_self')
        break
      }
    }
  }
})
