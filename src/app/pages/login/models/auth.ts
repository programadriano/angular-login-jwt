import { Usuario } from "./usuario";

export interface Auth {
    token: string;    
    usuario: Usuario;
}