-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: Work_station
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advertisement`
--

DROP TABLE IF EXISTS `advertisement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advertisement` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_type` int unsigned NOT NULL,
  `id_sector` int unsigned NOT NULL,
  `id_company` int unsigned NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `wages` bigint NOT NULL,
  `schedule` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `advertisement_id_type_foreign` (`id_type`),
  KEY `advertisement_id_sector_foreign` (`id_sector`),
  KEY `advertisement_id_company_foreign` (`id_company`),
  CONSTRAINT `advertisement_id_company_foreign` FOREIGN KEY (`id_company`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `advertisement_id_sector_foreign` FOREIGN KEY (`id_sector`) REFERENCES `sector` (`id`) ON DELETE CASCADE,
  CONSTRAINT `advertisement_id_type_foreign` FOREIGN KEY (`id_type`) REFERENCES `type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisement`
--

LOCK TABLES `advertisement` WRITE;
/*!40000 ALTER TABLE `advertisement` DISABLE KEYS */;
INSERT INTO `advertisement` VALUES (1,3,1,1,'Alternant DevOps','À propos de Microsoft :\n\nMicrosoft France recherche un alternant DevOps passionné pour rejoindre notre équipe. Ce poste offre une opportunité unique de travailler au sein d\'une entreprise de technologie de pointe, d\'apprendre et de contribuer à des projets innovants tout en poursuivant votre formation académique.\n\nResponsabilités :\n\nAutomatiser, mettre en œuvre et gérer des pipelines de livraison continue (CI/CD).\nContribuer à l\'amélioration de l\'efficacité opérationnelle grâce à des pratiques DevOps.\nMaintenir, surveiller et dépanner les environnements d\'infrastructure, y compris le cloud et les systèmes sur site.\nParticiper à la mise en place et à la gestion de solutions de conteneurs et d\'orchestration, telles que Kubernetes.\nCollaborer à la sécurité des systèmes et à la gestion des incidents.\nApprendre et mettre en œuvre les meilleures pratiques DevOps, ainsi que les technologies Microsoft.\nExigences :\n\nÊtre inscrit dans un programme d\'alternance en informatique ou domaine connexe.\nPassion pour les technologies de l\'infrastructure, de l\'automatisation et du cloud.\nConnaissance de base des concepts de développement logiciel.\nBonnes compétences en communication et en résolution de problèmes.\nCapacité à travailler de manière collaborative au sein d\'une équipe multidisciplinaire.\nAvantages :\n\nMentorat par des professionnels expérimentés de Microsoft.\nPossibilité d\'acquérir une expérience pratique dans un environnement technologique de pointe.\nFormation continue et accès à des ressources d\'apprentissage en ligne.\nEnvironnement de travail innovant et culture inclusive.\nPour postuler :\n\nEnvoyez votre CV et une lettre de motivation à [adresse e-mail de contact] en indiquant \"Candidature pour le poste d\'alternant DevOps\" dans l\'objet du message.\n\nMicrosoft est un employeur garantissant l\'égalité des chances. Nous encourageons toutes les personnes qualifiées à postuler, indépendamment de leur origine, de leur orientation sexuelle, de leur identité de genre, de leur statut de vétéran, de leur handicap ou de leur religion.','37 Quai du Président Roosevelt, Issy-les-Moulineaux',1500,'20h/semaines'),(2,4,4,1,'Chargé(e) d\'Événementiel (CDI)','À propos de Microsoft :\n\nMicrosoft France recherche un(e) Chargé(e) d\'Événementiel talentueux(se) pour rejoindre notre équipe. Ce poste offre l\'opportunité de participer à la planification, à l\'organisation et à l\'exécution d\'événements d\'envergure nationale et internationale pour une entreprise de technologie de premier plan.\n\nResponsabilités :\n\nConcevoir, planifier et exécuter des événements de qualité, notamment des conférences, des salons, des webinaires et des lancements de produits.\nCollaborer avec des équipes internes et des partenaires externes pour garantir le succès de chaque événement.\nGérer les budgets, les calendriers, les fournisseurs et les ressources pour assurer une coordination sans faille.\nCréer du contenu événementiel captivant et gérer la promotion des événements.\nSuperviser la logistique des événements, y compris la gestion des inscriptions, la coordination des voyages et la gestion sur site.\nÉvaluer les performances des événements et recommander des améliorations pour les futurs projets.\nExigences :\n\nDiplôme universitaire en marketing, en communication, en gestion d\'événements ou dans un domaine connexe.\nAu moins 3 ans d\'expérience dans la planification et la gestion d\'événements, de préférence dans un environnement international.\nExcellentes compétences organisationnelles et souci du détail.\nForte capacité à travailler sous pression et à respecter les délais.\nExcellentes compétences en communication écrite et verbale.\nCréativité et capacité à résoudre des problèmes de manière innovante.\nAvantages :\n\nTravailler au sein d\'une entreprise technologique renommée avec une portée internationale.\nParticiper à des événements de grande envergure, de l\'organisation à l\'exécution.\nPossibilité de contribuer à l\'image de marque de Microsoft à travers des événements majeurs.\nFormation continue et opportunités d\'avancement professionnel.\nPour postuler :\n\nEnvoyez votre CV et une lettre de motivation à [adresse e-mail de contact] en indiquant \"Candidature pour le poste de Chargé(e) d\'Événementiel\" dans l\'objet du message.\n\nMicrosoft est un employeur garantissant l\'égalité des chances. Nous encourageons toutes les personnes qualifiées à postuler, indépendamment de leur origine, de leur orientation sexuelle, de leur identité de genre, de leur statut de vétéran, de leur handicap ou de leur religion.','37 Quai du Président Roosevelt, Issy-les-Moulineaux',3000,'35h/semaines'),(3,5,3,2,'Stagiaire en Service - Restaurant Le Fouquet\'s','À propos de Le Fouquet\'s :\n\nLe Fouquet\'s, situé sur l\'emblématique avenue des Champs-Élysées à Paris, est l\'un des restaurants les plus prestigieux et renommés de la capitale française. Depuis des décennies, Le Fouquet\'s est synonyme d\'élégance, de gastronomie française de qualité et de service exceptionnel.\n\nDescription du Poste :\n\nNous recherchons actuellement un(e) stagiaire en service pour rejoindre notre équipe dynamique. En tant que stagiaire, vous aurez l\'opportunité de travailler dans un environnement de luxe, d\'apprendre les bases du service de haut niveau et de perfectionner vos compétences en matière de restauration.\n\nResponsabilités :\n\nAssister les serveurs et le personnel de service dans la mise en place des tables.\nAccueillir chaleureusement les clients à leur arrivée au restaurant.\nPrendre les commandes des clients et les transmettre efficacement à la cuisine.\nServir les plats et les boissons aux clients de manière professionnelle.\nVeiller à ce que les besoins des clients soient satisfaits et à ce qu\'ils passent un moment agréable.\nAssister le personnel de service dans la coordination de l\'ensemble de l\'expérience des clients.\nExigences :\n\nPassion pour le service et le secteur de la restauration.\nEnthousiasme, courtoisie et attitude professionnelle.\nCapacité à travailler en équipe dans un environnement exigeant.\nExcellentes compétences en communication.\nFlexibilité horaire, y compris les soirées, les week-ends et les jours fériés.\nIdéalement, une expérience antérieure dans le secteur de la restauration.\nAvantages :\n\nPossibilité d\'apprendre auprès de professionnels de la restauration de renommée mondiale.\nDécouverte de l\'univers de la haute cuisine française.\nStage rémunéré avec possibilité d\'embauche à l\'issue de la période de stage.\nPour postuler :\n\nEnvoyez votre CV et une lettre de motivation à [adresse e-mail de contact]. Veuillez indiquer \"Candidature pour le poste de Stagiaire en Service - Restaurant Le Fouquet\'s\" dans l\'objet du message.\n\nLe Fouquet\'s est un employeur garantissant l\'égalité des chances et nous encourageons toutes les personnes qualifiées à postuler, quelles que soient leur origine, leur orientation sexuelle, leur identité de genre, leur statut de vétéran, leur handicap ou leur religion.','99 Av. des Champs-Elysées, Paris',0,'35h/semaines'),(4,6,5,4,'Réceptionniste (CDD)','À propos de l\'Hôtel Georgette :\n\nL\'Hôtel Georgette est un établissement de charme niché au cœur du quartier historique du Marais à Paris. Notre hôtel combine l\'élégance du design parisien contemporain avec l\'authenticité de l\'architecture du Marais. Nous nous engageons à offrir à nos clients une expérience unique et mémorable lors de leur séjour à Paris.\n\nDescription du Poste :\n\nNous recherchons actuellement un réceptionniste pour rejoindre notre équipe accueillante. En tant que réceptionniste, vous serez la première personne que nos clients rencontreront à leur arrivée à l\'hôtel. Votre rôle est essentiel pour créer une première impression positive et pour garantir que nos clients passent un séjour agréable.\n\nResponsabilités :\n\nAccueillir chaleureusement les clients à leur arrivée et les enregistrer.\nRépondre aux appels téléphoniques, aux courriels et aux demandes de renseignements des clients.\nInformer les clients sur les services offerts par l\'hôtel, les attractions locales et les recommandations de restaurants.\nGérer les réservations, les entrées et les sorties des clients de manière efficace.\nGérer les paiements, les facturations et la gestion de la caisse.\nVeiller à ce que les besoins des clients soient satisfaits et résoudre les problèmes éventuels.\nCoordonner avec d\'autres départements pour offrir une expérience client exceptionnelle.\nExigences :\n\nExpérience antérieure dans un poste similaire, de préférence dans le secteur hôtelier.\nExcellentes compétences en service à la clientèle.\nMaîtrise du français et de l\'anglais, toute autre langue est un plus.\nExcellentes compétences en communication et en résolution de problèmes.\nCourtoisie, professionnalisme et attitude positive.\nFlexibilité horaire, y compris les soirées, les week-ends et les jours fériés.\nAvantages :\n\nPossibilité de travailler au cœur du quartier historique du Marais à Paris.\nL\'opportunité de faire partie d\'une équipe dévouée et amicale.\nFormation continue et opportunités d\'avancement.\nDurée du Contrat : Contrat à Durée Déterminée (CDD)\n\nPour postuler :\n\nEnvoyez votre CV et une lettre de motivation à [adresse e-mail de contact]. Veuillez indiquer \"Candidature pour le poste de Réceptionniste (CDD) à l\'Hôtel Georgette\" dans l\'objet du message.\n\nL\'Hôtel Georgette est un employeur garantissant l\'égalité des chances et nous encourageons toutes les personnes qualifiées à postuler, quelles que soient leur origine, leur orientation sexuelle, leur identité de genre, leur statut de vétéran, leur handicap ou leur religion.','36 Rue du Grenier-Saint-Lazare, Paris',1800,'35h/semaines'),(5,4,2,3,'Sage-femme (CDI)','À propos de l\'Hôpital Armand Trousseau AP-HP :\n\nL\'Hôpital Armand Trousseau est un établissement hospitalier de renommée internationale situé au cœur de Paris. Nous sommes fiers de notre tradition d\'excellence dans les soins de santé, de la pédiatrie à la gynécologie en passant par l\'obstétrique. Notre équipe dévouée est composée de professionnels de la santé qui se consacrent à offrir des soins de qualité et à faire avancer la recherche médicale.\n\nDescription du Poste :\n\nNous recherchons actuellement une sage-femme talentueuse pour rejoindre notre équipe dynamique. En tant que sage-femme à l\'Hôpital Armand Trousseau AP-HP, vous jouerez un rôle essentiel dans la prise en charge des patients en obstétrique et en gynécologie, et vous participerez activement à l\'amélioration continue des soins de santé.\n\nResponsabilités :\n\nAssurer la prise en charge des patientes tout au long de la grossesse, de l\'accouchement et du post-partum.\nFournir des soins de qualité, des conseils et un soutien aux patientes, en mettant l\'accent sur leur bien-être physique et émotionnel.\nCollaborer avec d\'autres professionnels de la santé pour garantir une prise en charge intégrée et efficace.\nParticiper à la préparation et à la réalisation des accouchements, y compris les césariennes si nécessaire.\nContribuer à l\'éducation des patientes sur la santé maternelle et infantile.\nParticiper à la recherche médicale et à l\'amélioration des protocoles de soins.\nExigences :\n\nDiplôme d\'État de sage-femme et inscription à l\'Ordre des Sages-Femmes.\nExpérience en obstétrique et en gynécologie, de préférence dans un environnement hospitalier.\nExcellentes compétences en communication, en écoute active et en empathie.\nCapacité à travailler en équipe et à collaborer avec d\'autres professionnels de la santé.\nEngagement envers l\'excellence des soins de santé et l\'amélioration continue.\nMaîtrise du français (niveau C1 ou supérieur).\nAvantages :\n\nL\'opportunité de travailler au sein d\'un hôpital de renommée mondiale.\nFormation continue et possibilités d\'avancement professionnel.\nConditions de travail attrayantes et rémunération compétitive.\nStatut : Contrat à Durée Indéterminée (CDI)\n\nPour postuler :\n\nEnvoyez votre CV et une lettre de motivation à [adresse e-mail de contact]. Veuillez indiquer \"Candidature pour le poste de Sage-femme (CDI) à l\'Hôpital Armand Trousseau\" dans l\'objet du message.\n\nL\'Hôpital Armand Trousseau AP-HP est un employeur garantissant l\'égalité des chances et nous encourageons toutes les personnes qualifiées à postuler, quelles que soient leur origine, leur orientation sexuelle, leur identité de genre, leur statut de vétéran, leur handicap ou leur religion.','26 Av. du Dr Arnold Netter, Paris',2000,'35h/semaines');
/*!40000 ALTER TABLE `advertisement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `main_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_sector` int unsigned NOT NULL,
  `mail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `number_of_employees` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `companies_id_sector_foreign` (`id_sector`),
  CONSTRAINT `companies_id_sector_foreign` FOREIGN KEY (`id_sector`) REFERENCES `sector` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Microsoft France','37 Quai du Président Roosevelt, Issy-les-Moulineaux',1,'microsoft@outlook.com','0970019090',1750),(2,'Fouquet\'s','99 Av. des Champs-Elysées, Paris',3,'fouquets@outlook.fr','0140696050',50),(3,'Hôpital Armand Trousseau AP-HP','26 Av. du Dr Arnold Netter, Paris',2,'armandtrousseau@outlook.fr','01444737475',200),(4,'Hôtel Georgette','36 Rue du Grenier-Saint-Lazare, Paris',5,'georgette@gmail.com','0144611010',74);
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2019_12_14_000001_create_personal_access_tokens_table',1),(2,'2023_10_12_123644_create_database_table',1),(3,'2023_10_22_130624_create_advertisement_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `people`
--

DROP TABLE IF EXISTS `people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `people` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_type` int unsigned NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `phone_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `people_email_unique` (`email`),
  KEY `people_id_type_foreign` (`id_type`),
  CONSTRAINT `people_id_type_foreign` FOREIGN KEY (`id_type`) REFERENCES `type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `people`
--

LOCK TABLES `people` WRITE;
/*!40000 ALTER TABLE `people` DISABLE KEYS */;
INSERT INTO `people` VALUES (1,'admin','admin','admin@admin.fr',2,'$2y$10$Ehiij24s.slnMwyUoJb8m.w3TihljlQAFJEdR/Ji6yxv6mzsP9jKq','2023-10-22','0631069789','3 rue des admin',1),(2,'Michel','Dupont','michel.dupont@outlook.fr',2,'$2y$10$qRMmPPVqm2oXzH1wjIvJ4.IJu0rQc9ouY7GrP8BCWHNk.E4H2ws5m','2023-10-22','0678944989','80 avenue de la gare',0);
/*!40000 ALTER TABLE `people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postulate`
--

DROP TABLE IF EXISTS `postulate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postulate` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_people` int unsigned NOT NULL,
  `id_ad` int unsigned NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `postulate_id_people_foreign` (`id_people`),
  KEY `postulate_id_ad_foreign` (`id_ad`),
  CONSTRAINT `postulate_id_ad_foreign` FOREIGN KEY (`id_ad`) REFERENCES `advertisement` (`id`) ON DELETE CASCADE,
  CONSTRAINT `postulate_id_people_foreign` FOREIGN KEY (`id_people`) REFERENCES `people` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postulate`
--

LOCK TABLES `postulate` WRITE;
/*!40000 ALTER TABLE `postulate` DISABLE KEYS */;
/*!40000 ALTER TABLE `postulate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sector`
--

DROP TABLE IF EXISTS `sector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sector` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sector`
--

LOCK TABLES `sector` WRITE;
/*!40000 ALTER TABLE `sector` DISABLE KEYS */;
INSERT INTO `sector` VALUES (1,'Informatique'),(2,'Santé'),(3,'Restauration'),(4,'Événementiel'),(5,'Hôtellerie');
/*!40000 ALTER TABLE `sector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'Etudiant'),(2,'Chômeur'),(3,'Alternant'),(4,'CDI'),(5,'Stage'),(6,'CDD');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-22 16:05:40
