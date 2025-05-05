update productos 
set caracteristicas = jsonb_set(caracteristicas, '{quantity}', '5') 
where caracteristicas @>'{"marca": "Versace"}'

update productos 
set caracteristicas = jsonb_set(caracteristicas, '{stock}', '5') 
where caracteristicas @>'{"marca": "Versace"}'

select * from productos

/*
	filtrar todos los registros por solo los que tengan una clave en concreto dentro del campo JSON
*/
select * from productos
where caracteristicas ? 'stock'