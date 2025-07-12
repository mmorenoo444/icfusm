// Datos completos de la malla (Plan 11223 - Ing. Civil Física)
const malla = {
  carrera: "Ingeniería Civil Física",
  plan: "11223",
  semestres: [
    // --- Semestre 1 ---
    {
      nombre: "1° Semestre",
      ramos: [
        { id: "EF1100", sigla: "EF1100", nombre: "EDUCACIÓN FÍSICA I", creditos: 2, aprobado: false, bloqueado: false },
        { id: "HCW100", sigla: "HCW100", nombre: "INGLÉS 1", creditos: 1, aprobado: false, bloqueado: false },
        { id: "FIS100", sigla: "FIS100", nombre: "INTRODUCCION A LA FÍSICA", creditos: 2, aprobado: false, bloqueado: false },
        { id: "IWG101", sigla: "IWG101", nombre: "INTRODUCCION A LA INGENIERIA", creditos: 3, aprobado: false, bloqueado: false },
        { id: "MAT070", sigla: "MAT070", nombre: "INTRODUCCIÓN AL CÁLCULO", creditos: 6, aprobado: false, bloqueado: false },
        { id: "IW1131", sigla: "IW1131", nombre: "PROGRAMACIÓN", creditos: 2, aprobado: false, bloqueado: false },
        { id: "MAT060", sigla: "MAT060", nombre: "ÁLGEBRA Y GEOMETRÍA", creditos: 6, aprobado: false, bloqueado: false },
      ],
    },
    // --- Semestre 2 ---
    {
      nombre: "2° Semestre",
      ramos: [
        { id: "MAT071", sigla: "MAT071", nombre: "CÁLCULO EN UNA VARIABLE", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["MAT070"] },
        { id: "EF1101", sigla: "EF1101", nombre: "EDUCACIÓN FÍSICA II", creditos: 2, aprobado: false, bloqueado: true, requisitos: ["EF1100"] },
        { id: "FIS110", sigla: "FIS110", nombre: "FISICA GENERAL I", creditos: 8, aprobado: false, bloqueado: true, requisitos: ["MAT060", "MAT070", "FIS100"] },
        { id: "HCW101", sigla: "HCW101", nombre: "INGLÉS 2", creditos: 1, aprobado: false, bloqueado: true, requisitos: ["HCW100"] },
        { id: "QU1010", sigla: "QU1010", nombre: "QUIMICA Y SOCIEDAD", creditos: 5, aprobado: false, bloqueado: false },
        { id: "MAT061", sigla: "MAT061", nombre: "ÁLGEBRA LINEAL", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["MAT060"] },
      ],
    },
    // --- Semestre 3 ---
    {
      nombre: "3° Semestre",
      ramos: [
        { id: "DEW0", sigla: "DEW 0", nombre: "DEPORTES", creditos: 2, aprobado: false, bloqueado: true, requisitos: ["EF1101"] },
        { id: "FIS131", sigla: "FIS131", nombre: "FÍSICA GENERAL III", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["MAT061", "MAT071", "FIS110"] },
        { id: "HXW001", sigla: "HXW001", nombre: "HUMANISTICO I", creditos: 3, aprobado: false, bloqueado: false },
        { id: "FIS105", sigla: "FIS105", nombre: "INSTRUMENTACIÓN CIENTÍFICA", creditos: 6, aprobado: false, bloqueado: false },
        { id: "MAT023", sigla: "MAT023", nombre: "MATEMATICAS III", creditos: 2, aprobado: false, bloqueado: true, requisitos: ["MAT071", "MAT061"] },
        { id: "QU1021", sigla: "QU1021", nombre: "QUIMICA BÁSICA", creditos: 2, aprobado: false, bloqueado: true, requisitos: ["QU1010"] },
      ],
    },
    // --- Semestre 4 ---
    {
      nombre: "4° Semestre",
      ramos: [
        { id: "FIS200", sigla: "FIS200", nombre: "FISICA EXPERIMENTAL", creditos: 4, aprobado: false, bloqueado: true, requisitos: ["FIS105", "FIS131"] },
        { id: "FIS121", sigla: "FIS121", nombre: "FÍSICA GENERAL II", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["MAT071", "FIS110"] },
        { id: "HXW002", sigla: "HXW002", nombre: "INGLÉS A Y/O HUMANÍSTICO II", creditos: 3, aprobado: false, bloqueado: true, requisitos: ["HXW001"] },
        { id: "MAT024", sigla: "MAT024", nombre: "MATEMATICAS IV", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["MAT023"] },
        { id: "FIS210", sigla: "FIS210", nombre: "MECANICA INTERMEDIA I", creditos: 8, aprobado: false, bloqueado: true, requisitos: ["FIS110", "MAT023"] },
      ],
    },
    // --- Semestre 5 ---
    {
      nombre: "5° Semestre",
      ramos: [
        { id: "ICN262", sigla: "ICN262", nombre: "ADMINISTRACIÓN DE EMPRESAS", creditos: 5, aprobado: false, bloqueado: false },
        { id: "MAT270", sigla: "MAT270", nombre: "ANALISIS NUMERICO", creditos: 7, aprobado: false, bloqueado: true, requisitos: ["MAT024"] },
        { id: "FIS190", sigla: "FIS190", nombre: "FUNDAMENTOS DE ELECTRÓNICA", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["FIS121", "FIS200"] },
        { id: "FIS141", sigla: "FIS141", nombre: "FÍSICA GENERAL IV-A", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["FIS121", "FIS131"] },
        { id: "INF230", sigla: "INF230", nombre: "PROGRAMACIÓN AVANZADA PARA CIENCIAS", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["IW1131"] },
      ],
    },
    // --- Semestre 6 ---
    {
      nombre: "6° Semestre",
      ramos: [
        { id: "FIS220", sigla: "FIS220", nombre: "CAMPOS ELECTROMAGNETICOS I", creditos: 7, aprobado: false, bloqueado: true, requisitos: ["MAT024", "FIS131", "FIS121"] },
        { id: "FIS120", sigla: "FIS120", nombre: "FUNDAMENTOS DE TERMODINÁMICA APLICADA", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["MAT023", "FIS131"] },
        { id: "FIS242", sigla: "FIS242", nombre: "FÍSICA CUÁNTICA I", creditos: 7, aprobado: false, bloqueado: true, requisitos: ["FIS210"] },
        { id: "FIS245", sigla: "FIS245", nombre: "MÉTODOS DE LA FÍSICA MATEMÁTICA", creditos: 7, aprobado: false, bloqueado: true, requisitos: ["MAT024"] },
      ],
    },
    // --- Semestre 7 ---
    {
      nombre: "7° Semestre",
      ramos: [
        { id: "FIS223", sigla: "FIS223", nombre: "ESPECTROSCOPIA MODERNA Y ÓPTICA", creditos: 5, aprobado: false, bloqueado: true, requisitos: ["FIS220", "FIS141"] },
        { id: "FIS205", sigla: "FIS205", nombre: "FÍSICA COMPUTACIONAL", creditos: 7, aprobado: false, bloqueado: true, requisitos: ["MAT270"] },
        { id: "ICN270", sigla: "ICN270", nombre: "INFORMACIÓN Y MATEMÁTICA FINANCIERA", creditos: 5, aprobado: false, bloqueado: true, requisitos: ["ICN262"] },
        { id: "ICF140", sigla: "ICF140", nombre: "MECANICA DE FLUIDOS", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["FIS210"] },
        { id: "FIS230", sigla: "FIS230", nombre: "TERMODINÁMICA Y MECANICA ESTADÍSTICA", creditos: 7, aprobado: false, bloqueado: true, requisitos: ["FIS141", "MAT023"] },
      ],
    },
    // --- Semestre 8 ---
    {
      nombre: "8° Semestre",
      ramos: [
        { id: "ICN336", sigla: "ICN336", nombre: "EVALUACIÓN DE PROYECTOS", creditos: 5, aprobado: false, bloqueado: true, requisitos: ["ICN270"] },
        { id: "HRW3", sigla: "HRW 3", nombre: "HUMANISTICO III", creditos: 3, aprobado: false, bloqueado: false },
        { id: "ICF210", sigla: "ICF210", nombre: "INSTRUMENTACIÓN EN ASTRONGENIERÍA", creditos: 5, aprobado: false, bloqueado: true, requisitos: ["FIS223"] },
        { id: "ICF230", sigla: "ICF230", nombre: "PROCESOS DE TRANSFERENCIA DE MATERIA Y ENERGÍA", creditos: 5, aprobado: false, bloqueado: true, requisitos: ["ICF140"] },
        { id: "ICF280", sigla: "ICF280", nombre: "TALLER DE MODELAMIENTO Y SIMULACIÓN DE SISTEMAS COMPLEJOS", creditos: 9, aprobado: false, bloqueado: true, requisitos: ["FIS220", "FIS230", "FIS205"] },
      ],
    },
    // --- Semestre 9 ---
    {
      nombre: "9° Semestre",
      ramos: [
        { id: "ICF260", sigla: "ICF260", nombre: "FUNDAMENTOS DE ENERGÍAS RENOVABLES", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["FIS251"] },
        { id: "ICF240", sigla: "ICF240", nombre: "FUNDAMENTOS DE TECNOLOGÍAS CUÁNTICAS", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["FIS223", "FIS242", "FIS230"] },
        { id: "ICF250", sigla: "ICF250", nombre: "GESTIÓN DE LA INNOVACIÓN TECNOLÓGICA", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["ICN270"] },
        { id: "FIS251", sigla: "FIS251", nombre: "INTRODUCCIÓN A LA FÍSICA DE LA MATERIA CONDENSADA", creditos: 7, aprobado: false, bloqueado: true, requisitos: ["FIS242"] },
        { id: "INF292", sigla: "INF292", nombre: "OPTIMIZACIÓN", creditos: 5, aprobado: false, bloqueado: true, requisitos: ["MAT071", "IW1131"] },
      ],
    },
    // --- Semestre 10 ---
    {
      nombre: "10° Semestre",
      ramos: [
        { id: "ICF251", sigla: "ICF251", nombre: "EMPRENDIMIENTO", creditos: 6, aprobado: false, bloqueado: true, requisitos: ["ICF250"] },
        { id: "ICF298", sigla: "ICF298", nombre: "SEMINARIO DE TÍTULO", creditos: 3, aprobado: false, bloqueado: true, requisitos: ["8_SEMESTRES"] }, // Requiere 8 semestres aprobados
      ],
    },
    // --- Semestre 11 ---
    {
      nombre: "11° Semestre",
      ramos: [
        { id: "ICF299", sigla: "ICF299", nombre: "MEMORIA DE TÍTULO", creditos: 9, aprobado: false, bloqueado: true, requisitos: ["ICF298"] },
      ],
    },
  ],
};

// --- Resto del código (funciones init, generarMalla, etc.) ---
// (Mantén las mismas funciones que te envié anteriormente)