-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ecoshop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecoshop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecoshop` DEFAULT CHARACTER SET utf8 ;
USE `ecoshop` ;

-- -----------------------------------------------------
-- Table `ecoshop`.`USER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecoshop`.`USERS` ;

CREATE TABLE IF NOT EXISTS `ecoshop`.`USERS` (
  `ID_USER` INT NOT NULL AUTO_INCREMENT,
  `USER_NAME` VARCHAR(45) NOT NULL,
  `USER_LASTNAME` VARCHAR(45) NOT NULL,
  `USER_EMAIL` VARCHAR(45) NOT NULL,
  `USER_PASSWORD` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_USER`),
  UNIQUE INDEX `EMAIL_UNIQUE` (`USER_EMAIL` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecoshop`.`PRODUCT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecoshop`.`PRODUCT` ;

CREATE TABLE IF NOT EXISTS `ecoshop`.`PRODUCTS` (
  `ID_PRODUCT` INT NOT NULL,
  `UNITS` INT NOT NULL,
  PRIMARY KEY (`ID_PRODUCT`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecoshop`.`PURCHASE_ORDER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecoshop`.`PURCHASE_ORDERS` ;

CREATE TABLE IF NOT EXISTS `ecoshop`.`PURCHASE_ORDERS` (
  `ID_ORDER` INT NOT NULL,
  `SUBTOTAL` VARCHAR(45) NOT NULL,
  `TOTAL` VARCHAR(45) NOT NULL,
  `USER_ID_USER` INT NOT NULL,
  `PRODUCT_ID_PRODUCT` INT NOT NULL,
  PRIMARY KEY (`ID_ORDER`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecoshop`.`BILL`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecoshop`.`BILLS` ;

CREATE TABLE IF NOT EXISTS `ecoshop`.`BILLS` (
  `ID_BILL` INT NOT NULL,
  `DATE_ISSUE` TIMESTAMP(6) NOT NULL,
  `PURCHASE_ORDER_ID_ORDER` INT NOT NULL,
  PRIMARY KEY (`ID_BILL`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecoshop`.`FAVORITES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecoshop`.`FAVORITES` ;

CREATE TABLE IF NOT EXISTS `ecoshop`.`FAVORITES` (
  `USER_ID_USER` INT NOT NULL,
  `PRODUCT_ID_PRODUCT` INT NOT NULL)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
