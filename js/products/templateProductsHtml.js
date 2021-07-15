function createHtmlTemplate(local, product){
  const template =
  `<div class="${local}-item thisAProduct">
  <figure><img src="${product[0][0]}"></figure>
  <span class="name-item">${product[1]}</span>
  <span class="old-price">De: ${Number(product[2]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}</span>
  <span class="price">Por: ${Number(product[3]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}</span>
  <span class="division">${product[4]}x de ${(Number(product[3]) / Number(product[4])).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}</span>
  <span class="id-hidden">${product[8]}</span>
  </div>`
  return template
}
