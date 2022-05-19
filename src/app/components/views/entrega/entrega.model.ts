import { Endereco } from "../endereco/endereco.model";


export interface Entrega {
    id?: number;
    peso?: number;
    cepOrigem?: Endereco;
    cepDestino?: Endereco;
    nomeDestinatario?: string;
    vlTotalFrete?: number;
    dataPrevistaEntrega?: Date;
    dataConsulta?: Date;
}


