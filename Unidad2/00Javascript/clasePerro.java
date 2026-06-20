public class clasePerro {
    // Atributos
    String nombre;
    int edad;

    // Constructor
    public clasePerro(String nombre, int edad) {
        this.nombre = nombre;
        this.edad   = edad;
    }

    // Métodos
    void ladrar() {
        System.out.println(nombre + " dice: ¡Guau!");
    }

    //motrasr la informacion del perro
    void info() {
        System.out.println("Nombre: " + nombre + ", Edad: " + edad);
    }

    // Main para ejecutar
    public static void main(String[] args) {
        clasePerro perro1 = new clasePerro("Rex", 3);

        perro1.ladrar();
        perro1.info();
    }
}