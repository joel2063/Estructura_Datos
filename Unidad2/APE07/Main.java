import java.util.Random;

public class Main {

    private static final int TOTAL_PAQUETES = 10000;
    private static final int TOTAL_BUSQUEDAS = 1000;

    public static void main(String[] args) {

        System.out.println("\n========== CENTRO DE DISTRIBUCION ==========\n");

        CentroDistribucion centro = new CentroDistribucion();

        cargarPaquetes(centro);

        System.out.println("Paquetes cargados: " + TOTAL_PAQUETES);

        long inicioOrden = System.nanoTime();
        centro.ordenarPorId();
        long tiempoOrden = System.nanoTime() - inicioOrden;

        System.out.printf("Tiempo de ordenamiento: %.4f ms%n",
                tiempoOrden / 1_000_000.0);

        int[] ids = generarIdsBusqueda();

        long tiempoLineal = ejecutarBusquedaLineal(centro, ids);
        long tiempoBinaria = ejecutarBusquedaBinaria(centro, ids);

        mostrarResultados(
                tiempoOrden,
                tiempoLineal,
                tiempoBinaria
        );
    }

    private static void cargarPaquetes(CentroDistribucion centro) {

        Random random = new Random();

        for (int i = 1; i <= TOTAL_PAQUETES; i++) {

            String codigoPostal =
                    String.format("%05d", random.nextInt(100000));

            centro.recibirCajaCamion(
                    new Paquete(i, codigoPostal)
            );
        }
    }

    private static int[] generarIdsBusqueda() {

        Random random = new Random();
        int[] ids = new int[TOTAL_BUSQUEDAS];

        for (int i = 0; i < TOTAL_BUSQUEDAS; i++) {
            ids[i] = random.nextInt(TOTAL_PAQUETES) + 1;
        }

        return ids;
    }

    private static long ejecutarBusquedaLineal(
            CentroDistribucion centro,
            int[] ids) {

        long inicio = System.nanoTime();

        for (int id : ids) {
            centro.busquedaLinealPorId(id);
        }

        return System.nanoTime() - inicio;
    }

    private static long ejecutarBusquedaBinaria(
            CentroDistribucion centro,
            int[] ids) {

        long inicio = System.nanoTime();

        for (int id : ids) {
            centro.busquedaBinariaPorIdDirecto(id);
        }

        return System.nanoTime() - inicio;
    }

    private static void mostrarResultados(
            long tiempoOrden,
            long tiempoLineal,
            long tiempoBinaria) {

        System.out.println("\n========== RESULTADOS ==========\n");

        System.out.printf(
                "Ordenamiento QuickSort: %.4f ms%n",
                tiempoOrden / 1_000_000.0);

        System.out.printf(
                "Busqueda Lineal: %.4f ms%n",
                tiempoLineal / 1_000_000.0);

        System.out.printf(
                "Busqueda Binaria: %.4f ms%n",
                tiempoBinaria / 1_000_000.0);

        double mejora =
                ((double) tiempoLineal - tiempoBinaria)
                        / tiempoLineal * 100;

        System.out.printf(
                "Mejora de la busqueda binaria: %.2f%%%n",
                mejora);

        System.out.printf(
                "Factor de velocidad: %.2fx%n",
                (double) tiempoLineal / tiempoBinaria);

        System.out.println("\n================================");
    }
}