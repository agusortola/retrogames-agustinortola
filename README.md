## Sobre el proyecto

- RetrogameStore es  una tienda online que desarrollé para el curso de REACT en [CODERHOUSE](https://www.coderhouse.com/ "CODERHOUSE")
- Es un e-commerce de fantasía en el cual se venden videojuegos retro o vintage.
- Debido a mi pasado como diseñador gráfico, siempre que desarrollo un proyecto busco alinear el concepto al resultado visual. En este caso me pareció que una estética "pixel art" o "8-bit" iba a ser la más adecuada para los juegos retro.

## Tecnologías utilizadas

- React
- JavaScript
- CSS
- [Material UI](https://material-ui.com/ "Material UI")
- [Nes CSS Framework](https://nostalgic-css.github.io/NES.css/# "Nes CSS Framework")
- Node JS
- Firebase & FireStore
- Adobe XD (diseño previo de los componentes)


## Cómo correr el proyecto de forma local　

- Clonar el repositorio en tu PC
- Abrir una terminal en el directorio del proyecto
- En la consola, aplicar el comando `npm start` o `npm run start` que nos abrirá una ventana en el navegador con el proyecto.


## Decisiones y performance

La lógica tanto de las Categorías como la del detalle de cada producto se pensaron para no tener que traer una y otra vez la data de FireStore. Es decir, el catálogo de productos se trae de la base de datos una sola vez en el ItemListContainer, que le pasa como prop el/los item/s necesarios a los componentes mencionados anteriormente.


En el componente padre (ItemListContainer)
`<ItemList category={categoryId} items={items}/>`

En el componente hijo (ItemList)

           {props.items.filter(i => props.category == null || i.categoryId == props.category).map((item) => (
              <Grid item xs={4}>
                <Item 
                  img={item.img} 
                  title={item.title} 
                  price={item.price}
                  console={item.categoryId}
                  detailedDescription={item.detailedDescription} 
                  id= {item.id}
                />
              </Grid>
            ))} 

## Preview de la App

### Home Page

![](https://i.imgur.com/1J9mG3Y.png)

### Categoría seleccionada

![](https://i.imgur.com/c0y0hyl.png)

### Detalle de producto

![](https://i.imgur.com/yEjBYMc.png)

## Carrito de compras

![](https://i.imgur.com/PMb8ozh.png)

