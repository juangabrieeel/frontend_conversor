
# Frontend del Proyecto de Conversiones

Este proyecto es la interfaz de usuario para una aplicación de conversiones. Permite al usuario realizar conversiones y guardar sus resultados para su visualización posterior.

## Tecnologías utilizadas

- **React** con **Styled-Components** para el diseño dinámico.
- **JavaScript** para la lógica de la aplicación.
- **CSS** integrado mediante `styled-components` para un diseño modular y reutilizable.
- **Responsive Design** para garantizar que la aplicación sea accesible en múltiples dispositivos.

## Características principales

- Conversor funcional que permite realizar cálculos específicos.
- Sección para guardar conversiones y mostrarlas en un diseño de dos columnas.
- Diseño atractivo y moderno con sombras y bordes redondeados.
- Compatible con dispositivos móviles y pantallas grandes.


## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v14 o superior recomendado)
- **npm** o **yarn**

---

## Instalación

Sigue los pasos a continuación para ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/juangabrieeel/frontend_conversor.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd nombre-del-repo
   ```

3. Instala las dependencias:
   ```bash
   npm install
   # o si usas yarn
   yarn install
   ```

---

## Uso

1. Inicia el servidor de desarrollo:
   ```bash
   npm start
   # o con yarn
   yarn start
   ```

2. Abre tu navegador y navega a `http://localhost:3000`.

3. Explora las funciones del conversor y guarda conversiones para verlas en la sección de "Guardados".

---

## Estructura del proyecto

El proyecto sigue una estructura organizada basada en componentes:

```
src/
├── components/        # Componentes reutilizables como Header, Footer, SavedCards
├── styles/            # Archivos de styled-components
├── App.js             # Componente principal
├── index.js           # Punto de entrada
└── ...
```

---

## Personalización

- **Colores y temas:** Puedes cambiar los colores en los archivos de `styled-components` dentro de `src/styles`.
- **Funciones adicionales:** Añade más lógica en los componentes o expande las características según sea necesario.

---

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes sugerencias o mejoras:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica o corrección:
   ```bash
   git checkout -b mi-nueva-caracteristica
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega una nueva característica"
   ```
4. Sube tus cambios a tu fork:
   ```bash
   git push origin mi-nueva-caracteristica
   ```
5. Crea un pull request en el repositorio original.

---
