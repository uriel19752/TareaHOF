// 1. Datos iniciales (Arreglos)
const inventario = [
    { id: 1, nombre: "PC gamer", precio: 25000, stock: 5 },
    { id: 2, nombre: "Mouse con lucecitas", precio: 1500, stock: 20 },
    { id: 3, nombre: "Teclado con mas fps", precio: 1800, stock: 15 },
    { id: 4, nombre: "Monitor oled", precio: 6500, stock: 10 }
];

// 2. forEach: Para mostrar los productos 
function mostrarInventario() {
    console.log("Inventario Actual");
    inventario.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
}

// 3. filter: Para buscar productos económicos
function filtrarBaratos(limite) {
    console.log(`\nProductos de menos de $${limite}`);
    return inventario.filter(p => p.precio < limite);
}

// 4. map: Para obtener solo los nombres 
function obtenerCatalogoNombres() {
    console.log("\nCatálogo de Nombres");
    return inventario.map(p => p.nombre);
}

// 5. some: Para verificar si nos quedamos sin stock 
function verificarAgotados() {
    const hayAgotados = inventario.some(p => p.stock === 0);
    console.log(`\n¿Hay productos agotados?: ${hayAgotados ? "Sí" : "No"}`);
}

// 6. sort: Para ordenar por precio de menor a mayor
function ordenarPorPrecio() {
    console.log("\nInventario Ordenado por Precio (Menor a Mayor)");
    inventario.sort((a, b) => a.precio - b.precio);
}

// Ejecución del programa

mostrarInventario(); // Usa forEach

const nombres = obtenerCatalogoNombres(); // Usa map
console.log(nombres);

const baratos = filtrarBaratos(2000); // Usa filter
console.log(baratos);

verificarAgotados(); // Usa some

ordenarPorPrecio(); // Usa sort
mostrarInventario(); // Nuevo orden