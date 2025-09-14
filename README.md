# 👑 Taller POO - Reinas del Chisme

Un proyecto académico desarrollado en **JavaScript (Node.js)** para practicar los conceptos de **Programación Orientada a Objetos (POO)**.  
El sistema modela un conjunto de *chismosas profesionales*, cada una con un estilo único para recolectar y difundir chismes, simulando una **batalla de chismes** que determina quién logra hacer el chisme más viral.

---

## 📌 Descripción General

Este taller busca reforzar conceptos de **clases, herencia, métodos abstractos, encapsulamiento y polimorfismo**.  
Se plantea un escenario divertido y didáctico en el cual tres tipos de chismosas compiten para difundir chismes:

- **Tía Vecina** → Chismosa tradicional del barrio.  
- **Compañera Curiosa** → Chismosa del trabajo.  
- **Estudiante Espía** → Chismosa del colegio/universidad.  

El objetivo es simular rondas donde recolectan información y cuentan chismes, modificando sus niveles de chisme y reputación hasta que se determine la **reina del chisme más viral**.

> ⚠️ Proyecto de uso exclusivamente **académico**.

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** v22.x
- **JavaScript** (ES6+, con clases y módulos CommonJS)
- **Chalk v4** → Para dar color y formato a las salidas en consola.

---

## ⚙️ Instalación y Ejecución

### 📋 Requisitos Previos
- Tener instalado [Node.js](https://nodejs.org/) (v16+ recomendado).
- Tener instalado **npm** (se incluye con Node.js).

### 📥 Instalación
Clona este repositorio y entra a la carpeta del proyecto:

```bash
git clone https://github.com/BryanVillabona/tallerPOO.git

cd tallerPOO
```

Instala las dependencias necesarias:

```bash
npm install chalk@4
```

> Esto instalará `chalk@4`, que es compatible con CommonJS (`require`).

### ▶️ Ejecución
Ejecuta el punto de entrada `index.js`:

```bash
node index.js
```

### 🖥️ Ejemplo de Salida
La simulación muestra las rondas, las acciones de cada chismosa y las estadísticas finales. Ejemplo:

```
******* RONDA 1 *******

 👉 Doña Carmen:
Aprovecha la reunión del barrio para escuchar discretamente
Difunde el chisme mientras ofrece café

 👉 Doña Lupe:
Hace preguntas aparentemente profesionales a los compañeros de trabajo
Comenta el chisme como ejemplo de vida en el trabajo

 👉 Yhwrr Suarez:
Lee chats ajenos desde el último puesto del salón
Filtra el chisme por estados en WhatsApp

*********ESTADÍSTICAS FINALES **********

Doña Carmen
  Reputación: 6
  Nivel de Chisme: 8

Doña Lupe
  Reputación: 7
  Nivel de Chisme: 3

Yhwrr Suarez
  Reputación: 5
  Nivel de Chisme: 9

👑 La reina del chisme es: Yhwrr Suarez con nivel 9!
```

---

## 🌟 Características Principales

- ✅ Uso de **clases abstractas** (`Chismosa`) para definir comportamiento base.  
- ✅ Subclases especializadas con comportamientos únicos:
  - **Tía Vecina** → Sube rápido el chisme, pero puede perder reputación si exagera.  
  - **Compañera Curiosa** → Gana reputación, aunque sus chismes suben lento.  
  - **Estudiante Espía** → Difunde chismes rápido, pero arriesga su reputación si es descubierta.  
- ✅ **Encapsulamiento** de propiedades privadas (`#reputacion`, `#nivelChisme`).  
- ✅ Uso de **métodos auxiliares** para mantener los valores dentro del rango (0–10).  
- ✅ Colores en la consola con `chalk`:
  - 🟣 Morado → Chismes virales.  
  - 🟠 Naranja → Reputación alta.  
  - ⚫ Negro → Reputación baja/cancelación.  
- ✅ Manejo de **empates** → Si varias chismosas logran el mismo nivel máximo, todas son declaradas reinas.  
- ✅ Simulación con `Math.random()` → Las acciones afectan aleatoriamente el nivel de chisme y la reputación.  

---

## 📂 Estructura del Proyecto

```
tallerPOO/
├── classes/
│   ├── Chismosa.js          # Clase abstracta
│   ├── TiaVecina.js         # Subclase Tía Vecina
│   ├── CompaneraCuriosa.js  # Subclase Compañera Curiosa
│   └── EstudianteEspia.js   # Subclase Estudiante Espía
├── index.js                 # Punto de entrada (batalla de chismes)
├── package.json             # Configuración del proyecto
└── README.md                # Documentación
```

---

## 👨‍💻 Autores

| Nombre           | Rol                   |
|------------------|-----------------------|
| Sergio Liévano   | Desarrollador / Estudiante |
| Bryan Villabona  | Desarrollador / Estudiante |

---

## 🎯 Conclusión

Este proyecto muestra cómo aplicar conceptos de **POO en JavaScript** de forma divertida y práctica.  
La simulación de la “batalla de chismes” permite experimentar con **herencia, polimorfismo, encapsulamiento y simulación estocástica** en un contexto creativo.

---
