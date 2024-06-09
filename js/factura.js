var productos = [
    { nombre: 'SantaCruz Bike', precio: 10000, cantidad: 3 },
    { nombre: 'Pivot Bkie', precio: 9700, cantidad: 2 },
    { nombre: 'Commencal Bike', precio: 5600, cantidad: 5 }
  ];
  
  var totalFactura = 0;
  
  for (var i = 0; i < productos.length; i++) {
    var producto = productos[i];
    var totalProducto = producto.precio * producto.cantidad;
    totalFactura += totalProducto;
    
    var el = document.createElement('p');
    el.textContent = producto.nombre + ' $' + totalProducto;
    document.body.appendChild(el);
  }
  
  var totalEl = document.createElement('p');
  totalEl.textContent = 'Total de la factura: $' + totalFactura;
  document.body.appendChild(totalEl);
  