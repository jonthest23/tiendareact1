import axios from 'axios'
import { Articulo, carrito, Usuario } from '../interface/interfaces'


export default class fakeStoreApi {
    fakestoreapi = axios.create({
        baseURL: 'https://fakestoreapi.com/',
        timeout: 10000,
      
      })
      agregarCarrito = async (carrito:carrito) => {
        await this.fakestoreapi.post('carts', carrito)
        .then(respuesta => {
            console.log(respuesta.data)
            alert("se agrego el carrito " + respuesta.data.id + " satisfactoriamente =)")
        })
        .catch(error => {
            throw error
        });
        
        
      }

     enviarArticulo = async (articulo:Articulo) => {
        await this.fakestoreapi.post('products', articulo)
        .then(respuesta => {
          alert("se agrego el articulo " + respuesta.data.title + " satisfactoriamente =)")
            console.log(respuesta.data)
        })
        .catch(error => {
          alert("no se pudo agregar el articulo")
          console.log(error.toJSON())
        });
        
        
      };
      
      eliminarArticulo = async (id: number) => {
         await axios.delete('https://fakestoreapi.com/products/' + id)
         .then(respuesta => {
             alert("se elimino el articulo " + respuesta.data.title + " satisfactoriamente =)")
         })
         .catch(error => {
             console.log(error.toJSON())
         });
         
      };

    obtenerArticulos = async (): Promise<Array<Articulo>> => {
        return await this.fakestoreapi.get('products')
        .then(respuesta => {
            return respuesta.data

        })
        .catch(error => {
            throw error
        })
    }
    
    obtenerCarrito = async (id:number): Promise<carrito> => {
          return await this.fakestoreapi.get('carts/' + id)
          .then(respuesta => {
              return respuesta.data
          })
          .catch(error => {
              console.log(error.toJSON())
              throw error
          })
        
        
        
    }

    obtenerCarritos = async (): Promise<Array<carrito>> => {
        return await this.fakestoreapi.get('carts')
        .then(respuesta => {
            return respuesta.data
        })
        .catch(error => {
            throw error
        })
    }
    obtenerUsuario = async (id:number): Promise<Usuario> => {
         return await this.fakestoreapi.get('users/' + id)
        .then(respuesta => {
            return respuesta.data
        }
        )
        .catch(error => {
            throw error
        })
    }

    obtenerArticulo = async (id:number): Promise<Articulo> => {
        return await this.fakestoreapi.get('products/' + id)
        .then(respuesta => {
            return respuesta.data
        })
        .catch(error => {
            throw error
        })
    }

    editarArticulo = async (articulo:Articulo) => {
        await this.fakestoreapi.put('products/' + articulo.id, articulo)
        .then(respuesta => {
            alert("se edito el articulo " + respuesta.data.id + " satisfactoriamente =) bajo el nombre de " + respuesta.data.title) 
        })
        .catch(error => {
            throw error
        });
    
        
    };

    
}