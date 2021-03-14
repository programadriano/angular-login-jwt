import { Usuario } from "./usuario";

export interface Auth {
    token: string;
    correlationId: string;
    usuario: Usuario;
}