drop table usuarios
-- Crea una tabla usuarios con un id, nombre y un campo preferencias de tipo JSONB.
create TABLE usuarios (
	id_usuario serial PRIMARY key,
	nombre varchar(100), 
	preferencias jsonb NULL
);

-- Inserta al menos tres usuarios con preferencias  (idioma (por ejemplo "es", o "en"), tema ("oscuro", "claro"), notificaciones (true, false)).


insert into usuarios(nombre, preferencias)
values(
	'Valerio',
	'
	{
		"idioma": "ES",
		"tema": "claro",
		"notificaciones": "true"
	}'
);

insert into usuarios(nombre, preferencias)
values(
	'Johan',
	'
	{
		"idioma": "ES",
		"tema": "Oscuro",
		"notificaciones": "false"
	}'
),
(
	'Sebas',
	'
	{
		"idioma": "EN",
		"tema": "Oscuro",
		"notificaciones": "true"
	}'
);
-- 2.      Select de usuarios con el nombre y su tema
select nombre, preferencias ->> 'tema' from usuarios
--3.      Buscar usuarios que tengan activadas las notificaciones.

select nombre, preferencias ->> 'notificaciones' as notificaciones from usuarios WHERE preferencias ->> 'notificaciones' = 'true'

-- 4.      Actualizar el tema de un usuario a "oscuro".
update usuarios 
set preferencias = jsonb_set(preferencias, '{tema}', '"Oscuro"')
where nombre = 'Valerio';

-- 5
update usuarios 
set preferencias = jsonb_set(preferencias, '{newletter}', '"False"')
