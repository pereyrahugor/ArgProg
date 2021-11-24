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
/////////////////////////////////////////////////
class Operacion{
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;        
    }

    set ValorA(value:number) {
        this.valorA = value;
    }

    set ValorB(value:number){
        this.valorB = value;
    }

    get Resultado():number{
        return this.resultado;
    }
}

class Suma extends Operacion
{
    Sumar(){
        this.resultado=this.valorA+this.valorB;
    }
}

class Resta extends Operacion
{
    Restar(){
        this.resultado=this.valorA-this.valorB;
    }
}

let operacionSuma= new Suma();
operacionSuma.ValorA=45;
operacionSuma.ValorB=55;
operacionSuma.Sumar();
console.log("El resultado de la suma es "+ operacionSuma.Resultado);

let operacionResta= new Resta();
operacionResta.ValorA=45;
operacionResta.ValorB=15;
operacionResta.Restar();
console.log("El resultado de la resta es "+ operacionResta.Resultado);
/////////////////////////////////////////////////
