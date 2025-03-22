Este repositorio contiene una serie de proyectos desarrollados con React, con el objetivo de practicar y reforzar conceptos fundamentales del framework, así como explorar nuevas herramientas y patrones a medida que se avanza en el aprendizaje. Cada proyecto incluye una breve descripción de su funcionalidad y de los conocimientos adquiridos durante su desarrollo.

## **Proyectos**

**1. Carrito de Compras de Guitarras 🎸**

Tecnologías utilizadas:
- Lenguajes y herramientas: React.
- Funcionalidades: useState, useEffect, Base de Datos Local.

Este fue el primer acercamiento a React, donde se trabajó con componentes, props, y hooks fundamentales. Se desarrolló un carrito de compras para una tienda de guitarras, con las siguientes características:

- Selección entre doce modelos de guitarras.

- Ajuste dinámico de cantidades.

- Cálculo automático del costo total.

- Persistencia temporal de datos mediante una base de datos local.

Aprendizajes clave:

- Creación y gestión de componentes funcionales.

- Comunicación entre componentes mediante props.

- Uso de useState y useEffect para gestionar el estado y efectos secundarios.

**2. Calculadora de Propinas 💵**

Tecnologías utilizadas:
- Lenguajes y herramientas: React, TypeScript, Tailwind CSS.
- Funcionalidades: Hooks Personalizados, useMemo, Base de Datos Local.

Este proyecto fue una continuación del aprendizaje, integrando TypeScript y Tailwind CSS para una mejor estructura del código y un diseño más dinámico. Se desarrolló una calculadora de propinas con las siguientes funcionalidades:

- Ingreso del pedido y porcentaje de propina.

- Cálculo dinámico del monto a pagar, propina y total.

- Implementación de hooks personalizados para modularizar la lógica.

- Optimización de cálculos con useMemo.

Aprendizajes clave:

- Introducción a TypeScript en un proyecto React.

- Creación y uso de hooks personalizados.

- Aplicación de Tailwind CSS para un diseño responsivo y moderno.

- Optimización de rendimiento con useMemo.
  
**3. Calculadora de Calorías 🔥**

Tecnologías utilizadas:
- Lenguajes y herramientas: React, TypeScript, Tailwind CSS.
- Funcionalidades: useReducer, useEffect, useMemo, Local Storage, Iconografía de Tailwind.

Este proyecto tiene como objetivo registrar las calorías consumidas por comida y las calorías gastadas mediante ejercicio, permitiendo determinar si se está en déficit calórico o no. Las características incluyen:

- Formulario con validación en todos los campos.

- Cálculo del balance calórico entre las calorías consumidas y las gastadas.

- Uso de useReducer para gestionar la lógica del formulario.

- Uso de useEffect y useMemo para la gestión de efectos y optimización de cálculos.

- Persistencia de datos con Local Storage.

- Implementación de iconografía mediante Tailwind.

Aprendizajes clave:

- Implementación de formularios con validación avanzada.

- Gestión de estado complejo con useReducer.

- Uso de useEffect y useMemo para optimizar la aplicación.

- Integración de iconografía con Tailwind.

- Persistencia de datos mediante Local Storage.

**4. Controlador de Presupuesto 💰**

Tecnologías utilizadas:

- Lenguajes y herramientas: React, TypeScript, Tailwind CSS.
- Funcionalidades: useContext, useState, useEffect, Dependencias para gráficas, Local Storage, Generación de IDs únicos, Ventanas Modales.

Este proyecto permite definir un presupuesto inicial y registrar los gastos según su categoría. Se muestra el presupuesto total en función de los gastos registrados mediante números y gráficos.

Las características incluyen:

- Registro de gastos con categorías específicas.

- Visualización del presupuesto restante mediante números y gráficos.

- Funcionalidades de edición y eliminación de gastos.

- Filtrado de gastos según categoría.

- Implementación de una ventana modal para agregar/editar gastos.

- Generación de IDs únicos para cada gasto.

Aprendizajes clave:

- Implementación de un estado global con useContext.

- Uso de dependencias para la representación gráfica de datos.

- Persistencia de datos en Local Storage.

- Creación de interfaces dinámicas con ventanas modales.

- Gestión de listas de datos con IDs únicos.
  
**5. Gestor de Pacientes Veterinarios 🐶🐱**

Tecnologías utilizadas:

- Lenguajes y herramientas: React, TypeScript, Tailwind CSS.
- Funcionalidades: React Hook Form, Zustand, useState, useEffect, Validación de formularios.

Este proyecto permite gestionar la información de pacientes veterinarios mediante un formulario dinámico y validado. Se pueden agregar, editar y eliminar pacientes de manera eficiente, asegurando que la información se mantenga organizada y accesible.

Las características incluyen:

- Registro de pacientes con nombre, propietario, síntomas, fecha, entre otros.

- Validación de datos con React Hook Form.

- Gestión del estado global con Zustand para una mejor administración de los pacientes.

- Persistencia de datos para mantener la información al recargar la página.

- Diseño responsivo y optimizado con Tailwind CSS.

Aprendizajes clave:

- Manejo eficiente de formularios con React Hook Form.

- Implementación de un estado global ligero con Zustand.

- Validación y gestión de datos en tiempo real.

- Mejora de la experiencia de usuario con un diseño claro y responsivo.

**6. Consulta de Precios de Criptomonedas y Temperatura en Diferentes Ciudades 📈💰🌦️**

Tecnologías utilizadas:

- Lenguajes y herramientas: React, TypeScript, CSS.
- Funcionalidades: Zustand, Zod, Axios, API de Criptomonedas, API de temperatura, useState, useEffect.

Se realizaron dos proyectos, uno consiste en la consulta de precios de criptomonedas y otro en la consulta de la temperatura en diferentes ciudades del mundo. Se hace uso de APIs externas para obtener información en tiempo real y mostrarla de forma clara e interactiva.

Las características incluyen:

Consulta de Criptomonedas:

- Obtención de precios en tiempo real de las 20 principales criptomonedas.
- Conversión de precios a diferentes monedas como dólar, peso colombiano, peso mexicano, euro, entre otras.
- Validación de datos con Zod.
- Gestión de estado global con Zustand.

Consulta de la Temperatura:

- Búsqueda de la temperatura actual en cualquier ciudad del mundo.
- Validación de datos con Zod.
- Consumo de una API de clima con Axios.
- Gestión de estado global con Zustand.

Aprendizajes clave:

- Consumo de múltiples APIs externas con Axios.
- Validación de datos con Zod para evitar errores en las consultas.
- Uso de Zustand para la gestión de estado global.
- Manejo de efectos y estados con useEffect y useState.

**7. Buscador de Bebidas 🍹🔎**

Tecnologías utilizadas:

- Lenguajes y herramientas: React, TypeScript, Tailwind CSS.
- Funcionalidades: React Router DOM, Zustand, Zod, Axios, Heroicons, Stores/Slices, Headless UI, API de Bebidas.

Este proyecto permite buscar bebidas según sus ingredientes y categorías, además de agregarlas a favoritos y visualizarlas en una página aparte.

Características:

- Consulta de bebidas a través de una API externa.
- Búsqueda por ingredientes y categorías.
- Almacenamiento de bebidas favoritas para consulta rápida.
- Navegación entre páginas utilizando React Router DOM.
- Interfaz moderna y accesible con Headless UI y Tailwind CSS.

Aprendizajes clave:

- Uso de React Router DOM para la navegación entre páginas.
- Implementación de Zustand con Stores y Slices para la gestión de estado global.
- Validación de datos con Zod para asegurar la integridad de la información.
- Consumo de APIs externas con Axios de manera eficiente.
- Implementación de Headless UI para mejorar la experiencia de usuario.
- Uso de Heroicons para mejorar la interfaz visual.
