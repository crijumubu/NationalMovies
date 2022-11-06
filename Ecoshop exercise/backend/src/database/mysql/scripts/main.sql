-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bsthufl5yllkam41to3y
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bsthufl5yllkam41to3y` DEFAULT CHARACTER SET utf8 ;
USE `bsthufl5yllkam41to3y` ;

-- -----------------------------------------------------
-- Table `bsthufl5yllkam41to3y`.`USERS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bsthufl5yllkam41to3y`.`USERS` ;

CREATE TABLE IF NOT EXISTS `bsthufl5yllkam41to3y`.`USERS` (
  `ID_USER` INT NOT NULL AUTO_INCREMENT,
  `USER_NAME` VARCHAR(45) NOT NULL,
  `USER_LASTNAME` VARCHAR(45) NOT NULL,
  `USER_EMAIL` VARCHAR(45) NOT NULL,
  `USER_PASSWORD` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_USER`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `EMAIL_UNIQUE` ON `bsthufl5yllkam41to3y`.`USERS` (`USER_EMAIL` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `bsthufl5yllkam41to3y`.`PRODUCTS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bsthufl5yllkam41to3y`.`PRODUCTS` ;

CREATE TABLE IF NOT EXISTS `bsthufl5yllkam41to3y`.`PRODUCTS` (
  `ID_PRODUCT` INT NOT NULL,
  `UNITS` INT NOT NULL,
  PRIMARY KEY (`ID_PRODUCT`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bsthufl5yllkam41to3y`.`PURCHASE_ORDERS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bsthufl5yllkam41to3y`.`PURCHASE_ORDERS` ;

CREATE TABLE IF NOT EXISTS `bsthufl5yllkam41to3y`.`PURCHASE_ORDERS` (
  `ID_ORDER` INT NOT NULL,
  `SUBTOTAL` VARCHAR(45) NOT NULL,
  `TOTAL` VARCHAR(45) NOT NULL,
  `USER_ID_USER` INT NOT NULL,
  `PRODUCT_ID_PRODUCT` INT NOT NULL,
  PRIMARY KEY (`ID_ORDER`),
  CONSTRAINT `fk_PURCHASE_ORDER_USER1`
    FOREIGN KEY (`USER_ID_USER`)
    REFERENCES `bsthufl5yllkam41to3y`.`USERS` (`ID_USER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PURCHASE_ORDER_PRODUCT1`
    FOREIGN KEY (`PRODUCT_ID_PRODUCT`)
    REFERENCES `bsthufl5yllkam41to3y`.`PRODUCTS` (`ID_PRODUCT`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_PURCHASE_ORDER_USER1_idx` ON `bsthufl5yllkam41to3y`.`PURCHASE_ORDERS` (`USER_ID_USER` ASC) VISIBLE;

CREATE INDEX `fk_PURCHASE_ORDER_PRODUCT1_idx` ON `bsthufl5yllkam41to3y`.`PURCHASE_ORDERS` (`PRODUCT_ID_PRODUCT` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `bsthufl5yllkam41to3y`.`BILLS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bsthufl5yllkam41to3y`.`BILLS` ;

CREATE TABLE IF NOT EXISTS `bsthufl5yllkam41to3y`.`BILLS` (
  `ID_BILL` INT NOT NULL,
  `DATE_ISSUE` TIMESTAMP(6) NOT NULL,
  `PURCHASE_ORDER_ID_ORDER` INT NOT NULL,
  PRIMARY KEY (`ID_BILL`),
  CONSTRAINT `fk_BILL_PURCHASE_ORDER1`
    FOREIGN KEY (`PURCHASE_ORDER_ID_ORDER`)
    REFERENCES `bsthufl5yllkam41to3y`.`PURCHASE_ORDERS` (`ID_ORDER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_BILL_PURCHASE_ORDER1_idx` ON `bsthufl5yllkam41to3y`.`BILLS` (`PURCHASE_ORDER_ID_ORDER` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `bsthufl5yllkam41to3y`.`FAVORITES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bsthufl5yllkam41to3y`.`FAVORITES` ;

CREATE TABLE IF NOT EXISTS `bsthufl5yllkam41to3y`.`FAVORITES` (
  `USER_ID_USER` INT NOT NULL,
  `PRODUCT_ID_PRODUCT` INT NOT NULL,
  CONSTRAINT `fk_FAVORITES_USER`
    FOREIGN KEY (`USER_ID_USER`)
    REFERENCES `bsthufl5yllkam41to3y`.`USERS` (`ID_USER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_FAVORITES_PRODUCT1`
    FOREIGN KEY (`PRODUCT_ID_PRODUCT`)
    REFERENCES `bsthufl5yllkam41to3y`.`PRODUCTS` (`ID_PRODUCT`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_FAVORITES_USER_idx` ON `bsthufl5yllkam41to3y`.`FAVORITES` (`USER_ID_USER` ASC) VISIBLE;

CREATE INDEX `fk_FAVORITES_PRODUCT1_idx` ON `bsthufl5yllkam41to3y`.`FAVORITES` (`PRODUCT_ID_PRODUCT` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
