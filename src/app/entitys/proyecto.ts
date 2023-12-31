export class Proyecto{

    id:number | null = null;

    numeroOrden:number

    descripcion:string;
    
    titulo:string;

    gitHubWeb:string;

    direccionWeb:string;

    constructor(titulo:string,numeroOrden:number,
        descripcion:string,gitHubWeb:string,
        direccionWeb:string){
        this.titulo=titulo;
        this.numeroOrden=numeroOrden;
        this.descripcion=descripcion;
        this.gitHubWeb=gitHubWeb;
        this.direccionWeb=direccionWeb;
    }

}