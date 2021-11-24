class Persona {
    public nombre:string;
    public apellido:string;
    public anioNac:number;
    public altura:number;


    constructor(nombre:string, apellido:string, anioNac:number, altura:number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNac = anioNac;
        this.altura = altura;
    }

    nombreCompleto():string {
        return this.nombre + " " + this.apellido;
    }

    estatura():number {
        return this.altura;
    }

    edades(anioActual:number):number {
        return anioActual - this.anioNac;
    }

    get Nombre():string{
        return this.nombre
    }

    get Apellido():string{
        return this.apellido
    }

    get AnioNac():number{
        return this.anioNac
    }

    get Estatura():number{
        return this.altura
    }

    set Nombre(nombre:string){
        this.nombre = nombre
    }
    
    set Apellido(apellido:string){
        this.apellido =apellido
    }

    set AnioNac(anioNac:number){
        this.anioNac =anioNac
    }

    set Estatura(altura:number){
        this.altura =altura
    }
}