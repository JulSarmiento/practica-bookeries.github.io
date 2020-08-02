/**
 * 1. Crea una clase libro. (listo)
 * 2. La clase libro tendra: titulo, autor, año y genero. (listo)
 * 3. Crea un método que devuelva toda la informacion de libro. (listo)
 * 4. Pide 3 libros y guardalos en un array
 * 5. Los libros se introduciran al arrancar el programa pidiendo los datos con prompot (ñeee)
 * 6. Validar que los campos no se introduzcan vacios
 * 7. Validar que el año sea un numero y que tenga 4 digitos
 * 8. Validar que el genero sea: aventuras, terror o fantasia
 * 9. Crear una funcion que muestre todos los libros
 * 10. Crea una funcion que muestre los autores ordenador alfabeticamente
 * 11. Crea una funcion que pida un genero y puestre la infroamcion de los libros que pertenecezcan a ese genero usando el metodo que devuele la informacion.
 *  */ 

class Book{
    constructor(title, author, year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    bookInfo(){
        return `${this.title} was wrote in ${this.year} by ${this.author} and is a ${this.gender} book`
    }

    getAuthor() {
        return this.author
    }

    getGender() {
        return this.gender
    }
}

let books = [];

while(books.length < 3) {
    let title = prompt("Introduce the book's title:");
    let author = prompt("Introduce the book's author:");
    let year = prompt("Introduce the book's published year:");
    let gender = prompt("Introduce the book's gender:").toLowerCase();

    if(title != '' && 
        author != '' && 
        !isNaN(year) && 
        (year.length = 4) &&
        (gender =='aventura' || gender =='aventuras'|| gender == 'terror' || gender == 'fantasia')){

        books.push(new Book(title, author, year, gender))
    } else {
        alert ('datos invalidos')
    }
}

const showAllBooks = () => {
    console.log(books);
}

const showAuthors = () => {
    let authors = []
    for(const book of books) {
        authors.push(book.getAuthor());
    }
    console.log(authors.sort()); 
}

const showGenders = () => {
    let genders = [];
    for(const book of books) {
        genders.push(book.getGender());
    }
}

const showBooksInfobyGenders = () => {
    const gender = prompt('Introduce the gender to search:')
    for(const book of books) {
        if(book.getGender() == gender) {
            console.log(book.bookInfo())
        }
    }

}

showAllBooks();
showAuthors();
showGenders();
showBooksInfobyGenders();
