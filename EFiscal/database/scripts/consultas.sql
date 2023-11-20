--  LISTAR LAS EMPRESAS QUE TIENEN MÁS DOCUMENTOS FALLIDOS QUE EXITOSOS --

SELECT empresa.razonsocial AS "Empresa", count(estado.idestado) AS "Total documentos fallidos" FROM empresa
JOIN numeracion ON empresa.idempresa = numeracion.idempresa
JOIN documento ON numeracion.idnumeracion = documento.idnumeracion
JOIN estado ON documento.idestado = estado.idestado
GROUP BY empresa.idempresa
HAVING COUNT(estado.exitoso IS FALSE) >= COUNT(estado.exitoso IS TRUE);
-- Para este caso, todas las empresas tienen la misma cantidad de documentos fallidos que existosos, esto en base a los datos insertados

-- LISTAR TODAS LAS EMPRESAS Y CUANTAS FACTURAS, NOTAS DÉBITO Y NOTAS CRÉDITO SE HAN GENERADO ENTRE DOS FECHAS DADAS --

SELECT empresa.razonsocial AS "Empresa", tipodocumento.descripcion, count(documento.iddocumento) AS "Total generadas" FROM empresa
JOIN numeracion ON empresa.idempresa = numeracion.idempresa
JOIN documento ON numeracion.idnumeracion = documento.idnumeracion
JOIN tipodocumento ON numeracion.idtipodocumento = tipodocumento.idtipodocumento
WHERE fecha BETWEEN '2023-06-01' AND '2024-02-16'
GROUP BY empresa.idempresa, tipodocumento.idtipodocumento
ORDER BY empresa.idempresa;

-- LISTAR TODAS LAS EMPRESAS Y POR CADA UNA, LA CANTIDAD DE DOCUMENTOS QUE ESTÁN EN CADA UNO DE LOS ESTADOS --

SELECT empresa.razonsocial AS "Empresa", estado.descripcion AS "Estado", COUNT(documento.iddocumento) AS "Cantidad de documentos" FROM empresa
JOIN numeracion ON empresa.idempresa = numeracion.idempresa
JOIN documento ON numeracion.idnumeracion = documento.idnumeracion
JOIN estado ON documento.idestado = estado.idestado
GROUP BY empresa.idempresa, estado.descripcion
ORDER BY empresa.idempresa;

-- LISTAR LAS EMPRESAS QUE TIENEN MÁS DE 3 DOCUMENTOS NO EXITOSOS --

SELECT empresa.razonsocial AS "Empresa" FROM empresa
JOIN numeracion ON empresa.idempresa = numeracion.idempresa
JOIN documento ON numeracion.idnumeracion = documento.idnumeracion
JOIN estado ON documento.idestado = estado.idestado
GROUP BY empresa.idempresa
HAVING COUNT(estado.exitoso IS FALSE) > 3;

-- LISTAR POR CADA EMPRESA, CUANTOS DOCUMENTOS TIENE NÚMERO O FECHA POR FUERA DEL RANGO Y VIGENCIA PERMITIDO POR LA DIAN. --

SELECT empresa.razonsocial AS "Empresa", COUNT(documento.iddocumento) AS "Documentos fuera de rango" FROM empresa
JOIN numeracion ON empresa.idempresa = numeracion.idempresa
JOIN documento ON numeracion.idnumeracion = documento.idnumeracion
WHERE documento.numero NOT BETWEEN numeracion.consecutivoinicial AND numeracion.consecutivofinal
AND documento.fecha NOT BETWEEN numeracion.vigenciainicial AND numeracion.vigenciafinal
GROUP BY empresa.idempresa;

-- TENIENDO EN CUENTA QUE LAS FACTURAS SUMAN Y LAS NOTAS DEBITO SUMAN, LISTAR TODAS LAS EMPRESAS Y EL TOTAL DE DINERO RECIBIDO (BASE+IMPUESTOS). NO INCLUYA LAS NOTAS CRÉDITO PUES ESAS RELACIONAN DINERO QUE SALE, NO QUE ENTRA. --

SELECT empresa.razonsocial AS "Empresa", SUM(documento.base + documento.impuestos) AS "Total dinero recibido" FROM empresa
JOIN numeracion ON empresa.idempresa = numeracion.idempresa
JOIN documento ON numeracion.idnumeracion = documento.idnumeracion
JOIN tipodocumento ON numeracion.idtipodocumento = tipodocumento.idtipodocumento
WHERE tipodocumento.descripcion != 'Nota Credito'
GROUP BY empresa.idempresa, documento.base, documento.impuestos;

-- Para este caso, teniendo en cuenta las inserciones realizadas, todas las empresas tienen el mismo total de dinero recibido

-- TENIENDO EN CUENTA QUE EL “NÚMERO COMPLETO” DE UN DOCUMENTO ES LA CONCATENACIÓN DE SU PREFIJO Y SU NÚMERO (EJEMPLO PREFIJO PRUE, NÚMERO 654987, NUMERO COMPLETO ES PRUE654987), DETERMINE SI HAY ALGÚN “NÚMERO COMPLETO” REPETIDO EN LA BASE DE DATOS (DOS EMPRESAS PUEDEN TENER NUMERACIONES CON EL MISMO PREFIJO) Y  CUANTAS VECES SE REPITE --

SELECT CONCAT(numeracion.prefijo, documento.numero) AS "Numero completo", COUNT(*) AS "Repeticiones" FROM numeracion
JOIN documento ON numeracion.idnumeracion = documento.idnumeracion
GROUP BY numeracion.prefijo, documento.numero
HAVING COUNT(*) > 1;