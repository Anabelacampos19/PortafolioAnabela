// Base de datos de jabones con imágenes reales de e-commerce
// Base de datos de jabones usando tus imágenes locales
// Base de datos de tus 9 jabones artesanales con tus imágenes locales
const jabones = [
    {
        id: 1,
        nombre: "Jabón de Aloe Vera",
        categoria: "Hidratación y Regeneración",
        precio: 4000,
        imagen: "imagenes/jabonaloevera.jpg", // Cambia la extensión (.jpg/.png) si es necesario
        descripcion: "Altamente hidratante, calma quemaduras y regenera los tejidos de la piel."
    },
    {
        id: 2,
        nombre: "Jabón de Arroz",
        categoria: "Aclarante y Suave",
        precio: 4000,
        imagen: "imagenes/jabonarroz.jpg",
        descripcion: "Ayuda a unificar el tono cutáneo, suaviza imperfecciones y aporta luminosidad."
    },
    {
        id: 3,
        nombre: "Jabón de Cúrcuma",
        categoria: "Antioxidante y Antiacné",
        precio: 4000,
        imagen: "imagenes/jaboncurcuma.jpg",
        descripcion: "Propiedades antiinflamatorias y antibacterianas naturales, ideal para pieles con acné."
    },
    {
        id: 4,
        nombre: "Jabón de Lavanda",
        categoria: "Aromaterapia y Relax",
        precio: 4000,
        imagen: "imagenes/jabonlavanda.jpg",
        descripcion: "Calma el estrés del día a día, relaja los músculos y suaviza la dermis profundamente."
    },
    {
        id: 5,
        nombre: "Jabón de Mandarina",
        categoria: "Energizante y Cítrico",
        precio: 4000,
        imagen: "imagenes/jabonmandarina.jpg",
        descripcion: "Rico en vitamina C, revitaliza la piel opaca y aporta un aroma fresco y energizante."
    },
    {
        id: 6,
        nombre: "Jabón de Manzanilla",
        categoria: "Piel Sensible / Desinflamante",
        precio: 4000,
        imagen: "imagenes/jabonmanzanilla.jpg",
        descripcion: "Desinflama, calma irritaciones y es sumamente gentil con las pieles más delicadas."
    },
    {
        id: 7,
        nombre: "Jabón de Miel",
        categoria: "Nutrición Profunda",
        precio: 4000,
        imagen: "imagenes/jabonmiel.jpg",
        descripcion: "Nutre intensamente gracias a sus propiedades humectantes y antibacterianas naturales."
    },
    {
        id: 8,
        nombre: "Jabón de Ruda",
        categoria: "Limpieza Energética y Purificante",
        precio: 4000,
        imagen: "imagenes/jabonruda.jpg",
        descripcion: "Tradicionalmente usado para limpieza profunda y protección energética. Aroma herbáceo intenso."
    },
    {
        id: 9,
        nombre: "Jabón de Tusca",
        categoria: "Medicinal y Cicatrizante",
        precio: 4000,
        imagen: "imagenes/jabontusca.jpg",
        descripcion: "Poderoso extracto natural con propiedades astringentes, ideal para tratar afecciones de la piel."
    }
];

let carrito = [];

function cargarCatalogo() {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = ""; 

    jabones.forEach(jabon => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-instagram");
        tarjeta.innerHTML = `
            <!-- Cabecera de la publicación simulada -->
            <div class="insta-header">
                <span class="categoria-insta"> ${jabon.categoria}</span>
                <span class="tres-puntos">•••</span>
            </div>

            <!-- Imagen del Producto -->
            <div class="insta-img-container">
                <img src="${jabon.imagen}" alt="${jabon.nombre}">
            </div>

            <!-- Barra de Interacción Estilo Red Social -->
            <div class="insta-actions">
                <div class="insta-icons-left">
                    <span class="icon-btn">❤️</span>
                    <span class="icon-btn">💬</span>
                    <span class="icon-btn">✈️</span>
                </div>
                <span class="icon-btn">🔖</span>
            </div>

            <!-- Información e Interacción de Compra -->
            <div class="insta-body">
                <h3>${jabon.nombre}</h3>
                <p>${jabon.descripcion}</p>
                
                <div class="insta-footer-row">
                    <!-- Selector de Cantidad Estilizado -->
                    <div class="selector-cantidad-insta">
                        <label>Cant:</label>
                        <input type="number" id="cant-${jabon.id}" value="1" min="1" max="10">
                    </div>
                    
                    <!-- Botón de Precio Ovalado de tu Imagen -->
                    <button class="btn-precio-comprar" onclick="intentarAgregar(${jabon.id})">
                        $2500 — Añadir
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}


function intentarAgregar(id) {
    const inputCantidad = document.getElementById(`cant-${id}`);
    const cantidad = parseInt(inputCantidad.value) || 1;
    agregarAlCarrito(id, cantidad);
    inputCantidad.value = 1;
}

function agregarAlCarrito(id, cantidad) {
    const producto = jabones.find(j => j.id === id);
    const existe = carrito.find(item => item.id === id);

    if (existe) {
        existe.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad: cantidad });
    }

    actualizarInterfaz();
    
    document.getElementById("carrito-lateral").classList.add("activo");
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarInterfaz();
}

function actualizarInterfaz() {
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById("contador-carrito").innerText = totalItems;

    const contenedorItems = document.getElementById("carrito-items");
    contenedorItems.innerHTML = "";

    carrito.forEach(item => {
        const divItem = document.createElement("div");
        divItem.classList.add("carrito-item");
        divItem.innerHTML = `
            <div class="item-detalles">
                <h4>${item.nombre}</h4>
                <p>${item.cantidad} x $${item.precio.toFixed(2)} = <strong>$${(item.cantidad * item.precio).toFixed(2)}</strong></p>
            </div>
            <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">🗑️</button>
        `;
        contenedorItems.appendChild(divItem);
    });

    const granTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0);
    document.getElementById("precio-total").innerText = granTotal.toFixed(2);
}

function alternarCarrito() {
    const carritoLateral = document.getElementById("carrito-lateral");
    carritoLateral.classList.toggle("activo");
}

function simularCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. ¡Agrega algunos jabones primero!");
        return;
    }

    carrito = [];
    actualizarInterfaz();
    alternarCarrito();
    
    document.getElementById("modal-agradecimiento").classList.add("mostrar-modal");
}

document.getElementById("btn-cerrar-modal").addEventListener("click", () => {
    document.getElementById("modal-agradecimiento").classList.remove("mostrar-modal");
});

document.addEventListener("DOMContentLoaded", cargarCatalogo);

