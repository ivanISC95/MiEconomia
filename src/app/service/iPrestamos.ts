export interface iPrestamos{    
    id:number;
    nombre:string;
    cantidad:number;
    fechaPrestamo:string;
    estatus:string;
    fechaPago:string;
    estilo:string;
    buttonEstado:string;
    descripcion:string;
}

export class iPrestamos2{    
    id!:number;
    nombre!:string;
    cantidad!:number;
    fechaPrestamo!:string;
    estatus!:string;
    fechaPago!:string;
    estilo!:string;
    buttonEstado!:string;
    descripcion!:string;
}