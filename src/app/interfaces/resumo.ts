export class Resumo {

  consultas: {
    consultas_30dias_anteiores: number;
    consultas_30dias_posteriores: number;
  };
  faturamento: {
    anterior: {
      valor: number;
      comparativo: number;
    },
    previsao: {
      valor: number;
      comparativo: number;
    }
  };

}
