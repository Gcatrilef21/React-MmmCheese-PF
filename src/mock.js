const cheeses = [
{
    id: 1,
    image: '../images/gouda.png',
    title: 'Gouda',
    description: 'El queso Gouda es un queso de origen holandés conocido por su sabor suave y cremoso. Es versátil y se utiliza en una amplia variedad de platos, desde aperitivos hasta sándwiches y platos de queso fundido',
    price: 5990,
    stock: 6,
    category: 'Semi-Duros'
},
{
    id: 2,
    image: '../images/edam.png',
    title: 'Edam',
    description: ' Se produce en la ciudad de Edam y otras regiones de los Países Bajos. Este queso se destaca por su sabor suave y ligeramente dulce, así como por su textura firme y compacta.',
    price: 9990,
    stock: 20,
    category: 'Queso Semi-Duro'
}, {
    id: 3,
    image: '../images/maasdam.png',
    title: 'Maasdam',
    description: 'El queso Maasdam es un queso de origen suizo-holandés que combina las mejores cualidades del queso suizo Emmental y el queso holandés Gouda. Es conocido por su distintivo sabor suave y ligeramente dulce, así como por su textura tierna y llena de agujeros, similar a la del Emmental.El queso Maasdam es versátil y se utiliza en una variedad de aplicaciones culinarias, desde platos de queso y sándwiches hasta ensaladas y fondues. ',
    stock: 15,
    price: 10990,
    category: 'Quesos Semi-Duros'
}, {
    id: 4,
    image: '../images/brie.png',
    title: 'Brie',
    description: 'El queso Brie es un queso de origen francés que se destaca por su suavidad, cremosidad y sabor delicado,  es conocido por su característica corteza comestible, que puede tener una textura ligeramente aterciopelada.',
    price: 15990,
    stock: 10,
    category: 'Quesos Semi-Duros'
}, {
    id: 5,
    image: '../images/camembert.png',
    title: 'Camembert',
    description: 'El queso Camembert es un queso de origen francés que se caracteriza por su textura cremosa, corteza blanca y sabor suave pero característico. El Camembert es un queso muy versátil que se puede disfrutar solo, untado en pan fresco o como parte de platos más elaborados, como quiches o fondue de queso. ',
    price: 18990,
    stock: 4,
    category: 'Quesos Blandos'
}, {
    id: 6,
    image: '../images/roquefort.png',
    title: 'Roquefort',
    description: 'El queso Roquefort es un queso de origen francés famoso por su sabor intenso y característico, y por ser uno de los quesos azules más apreciados en todo el mundo.El Roquefort se disfruta comúnmente solo, en ensaladas, como parte de platos de queso o acompañado de peras, nueces u otros ingredientes que complementan su sabor.',
    price: 23990,
    stock: 10,
    category: 'Quesos Blandos'
}, {
    id: 7,
    image: '../images/tulum.png',
    title: 'Tulum',
    description: 'Es un queso típico de Turquía, especialmente popular en la región de Anatolia. Este queso se elabora principalmente a partir de leche de oveja o una mezcla de leche de oveja y cabra,se consume en una variedad de platos y es un componente esencial en la cocina turca. ',
    price: 14990,
    stock: 5,
    category: 'Extra Duros'
}, {
    id: 8,
    image: '../images/emmental.png',
    title: 'Emmental',
    description: 'El queso Emmental es un queso suizo de renombre internacional que se destaca por sus característicos agujeros u "ojos".',
    price: 9990,
    stock: 12,
    category: 'Semi-Duros'
}, {
    id: 9,
    image: '../images/appenzeller.png',
    title: 'Appenzeller',
    description: 'El queso Appenzeller es un queso suizo que se produce en la región de Appenzell, en el noreste de Suiza.Se puede disfrutar solo, en sándwiches, ensaladas o platos de queso fundido, y se considera una joya de la tradición quesera suiza',
    price: 15990,
    stock: 5,
    category: 'Semi-Duros'
}, {
    id: 10,
    image: '../images/cheddar.png',
    title: 'Cheddar',
    description: 'Su nombre proviene de la región de Cheddar, en el suroeste de Inglaterra, donde se originó. Se caracteriza por su sabor robusto y su textura firme y desmenuzable cuando está maduro.Este queso es muy versátil y se utiliza en una amplia gama de aplicaciones culinarias, desde sándwiches y hamburguesas hasta ensaladas y platos de macarrones con queso.',
    price: 14990,
    stock: 20,
    category: 'Blandos'
}, {
    id: 11,
    image: '../images/stilton.png',
    title: 'Stilton',
    description: 'El queso Stilton es un queso azul de origen inglés que se destaca por su sabor distintivo y su textura cremosa con vetas de moho azul.Este queso se consume comúnmente solo, acompañado de galletas o pan, pero también se utiliza en la cocina para preparar salsas, aderezos de ensaladas y platos de queso fundido. ',
    price: 15990,
    stock: 8,
    category: 'Extra Duro'
}, {
    id: 12,
    image: '../images/feta.png',
    title: 'Feta',
    description: 'El queso Feta es de origen griego, conocido por su sabor salado y ligeramente ácido, así como por su textura quebradiza y húmeda.La versatilidad y el sabor distintivo del queso Feta lo han convertido en un elemento fundamental en la gastronomía de muchas culturas y regiones.',
    price: 5990,
    stock: 8,
    category: 'Semi-Duros'
}
]

const category = [{
    id: 1,
    name: 'Quesos Blandos'
},
{
    id: 2,
    name: 'Quesos Semi-Duros'
},
{
    id: 3,
    name: 'Quesos Extra Duros'
},
]


export const getCategory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(category)
        }, 1000)
    })
}

export const getCheeses = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(cheeses)
        }, 500)
    })
}

export const getCheesesById = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = cheeses.find((cheese) => cheese.id === parseInt(id))
            if (cheese) return resolve(cheese)
            return reject({ error: 'No encontrado' })
        }, 1300)
    })
}