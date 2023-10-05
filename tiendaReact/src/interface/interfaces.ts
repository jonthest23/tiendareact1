

export interface Articulo {
    id: number,
    title: string,
    price: number,
    image: string,
    category: string,
    description: string
}


export interface carrito {
    id: number,
    userId: number,
    date: string,
    products:  {
        productId: number,
        quantity: number
     } []
    
}

export interface Usuario {
    id: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    adress: {
        street: string,
        number: number,
        city: string,
        zipcode: number,
        geolocation: {
            lat: number,
            long: number
        }
    },
    phone: string,
}

