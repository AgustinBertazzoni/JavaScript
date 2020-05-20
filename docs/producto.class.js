class Producto {

    constructor(n, s, p, i, m) {
        this.nombre = n
        this.stock = s
        this.precio = p
        this.imagen = i
        this.marca = m
    }

    Mostrar() { // Metodos de instancia
        const ficha = document.createElement("article")

        ficha.classList.add("col-4")

        ficha.innerHTML = `<div class="card h-100">
                            <a href="#">
                                <img class="card-img-top img-fluid" src="${this.imagen}" alt="">
                            </a>
                            <div class="card-body">
                                <h4 class="card-title"><a href="#">${this.marca} - ${this.nombre}</a> <span class="badge badge-pill badge-success float-right">$${this.precio.toFixed(2)}</span></h4>
                                <p class="card-text">${this.stock} unid.</p>
                                <button class="btn btn-primary float-right">Comprar</button>
                            </div>
                        </div>`

        document.querySelector("#productos-destacados").appendChild(ficha)
    }

    Descuento(cupon) { // Metodo de instancia
        if (cupon == "UH7XTU78I") {
            this.precio -= (this.precio * 0.15)
        }
    }

    /////////////////////////////////////////////

    static armarCatalogo(objetos) { // Metodos de clase (o estatico)
        let productos = objetos.map(({ Nombre, Stock, Precio, Imagen, Marca }) => new Producto(Nombre, Stock, Precio, Imagen, Marca))

        let resultado = productos.filter(producto => producto.precio > 249 && producto.stock > 100)

        return resultado
    }
}

