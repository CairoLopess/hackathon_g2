export interface IAvaliacao {
    id?: number;
    avaliador_id: number;
    equipe_id: number;
    notas: string;
  }

  export interface IAvaliacaoFormData {
    avaliador_id: number;
    equipe_id: number;
    notas: string;
  }