const pedidos = [
    { id: 1, cliente: "Ana", total: 120, pagado: true },
    { id: 2, cliente: "Luis", total: 75, pagado: false },
    { id: 3, cliente: "Marta", total: 200, pagado: true },
    { id: 4, cliente: "Pablo", total: 40, pagado: true },
    { id: 5, cliente: "Elena", total: 150, pagado: false }
];

const obtenerClientesPagados = pedidos => {
    const pagados = [];
    for (pedido of pedidos) {
        if (pedido.pagado === true) {
            pagados.push(pedido.cliente);
        };
    };

    return pagados;
};

console.log(obtenerClientesPagados(pedidos));
console.log("----")

const calcularIngresos = pedidos => {
    let ingreso = 0;
    for (pedido of pedidos) {
        if (pedido.pagado === true) {
            ingreso += pedido.total;
        };
    };
    return ingreso;

};

console.log(calcularIngresos(pedidos));
console.log("----")

const obtenerPedidoMayor = pedidos => {
    let importeMayor = 0;
    let pedidoMayor = {};
    for (pedido of pedidos) {
        if (pedido.total > importeMayor) {
            importeMayor = pedido.total;
        };
    };
    for (pedido of pedidos) {
        if (pedido.total === importeMayor) {
            pedidoMayor = { ...pedido }
        };
    };

    return pedidoMayor;
};

console.log(obtenerPedidoMayor(pedidos));
console.log("----")

const generarResumen = pedidos => {
    const resumen = {
        clientes: [],
        totalIngresado: 0,
        pedidoMayor: {

        }
    };

    resumen.clientes = obtenerClientesPagados(pedidos);
    resumen.totalIngresado = calcularIngresos(pedidos);
    resumen.pedidoMayor = obtenerPedidoMayor(pedidos);

    return resumen;
};

console.log(generarResumen(pedidos));