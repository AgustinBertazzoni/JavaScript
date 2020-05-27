class Producto {

    constructor(n, s, p, i, m) {
        this.nombre = n
        this.stock = s
        this.precio = p
        this.imagen = i
        this.marca = m
        this.estado = false
        this.vDOM = document.createElement("article")
    }

    Mostrar() { // Metodos de instancia


        this.vDOM.classList.add("col-4")

        this.vDOM.innerHTML = `<div class="card h-100">
                            <a href="#">
                                <img class="card-img-top img-fluid" src="${this.imagen}" alt="">
                            </a>
                            <div class="card-body">
                                <h4 class="card-title"><a href="#">${this.marca} - ${this.nombre}</a> <span class="badge badge-pill badge-success float-right">$${parseFloat(this.precio).toFixed(2)}</span></h4>
                                <p class="card-text">${this.stock} unid.</p>
                                <button class="btn btn-warning btn-editar float-left">Editar</button>
                                <button class="btn btn-primary btn-comprar float-right">Comprar</button>
                            </div>
                        </div>`

        if (this.estado == false) {  // la interfaz AUN no esta anexada al DOM
            document.querySelector("#productos-destacados").appendChild(this.vDOM)
            this.estado = true
        }




        this.vDOM.querySelector(".btn-editar").onclick = (evento) => {
            // console.log(evento.target)  con el click en editar

            this.marca = prompt("Ingrese nuevo precio:", this.marca)
            this.nombre = prompt("Ingrese nuevo nombre:", this.nombre)
            this.stock = prompt("Ingrese nuevo stock:", this.stock)
            this.precio = prompt("Ingrese nuevo precio:", this.precio)
            this.imagen = prompt("Ingrese nuevo precio:", this.imagen)

            this.Mostrar()

            // Enviar datos al servidor: 

            let formData = new FormData()
            formData.append("marca" this.marca)
            formData.append("nombre" this.nombre)
            formData.append("stock" this.stock)
            formData.append("precio" this.precio)
            formData.append("imagen" this.imagen)
            let config = {
                method: "POST"
                headers: {
                    "Content-Type": "aplication/x-www-form-urlencored"
                    //"Content-Type" : "aplication/multipart-form-data"
                }
                body: formData
            }
            fetch(//webhook, config })
                console.log(this)     // El objeto "Producto" con el que se armo la interfaz.
        }


    }

    Descuento(cupon) { // Metodo de instancia
        if (cupon == "UH7XTU78I") {
            this.precio -= (this.precio * 0.15)
        }
    }

    /////////////////////////////////////////////

    static armarCatalogo(objetos, rango) { // Metodos de clase (o estatico)
        let productos = objetos.map(({ Nombre, Stock, Precio, Imagen, Marca }) => new Producto(Nombre, Stock, Precio, Imagen, Marca))

        // Operador Ternario

        let resultado = rango ? productos.filter(producto => producto.precio > rango.min && producto.precio < rango.max)
            : productos


        return resultado
    }
}

