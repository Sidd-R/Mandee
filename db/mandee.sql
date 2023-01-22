-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: mandee
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `deals`
--

DROP TABLE IF EXISTS `deals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deals` (
  `did` int NOT NULL AUTO_INCREMENT,
  `pid` int DEFAULT NULL,
  `fid` int DEFAULT NULL,
  `bid` int DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `revenue` decimal(10,0) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `picture` varchar(90) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`did`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deals`
--

LOCK TABLES `deals` WRITE;
/*!40000 ALTER TABLE `deals` DISABLE KEYS */;
INSERT INTO `deals` VALUES (1,NULL,1,2,12,6,72,'Fri, 20 Jan 2023 23:13:39 GMT','image-1674255566487.peas.png','gururam sellers',1),(2,NULL,1,2,55,55,3025,'Fri, 20 Jan 2023 23:14:06 GMT','image-1674255973009.rajma.png','gururam sellers',0),(3,NULL,3,4,66,5,330,'Fri, 20 Jan 2023 23:32:41 GMT','image-1674257423539.maize.png','shankpal retailers',1),(4,NULL,3,4,44,16,704,'Fri, 20 Jan 2023 23:33:06 GMT','image-1674257460091.breans.png','shankpal retailers',0),(5,NULL,5,6,15,5,75,'Sat, 21 Jan 2023 04:52:05 GMT','image-1674276581259.spinach.png','vk retailers',1),(6,NULL,3,6,62,16,992,'Sat, 21 Jan 2023 04:52:32 GMT','image-1674257460091.breans.png','vk retailers',0),(7,NULL,7,8,15,13,195,'Sat, 21 Jan 2023 06:08:55 GMT','image-1674281189047.peas.png','satyam retailers',1),(8,NULL,7,8,30,89,2670,'Sat, 21 Jan 2023 06:09:24 GMT','image-1674281223099.breans.png','satyam retailers',0);
/*!40000 ALTER TABLE `deals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `company` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `utime` varchar(45) DEFAULT NULL,
  `etime` varchar(45) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `fid` int DEFAULT NULL,
  `picture` varchar(90) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `mode` int DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'peas','harjot farms','vegetables','Fri, 20 Jan 2023 22:59:26 GMT','Tue, 24 Jan 2023 00:00:00 GMT',34,'pune',1,'image-1674255566487.peas.png',1,1,'9878765',12),(2,'rajma','harjot farms','pulses','Fri, 20 Jan 2023 23:06:13 GMT','Thu, 26 Jan 2023 00:00:00 GMT',55,'pune',1,'image-1674255973009.rajma.png',1,0,'9878765',55),(3,'maize','harpal farms','pulses','Fri, 20 Jan 2023 23:30:23 GMT','Fri, 27 Jan 2023 00:00:00 GMT',22,'gujurat',3,'image-1674257423539.maize.png',1,1,'98348634',66),(4,'beans','harpal farms','vegetables','Fri, 20 Jan 2023 23:31:00 GMT','Fri, 03 Feb 2023 00:00:00 GMT',16,'gujurat',3,'image-1674257460091.breans.png',1,0,'98348634',62),(5,'spinach','ram farms','vegetables','Sat, 21 Jan 2023 04:49:41 GMT','Thu, 26 Jan 2023 00:00:00 GMT',56,'punjab',5,'image-1674276581259.spinach.png',1,1,'9734873478',15),(6,'peas','ram farms','vegetables','Sat, 21 Jan 2023 04:50:15 GMT','Mon, 23 Jan 2023 00:00:00 GMT',23,'punjab',5,'image-1674276615594.peas.png',1,0,'9734873478',16),(7,'peas','jogi farms','vegetables','Sat, 21 Jan 2023 06:06:29 GMT','Tue, 24 Jan 2023 00:00:00 GMT',57,'Ludhiana, Punjab',7,'image-1674281189047.peas.png',1,1,'97637637',15),(8,'beans','jogi farms','vegetables','Sat, 21 Jan 2023 06:07:03 GMT','Wed, 25 Jan 2023 00:00:00 GMT',89,'Ludhiana, Punjab',7,'image-1674281223099.breans.png',1,0,'97637637',30);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `company` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `profile` int DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `rating` decimal(10,0) DEFAULT NULL,
  `picture` varchar(90) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'harjot farms','h@s','123','9878765',0,'pune',NULL,'image-1674255469509.farmer.png','harjot singh'),(2,'gururam sellers','g@r','123','97885566',1,'bhatinda',NULL,'image-1674256387155.retailer.png','gururam'),(3,'harpal farms','hs','123','98348634',0,'gujurat',NULL,'image-1674257312863.retailer.png','harpal singh'),(4,'shankpal retailers','sc','123','9786755665',1,'punjab',NULL,'image-1674257518749.retailer.png','shankpal chaudhary'),(5,'ram farms','yv','123','9734873478',0,'punjab',NULL,'image-1674276430233.farmer.png','ram yadav'),(6,'vk retailers','vk','123','97867577',1,'punjab',NULL,'image-1674276686230.retailer.png','vikas'),(7,'jogi farms','js','123','97637637',0,'Ludhiana, Punjab',NULL,'image-1674281056698.farmer.png','joginder singh'),(8,'satyam retailers','sj','123','986766767',1,'Punjab',NULL,'image-1674281281825.retailer.png','satyam');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-22 17:21:19
