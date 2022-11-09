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
  `USER_PASSWORD` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`ID_USER`),
  UNIQUE INDEX `EMAIL_UNIQUE` (`USER_EMAIL` ASC) VISIBLE)
ENGINE = InnoDB;


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
-- Table `bsthufl5yllkam41to3y`.`SHOPPING_CART`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bsthufl5yllkam41to3y`.`SHOPPING_CART` ;

CREATE TABLE IF NOT EXISTS `bsthufl5yllkam41to3y`.`SHOPPING_CART` (
  `ID_CART` INT NOT NULL AUTO_INCREMENT,
  `SUBTOTAL` DECIMAL NOT NULL,
  `TOTAL` DECIMAL NOT NULL,
  `USERS_ID_USER` INT NOT NULL,
  PRIMARY KEY (`ID_CART`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bsthufl5yllkam41to3y`.`BILLS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bsthufl5yllkam41to3y`.`BILLS` ;

CREATE TABLE IF NOT EXISTS `bsthufl5yllkam41to3y`.`BILLS` (
  `ID_BILL` INT NOT NULL,
  `DATE_ISSUE` TIMESTAMP(6) NOT NULL,
  `PURCHASE_ORDER_ID_ORDER` INT NOT NULL,
  `SHOPPING_CART_ID_CART` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_BILL`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bsthufl5yllkam41to3y`.`FAVORITES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bsthufl5yllkam41to3y`.`FAVORITES` ;

CREATE TABLE IF NOT EXISTS `bsthufl5yllkam41to3y`.`FAVORITES` (
  `USER_ID_USER` INT NOT NULL,
  `PRODUCT_ID_PRODUCT` INT NOT NULL)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bsthufl5yllkam41to3y`.`SHOPPING_CART_has_PRODUCTS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bsthufl5yllkam41to3y`.`SHOPPING_CART_has_PRODUCTS` ;

CREATE TABLE IF NOT EXISTS `bsthufl5yllkam41to3y`.`SHOPPING_CART_has_PRODUCTS` (
  `SHOPPING_CART_ID_CART` INT NOT NULL,
  `PRODUCTS_ID_PRODUCT` INT NOT NULL,
  `UNITS_PRODUCTS_CART` INT NOT NULL,
  PRIMARY KEY (`SHOPPING_CART_ID_CART`, `PRODUCTS_ID_PRODUCT`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;