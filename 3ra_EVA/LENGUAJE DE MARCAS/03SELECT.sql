-- Alternativa al operador "->>" pero solo se puede utilizar en el where
SELECT nombre, caracteristicas ->> 'marca' as marca, caracteristicas ->> 'color' as color
from productos

-- WHERE caracteristicas ->> 'marca' = 'Versace'
where caracteristicas @> '{"marca": "Versace"}'

-- Clave 'color'= beige

SELECT *
from productos
WHERE caracteristicas ->> 'color' = 'Beige'

-- Recupera todas las clvaes de un campo JSON mediante la funcion jsonb_object_keys(campo a buscar)
SELECT DISTINCT(jsonb_object_keys(caracteristicas))
from productos;

