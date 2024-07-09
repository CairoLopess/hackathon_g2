export interface IAvaliacao {
    id?: number;
    avaliador_id: string;
    equipe_id: number;
    notas : {
      [key: string]: string
    };
    feita: boolean;
  }

  export interface IAvaliacaoFormData {
    avaliador_id: string;
    equipe_id: number;
  }