# **Guía de la Clase: Explorador del Clima con JavaScript Vanilla**

## **1. Introducción**
- **DOM (Document Object Model):** Representa la estructura de una página HTML como un árbol. Permite manipular el contenido y diseño desde JavaScript.  
  - Ejemplo: Acceder al texto de un `<div>` usando:  
    ```javascript
    document.getElementById('mi-div').innerText;
    ```

- **API (Application Programming Interface):** Una interfaz que conecta sistemas para intercambiar datos. Usaremos la API de OpenWeatherMap para obtener información climática.  

- **Promesas y Async/Await:**
  - **Promesas:** Objetos que representan un valor disponible ahora, en el futuro, o nunca.
  - **Async/Await:** Simplifica el manejo de promesas para hacer el código más legible.


## **2. Presentación del Proyecto**
La aplicación:
1. El usuario ingresa el nombre de una ciudad.
2. Consulta la API de OpenWeatherMap.
3. Muestra el clima en pantalla.
4. Guarda un historial de búsquedas recientes.
5. Cambia el fondo dinámicamente según el clima.

```mermaid
graph TD
    A[Usuario ingresa a la página] --> B[Usuario escribe el nombre de una ciudad en el formulario]
    B --> C[Evento 'submit' del formulario se activa]
    C --> D[Se envía solicitud a la API de OpenWeatherMap]
    D --> E{Respuesta de la API}
    E -- Datos correctos --> F[Actualizar el DOM con información del clima]
    F --> G[Mostrar la temperatura, descripción y cambiar el fondo dinámicamente]
    E -- Error en la respuesta --> H[Mostrar mensaje de error al usuario]
    F --> I[Guardar ciudad en historial de búsquedas]
    I --> J[Actualizar el DOM con el historial]

  ```
---

## **3. Configuración de la API de OpenWeatherMap**
1. Crear una cuenta en [https://openweathermap.org/](https://openweathermap.org/).
2. Obtener una API key gratuita.
3. Entender la URL para consultas:  
   ```url
   https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric
   ```
    {CITY_NAME}: Nombre de la ciudad.
    {API_KEY}: Tu clave personal.
    units=metric: Temperatura en Celsius.

**Ejemplo de consulta para "Medellín":**
```url
https://api.openweathermap.org/data/2.5/weather?q=Medellin&appid=TU_API_KEY&units=metric
```

Resultado esperado (JSON):
```json
{
  "main": {
    "temp": 25.5
  },
  "weather": [
    { "main": "Clouds", "description": "scattered clouds" }
  ]
}
```

## **4. Implementación del Proyecto**

```scss
/weather-app
│
├── /src
│   ├── index.html
│   ├── styles.css
│   ├── /js
│       ├── app.js          // Punto de entrada
│       ├── weather.js      // Lógica para obtener datos climáticos
│       ├── dom-utils.js    // Manipulación del DOM
│       ├── history.js      // Gestión del historial de búsquedas
│   ├── /assets
│       ├── sunny.jpg       // Fondo soleado
│       ├── rainy.jpg       // Fondo lluvioso
│       ├── cloudy.jpg      // Fondo nublado
```

### Parte 1: Configurar HTML y CSS
1. Crear un archivo index.html con una estructura básica que incluya un formulario para buscar ciudades y secciones para mostrar el clima y el historial.
2. Crear un archivo styles.css para estilizar la página.
   * Definir un diseño limpio con un fondo dinámico.


### Parte 2: Introducción al JavaScript del proyecto
1. Crear el archivo app.js como punto de entrada.
2. Introducir el concepto de módulos y explicar cómo separar la lógica en diferentes archivos (weather.js, dom-utils.js, history.js).
   
### Parte 3: Conectar con la API
1. Crear el archivo weather.js para manejar la consulta a la API.
   * Explicar fetch y cómo manejar promesas con then y catch.
   * Introducir async/await para simplificar la lógica.
  
### Parte 4: Manipular el DOM
1. Crear el archivo dom-utils.js para actualizar la interfaz.
2. Implementar funciones como updateDomElement y changeBackground.
3. Usar eventos para capturar la acción del usuario al enviar el formulario.

### Parte 5: Historial de búsquedas
1. Crear el archivo history.js para manejar el historial.
2. Implementar funciones para agregar búsquedas al historial y mostrarlas en una lista.
3. Explicar cómo usar arreglos y ciclos for para renderizar los elementos en el DOM.

### Parte 6: Integración final y pruebas
1. Conectar todos los módulos en app.js.
2. Probar la aplicación con varias ciudades y verificar las funcionalidades:
   * Consulta del clima.
   * Cambio de fondo dinámico.
   * Historial actualizado.
