let books=[]
class book{
    constructor(){
        this.books=books
    }
    getBook(){
        return books;
    }
    gettitle(){
        return title
    }
    getprice(){
        return price
    }
    getBookbyID(id){
        return this.books.find(books=>books.id==id)
    }
    addBookPrompt= () => {
        let title=prompt("Ingrese nombre del libro:")
        let auto=prompt("nombre del autor")
        let anoiPublicacion=prompt("Año de la publicacion")
        let price=parseFloat(prompt("Precio del libro:"))
        let idioma=prompt("idioma del libro")
        return {title,auto,anoiPublicacion,price,idioma}
    }
    createBook(){
        const newbook=this.addBookPrompt();
        newbook.id=this.books.length + 1
        this.books.push(newbook)
    }
}
class pedido{
    constructor(){
        this.pedidos=[]
    }
    agregarPedidos(nombre, precio) {
        this.pedidos.push({ nombre, precio });
      }
    
      calcularPrecioTotal() {
        let precioTotal = 0;
        for (let i = 0; i < this.pedidos.length; i++) {
          precioTotal += this.pedidos[i].precio;
        }
        return precioTotal;
      }
    }

let libros = new book()
libros.createBook()
libros.createBook()

console.log(books)