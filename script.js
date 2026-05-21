const materias = [

  /* =========================
     PRIMER AÑO
  ========================= */

  { nombre: "Filosofía", anio: 1 },

  { nombre: "Historia social general", anio: 1 },

  { nombre: "Introducción a la Sociología", anio: 1 },

  { nombre: "economía general", anio: 1 },

  { nombre: "introducción a la comunicación", anio: 1 },

  { nombre: "taller de lectura y escritura", anio: 1 },

  { nombre: "psicología general", anio: 1 },



  /* =========================
     SEGUNDO AÑO
  ========================= */

  {
    nombre: "introducción a la publicidad",
    anio: 2,
    requiere: [
      "Historia social general",
      "introducción a la comunicación"
    ],
    tipo: ["aprobada", "aprobada"]
  },

  {
    nombre: "psicología social",
    anio: 2,
    requiere: [
      "Introducción a la Sociología",
      "psicología general"
    ],
    tipo: ["aprobada", "aprobada"]
  },

  {
    nombre: "lingüística",
    anio: 2,
    requiere: [
      "Introducción a la Sociología",
      "taller de lectura y escritura"
    ],
    tipo: ["aprobada", "aprobada"]
  },

  {
    nombre: "comunicación visual",
    anio: 2,
    requiere: [
      "introducción a la comunicación",
      "taller de lectura y escritura"
    ],
    tipo: ["aprobada", "aprobada"]
  },

  {
    nombre: "marketing I",
    anio: 2,
    requiere: [
      "economía general",
      "introducción a la comunicación"
    ],
    tipo: ["aprobada", "aprobada"]
  },

  {
    nombre: "diseño y producción gráfica",
    anio: 2,
    requiere: [
      "comunicación visual",
      "introducción a la publicidad"
    ],
    tipo: ["regularizada", "aprobada"]
  },

  {
    nombre: "metodología de la investigación social",
    anio: 2,
    requiere: [
      "Filosofía",
      "Introducción a la Sociología"
    ],
    tipo: ["aprobada", "aprobada"]
  },

  {
    nombre: "comunicación I",
    anio: 2,
    requiere: [
      "Historia social general",
      "introducción a la comunicación"
    ],
    tipo: ["aprobada", "aprobada"]
  },



  /* =========================
     TERCER AÑO
  ========================= */

  {
    nombre: "medios de comunicación publicitaria",
    anio: 3,
    requiere: [
      "marketing I",
      "introducción a la publicidad"
    ],
    tipo: ["regularizada", "aprobada"]
  },

  {
    nombre: "redacción publicitaria",
    anio: 3,
    requiere: ["lingüística"],
    tipo: ["aprobada"]
  },

  {
    nombre: "Producción audiovisual",
    anio: 3,
    requiere: [
      "diseño y producción gráfica",
      "comunicación visual"
    ],
    tipo: ["regularizada", "aprobada"]
  },

  {
    nombre: "comunicación II",
    anio: 3,
    requiere: ["comunicación I"],
    tipo: ["aprobada"]
  },

  {
    nombre: "planificación de medios",
    anio: 3,
    requiere: [
      "medios de comunicación publicitaria",
      "comunicación I"
    ],
    tipo: ["regularizada", "aprobada"]
  },

  {
    nombre: "opinión pública",
    anio: 3,
    requiere: [
      "metodología de la investigación social"
    ],
    tipo: ["aprobada"]
  },

  {
    nombre: "marketing II",
    anio: 3,
    requiere: ["marketing I"],
    tipo: ["aprobada"]
  },

  {
    nombre: "comunicación III",
    anio: 3,
    requiere: [
      "comunicación II",
      "comunicación I"
    ],
    tipo: ["regularizada", "aprobada"]
  },



  /* =========================
     CUARTO AÑO
  ========================= */

  {
    nombre: "Semiología",
    anio: 4,
    requiere: [
      "redacción publicitaria",
      "lingüística"
    ],
    tipo: ["regularizada", "aprobada"]
  },

  {
    nombre: "organización y administración de la empresa publicitaria",
    anio: 4,
    requiere: [
      "planificación de medios",
      "medios de comunicación publicitaria"
    ],
    tipo: ["regularizada", "aprobada"]
  },

  {
    nombre: "diseño multimedial",
    anio: 4,
    requiere: [
      "Producción audiovisual",
      "diseño y producción gráfica"
    ],
    tipo: ["regularizada", "aprobada"]
  },

  {
    nombre: "investigación en publicidad",
    anio: 4,
    requiere: [
      "opinión pública",
      "metodología de la investigación social"
    ],
    tipo: ["regularizada", "aprobada"]
  },

  {
    nombre: "prensa y comunicación institucional",
    anio: 4,
    requiere: [
      "comunicación II",
      "psicología social"
    ],
    tipo: ["regularizada", "aprobada"]
  },

  {
    nombre: "política de los medios de comunicación social",
    anio: 4,
    requiere: [
      "comunicación I",
      "medios de comunicación publicitaria"
    ],
    tipo: ["aprobada", "aprobada"]
  },

  {
    nombre: "práctica publicitaria",
    anio: 4,
    requiere: [
      "planificación de medios",
      "organización y administración de la empresa publicitaria",
      "medios de comunicación publicitaria"
    ],
    tipo: [
      "regularizada",
      "regularizada",
      "aprobada"
    ]
  },

  {
    nombre: "creatividad en publicidad",
    anio: 4,
    requiere: [
      "diseño multimedial",
      "Producción audiovisual"
    ],
    tipo: ["regularizada", "aprobada"]
  }

];

/* =========================
   CONTENEDOR PRINCIPAL
========================= */

const grid = document.querySelector(".grid");

/* =========================
   CREAR MATERIAS
========================= */

function crearMateriaEnContenedor(
  materia,
  index,
  contenedor
) {

  const div = document.createElement("div");

  div.className =
    `card locked anio-${materia.anio}`;

  div.id = `materia-${index}`;

  div.innerHTML = `
    <h2>${materia.nombre}</h2>

    <select>
      <option value="nada">
        - Estado -
      </option>

      <option value="regularizada">
        Regularizada
      </option>

      <option value="aprobada">
        Aprobada
      </option>
    </select>
  `;

  const select = div.querySelector("select");

  select.addEventListener("change", (e) => {

    const valor = e.target.value;

    guardarEstado();

    verificarDesbloqueo();

    if (valor === "aprobada") {

      lanzarBrillitos(div);

      div.classList.add("aprobada");

    } else {

      div.classList.remove("aprobada");
    }

  });

  contenedor.appendChild(div);
}

/* =========================
   GUARDAR ESTADO
========================= */

function guardarEstado() {

  const estado = {};

  document.querySelectorAll(".card")
  .forEach(card => {

    const nombre =
      card.querySelector("h2").innerText;

    const valor =
      card.querySelector("select").value;

    estado[nombre] = valor;
  });

  localStorage.setItem(
    "estadoMaterias",
    JSON.stringify(estado)
  );
}

/* =========================
   CARGAR ESTADO
========================= */

function cargarEstado() {

  const estado = JSON.parse(
    localStorage.getItem(
      "estadoMaterias"
    ) || "{}"
  );

  document.querySelectorAll(".card")
  .forEach(card => {

    const nombre =
      card.querySelector("h2").innerText;

    const select =
      card.querySelector("select");

    if (estado[nombre]) {

      select.value = estado[nombre];

      if (
        estado[nombre] === "aprobada"
      ) {
        card.classList.add("aprobada");
      }
    }
  });
}

/* =========================
   DESBLOQUEOS
========================= */

function verificarDesbloqueo() {

  const estadoGuardado = JSON.parse(
    localStorage.getItem(
      "estadoMaterias"
    ) || "{}"
  );

  materias.forEach((m, i) => {

    const card =
      document.getElementById(
        `materia-${i}`
      );

    if (!m.requiere) {

      card.classList.remove("locked");

      card.classList.add("unlocked");

      return;
    }

    let habilitada = true;

    for (
      let j = 0;
      j < m.requiere.length;
      j++
    ) {

      const requerida = m.requiere[j];

      const tipo = m.tipo[j];

      const estado =
        estadoGuardado[requerida];

      if (
        tipo === "aprobada" &&
        estado !== "aprobada"
      ) {
        habilitada = false;
      }

      if (
        tipo === "regularizada" &&
        estado !== "regularizada" &&
        estado !== "aprobada"
      ) {
        habilitada = false;
      }
    }

    if (habilitada) {

      card.classList.remove("locked");

      card.classList.add("unlocked");

    } else {

      card.classList.remove("unlocked");

      card.classList.add("locked");
    }
  });
}

/* =========================
   BRILLITOS
========================= */

function lanzarBrillitos(elemento) {

  const colores = [
    "gold",
    "blue",
    "green"
  ];

  for (let i = 0; i < 18; i++) {

    const sparkle =
      document.createElement("span");

    const color =
      colores[
        Math.floor(
          Math.random() *
          colores.length
        )
      ];

    sparkle.className =
      `sparkle ${color}`;

    sparkle.style.left =
      `${Math.random() * 100}%`;

    sparkle.style.top =
      `${Math.random() * 100}%`;

    sparkle.style.animationDelay =
      `${Math.random() * 0.3}s`;

    elemento.appendChild(sparkle);

    setTimeout(() => {

      sparkle.remove();

    }, 1000);
  }
}

/* =========================
   CREAR SECCIONES POR AÑO
========================= */

const nombresAnios = {
  1: "Primer Año",
  2: "Segundo Año",
  3: "Tercer Año",
  4: "Cuarto Año"
};

for(let anio = 1; anio <= 4; anio++) {

  const seccion =
    document.createElement("section");

  seccion.className =
    `seccion-anio anio-${anio}`;

  const titulo =
    document.createElement("h2");

  titulo.className =
    "titulo-anio";

  titulo.innerText =
    nombresAnios[anio];

  const contenedor =
    document.createElement("div");

  contenedor.className = "grid";

  seccion.appendChild(titulo);

  seccion.appendChild(contenedor);

  grid.parentNode.appendChild(seccion);

  materias
    .filter(m => m.anio === anio)
    .forEach((m) => {

      const indexOriginal =
        materias.indexOf(m);

      crearMateriaEnContenedor(
        m,
        indexOriginal,
        contenedor
      );
    });
}

/* ELIMINAR GRID ORIGINAL */

grid.remove();

/* =========================
   INICIAR
========================= */

cargarEstado();

verificarDesbloqueo();
