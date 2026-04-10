let estudiantes = [
  { nombre: "Antonio", nota: 7 },
  { nombre: "Juan", nota: 8 },
  { nombre: "Laura", nota: 6 },
  { nombre: "Maria", nota: 9 }
];
console.log(estudiantes);

estudiantes.sort((a,b) => b.nota - a.nota);

console.log(estudiantes);