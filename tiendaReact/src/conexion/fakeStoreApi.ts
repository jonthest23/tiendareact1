import axios from 'axios'
import { Articulo } from '../interface/interface'
import { carrito } from '../interface/interface'
import { Usuario } from '../interface/interface'


export default class fakeStoreApi {
    fakestoreapi = axios.create({
        baseURL: 'https://fakestoreapi.com/',
        timeout: 10000,
      
      })

     enviarArticulo = async (articulo:Articulo) => {
        await this.fakestoreapi.post('products', articulo)
        .then(respuesta => {
          alert("se agrego el articulo " + respuesta.data.title + " satisfactoriamente =)")
            console.log(respuesta.data)
        })
        .catch(error => {
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