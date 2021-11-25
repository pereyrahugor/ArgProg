var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, anioNac, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNac = anioNac;
        this.altura = altura;
    }
    Persona.prototype.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    };
    Persona.prototype.estatura = function () {
        return this.altura;
    };
    Persona.prototype.edades = function (anioActual) {
        return anioActual - this.anioNac;
    };
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellido", {
        get: function () {
            return this.apellido;
        },
        set: function (apellido) {
            this.apellido = apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "AnioNac", {
        get: function () {
            return this.anioNac;
        },
        set: function (anioNac) {
            this.anioNac = anioNac;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Estatura", {
        get: function () {
            return this.altura;
        },
        set: function (altura) {
            this.altura = altura;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
