-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: pma_db
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chargesheet`
--

DROP TABLE IF EXISTS `chargesheet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `chargesheet` (
  `charge_sheet_no` varchar(45) NOT NULL,
  `chargesheet_date` varchar(45) DEFAULT NULL,
  `Time` varchar(45) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `crime` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`charge_sheet_no`),
  KEY `complaint_no_idx` (`charge_sheet_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chargesheet`
--

LOCK TABLES `chargesheet` WRITE;
/*!40000 ALTER TABLE `chargesheet` DISABLE KEYS */;
INSERT INTO `chargesheet` VALUES ('1','09/08/2012','09:00','pk','rape');
/*!40000 ALTER TABLE `chargesheet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complaint`
--

DROP TABLE IF EXISTS `complaint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `complaint` (
  `complaint_num` int(11) NOT NULL AUTO_INCREMENT,
  `complaint_type` varchar(45) DEFAULT NULL,
  `Accuse_name` varchar(45) DEFAULT NULL,
  `Location` varchar(45) DEFAULT NULL,
  `Date` varchar(45) DEFAULT NULL,
  `Time` varchar(45) DEFAULT NULL,
  `complaint_description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`complaint_num`),
  UNIQUE KEY `complaint_num_UNIQUE` (`complaint_num`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaint`
--

LOCK TABLES `complaint` WRITE;
/*!40000 ALTER TABLE `complaint` DISABLE KEYS */;
INSERT INTO `complaint` VALUES (12,'robbery','gajanan','santeguli','13/10/2018','2:0Am','robbery has been happend at night');
/*!40000 ALTER TABLE `complaint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `police`
--

DROP TABLE IF EXISTS `police`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `police` (
  `police_id` int(11) NOT NULL AUTO_INCREMENT,
  `police_name` varchar(45) DEFAULT NULL,
  `Police_Address` varchar(45) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `compliant no handled by him` int(11) DEFAULT NULL,
  `FIR_No` varchar(45) NOT NULL,
  PRIMARY KEY (`police_id`,`FIR_No`)
) ENGINE=InnoDB AUTO_INCREMENT=421 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `police`
--

LOCK TABLES `police` WRITE;
/*!40000 ALTER TABLE `police` DISABLE KEYS */;
INSERT INTO `police` VALUES (420,'pk','ankola','99999999',420,'9');
/*!40000 ALTER TABLE `police` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `police_fir`
--

DROP TABLE IF EXISTS `police_fir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `police_fir` (
  `Fir_no` varchar(45) DEFAULT NULL,
  `Date` varchar(45) DEFAULT NULL,
  `Time` varchar(45) DEFAULT NULL,
  `Chargesheet_no` varchar(45) NOT NULL,
  PRIMARY KEY (`Chargesheet_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `police_fir`
--

LOCK TABLES `police_fir` WRITE;
/*!40000 ALTER TABLE `police_fir` DISABLE KEYS */;
INSERT INTO `police_fir` VALUES ('9','09/08/2018','07:00','1');
/*!40000 ALTER TABLE `police_fir` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prisoner`
--

DROP TABLE IF EXISTS `prisoner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `prisoner` (
  `prisoner_id` int(11) NOT NULL AUTO_INCREMENT,
  `Enter_date` varchar(45) DEFAULT NULL,
  `Release_date` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  `prisoner_name` varchar(45) DEFAULT NULL,
  `crime` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`prisoner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prisoner`
--

LOCK TABLES `prisoner` WRITE;
/*!40000 ALTER TABLE `prisoner` DISABLE KEYS */;
INSERT INTO `prisoner` VALUES (1,'07/10/2012','09/03/2018','2018','roshion','Rape');
/*!40000 ALTER TABLE `prisoner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `victim`
--

DROP TABLE IF EXISTS `victim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `victim` (
  `Victim_id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Phone_Number` varchar(45) DEFAULT NULL,
  `Gender` varchar(45) DEFAULT NULL,
  `complaint_no` int(11) DEFAULT NULL,
  PRIMARY KEY (`Victim_id`),
  UNIQUE KEY `Victim_id_UNIQUE` (`Victim_id`),
  UNIQUE KEY `complaint_no_UNIQUE` (`complaint_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `victim`
--

LOCK TABLES `victim` WRITE;
/*!40000 ALTER TABLE `victim` DISABLE KEYS */;
/*!40000 ALTER TABLE `victim` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-15  0:07:40
