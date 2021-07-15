const imageProductLocal = document.querySelector('.big-image')
const informationForProductsLocal = document.querySelector('.information-product')
const title = document.querySelector('title')

function addAtributes(local, atribute){
  local.innerHTML += atribute
}

title.innerHTML = `${$ID[2]} | Byzance`
addAtributes(imageProductLocal, `<figure><img src=${$ID[1]}></figure>`)
addAtributes(informationForProductsLocal, `<div class="name-product"><h1>${$ID[2]}</h1></div>`)
if($ID[10] !== 'none'){
  let templateSizes = `<div class="measures"><h2>Tabela de medidas</h2><div class="size-container">`
  for(i=10;i<$ID.length;i++){
    templateSizes+=`<span class="size">${$ID[i]}</span>`
  }
  templateSizes+=`</div></div>`
  addAtributes(informationForProductsLocal, templateSizes)
}else{
  addAtributes(informationForProductsLocal, `<div class="null-space"></div>`)
}

addAtributes(informationForProductsLocal, `
  <div class="price-container">
    <div class="old-price-and-current-price">
      <span class="old price">
        De: ${Number($ID[3]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}
      </span>
      <span class="price">
        Por: ${Number($ID[4]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}
      </span>
    </div>
    <div class="division-container">
      <span class="division">${$ID[5]}x de ${Number($ID[4]/$ID[5]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})} sem juros</span>
    </div>
  </div>`)
