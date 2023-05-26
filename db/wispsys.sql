-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-05-2023 a las 02:10:49
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wispsys`
--
CREATE DATABASE IF NOT EXISTS `wispsys` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `wispsys`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `address` varchar(30) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `addresses`
--

INSERT INTO `addresses` (`id`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Mantilla', '2023-01-07', '2023-02-09'),
(2, 'Calzada 1ra', '2023-01-07', '2023-01-07'),
(3, 'Calzada 2da', '2023-01-11', '2023-01-14'),
(4, 'Bellota', '2023-01-11', '2023-01-11'),
(6, '5 de Mayo', '2023-01-11', '2023-01-11'),
(7, '2da del 11', '2023-01-14', '2023-01-14'),
(8, 'San Antonio', '2023-01-30', '2023-01-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `concept` varchar(100) DEFAULT NULL,
  `payment_type_id` int(11) NOT NULL,
  `client_name` varchar(70) DEFAULT '',
  `amount_incomes` decimal(5,2) NOT NULL DEFAULT 0.00,
  `amount_discharge` decimal(5,2) NOT NULL DEFAULT 0.00,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `address_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `name`, `telephone`, `address_id`, `created_at`, `updated_at`) VALUES
(1, 'Beatriz Castellano Lopez', '9932802832', 3, '2023-04-12', '2023-04-12'),
(2, 'Cristian Eduardo Colorado Cano', '9371105409', 7, '2023-04-12', '2023-04-12'),
(3, 'Karina Irene Lopez Cruz', '9372296434', 3, '2023-04-12', '2023-04-12'),
(4, 'Irene Castellano de la Cruz', '9371199834', 7, '2023-04-12', '2023-04-12'),
(5, 'Profe Raul de Jesus Hernandez Alvarez', '9371362118', 7, '2023-04-12', '2023-04-12'),
(6, 'Margarita Montejo Burelo', '0', 3, '2023-04-12', '2023-04-12'),
(7, 'Estrella Chable Alcudia', '9371624212', 7, '2023-04-12', '2023-04-12'),
(8, 'Roberto Carlos Solis Escobar', '9371203525', 1, '2023-04-12', '2023-04-12'),
(9, 'Eliseo Mondragón Peralta', '9371225946', 3, '2023-04-12', '2023-04-12'),
(10, 'Rafael Garcia Lopez', '9371686154', 3, '2023-04-12', '2023-04-12'),
(11, 'Gollo Gomez', '0', 1, '2023-04-12', '2023-04-12'),
(12, 'Virginia Jimenez Acopa', '9379996115', 1, '2023-04-12', '2023-04-12'),
(13, 'Doris del Carmen Palma Dominguez', '9372293697', 3, '2023-04-12', '2023-04-12'),
(14, 'Andres Josue Cano Gomez', '9371667013', 7, '2023-04-12', '2023-04-12'),
(15, 'Neyli Lopez Lopez', '9371203292', 7, '2023-04-12', '2023-04-12'),
(16, 'SheIla Sanchez de Dios', '9371391481', 7, '2023-04-12', '2023-04-12'),
(17, 'Jacobino Gongora Cordoba (Sheila Viviana G)', '9373776168', 7, '2023-04-12', '2023-04-12'),
(18, 'Juan Antonio Naranjo Sanchez (Toño Danilo)', '9371270405', 1, '2023-04-12', '2023-04-12'),
(19, 'Randolfo Solis', '9371343759', 1, '2023-04-12', '2023-04-12'),
(20, 'Carlos Burelo', '9371414899', 1, '2023-04-12', '2023-04-12'),
(21, 'Eversain Ocaña Solis (Tapicero)', '0', 1, '2023-04-12', '2023-04-12'),
(22, 'Alejandra Martinez Hernandez', '9371472753', 6, '2023-04-12', '2023-04-12'),
(23, 'Luis Enrique Colorado Gomez', '9371895536', 1, '2023-04-12', '2023-04-12'),
(24, 'Madeline Morales Ocaña', '9371203031', 7, '2023-04-12', '2023-04-12'),
(25, 'Alejandra Colorado Calix', '9372712836', 7, '2023-04-12', '2023-04-12'),
(26, 'Ana Lilia Rodriguez', '9373784946', 7, '2023-04-12', '2023-04-12'),
(27, 'Jose Colorado', '9372290239', 7, '2023-04-12', '2023-04-12'),
(28, 'Marcelino Hernández Perez', '9371546559', 3, '2023-04-12', '2023-04-12'),
(29, 'Yesica Jiménez Pérez', '9371695535', 3, '2023-04-12', '2023-04-12'),
(30, 'Lorien Cristina Colorado Ramos', '9371237839', 1, '2023-04-12', '2023-04-12'),
(31, 'Doraliz Lopez Fuentes', '9371217373', 7, '2023-04-12', '2023-04-12'),
(32, 'Yadira Hernandez Colorado', '9371238934', 7, '2021-11-22', '2023-04-12'),
(33, 'Rodogel Hernandez Ramirez', '9371056928', 3, '2023-04-12', '2023-04-12'),
(34, 'Leticia Rodríguez González', '9371680278', 7, '2021-10-30', '2023-04-12'),
(35, 'Sergio Colorado Colorado (Yuridia)', '9371003558', 7, '2021-10-20', '2023-04-12'),
(36, 'Viki Jiménez Hernandez', '9371231132', 1, '2023-04-12', '2023-04-12'),
(37, 'Juan Diego Lazaro Jimenez', '9171427492', 3, '2021-10-19', '2023-04-12'),
(38, 'William Calix Burelo', '9371668347', 7, '2023-04-12', '2023-04-12'),
(39, 'Jose Morales Panadero', '9371208077', 3, '2021-10-15', '2023-04-12'),
(40, 'Olga Lopez Gomez', '9371040906', 7, '2023-04-12', '2023-04-12'),
(41, 'Jose Alfredo Jimenez', '9371187960', 1, '2023-04-12', '2023-04-12'),
(42, 'Josue Manuel Vazquez', '9371222003', 3, '2023-04-12', '2023-04-12'),
(43, 'Gessuri Alai Arias Sanchez', '9372291108', 7, '2022-08-04', '2023-04-12'),
(44, 'Maria del Carmen Lopez Garcia', '9371836553', 7, '2022-08-04', '2023-04-12'),
(45, 'Marina Gonzalez Dominguez', '9372274646', 3, '2023-04-12', '2023-04-12'),
(46, 'Tomasa Hernandez San.', '9992736741', 6, '2023-04-12', '2023-04-12'),
(47, 'Linda Margarita Gomez (Rosario Jimenez)', '9372833065', 1, '2023-04-12', '2023-04-12'),
(48, 'Maria Edith Jiménez Acopa', '9371245086', 1, '2023-04-12', '2023-04-12'),
(49, 'Mercedez Acopa Gomez', '9371651557', 6, '2023-04-12', '2023-04-12'),
(50, 'Adriana Silva (Luis Silva)', '9371199945', 6, '2023-04-12', '2023-04-12'),
(51, 'Juan Moralez (Gordis)', '9371181983', 6, '2023-04-12', '2023-04-12'),
(52, 'Natalia López Gómez (Roy)', '9371531995', 6, '2023-04-12', '2023-04-12'),
(53, 'Miguel Flores Ramos (Braulia)', '9371008913', 6, '2023-04-12', '2023-04-12'),
(54, 'Yolivet Hernandez Sanchez (Carlos Ivan)', '9371396684', 1, '2023-04-12', '2023-04-12'),
(55, 'Devora González González', '9934367874', 6, '2023-04-12', '2023-04-12'),
(56, 'Sergio Bautista', '9372833151', 1, '2023-04-12', '2023-04-12'),
(57, 'Fredy Ocaña Gomez', '9371203614', 1, '2023-04-12', '2023-04-12'),
(58, 'Nallyve Colorado Calix (Abimelet)', '9371005720', 6, '2023-04-12', '2023-04-12'),
(59, 'Magnerio Alberto Hernandez', '9371441483', 1, '2023-04-12', '2023-04-12'),
(60, 'Fam. Hernandez Lopez', '9371674637', 6, '2023-04-12', '2023-04-12'),
(61, 'Sergio Antonio de Dios Valdez', '9371408652', 3, '2023-04-12', '2023-04-12'),
(62, 'Nelson Escobar', '9371531974', 6, '2023-04-12', '2023-04-12'),
(63, 'Fernando Jose Montejo', '9371197830', 6, '2023-04-12', '2023-04-12'),
(64, 'Juan Manuel Ramos de Dios', '9371622024', 3, '2023-04-12', '2023-04-12'),
(65, 'Karen Lisseth Escobar Jiménez', '8671487164', 3, '2023-04-12', '2023-04-12'),
(66, 'Manuel Enrique Castro Ipolita', '9141313312', 6, '2023-04-12', '2023-04-12'),
(67, 'Mario Lopez (Granja)', '9371538873', 6, '2023-04-12', '2023-04-12'),
(68, 'Graciela Carreta (Casa 100 Ame.', '0', 3, '2023-04-12', '2023-04-12'),
(69, 'Otilia Martinez Hernandez', '9371188092', 6, '2022-08-03', '2023-04-12'),
(70, 'Victor Antonio Jimenez Montejo', '0', 4, '2022-06-22', '2023-04-12'),
(71, 'Tania Garcia Rojas', '9372296892', 4, '2022-06-29', '2023-04-12'),
(72, 'Fredy Hernandez L. (Maria Reyes)', '9371538096', 1, '2023-04-12', '2023-04-12'),
(73, 'Alonso Alexander Perez', '9371550747', 3, '2023-04-12', '2023-04-12'),
(74, 'Nancy de la Cruz', '9371398129', 1, '2023-04-12', '2023-04-12'),
(75, 'Alex Rodriguez Ana Maria Lopez', '9372701771', 7, '2023-04-12', '2023-04-12'),
(76, 'Cindy Cristel Balladares Carreta', '9141192096', 3, '2023-04-12', '2023-04-12'),
(77, 'Fam. Acosta', '9371197055', 3, '2023-04-12', '2023-04-12'),
(78, 'Carmita Perez Gomez', '9371716779', 3, '2023-04-12', '2023-04-12'),
(79, 'Jesus Jimenez - Kareli Ocaña', '9371064104', 3, '2023-04-12', '2023-04-12'),
(80, 'Antonio Montejo Sanchez (Tigre Wachi)', '9141303346', 3, '2023-04-12', '2023-04-12'),
(81, 'Elizabeth Landero Alcocer (E. Chucho)', '9371031776', 3, '2023-04-12', '2023-04-12'),
(82, 'Jose Luis Montejo', '0', 1, '2023-04-12', '2023-04-12'),
(83, 'Eliana Jimenez Montejo', '9371100065', 3, '2023-04-12', '2023-04-12'),
(84, 'Sheyla Karen Arias Garcia', '9371424434', 3, '2023-04-12', '2023-04-12'),
(85, 'Leticia del Carmen Sanchez Gomez', '9372701473', 3, '2023-04-12', '2023-04-12'),
(86, 'Ramon Lopez Peludo', '0', 1, '2023-04-12', '2023-04-12'),
(87, 'José Alberto Hernández Rodríguez (dos plantas)', '9372727457', 3, '2023-04-12', '2023-04-12'),
(88, 'Maria del Rosario Hernández Garcia', '9842387410', 3, '2023-04-12', '2023-04-12'),
(89, 'Selene Ponce', '9371278886', 3, '2023-04-12', '2023-04-12'),
(90, 'Porfirio Moreno Ramos Tienda', '9372295772', 3, '2023-04-12', '2023-04-12'),
(91, 'Cristel Alejandra Acopa Solis', '9371532354', 3, '2023-04-12', '2023-04-12'),
(92, 'ESCUELA MI PATRIA', '0', 1, '2023-04-12', '2023-04-12'),
(93, 'Joselin Hernandez Muñeco', '0', 3, '2023-04-12', '2023-04-12'),
(94, 'Sandra Zacarias Escobar', '9371672349', 1, '2023-04-12', '2023-04-12'),
(95, 'Natanael Hernández Ramírez  (Musicos)', '9373743217', 3, '2023-04-12', '2023-04-12'),
(96, 'Luz del Alba Ramos de Dios', '9371757319', 3, '2023-04-12', '2023-04-12'),
(97, 'Jose Manuel Moreno Arpaiz (Marciano)', '9371302267', 3, '2023-04-12', '2023-04-12'),
(98, 'Juan Carlos Rendon Solis', '9984965069', 3, '2023-04-12', '2023-04-12'),
(99, 'Guadalupe Burelo Ocaña', '0', 3, '2023-04-12', '2023-04-12'),
(100, 'Jesus Solis Perez (Mago)', '9371644765', 3, '2023-04-12', '2023-04-12'),
(101, 'Dorca Ramirez', '9371252942', 1, '2023-04-12', '2023-04-12'),
(102, 'Doraliz Solis Hernandez (Angel Mena)', '9371685798', 3, '2023-04-12', '2023-04-12'),
(103, 'Benito Hernandez Mondragon (Chivo)', '9371597210', 6, '2023-04-12', '2023-04-12'),
(104, 'Fabiola Rodriguez', '9371839893', 7, '2023-04-12', '2023-04-12'),
(105, 'Liliana Lopez Ocaña', '9371055255', 1, '2023-04-12', '2023-04-12'),
(106, 'Urania Alcocer Ocaña', '9371202017', 3, '2023-04-12', '2023-04-12'),
(107, 'Gabriela Sánchez Perez (Cholo)', '9371673518', 7, '2023-04-12', '2023-04-12'),
(108, 'Kevin Baranda Hernandez', '9371396302', 1, '2023-04-12', '2023-04-12'),
(109, 'Yari Deisy Burelo Ocaña (Pollo)', '0', 3, '2023-04-12', '2023-04-12'),
(110, 'Ana Lilia Dominguez Dominguez', '9341277322', 3, '2023-04-12', '2023-04-12'),
(111, 'Carlos Javier Hernandez Hernandez', '9371623250', 7, '2023-04-12', '2023-04-12'),
(112, 'Anahí Palma García', '9371193613', 7, '2023-04-12', '2023-04-12'),
(113, 'Yosy Rodriguez', '9141204083', 7, '2023-04-12', '2023-04-12'),
(114, 'Pablo Ramirez Eudaldo', '9371081890', 1, '2023-04-12', '2023-04-12'),
(115, 'Oscar Hernandez Gutierrez (Gallo)', '9371692591', 1, '2023-04-12', '2023-04-12'),
(116, 'Benjamin Hernandez Jimenez', '9371419765', 6, '2023-04-12', '2023-04-12'),
(117, 'Sergio Ortiz Hernandez (Militar)', '9171353628', 3, '2023-04-12', '2023-04-12'),
(118, 'Laura Perez Javier E. Checame', '9371192050', 3, '2023-04-12', '2023-04-12'),
(119, 'Yuridiana de la Cruz López', '9371051555', 3, '2022-05-04', '2023-04-12'),
(120, 'José Enrique Felix Marin', '9371013366', 7, '2023-04-12', '2023-04-12'),
(121, 'Erika Cordoba Broca (Papeleria)', '9371158278', 1, '2023-04-12', '2023-04-12'),
(122, 'Yelmi Torrez Naranjo', '9371406231', 1, '2023-04-12', '2023-04-12'),
(123, 'Jaime Luna (Granja)', '0', 6, '2023-04-12', '2023-04-12'),
(124, 'Lidia Janet Correa', '9371376411', 3, '2023-04-12', '2023-04-12'),
(125, 'Jesus Antonio Broca Almeida (Suegra de Karla)', '9371054909', 3, '2023-04-12', '2023-04-12'),
(126, 'Karla Quetchum (Mamá de Karla)', '9371097539', 3, '2023-04-12', '2023-04-12'),
(127, 'Dario Burelo Jimenez', '9371247560', 1, '2023-04-12', '2023-04-12'),
(128, 'Veronica Perez Ramoz', '9982056545', 6, '2023-04-12', '2023-04-12'),
(129, 'Fito Colorado', '0', 7, '2023-04-12', '2023-04-12'),
(130, 'Suni de Jesús Solis Gonzales', '9372722852', 3, '2023-04-12', '2023-04-12'),
(131, 'Carla Rodriguez', '9142795127', 7, '2023-04-12', '2023-04-12'),
(132, 'Yarisbeis Castillo Hernandez', '(2136284267', 7, '2023-04-12', '2023-04-12'),
(133, 'Jovany Alexander Hernandez Hernandez', '9932908195', 1, '2023-04-12', '2023-04-12'),
(134, 'Yari Lopez Marin (Esposa de Daniel Charmin)', '9371052403', 1, '2023-04-12', '2023-04-12'),
(135, 'Sabina Montejo Burelo (Tia de Daniel) ', '9372368190', 3, '2023-04-12', '2023-04-12'),
(136, 'Yuyi Hernandez Lopez', '9371541367', 6, '2023-04-12', '2023-04-12'),
(137, 'Mary del Carmen Vasquez Lopez', '9343480583', 3, '2023-04-12', '2023-04-12'),
(138, 'Jesus del Carmen (Checame)', '9371211075', 3, '2023-04-12', '2023-04-12'),
(139, 'Gloria Cano Alcocer', '9371660864', 6, '2023-04-12', '2023-04-12'),
(140, 'Nuri Dominguez', '9371059000', 3, '2023-04-12', '2023-04-12'),
(141, 'Carlos Arturo Montejo Ocaña (Misha)', '6341122850', 3, '2023-04-12', '2023-04-12'),
(142, 'Norberto Gomez Garcia (Beto Panadero)', '9371212961', 3, '2023-04-12', '2023-04-12'),
(143, 'Lazaro Sanchez (Lacho Entrada)', '9371675819', 1, '2023-04-12', '2023-04-12'),
(144, 'Daisy Lopez Burelo', '9373770805', 6, '2023-04-12', '2023-04-12'),
(145, 'Marcos Perez Garcia (Taxista)', '9372303723', 1, '2023-04-12', '2023-04-12'),
(146, 'Eliseo Hernandez Vazquez', '9371769382', 1, '2023-04-12', '2023-04-12'),
(147, 'Rocio del Carmen López de la Cruz', '9371633353', 6, '2023-04-12', '2023-04-12'),
(148, 'Ariana Colorado', '9371642171', 6, '2023-04-12', '2023-04-12'),
(149, 'Carlos Mario Colorado Jimenez', '9141392814', 6, '2023-04-12', '2023-04-12'),
(150, 'Carlos Hernandez Hernandez (Carlon)', '9371192787', 6, '2023-04-12', '2023-04-12'),
(151, 'Amayrani Coy', '9371252292', 6, '2023-04-12', '2023-04-12'),
(152, 'Maestra Anabella', '9373697105', 1, '2023-04-12', '2023-04-12'),
(153, 'Ronaldo Ramirez', '9141082517', 1, '2023-04-12', '2023-04-12'),
(154, 'Pollo Sinaloense (Gar Miguel)', '0', 1, '2023-04-12', '2023-04-12'),
(155, 'Eden (Manolo Alcocer)', '9371428665', 1, '2023-04-12', '2023-04-12'),
(156, 'Cresefora Ocaña Dominguez (Choja)', '9372277036', 3, '2023-04-12', '2023-04-12'),
(157, 'Jose Jimenez (Antonia)', '9372703604', 1, '2023-04-12', '2023-04-12'),
(158, 'Wiliams de Jesús López Jerónimo', '4445311702', 6, '2023-04-12', '2023-04-12'),
(159, 'Javier Yesenia', '9371329510', 1, '2023-04-12', '2023-04-12'),
(160, 'Angel Gabriel Morales Jimenez', '0', 1, '2023-04-12', '2023-04-12'),
(161, 'Adriana Hernandez de la Cruz (Renta sillas)', '9371289175', 1, '2023-04-12', '2023-04-12'),
(162, 'Israel Lopez de la Cruz', '9371627069', 1, '2023-04-12', '2023-04-12'),
(163, 'Oscar Lopez', '9341291602', 1, '2023-04-12', '2023-04-12'),
(164, 'Jose Elias Gamas Jimenez (Romana)', '9371632741', 1, '2023-04-12', '2023-04-12'),
(165, 'Rafael Hernandez (Gusano)', '9331542035', 1, '2023-04-12', '2023-04-12'),
(166, 'Mayte Broca Garcia', '9373745203', 6, '2023-04-12', '2023-04-12'),
(167, 'Jose Eliseo Leon Lopez', '9371428696', 1, '2023-04-12', '2023-04-12'),
(168, 'Omar Hernandez', '8123973545', 1, '2023-04-12', '2023-04-12'),
(169, 'Lorena del Carmen Hernandez Sanchez (Pato)', '9371684759', 1, '2023-04-12', '2023-04-12'),
(170, 'Leonardo Perez Acopa', '9341170678', 3, '2021-12-09', '2023-04-12'),
(171, 'Jose Alfredo Ovando Hernandez', '9982365247', 7, '2022-05-05', '2023-04-12'),
(172, 'Amelia Ramos', '9935172335', 3, '2023-04-12', '2023-04-12'),
(173, 'Zulema Castillo Rodriguez', '9371215082', 7, '2023-04-12', '2023-04-12'),
(174, 'Esmeralda Cano Alcocer', '9372724000', 3, '2023-04-12', '2023-04-12'),
(175, 'Cristian Gabriel Jimenez Garcia', '9373772449', 3, '2023-04-12', '2023-04-12'),
(176, 'Moises Garcia Martinez', '9141247893', 7, '2023-04-12', '2023-04-12'),
(177, 'Jazzlinn Guadalupe Hernandez (Celso)', '9932133836', 6, '2023-04-12', '2023-04-12'),
(178, 'Juan Gabriel Acopa', '9371308195', 3, '2023-04-12', '2023-04-12'),
(179, 'Luis Fernando Acopa Colorado', '9371066668', 6, '2023-04-12', '2023-04-12'),
(180, 'Dany Cristel Colorado Luna', '9371206560', 6, '2023-04-12', '2023-04-12'),
(181, 'Jhony González Escobar', '9371842513', 1, '2023-04-12', '2023-04-12'),
(182, 'Christian Alexander de la Cruz Hernandez (Hijo de Luis)', '9371027517', 3, '2023-04-12', '2023-04-12'),
(183, 'Carlos Mario Gomez Hernandez', '9371235175', 3, '2023-04-12', '2023-04-12'),
(184, 'Erandi Itzel Ocaña Cano', '9371254273', 3, '2023-04-12', '2023-04-12'),
(185, 'Hernan Acopa Murillo (Venao)', '9371214314', 6, '2023-04-12', '2023-04-12'),
(186, 'Lucero Hernandez', '9381204795', 1, '2023-04-12', '2023-04-12'),
(187, 'Everta Solis Cano', '9372726195', 3, '2022-06-27', '2023-04-12'),
(188, 'Estela Zamora Garcia', '9371627238', 3, '2023-04-12', '2023-04-12'),
(189, 'Octavio Gonzalez', '9381864523', 3, '2023-04-12', '2023-04-12'),
(190, 'Eduardo Montejo', '9372715102', 1, '2023-04-12', '2023-04-12'),
(191, 'Natividad López Velázquez', '9373770519', 3, '2023-04-12', '2023-04-12'),
(192, 'Nanci López Solís', '9372279575', 3, '2023-04-12', '2023-04-12'),
(193, 'Maria Guadalupe Burelo Naranjo', '9371894634', 3, '2023-04-12', '2023-04-12'),
(194, 'Zorayda Jimenez Hernandez', '9371623946', 1, '2023-04-12', '2023-04-12'),
(195, 'Francisco Romero Hernández', '9372271008', 3, '2023-04-12', '2023-04-12'),
(196, 'Erika Yuliana Torres de la Cruz', '9371019669', 7, '2022-06-07', '2023-04-12'),
(197, 'Feliciano Hernandez', '9371288284', 1, '2022-01-21', '2023-04-12'),
(198, 'Elizabeth Torres Cano', '9371719131', 7, '2021-10-24', '2023-04-12'),
(199, 'Cocina Deysi', '2382506817', 1, '2023-04-12', '2023-04-12'),
(200, 'Luis Fernando Cano Naranjo', '9141398566', 7, '2022-01-24', '2023-04-12'),
(201, 'Enrique Hernandez Hernandez', '9373744128', 1, '2022-01-24', '2023-04-12'),
(202, 'Fabiola Dominguez', '9371627769', 3, '2022-01-19', '2023-04-12'),
(203, 'Cristian Hernández Ocaña (Beto Ocaña)', '9371292991', 3, '2022-05-15', '2023-04-12'),
(204, 'Ramon Jimenez', '9141110458', 1, '2023-04-12', '2023-04-12'),
(205, 'Janis Irina Naranjo Garcia', '9371715186', 3, '2023-04-12', '2023-04-12'),
(206, 'Greicy Cristel Hernandez Rodriguez', '9372709253', 7, '2022-01-14', '2023-04-12'),
(207, 'Noe Colorado Lopez', '5548336317', 6, '2023-04-12', '2023-04-12'),
(208, 'Alejandra del Carmen Sánchez Colorado', '9371285207', 6, '2023-04-12', '2023-04-12'),
(209, 'Jhony Gómez Cano', '9141213360', 7, '2023-04-12', '2023-04-12'),
(210, 'Heberto Hernandez Colorado', '9371678856', 6, '2023-04-12', '2023-04-12'),
(211, 'Leticia Jimenez Luna', '9614468042', 6, '2022-01-15', '2023-04-12'),
(212, 'Alondra Burelo (3d)', '9371400927', 3, '2023-04-12', '2023-04-12'),
(213, 'Ismael Aguirre Morales', '9141220077', 7, '2023-04-12', '2023-04-12'),
(214, 'Magdalena López Sánchez (Deposito)', '9371647361', 3, '2023-04-12', '2023-04-12'),
(215, 'Jane Burelo Reinaga (Tienda)', '9371411051', 7, '2023-04-12', '2023-04-12'),
(216, 'Viviana Cano', '9372300150', 1, '2023-04-12', '2023-04-12'),
(217, 'Jesus Manuel Vazquez Alejo', '9371053181', 3, '2022-06-29', '2023-04-12'),
(218, 'Natividad Sosa Cruz', '9371551346', 3, '2022-06-29', '2023-04-12'),
(219, 'Jorge Leonardo Jimenez Castillo', '9371408555', 1, '2023-04-12', '2023-04-12'),
(220, 'Gilberto Palma Dominguez (Carpintero)', '9373773272', 3, '2023-04-12', '2023-04-12'),
(221, 'Maria Martinez (Nero)', '9371003811', 1, '2023-04-12', '2023-04-12'),
(222, 'Rocio Romero Solis', '9934244472', 3, '2022-07-26', '2023-04-12'),
(223, 'Pedro de la Cruz', '9371436590', 1, '2023-04-12', '2023-04-12'),
(224, 'Carlos Javier Correa Ocaña Tienda', '9371541074', 3, '2023-04-12', '2023-04-12'),
(225, 'Marisol Montejo Colorado', '9932882609', 6, '2023-04-12', '2023-04-12'),
(226, 'Josue Torres Alamilla', '9934600295', 3, '2021-11-26', '2023-04-12'),
(227, 'Jose de Dios (E. Mangos)', '9371657757', 1, '2023-04-12', '2023-04-12'),
(228, 'Raul Jimenez', '9371370474', 1, '2023-04-12', '2023-04-12'),
(229, 'Kevin Lopez Olan', '9371185134', 1, '2023-04-12', '2023-04-12'),
(230, 'Alejandro de la Cruz (Choya)', '0', 1, '2023-04-12', '2023-04-12'),
(231, 'Jose Carlos Zapata Juarez', '9371530167', 7, '2023-04-12', '2023-04-12'),
(232, 'Candelaria Sanchez Marin', '9371378824', 3, '2021-11-16', '2023-04-12'),
(233, 'Samuel Hernandez Hernandez (Carniceria Niñon)', '9371239418', 1, '2023-04-12', '2023-04-12'),
(234, 'Aurelio Ramírez León', '9371265469', 6, '2023-04-12', '2023-04-12'),
(235, 'Edrey Torres Bautista (Vecina Enrrique)', '9372708659', 1, '2023-04-12', '2023-04-12'),
(236, 'Adid Gonzalez (Patitos)', '9371311969', 1, '2023-04-12', '2023-04-12'),
(237, 'Don Pancho', '2382506817', 1, '2023-04-12', '2023-04-12'),
(238, 'Valentin Sanchez Carnicero', '0', 1, '2023-04-12', '2023-04-12'),
(239, 'Israel Perez Montejo', '9371430482', 3, '2023-04-12', '2023-04-12'),
(240, 'Adilene Colorado Lopez', '+1(208)6719890', 7, '2021-10-26', '2023-04-12'),
(241, 'Romeo Jimenez', '9141135637', 6, '2023-04-12', '2023-04-12'),
(242, 'Yeni del Carmen Acopa', '9984862205', 1, '2021-12-30', '2023-04-12'),
(243, 'Yesenia Hernandez (Hija de Güero)', '9984824594', 1, '2023-04-12', '2023-04-12'),
(244, 'Dario Jimenez de Dios', '9371192024', 1, '2023-04-12', '2023-04-12'),
(245, 'Ninel Sanchez Lopez', '9371703110', 3, '2022-06-10', '2023-04-12'),
(246, 'Alejandro Alonso Garcia', '9331023879', 7, '2023-04-12', '2023-04-12'),
(247, 'Rafael Cano', '0', 1, '2023-04-12', '2023-04-12'),
(248, 'Reinaldo Gonzalez Hernandez', '9995429813', 6, '2022-06-23', '2023-04-12'),
(249, 'Erik Tejeda Zapata', '9371426344', 1, '2023-04-12', '2023-04-12'),
(250, 'Jose Alberto Gomez (Beto Gomez)', '9371200650', 1, '2023-04-12', '2023-04-12'),
(251, 'Rosa María Díaz Álvarez (Chiapas)', '9371052779', 1, '2023-04-12', '2023-04-12'),
(252, 'Salvador Barra', '0', 1, '2023-04-12', '2023-04-12'),
(253, 'Leopoldo Rivera Sanchez (Cañal)', '4441199994', 1, '2023-04-12', '2023-04-12'),
(254, 'Jose Eduardo Marin Solis', '9371436841', 3, '2022-07-03', '2023-04-12'),
(255, 'Alexander de Dios Arias', '9371218334', 7, '2022-07-05', '2023-04-12'),
(256, 'Jose Elias Gamas Jimenez (Chiapas)', '8130798991', 1, '2022-07-11', '2023-04-12'),
(257, 'Otoniel Lopez Calix ', '9371325033', 7, '2022-07-21', '2023-04-12'),
(258, 'Ángela del Carmen Mateo Cruz', '9371275114', 1, '2022-06-30', '2023-04-12'),
(259, 'Abisay Jimenez Hernandez', '9371540583', 1, '2022-08-08', '2023-04-12'),
(260, 'Adiv Hernandez de la Cruz', '0', 1, '2022-08-08', '2023-04-12'),
(261, 'Maria Montejo (Tigre Viejo)', '9371392333', 3, '2023-04-12', '2023-04-12'),
(262, 'Magdalena Ocaña Murillo', '9371650878', 3, '2023-04-12', '2023-04-12'),
(263, 'Ernesto Sánchez Hernández', '9371553952', 1, '2022-08-12', '2023-04-12'),
(264, 'Jose Elias Gonzalez Moralez', '9371191651', 3, '2022-08-26', '2023-04-12'),
(265, 'Rebeca Burelo', '0', 7, '2022-09-14', '2023-04-12'),
(266, 'Margarita Hernandez Hernandez', '9371893623', 1, '2022-09-12', '2023-04-12'),
(267, 'Alejandra del Carmen Lopez Solis', '9371102443', 3, '2022-09-04', '2023-04-12'),
(268, 'Javier Reyes Cejas', '9371015940', 7, '2022-09-01', '2023-04-12'),
(269, 'Tito Libio Alejo Luna', '9331254193', 3, '2022-09-30', '2023-04-12'),
(270, 'Pablo José Hernandez Sanchez', '9371552186', 1, '2022-09-30', '2023-04-12'),
(271, 'Victoria Escobar Izquierdo', '9981483946', 1, '2022-09-23', '2023-04-12'),
(272, 'Marta Lázaro Javier', '9371088140', 3, '2022-09-21', '2023-04-12'),
(273, 'Karina Ramírez Burelo', '9371183153', 1, '2022-09-20', '2023-04-12'),
(274, 'Bellali Perez Aguirre', '9371638628', 4, '2022-09-19', '2023-04-12'),
(275, 'Hilda Vázquez', '9331531189', 1, '2022-09-16', '2023-04-12'),
(276, 'Nori Torres Vázquez', '9371272609', 2, '2022-09-18', '2023-04-12'),
(277, 'Manuel Luna Osorio', '9371272609', 2, '2022-09-18', '2023-04-12'),
(278, 'Hernán Acopa Pérez', '9371293154', 4, '2022-09-19', '2023-04-12'),
(279, 'Belgica Dominguez Burelo', '9371009205', 3, '2022-10-02', '2023-04-12'),
(280, 'Jovany Torres Domingues', '9371314326', 3, '2022-10-02', '2023-04-12'),
(281, 'Rosa Ana Colorado', '0', 7, '2022-10-02', '2023-04-12'),
(282, 'Esbeidi Rubi Martinez Colorado', '9371003022', 7, '2022-10-02', '2023-04-12'),
(283, 'Rocio Perez', '9371642196', 4, '2022-10-03', '2023-04-12'),
(284, 'Leticia Perez Solis', '9371651229', 4, '2022-10-04', '2023-04-12'),
(285, 'Ludi Hernandez Vazquez', '9371105958', 3, '2022-10-05', '2023-04-12'),
(286, 'Eliazer Lopez Lopez', '9371398035', 4, '2022-10-05', '2023-04-12'),
(287, 'Jose Armando de Dios Arias', '0', 7, '2022-10-24', '2023-04-12'),
(288, 'Reyes Davis Ramos de Dios', '0', 3, '2022-10-31', '2023-04-12'),
(289, 'Miguel Antonio Rivera Sanchez', '0', 1, '2022-11-01', '2023-04-12'),
(290, 'Rosario Romero Sanchez', '0', 1, '2022-11-01', '2023-04-12'),
(291, 'Dodanin Marin Ocaña', '9375932113', 3, '2022-11-03', '2023-04-12'),
(292, 'Suani Anai Lopez Calix', '9371263892', 3, '2022-11-08', '2023-04-12'),
(293, 'Yarisbeidi Lopez Colorado', '9371081507', 6, '2022-11-08', '2023-04-12'),
(294, 'Miguel Antonio Gongora Cordova', '9371717270', 7, '2022-12-03', '2023-04-12'),
(295, 'Sebastian Hernandez Gamas', '9371211289', 2, '2022-11-29', '2023-04-12'),
(296, 'Marco Antonio Calix Flores (Perrera)', '0', 3, '2022-12-12', '2023-04-12'),
(297, 'Juan Burelo Jimez (Rocio Andy)', '0', 1, '2023-04-12', '2023-04-12'),
(298, 'Dalia Gómez Díaz', '9371719864', 1, '2022-12-09', '2023-04-12'),
(299, 'Antonio Curiel Ramirez', '9371033634', 1, '2022-12-04', '2023-04-12'),
(300, 'Juan Carlos Ocaña', '0', 1, '2022-12-02', '2023-04-12'),
(301, 'Sara Marin Ramos', '9372299411', 6, '2022-12-15', '2023-04-12'),
(302, 'Diana Laura Acopa Solis', '9616105293', 3, '2022-12-20', '2023-04-12'),
(303, 'Maria Magdalena Colorado Colorado', '9371200650', 1, '2022-12-23', '2023-04-12'),
(304, 'Lucia del Carmen Suárez López', '9371703183', 1, '2022-12-28', '2023-04-12'),
(305, 'José Javier Chan Puc', '9141283211', 2, '2023-01-03', '2023-04-12'),
(306, 'Andrea de los Santos Villegas', '9371035850', 8, '2023-01-05', '2023-04-12'),
(307, 'Miguel Angel Ramirez Lopez', '6143367384', 1, '2023-04-12', '2023-04-12'),
(308, 'Liliana del Carmen Valencia González', '9371707376', 3, '2023-01-09', '2023-04-12'),
(309, 'Candido López de la Fuente', '9371310801', 4, '2023-01-15', '2023-04-12'),
(310, 'Daniela Hernández Montejo', '9373773827', 6, '2023-01-16', '2023-04-12'),
(311, 'Gener de la Cruz Rodríguez', '9371397042', 6, '2023-01-23', '2023-04-12'),
(312, 'Luis Angel Torres Perez', '9371197643', 4, '2023-01-02', '2023-04-12'),
(313, 'Maria de los Angeles Domínguez Hidalgo', '9371099105', 3, '2023-02-06', '2023-04-12'),
(314, 'José Manuel Hernández Montejo', '9371024079', 1, '2023-02-07', '2023-04-12'),
(315, 'Tania Cristel Ceballos García', '9371630751', 6, '2023-02-07', '2023-04-12'),
(316, 'Diana Colorado Colorado', '9936512676', 6, '2023-02-09', '2023-04-12'),
(317, 'Sara Rodriguez Colorado', '9371622463', 7, '2023-02-15', '2023-04-12'),
(318, 'Luz Clarita', '0', 1, '2023-02-22', '2023-04-12'),
(319, 'Monica Ocaña', '9371699414', 3, '2023-02-22', '2023-04-12'),
(320, 'Laura Marin Ocaña', '9371531995', 6, '2023-02-27', '2023-04-12'),
(321, 'Angie Paola García Sánchez', '9371537431', 3, '2023-03-09', '2023-04-12'),
(322, 'Cristina Jimenez Zapata', '9371261407', 3, '2023-03-10', '2023-04-12'),
(323, 'Aviridiana Arias Suarez', '9371692377', 3, '2023-03-24', '2023-04-12'),
(324, 'Eric David López Acopa', '0', 1, '2023-03-26', '2023-04-12'),
(325, 'Rubi Dominguez Castillo', '9371009790', 1, '2023-03-28', '2023-04-12'),
(326, 'Benis Burelo Juarez', '9371692991', 7, '2023-03-28', '2023-04-12'),
(327, 'Dariana Generosa Martinez Miranda', '0', 3, '2023-04-10', '2023-04-12'),
(328, 'Irene Liceth Zamudio Liscano', '0', 8, '2023-04-11', '2023-04-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contracts`
--

CREATE TABLE `contracts` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `plan_id` int(11) NOT NULL,
  `day_cut` int(2) NOT NULL,
  `server_id` int(11) NOT NULL,
  `state` varchar(10) NOT NULL DEFAULT 'Activo',
  `ip` varchar(15) NOT NULL,
  `netmask` varchar(15) NOT NULL,
  `mac_address` varchar(17) NOT NULL,
  `created_invoice` int(2) NOT NULL DEFAULT 1,
  `details` varchar(50) DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `die_date` date NOT NULL,
  `state` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nodes`
--

CREATE TABLE `nodes` (
  `id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `details` varchar(200) NOT NULL,
  `ports` int(2) NOT NULL,
  `disponibles` int(2) DEFAULT 0,
  `usados` int(2) DEFAULT 0,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_promises`
--

CREATE TABLE `payment_promises` (
  `id` int(11) NOT NULL,
  `valid_until` date NOT NULL,
  `contract_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_types`
--

CREATE TABLE `payment_types` (
  `id` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `cash` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `payment_types`
--

INSERT INTO `payment_types` (`id`, `type`, `cash`, `created_at`, `updated_at`) VALUES
(1, 'Abarrotes Reynaga', 1, '2023-02-25', '2023-02-25'),
(2, 'DC', 1, '2023-02-25', '2023-02-25'),
(3, 'Luis', 1, '2023-02-25', '2023-02-25'),
(4, 'RW', 1, '2023-02-25', '2023-02-25'),
(5, 'Las 2 Pekes', 1, '2023-02-25', '2023-02-25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plans`
--

CREATE TABLE `plans` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `ceil_down_mbps` int(5) NOT NULL,
  `ceil_up_mbps` int(5) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `contracts_count` int(5) DEFAULT 0,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plans`
--

INSERT INTO `plans` (`id`, `name`, `ceil_down_mbps`, `ceil_up_mbps`, `price`, `contracts_count`, `created_at`, `updated_at`) VALUES
(1, 'Plan 350', 25, 12, '350.00', 0, '2023-01-15', '2023-01-15'),
(2, 'Plan 400', 25, 20, '400.00', 0, '2023-01-15', '2023-01-15'),
(3, 'Plan 500', 25, 20, '600.00', 0, '2023-01-15', '2023-01-15'),
(4, 'Familiar', 5, 5, '250.00', 0, '2023-01-15', '2023-01-15'),
(5, 'Plan 300', 15, 8, '300.00', 0, '2023-01-15', '2023-02-23'),
(6, 'Plan Prmium', 40, 40, '400.00', 0, '2023-04-12', '2023-04-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `authorization` enum('admin','tecnic','view') NOT NULL DEFAULT 'tecnic',
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `telephone`, `authorization`, `created_at`, `updated_at`) VALUES
(1, 'Adan Escobar', 'adan@code.eca', '$2a$10$aZPNBjEpnFruSHjmka/1TuxnRIZJ9aoXxDsnogtElXek4FLQkhK2m', '3847382429', 'tecnic', '2023-04-20', '2023-04-20'),
(3, 'EscAdn', 'tecnic@code.eca', '$2a$10$Olq8E3/1qL/nlvlcunaP.uJFfTx79K9rcCVYhNHWS2phoN9ManPjG', '3847382429', 'tecnic', '2023-04-20', '2023-04-20'),
(4, 'EscAdn', 'admin@code.eca', '$2a$10$tj.T4u0o73C53zBao80pW.ajpf1HMZOf5JcrJAIVx9wfpuX2859qa', '3847382429', 'admin', '2023-04-20', '2023-04-20');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payment_type_id` (`payment_type_id`);

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clients_fk0` (`address_id`);

--
-- Indices de la tabla `contracts`
--
ALTER TABLE `contracts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contracts_fk0` (`client_id`),
  ADD KEY `contracts_fk1` (`plan_id`);

--
-- Indices de la tabla `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoices_fk0` (`contract_id`);

--
-- Indices de la tabla `nodes`
--
ALTER TABLE `nodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nodes_fk0` (`address_id`);

--
-- Indices de la tabla `payment_promises`
--
ALTER TABLE `payment_promises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payment_promises_fk` (`contract_id`);

--
-- Indices de la tabla `payment_types`
--
ALTER TABLE `payment_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=329;

--
-- AUTO_INCREMENT de la tabla `contracts`
--
ALTER TABLE `contracts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `nodes`
--
ALTER TABLE `nodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `payment_promises`
--
ALTER TABLE `payment_promises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payment_types`
--
ALTER TABLE `payment_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `plans`
--
ALTER TABLE `plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_fk0` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`);

--
-- Filtros para la tabla `contracts`
--
ALTER TABLE `contracts`
  ADD CONSTRAINT `contracts_fk0` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`),
  ADD CONSTRAINT `contracts_fk1` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`id`);

--
-- Filtros para la tabla `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_fk0` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`);

--
-- Filtros para la tabla `nodes`
--
ALTER TABLE `nodes`
  ADD CONSTRAINT `nodes_fk0` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`);

--
-- Filtros para la tabla `payment_promises`
--
ALTER TABLE `payment_promises`
  ADD CONSTRAINT `payment_promises_fk` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
