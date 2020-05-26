export interface Game {
    id: number,
    nom: String ,
    type: String ,
    image: String ,
    note: number ,
    description: String ,
    editor: String
}

export interface GameFromAPI {
    id:number,
    title:String,
    genres:number[],
    publisher:number,
    description:String,
    developer:number,
    coverImage:String
}