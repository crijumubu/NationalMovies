-- CREACION DE LA TABLA EMPRESA --

CREATE TABLE IF NOT EXISTS empresa (
    idempresa SERIAL PRIMARY KEY,
    identificacion VARCHAR(16) NOT NULL,
    razonsocial VARCHAR(256) NOT NULL
);

-- CREACION DE LA TABLA TIPODOCUMENTO --

CREATE TABLE IF NOT EXISTS tipodocumento (
    idtipodocumento SMALLSERIAL PRIMARY KEY,
    descripcion VARCHAR(256) NOT NULL
);

-- CREACION DE LA TABLA NUMERACION --

CREATE TABLE IF NOT EXISTS numeracion (
    idnumeracion SERIAL PRIMARY KEY,
    idtipodocumento INT NOT NULL,
    idempresa INT NOT NULL,
    prefijo VARCHAR(8) NOT NULL,
    consecutivoinicial INT NOT NULL,
    consecutivofinal INT NOT NULL,
    vigenciainicial DATE NOT NULL,
    vigenciafinal DATE NOT NULL,
    CONSTRAINT fkempresa FOREIGN KEY (idempresa) REFERENCES empresa(idempresa) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fktipodocumento FOREIGN KEY (idtipodocumento) REFERENCES tipodocumento(idtipodocumento) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CREACION DE LA TABLA ESTADO --

CREATE TABLE IF NOT EXISTS estado (
  idestado SMALLSERIAL PRIMARY KEY,
  descripcion VARCHAR(256) NOT NULL,
  exitoso BOOLEAN NOT NULL
);

-- CREACION DE LA TABLA DOCUMENTO --

CREATE TABLE IF NOT EXISTS documento (
  iddocumento SERIAL PRIMARY KEY,
  idnumeracion INT NOT NULL,
  idestado INT NOT NULL,
  numero INT NOT NULL,
  fecha DATE NOT NULL,
  base DECIMAL NOT NULL,
  impuestos DECIMAL NOT NULL,
  CONSTRAINT fkestado FOREIGN KEY (idestado) REFERENCES estado(idestado) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fknumeracion FOREIGN KEY (idnumeracion) REFERENCES numeracion (idnumeracion) ON DELETE NO ACTION ON UPDATE NO ACTION
);