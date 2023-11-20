-- INSERCION PARA LA TABLA EMPRESA --

INSERT INTO empresa (identificacion, razonsocial) VALUES ('890507890-4', 'Movistar Colombia S.A.'), ('900059238-5', 'Alkosto S.A.'), ('830037248-0', 'Alpina Productos Alimenticios S.A.');
-- SELECT * FROM empresa;

-- INSERCION PARA LA TABLA TIPODOCUMENTO --

INSERT INTO tipodocumento (descripcion) VALUES ('Factura'), ('Nota Debito'), ('Nota Credito');
-- SELECT * FROM tipodocumento;

-- INSERCION PARA LA TABLA ESTADO --

INSERT INTO estado (descripcion, exitoso) VALUES ('Recibido', true), ('En validacion', true), ('Sin errores', true);
INSERT INTO estado (descripcion, exitoso) VALUES ('Formato Incorrecto', false), ('Con errores', false), ('Fuera de Vigencia', false), ('Fuera de Rango', false);
-- SELECT * FROM estado;

-- INSERCION PARA LA TABLA NUMERACION --

DO $$

DECLARE

    idnotadebito INT;
    idfactura INT;
    idnotacredito INT;

    idmovistar INT;
    idalkosto INT;
    idalpina INT;

BEGIN

    SELECT idtipodocumento INTO idnotadebito FROM tipodocumento WHERE descripcion = 'Nota Debito';
    SELECT idtipodocumento INTO idfactura FROM tipodocumento WHERE descripcion = 'Factura';
    SELECT idtipodocumento INTO idnotacredito FROM tipodocumento WHERE descripcion = 'Nota Credito';

    SELECT idempresa INTO idmovistar FROM empresa WHERE identificacion = '890507890-4';
    SELECT idempresa INTO idalkosto FROM empresa WHERE identificacion = '900059238-5';
    SELECT idempresa INTO idalpina FROM empresa WHERE identificacion = '830037248-0';

    INSERT INTO numeracion (idtipodocumento, idempresa, prefijo, consecutivoinicial, consecutivofinal, vigenciainicial, vigenciafinal)
    VALUES
        ( idnotadebito, idmovistar, 'PRUE', 654987, 654988, '2023-01-01', '2023-12-31'),
        ( idnotadebito, idmovistar, 'PRUE', 954082, 954083, '2023-02-01', '2024-01-31'),
        ( idfactura, idmovistar, 'PRUE', 765214, 765215, '2023-06-01', '2024-05-31'),
        ( idfactura, idmovistar, 'PRUE', 415304, 415305, '2023-03-03', '2024-03-02'),
        ( idnotacredito, idmovistar, 'PRUE', 246978, 246979, '2023-06-01', '2023-12-31'),
        ( idnotacredito, idmovistar, 'PRUE', 924320, 924321, '2023-08-17', '2024-08-16'),
        ( idnotadebito, idalkosto, 'TSTE', 784519, 784520, '2023-02-15', '2023-08-14'),
        ( idnotadebito, idalkosto, 'TSTE', 453188, 453189, '2023-09-02', '2024-09-01'),
        ( idfactura, idalkosto, 'TSTE', 933757, 933758, '2023-03-03', '2024-11-02'),
        ( idfactura, idalkosto, 'TSTE', 260892, 260893, '2023-04-21', '2024-04-20'),
        ( idnotacredito, idalkosto, 'TSTE', 604533, 604534, '2023-07-10', '2024-07-09'),
        ( idnotacredito, idalkosto, 'TSTE', 774041, 774042, '2023-11-16', '2024-11-15'),
        ( idnotadebito, idalpina, 'AHCI', 326649, 326650, '2023-06-28', '2024-06-27'),
        ( idnotadebito, idalpina, 'AHCI', 409940, 409941, '2023-01-31', '2023-09-30'),
        ( idfactura, idalpina, 'PRUE', 765214, 765215, '2023-11-05', '2024-11-04'),
        ( idfactura, idalpina, 'TSTE', 260892, 260893, '2023-03-30', '2024-03-29'),
        ( idnotacredito, idalpina, 'AHCI', 833175, 833176, '2023-04-05', '2024-04-04'),
        ( idnotacredito, idalpina, 'AHCI', 769903, 769904, '2023-07-21', '2024-01-20');

END $$;
-- SELECT * FROM numeracion;

-- INSERCION PARA LA TABLA DOCUMENTO --

DO $$

DECLARE

    idformatoincorrecto INT;
    idconerrores INT;
    idrecibido INT;
    idenvalidacion INT;
    idsinerrores INT;
    idfueradevigencia INT;
    idfueraderango INT;

BEGIN

    SELECT idestado INTO idformatoincorrecto FROM estado WHERE descripcion = 'Formato Incorrecto';
    SELECT idestado INTO idconerrores FROM estado WHERE descripcion = 'Con errores';
    SELECT idestado INTO idrecibido FROM estado WHERE descripcion = 'Recibido';
    SELECT idestado INTO idenvalidacion  FROM estado WHERE descripcion = 'En validacion';
    SELECT idestado INTO idsinerrores FROM estado WHERE descripcion = 'Sin errores';
    SELECT idestado INTO idfueradevigencia FROM estado WHERE descripcion = 'Fuera de Vigencia';
    SELECT idestado INTO idfueraderango FROM estado WHERE descripcion = 'Fuera de Rango';

    INSERT INTO documento (idnumeracion, idestado, numero, fecha, base, impuestos)
    VALUES
        (1, idformatoincorrecto, 983793 , '2023-07-15', 200000, 40000),
        (1, idconerrores, 719899 ,'2023-07-16', 200000, 40000),
        (1, idrecibido, 826639 ,'2023-07-17', 200000, 40000),
        (1, idenvalidacion, 787734 ,'2023-07-18', 200000, 40000),
        (1, idsinerrores, 242469 ,'2023-07-19', 200000, 40000),
        (1, idfueradevigencia, 640832 , '2024-01-01', 200000, 40000),
        (2, idformatoincorrecto, 983793 , '2024-01-05', 200000, 40000),
        (2, idconerrores, 719899 ,'2024-01-06', 200000, 40000),
        (2, idrecibido, 826639 ,'2024-01-07', 200000, 40000),
        (2, idenvalidacion, 787734 ,'2024-01-08', 200000, 40000),
        (2, idsinerrores, 242469 ,'2024-01-09', 200000, 40000),
        (2, idfueraderango, 640832 , '2024-02-01', 200000, 40000),
        (3, idformatoincorrecto, 370656 , '2024-05-01', 200000, 40000),
        (3, idconerrores, 843075 ,'2024-05-02', 200000, 40000),
        (3, idrecibido, 579458 ,'2024-05-03', 200000, 40000),
        (3, idenvalidacion, 231676 ,'2024-05-04', 200000, 40000),
        (3, idsinerrores, 326023 ,'2024-05-05', 200000, 40000),
        (3, idfueradevigencia, 416691 , '2024-06-01', 200000, 40000),
        (4, idformatoincorrecto, 183974 , '2024-02-01', 200000, 40000),
        (4, idconerrores, 634067 ,'2024-02-02', 200000, 40000),
        (4, idrecibido, 291803 ,'2024-02-03', 200000, 40000),
        (4, idenvalidacion, 296945 ,'2024-02-04', 200000, 40000),
        (4, idsinerrores, 790610 ,'2024-02-05', 200000, 40000),
        (4, idfueraderango, 251539 , '2024-03-03', 200000, 40000),
        (5, idformatoincorrecto, 277288 , '2023-12-01', 200000, 40000),
        (5, idconerrores, 589782 , '2023-12-02', 200000, 40000),
        (5, idrecibido, 884988 ,'2023-12-03', 200000, 40000),
        (5, idenvalidacion, 478206 ,'2023-12-04', 200000, 40000),
        (5, idsinerrores, 615197 ,'2023-12-05', 200000, 40000),
        (5, idfueradevigencia, 646196 , '2024-01-01', 200000, 40000),
        (6, idformatoincorrecto, 285286 , '2024-08-01', 200000, 40000),
        (6, idconerrores, 907861 , '2024-08-02', 200000, 40000),
        (6, idrecibido, 853321 ,'2024-08-03', 200000, 40000),
        (6, idenvalidacion, 600816 ,'2024-08-04', 200000, 40000),
        (6, idsinerrores, 798487 ,'2024-08-05', 200000, 40000),
        (6, idfueraderango, 321847 , '2024-08-17', 200000, 40000),
        (7, idformatoincorrecto, 366914 , '2023-08-01', 200000, 40000),
        (7, idconerrores, 838244 , '2023-08-02', 200000, 40000),
        (7, idrecibido, 656685 ,'2023-08-03', 200000, 40000),
        (7, idenvalidacion, 145615 ,'2023-08-04', 200000, 40000),
        (7, idsinerrores, 876461 ,'2023-08-05', 200000, 40000),
        (7, idfueradevigencia, 934566 , '2023-08-15', 200000, 40000),
        (8, idformatoincorrecto, 126707 , '2024-08-01', 200000, 40000),
        (8, idconerrores, 907227 , '2024-08-02', 200000, 40000),
        (8, idrecibido, 530070 ,'2024-08-03', 200000, 40000),
        (8, idenvalidacion, 368932 ,'2024-08-04', 200000, 40000),
        (8, idsinerrores, 763595 ,'2024-08-05', 200000, 40000),
        (8, idfueraderango, 429141 , '2024-09-02', 200000, 40000),
        (9, idformatoincorrecto, 330025 , '2024-10-01', 200000, 40000),
        (9, idconerrores, 818197 , '2024-10-02', 200000, 40000),
        (9, idrecibido, 709418 ,'2024-10-03', 200000, 40000),
        (9, idenvalidacion, 409426 ,'2024-10-04', 200000, 40000),
        (9, idsinerrores, 361546 ,'2024-10-05', 200000, 40000),
        (9, idfueradevigencia, 980124 , '2024-11-03', 200000, 40000),
        (10, idformatoincorrecto, 502670 , '2024-03-01', 200000, 40000),
        (10, idconerrores, 937730 , '2024-03-02', 200000, 40000),
        (10, idrecibido, 145162 ,'2024-03-03', 200000, 40000),
        (10, idenvalidacion, 550026 ,'2024-03-04', 200000, 40000),
        (10, idsinerrores, 492651 ,'2024-03-05', 200000, 40000),
        (10, idfueraderango, 704241 , '2024-04-21', 200000, 40000),
        (11, idformatoincorrecto, 724546 , '2024-06-01', 200000, 40000),
        (11, idconerrores, 620071 , '2024-06-02', 200000, 40000),
        (11, idrecibido, 171954 ,'2024-06-03', 200000, 40000),
        (11, idenvalidacion, 377249 ,'2024-06-04', 200000, 40000),
        (11, idsinerrores, 141611 ,'2024-06-05', 200000, 40000),
        (11, idfueradevigencia, 550590 , '2024-07-10', 200000, 40000),
        (12, idformatoincorrecto, 115710 , '2024-11-01', 200000, 40000),
        (12, idconerrores, 115710 , '2024-11-02', 200000, 40000),
        (12, idrecibido, 587717 ,'2024-11-03', 200000, 40000),
        (12, idenvalidacion, 444892 ,'2024-11-04', 200000, 40000),
        (12, idsinerrores, 842141 ,'2024-11-05', 200000, 40000),
        (12, idfueraderango, 288249 , '2024-11-16', 200000, 40000),
        (13, idformatoincorrecto, 518714 , '2024-06-01', 200000, 40000),
        (13, idconerrores, 708764 , '2024-06-02', 200000, 40000),
        (13, idrecibido, 737995 ,'2024-06-03', 200000, 40000),
        (13, idenvalidacion, 472926 ,'2024-06-04', 200000, 40000),
        (13, idsinerrores, 534486 ,'2024-06-05', 200000, 40000),
        (13, idfueradevigencia, 347127 , '2024-06-28', 200000, 40000),
        (14, idformatoincorrecto, 182916 , '2023-09-01', 200000, 40000),
        (14, idconerrores, 974877 , '2023-09-02', 200000, 40000),
        (14, idrecibido, 622867 ,'2023-09-03', 200000, 40000),
        (14, idenvalidacion, 485847 ,'2023-09-04', 200000, 40000),
        (14, idsinerrores, 960545 ,'2023-09-05', 200000, 40000),
        (14, idfueraderango, 323095 , '2023-10-01', 200000, 40000),
        (15, idformatoincorrecto, 858165 , '2024-10-01', 200000, 40000),
        (15, idconerrores, 609539 , '2024-10-02', 200000, 40000),
        (15, idrecibido, 142059 ,'2024-10-03', 200000, 40000),
        (15, idenvalidacion, 431164 ,'2024-10-04', 200000, 40000),
        (15, idsinerrores, 385705 ,'2024-10-05', 200000, 40000),
        (15, idfueradevigencia, 197520 , '2024-11-05', 200000, 40000),
        (16, idformatoincorrecto, 666932 , '2024-03-01', 200000, 40000),
        (16, idconerrores, 752589 , '2024-03-02', 200000, 40000),
        (16, idrecibido, 849345 ,'2024-03-03', 200000, 40000),
        (16, idenvalidacion, 804795 ,'2024-03-04', 200000, 40000),
        (16, idsinerrores, 530070 ,'2024-03-05', 200000, 40000),
        (16, idfueraderango, 368932 , '2024-03-30', 200000, 40000),
        (17, idformatoincorrecto, 763595 , '2024-03-01', 200000, 40000),
        (17, idconerrores, 429141 , '2024-03-02', 200000, 40000),
        (17, idrecibido, 330025 ,'2024-03-03', 200000, 40000),
        (17, idenvalidacion, 818197 ,'2024-03-04', 200000, 40000),
        (17, idsinerrores, 709418 ,'2024-03-05', 200000, 40000),
        (17, idfueradevigencia, 409426 , '2024-04-05', 200000, 40000),
        (18, idformatoincorrecto, 361546 , '2024-01-01', 200000, 40000),
        (18, idconerrores, 980124 , '2024-01-02', 200000, 40000),
        (18, idrecibido, 502670 ,'2024-01-03', 200000, 40000),
        (18, idenvalidacion, 937730 ,'2024-01-04', 200000, 40000),
        (18, idsinerrores, 145162 ,'2024-01-05', 200000, 40000),
        (18, idfueraderango, 550026 , '2024-01-21', 200000, 40000);

END $$;
-- SELECT * FROM documento;