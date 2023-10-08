const cheeses = [{
    id: 1,
    image: 'gouda.png',
    name: 'Gouda',
    description: 'El queso Gouda es un queso de origen holandés conocido por su sabor suave y cremoso. Es versátil y se utiliza en una amplia variedad de platos, desde aperitivos hasta sándwiches y platos de queso fundido',
    price: 5.990,
    stock: 16,
    country:'Paises Bajos'
},  
{
    id: 2,
    image: 'edam.png' ,
    name: 'Edam',
    price: 9.990,
    stock: 20,
    country:'Paises Bajos'
}, {
    id: 3,
    image: 'maasdam.png',
    name: 'Maasdam',
    stock: 15,
    price: 10.990,
    country: 'Países Bajos'
}, {
    id: 4,
    image: 'brie.png',
    name: 'Brie',
    price: 15.990,
    stock: 10,
    country: 'Francia'
}, {
    id: 5,
    image:'camembert.png',
    name: 'Camembert',
    price: 18.990,
    stock: 4,
    country: 'Francia'
}, {
    id: 6,
    image:'roquefort.png',
    name: 'Roquefort',
    stock: 10,
    price: 23.990,
    country: 'Francia'
}, {
    id: 7,
    image: 'tulum.png',
    name: 'Tulum',
    price: 14.990,
    stock: 5,
    country: 'Turco'
}, {
    id: 8,
    image: 'emmental.png',
    name: 'Emmental',
    price: 9.990,
    stock: 12,
    country: 'Suizo'
}, {
    id: 9,
    image: 'appenzeller.png',
    name: 'Appenzeller',
    price: 15.990,
    country: 'Suizo'
}, {
    id: 10,
    image: 'cheddar.png',
    name: 'Cheddar',
    stock: 20,
    price: 14.990,
    country: 'Ingles'
}, {
    id: 11,
    image: 'stilton.png',
    name: 'Stilton',
    stock: 8,
    price: 15.990,
    country: 'Ingles'
}, {
    id: 12,
    image: 'feta.png',
    name: 'Feta',
    price: 5.990,
    stock: 8,
    country: 'Griego'
},
{
    id: 13,
    image: 'mahones.png',
    name: 'Mahones',
    price: 15.990,
    stock: 18,
    country: 'Español'
},
{
    id: 14,
    image: 'mozzarella.png',
    name: 'Mozzarella',
    price: 15.590,
    stock: 3,
    country: 'Italiano'
},
{
    id: 15,
    image: 'cabrales.png',
    name: 'Cabrales',
    price: 10.990,
    stock: 8,
    country: 'Español'
},
]

export const getCheeses = () => {
    
    return new Promise ((resolve) => {
        setTimeout (() =>{
            return resolve(cheeses)
        },500)
    })
}

export const getCheesesById = (id) =>{

    return new Promise ((resolve, reject) => {
        setTimeout (() =>{
            const cheese = cheeses.find ((cheese) => cheese.id === parseInt(id)) 
            if (cheese) return resolve (cheese)
            return reject ({error : 'No encontrado'})
        }, 300)
    })
}