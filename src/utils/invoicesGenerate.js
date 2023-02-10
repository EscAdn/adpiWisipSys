import cron from "node-cron";

cron.schedule("0 1 * * *", () => {
  // Buscar los contratos con fecha de corte del dia
  // Obtener el dia
  // Buscar el la BD
  // Recorrer los resultados generando faturas
  // { contrato_id,
  //   fecha_de_creacion,
  //   fecha_vencimiento,
  //   deshabilitar,
  //   estado = PENDIENTE
  // }
  console.log("Generar facturas");
});
