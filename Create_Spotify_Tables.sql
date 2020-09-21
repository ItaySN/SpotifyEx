CREATE DATABASE  IF NOT EXISTS `spotify` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `spotify`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spotify
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `artist_id` int unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `cover_img` longtext,
  `created_at` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `albums_artist_id_foreign` (`artist_id`),
  CONSTRAINT `albums_artist_id_foreign` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,3,'Layla Keyom Yair','https://www.eviatarbanai.co.il/f-users/user_102191/website_102420/images/thumbs/W_960_0_071.jpg','2009-11-15'),(3,2,'Nagat Li Balev','https://upload.wikimedia.org/wikipedia/he/c/c6/Nagtlibalev.jpg','2016-04-25'),(5,6,'Scorpion','https://theartsdesk.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/mastimages/drake%20scorpion.png?itok=ADy9gtDp','2016-06-29'),(6,7,'Divide','https://img.discogs.com/HqrnHRdS6LmuHKpuHpH5aEee2_Y=/fit-in/600x574/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11325144-1584310645-7958.jpeg.jpg','2017-03-03'),(7,8,'Beauty Behind the Madness','https://upload.wikimedia.org/wikipedia/he/f/fb/The_Weeknd_Beauty_Behind_The_Madness.jpg','2015-08-28'),(8,1,'A Night At The Opera','https://upload.wikimedia.org/wikipedia/ru/4/41/A_Night_At_The_Opera%28Queen%29.jpg','1975-11-21');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cover_img` longtext,
  `upload_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'Queen','https://www.beatnik.co.il/wp-content/uploads/2018/12/QUEEN-II.jpg','2020-09-11'),(2,'Eyal Golan','https://images.globes.co.il/images/NewGlobes/big_image_800/2017/n08_golan800.jpg','2020-09-11'),(3,'Evyatar Banay','https://i.ytimg.com/vi/4YoMWnEnSNU/maxresdefault.jpg','2020-09-11'),(6,'Drake','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFRUXFxcZFxgYFxcXGRoaGhgXGBUdGhcYHSggGholHRcYITEiJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0PDisZFRkrKysrNys3KystKysrLS0tKy0rKysrKysrKysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA8EAABAwIDBAgFAwIGAwEAAAABAAIRAyEEEjEFQVFhBhMicYGRofAyQrHB0QdS8RThFSMzQ2KyFnKCJP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAEH/2gAMAwEAAhEDEQA/AObIiiRhAYCEImuSigDQg0IBG0oEhLhApXegVTpypfVQBYeSbwzbq1weBdVIa3eddw9ygr6dMXsPJSKeHnRoPgtRhejQY6Xg1APiy2a0fM6dLad6taeBYGNbTLXNcC4OyiIsWETrqQZvI0QYn/xvEVhmp0+zpchumuvcUr/wuqAHPqUWjfD8xHeBv5arb1sbTptz165LMsNZLXZuBytF7X36Ki/xBz6fV4fCvdkmHOFr5ZIcLTO5BVUeg9V5AbVYSZ+WoBG4gkRdRsT0NxLPlYb37bRG68mFfvokOc6viYzmerol1TWQbiSeA5wrPZbXEgswuWR2X16rnWERLflOsX3oOaYrAVKfx03N3SQY89Co+5dYxO1GthuIqhjcrzGRsP7W5gmOyLcZuqGvgMDiGudTcKZA7L8rmg62c3LAAgXHNBhnDRGFeY7o29resovZXYPiLD2hJIuw3iQqMhAGpU2SRw+iU5AthvcKXSaOAUFpupuGKCzwbB+0eQWbctNhBZZklAAEIQHNBAMqCKfcIIDRIygSgJqNBiNAIRtKCCBQTzAmGhWexMA6vUbTYLuPkN5KC06O7CfiCSLU2QXu4DgBvPJdE/w1lJlMtqNpMaZBIlztAAbTmM7lY7H2YzDNbSbMakxYwWgk6AXNpUTHuL3NDg5oAkkvIyk3BDWkyZA1gCCgjYvIGuDM5zFpIcNQDEBoI7DnTra6p/8AE3VAWMDDWIAdlzQ0t3EuGUNDdRImDCXUrOMVHnKxujqnzwSWyLXgGBedeaqsRjKmIJo0C2hREnN2Q4yZImd5tFtEDdarhqZBDXV6ohsaQG65dcrNRfWSpRpVarSaz2UqIcIa2p2QOBOp1+ggKJinUMLlDXguHxET1jz2S08DdQqzqlTLTrS8iT1YccjAby5zd4gkzeyCw/xFjHdXgqbQ7QP+MADQgz2TDeG9JOyqzwDicS1g1sTEayHWtedNfFO0X0aDGOYBmeGkNmBexJPxc/AKmxm2gAQ4Mc4i0SQ27o4wSHcZEILd1fA4SOr/AMx4/d2gBEXgePikYjpu7LFClTpAyHDILjUEAaLLtfTLnGoHaNEAiZOu7dBTFR4iQYLY3kg8IgzwQX+H6Tu/aC5xjO05Kk/DYsiddDM3R46jQxbXupOArDtEZQwmPikAw6eI8QqBmIcTIyAmxtbW1vBN53Mfn0dM23GeCBqpTc0lrhB5pD1aY3H/ANQ0F4AqN3gfEOB4Ebo4qqcgMKbhgojSpdBBaYU2WbK0WFKzyBJQJRoSgTB4IIR3IIDIQhFKMlAbQlpATiAghCEIygAC6B+meFydbinCQ3LTbEm7j2jAvYR5rAg6LqPRKKeDpOMsBLibkOJdaeY1tfRBdUsUWvc7rC4mzTlhoymRIF8t4A4ys3j8QRmJc0OI6okB0RBBg3BEuiT91Mq44DMXgAjNElzhNoLmxAmdd0BULSQ9oeQQBLg6Ik37PECxOs+KBiq0VahfUDupFmjO1rrdncBJI0G+CmcVjocHZml1iwZDYTBJI1uI5qLTrMPZd2wIaARl4kH1PPgmMXiGtAyxaWkAfMIA7QMlu/xKA6tbqnOLXdZWdcvyyANTknfztCbwOPYw6T2TnJiXPdvnhyVe0Oc4ZZmI3iI4FWGH2BUebkCUDGN2garyTYaADcBppyCap0w4mLH5e9arZvQ9mr3E8tFqtldF8K3/AG5POSg5W+k4WgX18r+X3QZgXXuLXsdy7phui2FsepZbSyn0ei+FknqKcxEwg88DCuGjT3pX9K8CfPxXoiv0PwbyHGi2QItIt4KqxX6dYNzi4Ne2dwdayDgpYd8xyS6oBGaRzF/d/suv4/8ATKiT2KjgLwCARfmFznpPsGpg3hj8pDhLS3Q3uL79PNBQNKm4Uyoak4ZBaYcrPuCv6BWf3oAAjKIIAoEwPcIIsvcjQLKJGUQQG1HKII0CkAgO9ABAAV1rZbgylh2GCRTaSXGAxsfERpeSBvXJh9l1DDuLqNM54mnTNgCQMpBAbEm10Eba+0eraAA2XTmcXCZsWjKd1tfRZOttABzjvdBsZE6OjNBFwrnpbihTIa2YyAXa0EOFw6w3m/jyWJe6SgmVq17b4n+FHqPm+m+2nkkDkkx9kE7ZlQBw4LZ7OqgwsDRdC0+yK8oNzhWyrzAs0WZ2TiZWq2edEFzhGKwptUTCiynsagOECEJRhAzUYuc/q1s8Owzam+m8eTrH1hdJcFlOnuGz4OuP+BPlf7IPP7gpWGamHi+5SMO5BOo6qi7leU1RuKBKB1QKEoFZUElBAaIc4SiEkIBvQlEgQgWEoJCUgU3vvwXUuiNIVaFEnMMrItaSDBHO4XLG8l139MgXYMw0uLC5tr63+6DA9Ma7nYl4c64NxuEWEeELPOWs2/smq+pUflc0gmQQQfI+ay9RhGs28ECSQkOKMoBsoChW+yasCFVBs2UmliCzTX+UHQNhgm5tMLebNAgQVxShtDEP+Frz3CFKbtTGUh8484Qd8oO5qZTcFwbZ3TnEUz2nT33W46N9OG1yGEEHjuKDowCAVVhsfNtVJOL4iEExUPS5k4arH7H/APUqn2/+oFDDHLdzuA081jdpfqQ91g1uVw8YKDnT3J6i5Rp14e4S2mEFrS+ypCFbYdyqigTvQQm6IhAhBLhBApyIGEYQywgIO3BBpRID36IFo49+/BEltKCTs7COq1GUWavcGjxIHkNfBdfbinYai2lh6nVUmWblAL3kfE9znTqbrmXRCoG4ph3w+O/I7KtFtPEHrGtm0D6ILDafSfEstiMtam4GC5uVw7nNiCub44kvJJ/hbDpSx3Vt0yxa9zCxze29o4kD1QNI2K12nSp0yW7x9RY+CrGuQS8Dhyd3vxUt+HbTMkbt91e9F8K0iTqpe2dhZ5gQgpNlbXcXCnTaZJAAAknzsE/tbF1GVDTxDSyWuIN3umDli4brE20Vhsbo26m4OBIPEard4DZ2cgvuRpLGk87nRByRmzaoc1r2w5zQ5vOROU81J2VX6qo2QW3v/ddf2lhA1hhozEakCfosRtfZcEvLZcbyg3PReqHwdUrpzVeykBTIa57gyToJ+6o+iGKyQCtvtCg2q3tAEW1APoUHBekGzjh62SqWtOUvDn9udSIaBvIjfEqNQ2rTNCq2pQp5skMe0Rc8b/Tguw9Idj9aGhzG20ORrgOESLLl/TnYrcLSpNHz1HknyjTvKDGBONTYTgN0E3DlVrlOoOUElAhqMmUeW8okBZkEeTmggUiJRkIkCQjIRDxSoQLaLrXv6P0sPheuxAc95AOQHKGzpJF5UboXsUVH9fUH+WwjKDo527wGvktNtfaVN7XMfcOkEd9rflBiMHjqAqsflNLK4H4i9sb5BuLKz2rXMtg3bIniBofJZvG4Y03RqNx4hT8LiczYJuBHlp+PBBd9LMaHZcvwhoAPhdZcvyua9uoIPkZTjWuMgmBwOijP4cEEnauI6yoXj5r+evqospMpTkGk2HjsoC32ysU2o0SuUYJ8LWbE2gWoOo4LDt1hXDGhoWY2Pj5AC0LKmYCEDGIp5rrJ9JcU2mO1ruC2m0azaVJz3GA1pJ5LixxL8diSSexJyjkEF1snFkuDhpK6fsqoalPVYLBYIUhldA0W16O6AWIKCcDIg93quffqvgZwoqfse0+DuyfqFvQ6HObzn7LIfqdVjA1eZYPN4QcQSwklGDvQP0jdRoT9PyTBG9AUoQihAmEBeKJCEECp80EEECWcffJScFhXVXtptu5xju4nuAUVq1fQykGirXOoAY3hJu70A80GiNcUqbaNOMreyOZ3nmsdtzEw8tGu8/RXONxoYC8mOHCTKyOJrF5k6lA4ytm7LzI3HgeISHNLHa35aH8hNAJ5rwYBmNx4f2QTmUKlSm6oBLaZaHkbs0wY4WKg1yNB4lb39McLmZjWOEgsp+pesdtrAGhVcwgxJyyIkeKCtI3JSTKKeKCTRMFXGCxEEFUlI8VPpP0HvRB0PYOLsFt9mVZvK5X0frQfKV0HZ+ODWgkoEdP8Uf6d1MbxfuXJtl43qKgJtlmCRZdK6QdIqDGkvI5CZlcu2ptY1XuLWhrToNfFBO2z0prVyDmaANzQfUrX9C+l5ayKk98ffQLmtOiC0nfPcFOqbRdUptpu+T4Yt58UHdMNUql7nvygEdgNuY1knx3LGfq9jQKFKn++pPg0fkhQugfSeCMNV0/23GbE/KZ9FX/qrWL61NoEtY0yeDnGfCwCDBD36paQUsaoHaYUclPU0yUACBQhEQgJBHHuQiQKCMt4IAoggIALfbFwxZg2f8i558bD0CxGDoGo9tMauIA8ffot/tfFMYwMBADWgDwsgz21YdbRZ+tSg2kjjCtcZimm25QjXA0MjhuQQz/KNKcPNJcEG0/TvpEyg59GpAbVDQH8CCYB5X+iPplTFYuIF2fCRvvBusU3hzVucW57Qcx7AAO8gaA++KCoeCkk8kqpv1jdaLbrJoH7IHCf7clIw9W8SodrJQiyDZ7CqXkqP0i284uyMJyjfxVdsbHlsg6RzUHFOzPteUAOeoREuPvetBsrokXgPr1W0maj5nHlG5RMHQMhpfkBi+X6rUYDZbGx1s1AbB0kDyHeEDlDB7OoQHU+u0kvcZ7w0WClVdl7Mb2m0i7Ne7yA0HhB1Vk3oXhqgzszARMZjraFKpdG6FNh6xsjcJk3FtUGD29sZlF1GrhquZj3hvaiWu1bca2+iRsir1+JrvqGWkxG4/K3wgJvbhbhnZGOLg1rss/veInwCzWz3PNRrWE9pzdDw0QTOkOyv6erHyG7T9lVhbHp8WwwH4tVjUD1J2iaS6SSQgIhFCNBAmQgjnkggAKCOLooQW/RpwY59Z3+23s/+zrN+6hY3Hve4mSJJSmGKH/tU/6j8lRIQET71QJQI8DwTz8K8NzZZbxEHzjRA1CB4IkYQAJ/DVMpkH8JsJIG5A5iWtk5bjd9woo5p5IhAlLakxySpgoHWuLU5hWkun8eajsT1Ej89yDQYSs0DtaQpuD29TpnKDI4GY/sqPLmadLeoTdHZJJiRyJ0meSDc4Pp/SpjLD+6AQplbptReCRmJ4EQO/wXO6Wx3kEjQGCACSNdQipYbKC4uuPv7KBramLdVqve4ky4x3blN6HYLrMS2fhZ23HkNB4mFS1HSp+yNsvw7XimBL9Xb7aAHcLoJfSvF9ZXO+FRyjqVCSSTcpLigdom90RR0RwREoElBC6Ii6BUhBDMeH0QQJKNDclDUIHKruwwcASfE/2TBK6SzYeFqHMaPqY8ALBDEbEwwECi0ecoOaEqy2RXcHFu6Dbd7urDamw2xNKQQfhOh4QePeqzZ7gzrMwOaANNJILu7QICx+FymRod3BRGqyw+MbBDxmaZ7+XioNVoB7Nxu7uaBARhCENEALUmISpQJQJKQU8eSbIQBp/sjYYukgIOKCXSq31lTqGNi4tuH8KoDrWRlx4oLirtAxaZvM+XvuUZ1aRBi+/6yoDnFLp0i7u4oB1cutoUTmRaFOFONFFxB1QRpSvFEAjMeCBbNUhLpBJQAFBAeSVToud8IJ+iBuBwRKV/Q1OA8wggZBQGqII0G8p1njQmPe9W+FxIcP8AMvwkesqiL7aIHE5Rdw7r+kaILzFbNBuwAjgbrM9IdrPpDq22J1LmMcI3DMRJ8VJHSQM5EHTu7lEx+2KGLblqNLDucInvgoMw/FF2obc7mgfRIBVtU6PuImlUZUG4fA4+Dreqr8VgatK1Sm5ve0x4HQoGWpUJBPNKLrWQGAhl4+iKbIs6BUWSCfujSZQGI80ktTlGmXODRqVIx+C6twEyCJ0jvQRQ30SSEeVKp0iTAEknTvQBgmN/JWeHw7o+HKI1cQE3UIoDKy9QjtO1jkOahVSXGSSe9BZ1aLmibOHEEH6KorVNyMPLCCDCmuwoqBtT4Gmc02g8kFewI1MNek2zWZ+breQTeMoZXCARN4/CBunqnKVBzjYKRh8KGw6qY4N3lNVsWTZoyt4D7oHXNp0/i7bvRNVce86GOQ/KjwknmgPr3fuPmUEnL7uggUUYN0YKEXQbevS4bo981U4xzo3j3xVqQb6H1TWIEyCJ5+HCIQZHEOMn+U0Hq6xeDB3eeqqalAtQSMJtEs0lW9DpS8a3HCfJZuAlBBrWbSwtX/UoU5teIPiRCedsvA1Phz0z/wAXSPJ0rHBSMPUI0cQOWqCy2l0dewF1NwqN5Wd5Kjcwg3ELQ0NouFgTz9nwUfaGJB1Ak+aCmAlIcE9WiZH1SPd0Fhs1uRj63CQO+35CViiHYemeBj6/gIOMYdo/c4+k/gI2Xw55O9/VFV2VT9lkNz1D8ot3+/qoI4x4qdh2/wD53xvcPq1EQC8kknUnz5oZuCkYjBuphpJ13b1GHkgfwuGBmo/4Wx4ngmcVii83sBoN38qY17HU+rL8hBm4sdfym2totN3F54AQEDezsMXuBg5Zud3v8qZjcY1rjkAL4gu4dydxmKyU4gBzvlHyj8qlOiB1ry50kz3pJQoo5QJlE4pRaiKBKCXmQQKQCCAQbGpItYwlUb6jjoRqUK0TMAj3wQaQDPqPwgRiMM0Xv4X/AIVRiaAOv1mFbPqiLzoPcKPXALRaJjx4TCDOVMOde9N5N6scWwDd9ZVfVdPPwQEnA/y5Jpv4SiUDhqWskPcSEk8UkjcgU5EUAED6+96C02g2KNIaX+yawomjUHj9D9lN2s1uVge7Lc7pJsExgaAyvyuDgRHAgwdQiqsu+iudkMIYZFiZAO/gfOFDwOCGXratm6gfu/skf1jn1WumBIgcBMeqIf27U7TW8AfX+FV71c491Fz8ryWuAF/VRP6SiLmrI5C/3QQLkwLlWFKi2j233dubw70T8axlqLb/ALjcqvzOcSbk796B2tUL3FztUhoRN+qUNEB0ggUdMXQlASIkI0lAqPd0EnLzRoFDcjb90EEGrbp4JdTQd6CCBGJ+X/5TLffkUaCCn2jqffBRquiCCBhu7wS0SCBsJY3IIIDduSqOo8Pqgggs+kGjP/r7JrYervD6oIIp/b/ws8VU4X4294QQQp7a/wDqHw/6hRAgggQ7Q96t9gaO7mfdBBEQMR8Tu8/VNe/RBBBZ7D1PcmsB/qjvP3RIIBjv9Sp4fZQjogggNBBBB//Z',NULL),(7,'Ed Sheeran ','https://i2.wp.com/hkpub.net/wp-content/uploads/2019/07/Ed-Sheeran-Press-Photo-2-Credit-Mark-Surridge-crop.jpg?fit=1200%2C1068&ssl=1',NULL),(8,'The Weeknd ','https://media.gq.com/photos/55d25378606992214f1ecc7d/16:9/w_2560%2Cc_limit/The-Weekend-GQ-2015-01.jpg',NULL);
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interactions`
--

DROP TABLE IF EXISTS `interactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interactions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `song_id` int unsigned NOT NULL,
  `play_count` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `interactions_user_id_foreign` (`user_id`),
  KEY `interactions_song_id_foreign` (`song_id`),
  CONSTRAINT `interactions_song_id_foreign` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE,
  CONSTRAINT `interactions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interactions`
--

LOCK TABLES `interactions` WRITE;
/*!40000 ALTER TABLE `interactions` DISABLE KEYS */;
INSERT INTO `interactions` VALUES (3,1,2,7),(5,1,4,24),(13,4,2,18),(14,1,7,13),(15,4,11,21),(16,1,24,34),(17,1,23,55),(18,1,17,45),(19,1,7,120),(20,1,26,22),(21,1,3,44),(22,1,1,78),(23,1,11,45),(24,1,22,34);
/*!40000 ALTER TABLE `interactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist_songs`
--

DROP TABLE IF EXISTS `playlist_songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist_songs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `playlist_id` int unsigned NOT NULL,
  `song_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `playlist_songs_playlist_id_foreign` (`playlist_id`),
  KEY `playlist_songs_song_id_foreign` (`song_id`),
  CONSTRAINT `playlist_songs_playlist_id_foreign` FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`id`) ON DELETE CASCADE,
  CONSTRAINT `playlist_songs_song_id_foreign` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_songs`
--

LOCK TABLES `playlist_songs` WRITE;
/*!40000 ALTER TABLE `playlist_songs` DISABLE KEYS */;
INSERT INTO `playlist_songs` VALUES (1,1,3),(2,1,4),(3,1,1),(4,1,5),(5,2,2),(6,2,6),(7,2,7),(8,2,3),(9,2,4),(10,3,4),(11,2,17),(12,3,24),(13,1,20),(14,2,16),(15,3,15),(16,2,27),(17,1,25),(18,2,1),(19,3,3),(20,2,18),(21,1,17),(22,1,7),(23,3,24);
/*!40000 ALTER TABLE `playlist_songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlists`
--

DROP TABLE IF EXISTS `playlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlists` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cover_img` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlists`
--

LOCK TABLES `playlists` WRITE;
/*!40000 ALTER TABLE `playlists` DISABLE KEYS */;
INSERT INTO `playlists` VALUES (1,'Relaxing','https://images-na.ssl-images-amazon.com/images/I/41tua%2BBRX-L.png','2020-09-12 12:20:34'),(2,'Party_mood','https://lh3.googleusercontent.com/proxy/_KrB1ghjyTPtl9-DIPzXTdwrHRYv6Byk7VW_N0_KRXMmM1H-SIcpq0h9Q3o4CaaIQhuwkO2U6p6gCuwEdb-JYJ75QV9JgaKPwtQIyaz6S_ofcwF2-Jhq5IDhWXNCr0xIgDCoXvDmtadWtCM8fqx9sfGGNUlf3a8o','2020-09-12 12:16:22'),(3,'Rock','https://comps.canstockphoto.com/cool-vector-rock-music-skull-with-vector-clipart_csp56901502.jpg','2020-08-02 14:33:20');
/*!40000 ALTER TABLE `playlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `artist_id` int unsigned NOT NULL,
  `album_id` int unsigned DEFAULT NULL,
  `length` time NOT NULL,
  `youtube_link` varchar(255) NOT NULL,
  `lyrics` longtext,
  `track_number` int DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `songs_artist_id_foreign` (`artist_id`),
  KEY `songs_album_id_foreign` (`album_id`),
  CONSTRAINT `songs_album_id_foreign` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE SET NULL,
  CONSTRAINT `songs_artist_id_foreign` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'Yafa Kalevana',3,1,'00:03:16','https://www.youtube.com/watch?v=hwHPkNl-cxo','סופות מתוכי ומחוץ מוטטו את קירות הבית\nואת מתוכי זרמת מפוזרת וחזרת עייפה ושותקת\nעוד פעם כשהייתי ילד היית בתוכי נשברת\nפעם שלך ופעם אחרת על יופייך לזרים מוותרת\nלא אבקש דבר\nאת לא צריכה להוכיח לי כלום\nהורידי אודם שפייך\nאבק דרכים רחצי מרגלייך\nהיי לי קרובה וזוכרת, היי לי רק לי מיוחדת\nהיי לי אחות מקודשת היי יחפה ומנוחמת\nמי זאת עולה\nיפה כלבנה',NULL,NULL),(2,'Aba',3,1,'00:04:29','https://www.youtube.com/watch?v=Ibm-DP36Umo','אבא, אני רוצה לעמוד מולך\nלהאמין שאתה אבא טוב\nאבא, אני צריך לדעת שאתה אוהב אותי\nככה סתם אבא טוב\nאבא, אני רוצה להיות בטוח בכל ליבי\nשלמסע הזה יהיה סוף טוב\nשכל מה שאני עובר בדרך\nיהפוך חולשה לעוצמה גדולה\nאבא, אני רוצה לחזור אלי\nלמצוא אותך שם איתי\nבמקור שלי אני טוב גמור, אבא\nושם אני מאמין בעצמי\nיונתי בחגווי הסלע\nהשמיעיני את קולך\nתשירי לי שיר חדש, חדש\nשיאיר ליבי ואת מיתרי\n',NULL,NULL),(3,'Ksheat Ito',2,3,'00:04:35','https://www.youtube.com/watch?v=g4t2GDIoquE','פתאום הלכת ממני הלך איתך גם החלום  \nאל בית ריק חזרתי מכתב השארת לי  \nובו אמרת הכול \nכתבת שאת אהבת אותי  \nשבאמת היית שלי \nאך את עצמך מצאת איתו \nנתת לו את הכול  \n\nאני לבד יושב לי וחושב לי היכן אהבתי \nהיכן טעיתי מה לא נכון עשיתי \nשכך פגעה בי בגאוותי\nואל נא תחפשיני כשאת תביני אני אהיה רחוק\nעוד יום עובר לי ורק יותר כואב לי\nהלב נשבר לי כשאת איתו\n\nזוכר איך שאהבנו ואת היית לי לאישה\nימים יפים ידענו\nאיך כך פגעה בי אותה פרידה \nרציתי שתהיי שלי שכול הזמן תהיי מולי \nעכשיו אני נשרף לי באש אהבתי\n',NULL,NULL),(4,'Kol Hahalomot',2,3,'00:04:39','https://www.youtube.com/watch?v=rgqHT-iy8kA','איך הימים איך הימים עוברים עליי שהיא איננה\nכבר אין בי כוח שוב לברוח מעצמי\nלאן אפנה לאן אפנה כל הלילות חושב עליה\nעוד אשתגע ממחשבות והדמעות לבד זולגות\n\nהיא לקחה את כל החלומות \nאיך הלב נשבר לחתיכות\nכל מה שהיה לי נתתי לה\nכל מה שעובר עליי בגללה\n\nתמונה אחת תמונה אחת רק נשארה לי למזכרת\nאיתך חלמתי ואהבתי כמו עיוור\nעד סוף ימיי עד סוף ימיי אני אשב כאן אחכה לך\nליבי קורא לך עייפתי דיי לא אל תלכי חזרי אליי\n',NULL,NULL),(5,'Mikan Vead Hanetzach',2,3,'00:04:00','https://www.youtube.com/watch?v=NwDvbCkwGXo','אחרי הכל תראי אותנו \nאיך שניצחנו\nביחד את כל הקשיים  \n\nאת הסיבה שיש לי שקט \nכשאת צוחקת \nכל כך רגוע לי בפנים  \n\nאיתך מכאן ועד הנצח \nבים של אושר \nאת צבעת את עולמי \n\nורק איתך אני זורח\nאת כמו חלום \nמתגשם כאן למולי\n\nמבטיח לך לשמור עלינו \nכמו על העיניים \nהירוקות שלך\nאיך באת לי משמיים \n\nתראי אנחנו שניים\nכאן אוחזים ידיים\nאני אלך איתך באש וגם במים\nיחד מול כולם  \n',NULL,NULL),(6,'The Show Must Go On',1,8,'00:04:22','https://www.youtube.com/watch?v=t99KH0TR-J4','Empty spaces, what are we living for?\nAbandoned places, I guess we know the score, on and on\nDoes anybody know what we are looking for?\nAnother hero, another mindless crime\nBehind the curtain, in the pantomime\nHold the line\nDoes anybody want to take it anymore?\nThe show must go on\nThe show must go on, yeah\nInside my heart is breaking\nMy makeup may be flaking\nBut my smile, still, stays on\nWhatever happens, I\'ll leave it all to chance\nAnother heartache, another failed romance, on and on\nDoes anybody know what we are living for?\nI guess I\'m learning\nI must be warmer now\nI\'ll soon be turning, round the corner now\nOutside the dawn is breaking\nBut inside in the dark I\'m aching to be free\nThe show must go on\nThe show must go on\nInside my heart is breaking\nMy makeup may…\n\n',NULL,NULL),(7,'Bohemian Rhapsody',1,8,'00:06:00','https://www.youtube.com/watch?v=fJ9rUzIMcZQ','Mama, just killed a man\nPut a gun against his head\nPulled my trigger, now he\'s dead\nMama, life had just begun\nBut now I\'ve gone and thrown it all away\nMama, ooh\nDidn\'t mean to make you cry\nIf I\'m not back again this time tomorrow\nCarry on, carry on\nAs if nothing really matters\nToo late, my time has come\nSends shivers down my spine\nBody\'s aching all the time\nGoodbye everybody, I\'ve got to go\nGotta leave you all behind and face the truth\nMama, ooh\nI don\'t want to die\nI sometimes wish I\'d never been born at all\n',NULL,NULL),(8,'Radio Ga Ga',1,8,'00:05:53','https://www.youtube.com/watch?v=azdwsXLmrHE','I\'d sit alone and watch your light\nMy only friend through teenage nights\nAnd everything I had to know\nI heard it on my radio\nYou gave them all those old time stars\nThrough wars of worlds invaded by Mars\nYou made \'em laugh, you made \'em cry\nYou made us feel like we could fly (radio)\nSo don\'t become some background noise\nA backdrop for the girls and boys\nWho just don\'t know or just don\'t care\nAnd just complain when you\'re not there\nYou had your time, you had the power\nYou\'ve yet to have your finest hour\nRadio (radio)\nAll we hear is radio ga ga\nRadio goo goo\nRadio ga ga\nAll we hear is radio ga ga\nRadio blah blah\nRadio, what\'s new?\nRadio, someone still loves you\nWe watch the shows, we watch the stars\nOn videos for hours and hours\nWe hardly need to use our ears\nHow music changes through the years\nLet\'s hope you never leave old friend\nLike all good things on you we depend\nSo stick around \'cause we might miss you\nWhen we grow tired of all this visual\nYou had your time, you had the power\nYou\'ve yet to have your finest hour\nRadio (radio)\nAll we hear is radio ga ga\nRadio goo goo\nRadio ga ga\nAll we hear is radio ga ga\nRadio goo goo\nRadio ga ga\nAll we hear is radio ga ga\nRadio blah blah\nRadio, what\'s new?\nSomeone still loves you\nRadio ga ga\nRadio ga ga\nRadio ga ga\nYou had your time, you had the power\nYou\'ve yet to have your finest hour\n\n',NULL,NULL),(11,'Scorpion',6,5,'18:07:00','https://www.youtube.com/watch?v=EN6Dx22cPRI&ab_channel=TraversyMedia','dsfdsfds',3,'2020-09-04'),(15,'Survival',6,5,'00:03:19','https://www.youtube.com/watch?v=twvp-8DOfG0',NULL,NULL,NULL),(16,'Nonstop',6,5,'00:05:15','https://www.youtube.com/watch?v=twvp-8DOfG0',NULL,NULL,NULL),(17,'God\'s plan',6,5,'00:05:57','https://www.youtube.com/watch?v=rSbxm4c7D6M',NULL,NULL,NULL),(18,'Jaded',6,5,'00:04:22','https://www.youtube.com/watch?v=L2y1wk5EB6U',NULL,NULL,NULL),(19,'Final Fantazy',6,5,'00:04:49','https://www.youtube.com/watch?v=EPJCwrgWZqs',NULL,NULL,NULL),(20,'Castle On The Hill',7,6,'00:04:20','https://www.youtube.com/watch?v=7Qp5vcuMIlk',NULL,NULL,NULL),(21,'Happier',7,6,'00:03:35','https://www.youtube.com/watch?v=iWZmdoY1aTE',NULL,NULL,NULL),(22,'Perfect',7,6,'00:04:40','https://www.youtube.com/watch?v=2Vv-BfVoq4g',NULL,NULL,NULL),(23,'Shape of You',7,6,'00:04:23','https://www.youtube.com/watch?v=JGwWNGJdvx8',NULL,NULL,NULL),(24,'Often',8,7,'00:04:09','https://www.youtube.com/watch?v=YY2ng9SjCTo',NULL,NULL,NULL),(25,'The Hills',8,7,'00:03:54','https://www.youtube.com/watch?v=yzTuBuRdAyA',NULL,NULL,NULL),(26,'Earned It',8,7,'00:04:35','https://www.youtube.com/watch?v=waU75jdUnYw',NULL,NULL,NULL),(27,'Cant Feel My Face',8,7,'00:03:35','https://www.youtube.com/watch?v=dqt8Z1k0oWQ',NULL,NULL,NULL);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` binary(16) NOT NULL,
  `preferences` json DEFAULT NULL,
  `remember_token` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Itay Sasson','itay@fdgdg.com','2020-09-11 18:32:11','123456',_binary '1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0',NULL,NULL),(4,'Avi Asulin','avi@gggg.com','2020-09-11 18:45:17','159753',_binary '0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0',NULL,NULL);
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

-- Dump completed on 2020-09-22  0:09:24
