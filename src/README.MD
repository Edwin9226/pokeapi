

-correr el proyecto Frontend 


pnpm dev
http://localhost:5173/

clean aechitect estructura de carpetas -- reutilizables(root..src)

--adapters: son los que reciben información la adaptan y la devuelven. Exista algun cambio a nievel de aplicación
* assets:multimedia y tipografía
--components
* constexts: manejador de estados dentro de una vista.
--hooks..custom hooks
--interceptores : son los que intereptan lasllamadas y respuestas de una API
--models: representación de nuestras entidades
* pages: de una aplicación
* redux: manejador de estados , states .. representa cada entidad. store:manejados por el store, el lugar único de la verdad.
--services: llamadas a la API.
--styled-components: componentes de estilo
utilities:



useState [name,update_value]
const [state, setState] = React.useState(intialValue);

Hoooks:
** useState

** useEffect
useEffect(callback, [dependencies])
useEffect(callback, [empty])// solo se emjecuta una vez


** useRef
const ref = useRef(initialValue)