export interface Course {
    id: number,
    name: string,
    decription: string
    id_asignatura: number
    calificacion: number
    asignatura: {
        nombre: string
    }
    urlImg: string
}

