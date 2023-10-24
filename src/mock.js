const cheeses = [{
    id: 1,
    image: 'gouda.png',
    title: 'Gouda',
    description: 'El queso Gouda es un queso de origen holandés conocido por su sabor suave y cremoso. Es versátil y se utiliza en una amplia variedad de platos, desde aperitivos hasta sándwiches y platos de queso fundido',
    price: 5.990,
    stock: 16,
    country:'Paises Bajos'
},  
{
    id: 2,
    image: 'edam.png' ,
    title: 'Edam',
    description:' Se produce en la ciudad de Edam y otras regiones de los Países Bajos. Este queso se destaca por su sabor suave y ligeramente dulce, así como por su textura firme y compacta.',
    price: 9.990,
    stock: 20,
    country:'Paises Bajos'
}, {
    id: 3,
    image: 'maasdam.png',
    title: 'Maasdam',
    description:'El queso Maasdam es un queso de origen suizo-holandés que combina las mejores cualidades del queso suizo Emmental y el queso holandés Gouda. Es conocido por su distintivo sabor suave y ligeramente dulce, así como por su textura tierna y llena de agujeros, similar a la del Emmental.El queso Maasdam es versátil y se utiliza en una variedad de aplicaciones culinarias, desde platos de queso y sándwiches hasta ensaladas y fondues. ',
    stock: 15,
    price: 10.990,
    country: 'Países Bajos'
}, {
    id: 4,
    image: 'brie.png',
    title: 'Brie',
    description: 'El queso Brie es un queso de origen francés que se destaca por su suavidad, cremosidad y sabor delicado,  es conocido por su característica corteza comestible, que puede tener una textura ligeramente aterciopelada.',
    price: 15.990,
    stock: 10,
    country: 'Francia'
}, {
    id: 5,
    image:'camembert.png',
    title: 'Camembert',
    description:'El queso Camembert es un queso de origen francés que se caracteriza por su textura cremosa, corteza blanca y sabor suave pero característico. El Camembert es un queso muy versátil que se puede disfrutar solo, untado en pan fresco o como parte de platos más elaborados, como quiches o fondue de queso. ',
    price: 18.990,
    stock: 4,
    country: 'Francia'
}, {
    id: 6,
    image:'roquefort.png',
    title: 'Roquefort',
    description:'El queso Roquefort es un queso de origen francés famoso por su sabor intenso y característico, y por ser uno de los quesos azules más apreciados en todo el mundo.El Roquefort se disfruta comúnmente solo, en ensaladas, como parte de platos de queso o acompañado de peras, nueces u otros ingredientes que complementan su sabor.',
    stock: 10,
    price: 23.990,
    country: 'Francia'
}, {
    id: 7,
    image: 'tulum.png',
    title: 'Tulum',
    description: 'Es un queso típico de Turquía, especialmente popular en la región de Anatolia. Este queso se elabora principalmente a partir de leche de oveja o una mezcla de leche de oveja y cabra,se consume en una variedad de platos y es un componente esencial en la cocina turca. ',
    price: 14.990,
    stock: 5,
    country: 'Turco'
}, {
    id: 8,
    image: 'emmental.png',
    title: 'Emmental',
    description: 'El queso Emmental es un queso suizo de renombre internacional que se destaca por sus característicos agujeros o "ojos".',
    price: 9.990,
    stock: 12,
    country: 'Suizo'
}, {
    id: 9,
    image: 'appenzeller.png',
    title: 'Appenzeller',
    description: 'El queso Appenzeller es un queso suizo que se produce en la región de Appenzell, en el noreste de Suiza.Se puede disfrutar solo, en sándwiches, ensaladas o platos de queso fundido, y se considera una joya de la tradición quesera suiza',
    price: 15.990,
    country: 'Suizo'
}, {
    id: 10,
    image: 'cheddar.png',
    title: 'Cheddar',
    description: 'Su nombre proviene de la región de Cheddar, en el suroeste de Inglaterra, donde se originó. Se caracteriza por su sabor robusto y su textura firme y desmenuzable cuando está maduro.Este queso es muy versátil y se utiliza en una amplia gama de aplicaciones culinarias, desde sándwiches y hamburguesas hasta ensaladas y platos de macarrones con queso.',
    stock: 20,
    price: 14.990,
    country: 'Ingles'
}, {
    id: 11,
    image: 'stilton.png',
    title: 'Stilton',
    description: 'El queso Stilton es un queso azul de origen inglés que se destaca por su sabor distintivo y su textura cremosa con vetas de moho azul.Este queso se consume comúnmente solo, acompañado de galletas o pan, pero también se utiliza en la cocina para preparar salsas, aderezos de ensaladas y platos de queso fundido. ',
    stock: 8,
    price: 15.990,
    country: 'Ingles'
}, {
    id: 12,
    image: 'feta.png',
    title: 'Feta',
    description: 'El queso Feta es de origen griego, conocido por su sabor salado y ligeramente ácido, así como por su textura quebradiza y húmeda.La versatilidad y el sabor distintivo del queso Feta lo han convertido en un elemento fundamental en la gastronomía de muchas culturas y regiones.',
    price: 5.990,
    stock: 8,
    country: 'Griego'
},
{
    id: 13,
    image: 'mahones.png',
    title: 'Mahones',
    description:'El queso Mahón, también conocido como queso Mahón-Menorca, es un queso originario de la isla de Menorca, que forma parte de las Islas Baleares en España. Este queso es versátil y se consume tanto en su forma fresca como madura. Puede disfrutarse solo, en sándwiches, ensaladas o como parte de una tabla de quesos.',
    price: 15.990,
    stock: 18,
    country: 'Español'
},
{
    id: 14,
    image: 'mozzarella.png',
    title: 'Mozzarella',
    description:'La mozzarella es un queso italiano que se ha convertido en uno de los quesos más populares y ampliamente utilizados en todo el mundo. Se caracteriza por su textura suave y elástica cuando está fresco y por su capacidad para derretirse de manera uniforme y formar hilos al ser calentado.',
    price: 15.590,
    stock: 3,
    country: 'Italiano'
},
{
    id: 15,
    image: 'cabrales.png',
    title: 'Cabrales',
    description:'El queso Cabrales es un queso azul de origen español, específicamente de la región de Asturias, que se caracteriza por su sabor fuerte y su aroma robusto.Se consume generalmente solo, acompañado de pan o en platos de queso, y es muy valorado en la cocina española por su carácter distintivo y su capacidad para aportar complejidad de sabor a diversas preparaciones.',
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
        }, 1300)
    })
}