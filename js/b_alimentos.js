const contenedores = document.getElementsByClassName('card');

// Convertir la colección en un array y usar forEach
Array.from(contenedores).forEach(contenedor => {
    contenedor.addEventListener("click", function () {
        const valor = contenedor.getAttribute('value');
        imprimir(valor);
    });
});


function imprimir(valor) {
    const containerProducts = document.getElementsByClassName('container_products')[0];
    const wrapper = document.getElementsByClassName('wrapper')[0];

    containerProducts.innerHTML = "";
    arrayComida = {}
    if (valor == 'hipertrofia') {
        arrayComida = {
            "Alimentos para Hipertrofia": [

                {nombre: "Carne de Pollo",img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8G1-q9SAJAyNTqeXImFNVpu5P7g6GvVbgkPLnDtH4iNHPzf140alkGhh9H3do"},
                {nombre: "Huevo Cocido",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZWL4zj_nzrJVv5BtuCtX0d1QTLdBKyq4IXNaT98iknVXcOJDTwV3XR6cLO1WZ"},
                {nombre: "Lentejas",img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0yxqL34D17SXqtOKINvZEGgjGXZKOQFJYlORBfbwlIClYLN7QTDz8S16MbDLj"},
                {nombre: "Tofu",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQTsEPglEfD9QHASeI7b_zz2rZX55DZpPBJgj_Lz43xwHkCAS2gLQMc9xxBz7kJ"},
                {nombre: "Banano",img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZoJRWEcj7krg44Beqvxo_kNZ1VwST_wOgThva-oc5oV6L6m_W4zgT3pbvRkTR"},
                {nombre: "Espinaca",img: "https://th.bing.com/th/id/OIP.9hPVUVTqCPXM0c8J6zUBRAHaE7?rs=1&pid=ImgDetMain"},
                {nombre: "Aguacate",img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvHBv_NEh9LwS-7_BqNDa2V2_rGQn57iLKJq0vFMT0oWYpgEbwN8LlzJUzhPZ4"},
                {nombre: "Nueces",img: "https://th.bing.com/th/id/R.b8c813a9e64ea4e255b97c14562d1d3a?rik=30GFvmillBDAUA&pid=ImgRaw&r=0"},
                {nombre: "Aceite de Oliva",img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_TJus4GZNQFDY5rDOuEpRiEiAeR-ykSS4P8a6QDqiFQWxEIBrznmLKV2v7iVt"},
                {nombre: "Arroz Integral",img: "https://images.cookforyourlife.org/wp-content/uploads/2019/10/brown-rice_stock.png"},
                {nombre: "Batata",img: "https://t1.uc.ltmcdn.com/es/posts/3/2/3/como_cocinar_batata_50323_orig.jpg"}
            ]
        }
    } else if (valor == 'definir') {
        arrayComida = {
            "Alimentos para Definición":[
                {nombre: "Tostada integral con mantequilla de maní y plátano",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_X8coIoEISBd_zYlsjflcE4J-LJYMAJGHvAMSxYExmGwEk4UYKCOuTCC1xS3s"},
                {nombre: "Huevos revueltos con espinacas y queso feta",img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbj2QVNYDApP5mnZiSW5z2BTCroSBNf1WD49Bk2n3nACS3vlfFnQN6_iULqA_R"},
                {nombre: "Avena con leche de almendras, frutas y nueces",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyZAaEuGxgZ_0FB6RyQw9xLnLuhAYKVSAJcoQj2AcS6b5n8R33JrwS9WCAJFiN"},
                {nombre: "Ensalada de pollo a la plancha con quinoa y verduras",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn87G7UMhN9DwrJikCPhr8BHW8P4vAzAJcE5kr8MqI4_MpNZWU4O6t273PKlsb"},
                {nombre: "Salmón al horno con batata y brócoli",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSE2MdYHfnIHlQU19GingEcmwPYyEjzNa7uYVIBC98OmTQr9Tz1BoMv7OAzqAu9"},
                {nombre: "Ternera a la plancha con puré de patatas y coliflor",img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtvkzSo02rIWv93N29Lf_rCphePUZcJnVqi7kA0C1lEvEcnaDarNhc3iCXnxqT"},
                {nombre: "Batido de proteína con frutas y verduras",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40HYfeAyEpeuD6NgHROqHvSmlsYGodABmzZglDXog3UhTyCx9sFvV5h2HX1gH"},
                {nombre: "Queso cottage con piña",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwemmRlheYIsPa10859oK29exgUT7tOWowqUT3oy24e9RCuPOnAlwb03WI--9N"},
                {nombre: "Yogur griego con frutos secos y semillas",img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSN733enk5lzfRrRCH0fIVBu5locxnLLqSFzKIXivldBaWwsMW778vaw9KWjEgj"}
            ]
        }
    } else if (valor == 'bajarpeso') {
        arrayComida = {
            "Alimentos para bajar de peso":[
                {nombre: "Tostada integral con aguacate y huevo escalfado",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQY-Kn6ODuUUG-P2OkJHoS1EsEA_aYFIDnEciOZB4cEDHot9QFv3FiLLVQsJrn"},
                {nombre: "Batido de frutas con yogur griego y avena",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CRAlskkjb4zNChujUVTQoke49tbwQns5Iqtgi_TKBHk_s6dnco6Rk7XmgUPe"},
                {nombre: "Panqueques de plátano con harina integral y miel",img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUfYp2T2o0J90oyTE_qY-cTcYdnI1He1DIRZjFe4XKl7b7vy8wlFyoKj7N7-cf"},
                {nombre: "Ensalada de quinoa con pollo a la plancha y verduras",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn87G7UMhN9DwrJikCPhr8BHW8P4vAzAJcE5kr8MqI4_MpNZWU4O6t273PKlsb"},
                {nombre: "Salmón al horno con espárragos y batata",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtz3JRGHR8TyMFm-y9B9dT4xtiAUDE7AGluoRabTrGrcE71YNnqf9m4hk0EPjX"},
                {nombre: "Sopa de lentejas con verduras",img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQcoXkMS-5URlCuH8lONhMWuKB5c7Qx1aAq6Q5mC3FnMKxLePl7KBtJfmamSQOc"},
                {nombre: "Hamburguesa de pavo con pan integral y ensalada",img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToJyItCWAH1IDaU7us4BJ3gBseb2Wp7itx9ylaPW7KIhwsA6ZknxDSvfAO9Aqu"},
                {nombre: "Pescado blanco a la plancha con puré de coliflor",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMX3gl1VELI-VWkGaMSFWLOKyhOOE_rfIVgF4xfDCMv-Sz5gibhIYthPxyuZMu"}
            ]
        }
    }


    for (categoria in arrayComida) {

        const bloque = document.createElement('div');
        bloque.classList.add('bloque_ejercicio');

        const titulo = document.createElement('div');
        titulo.classList.add('titulo');
        const h1 = document.createElement('div');
        h1.textContent = categoria
        titulo.appendChild(h1);
        containerProducts.appendChild(titulo);

        if (arrayComida.hasOwnProperty(categoria)) {

            arrayComida[categoria].forEach(ejercicio => {



                const cardPruduct = document.createElement('div');
                cardPruduct.classList.add('card-product');

                const containerImg = document.createElement('div');
                containerImg.classList.add('container-img');
                cardPruduct.appendChild(containerImg);

                const img = document.createElement('img');
                img.src = ejercicio.img;
                containerImg.appendChild(img);

                const contentCardProduct = document.createElement('div');
                contentCardProduct.classList.add('content-card-product');
                cardPruduct.appendChild(contentCardProduct);

                const h3 = document.createElement('h3');
                h3.textContent = ejercicio.nombre;
                contentCardProduct.appendChild(h3);
                contentCardProduct.appendChild(h3);


                bloque.appendChild(cardPruduct);
            });


        }
        containerProducts.appendChild(bloque);
    }


    wrapper.classList.add('active_wrapper');
}


const cerrar = document.getElementsByClassName('icon_close')[0];

cerrar.addEventListener("click", function () {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    wrapper.classList.remove('active_wrapper');

})
