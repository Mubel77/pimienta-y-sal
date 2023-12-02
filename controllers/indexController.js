const productos = [
    {
        id:"1",
        nombre:"Carpaccio fresco",
        descripcion:" Entrada Carpaccio de salmón con cítricos",
        precio:"65.50",
        imagen: "Carpaccio-de-salmon.jpg",
    },
    {
        id:"2",
        nombre:"Risotto de berenjena",
        descripcion:"Risotto de berenjena y queso de cabra",
        precio:"47.00",
        imagen: "Risotto-berenjena-queso-cabra.jpg",
    },
    {
        id:"3",
        nombre:"Mousse de arroz",
        descripcion:"Mousse de arroz con leche y aroma de azahar",
        precio:"27.50",
        imagen: "Mousse-de-arroz-con-leche.jpg",
    },
    {
        id:"4",
        nombre:"Espárragos blancos",
        descripcion:" Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio:"37.50",
        imagen: "esparragos.png",
    },
    {
        id:"5",
        nombre:"ravioles",
        descripcion:"",
        precio:"37.50",
        imagen: "descarga.pn",
    }
];
const aboutInfo = {
    imagen: "principal.jpg",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use",
    span: "seasonal",
    comentario: "ingredients",
    descripcion2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
const indexController = {
    home:(req,res) => {
        res.render ("home", {title:"sal y pimienta",productos})
    },
    detail:(req,res) => {
        const {id} = req.params; 
        const producto = productos.find(producto => producto.id == id)
        res.render ("detalle", {title:producto.nombre,producto})
    },
    about: (req, res) => {
        res.render("about", { title: "About", aboutInfo });
    },
};
module.exports = indexController;