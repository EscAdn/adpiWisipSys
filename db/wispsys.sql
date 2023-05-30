-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-05-2023 a las 23:09:55
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

DROP TABLE IF EXISTS `addresses`;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `address` varchar(30) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `addresses`
--

INSERT INTO `addresses` (`id`, `address`, `created_at`, `updated_at`) VALUES
(1, '2da del 11', '2023-02-10', '2023-02-10'),
(2, 'Mantilla 1ra', '2023-02-10', '2023-02-10'),
(3, 'Calzada 2da', '2023-02-10', '2023-02-10'),
(4, 'Calzada 1ra', '2023-02-10', '2023-02-10'),
(5, '5 de Mayo', '2023-02-10', '2023-02-10'),
(6, 'Sector Bellota', '2023-02-10', '2023-02-10'),
(7, 'San Antonio', '2023-02-21', '2023-02-21'),
(8, 'La Esperanza', '2023-02-21', '2023-03-08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bills`
--

DROP TABLE IF EXISTS `bills`;
CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `concept` varchar(100) NOT NULL,
  `payment_type_id` int(11) NOT NULL,
  `client_name` varchar(100) NOT NULL,
  `amount_income` decimal(8,2) NOT NULL,
  `amount_discharge` decimal(8,2) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `address_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `name`, `telephone`, `address_id`, `created_at`, `updated_at`) VALUES
(1, 'Jon Mircha', '6890841312', 1, '2023-02-07', '2023-03-08'),
(2, 'Nikolas Shurman', '3479237819', 1, '2023-02-07', '2023-02-07'),
(4, 'Maria del Carmen Lopez', '55263452', 3, '2023-02-21', '2023-02-21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contracts`
--

DROP TABLE IF EXISTS `contracts`;
CREATE TABLE `contracts` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `plan_id` int(11) NOT NULL,
  `day_cut` int(2) NOT NULL,
  `server_id` int(11) NOT NULL,
  `state` varchar(20) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `netmask` varchar(15) NOT NULL,
  `mac_address` varchar(17) NOT NULL,
  `details` varchar(50) NOT NULL,
  `node_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `contracts`
--

INSERT INTO `contracts` (`id`, `client_id`, `plan_id`, `day_cut`, `server_id`, `state`, `ip`, `netmask`, `mac_address`, `details`, `node_id`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 1, 0, 'disabled', '192.168.7.101', '255.255.255.0', 'MAC_ADDRESS_NEW', 'Cambio el datp', 1, '2023-02-07', '2023-02-07'),
(3, 1, 1, 1, 0, 'eneble', '192.168.7.10', '255.255.255.0', 'MAC_ADDRESS', 'None', 1, '2023-02-07', '2023-02-07'),
(8, 4, 2, 1, 1, '', '10.10.10.20', '255.255.255.0', 'A4:00:E2:CE:C1:B2', '', 1, '2023-02-21', '2023-02-21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoices`
--

DROP TABLE IF EXISTS `invoices`;
CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `die_date` date NOT NULL,
  `state` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `invoices`
--

INSERT INTO `invoices` (`id`, `contract_id`, `from`, `to`, `created_at`, `updated_at`, `die_date`, `state`) VALUES
(5, 2, '2023-02-01', '2023-02-28', '2023-02-13', '2023-02-13', '2023-02-04', 'Vencida'),
(9, 3, '2023-02-01', '2023-02-28', '2023-02-13', '2023-02-13', '2023-02-04', 'Vencida');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nodes`
--

DROP TABLE IF EXISTS `nodes`;
CREATE TABLE `nodes` (
  `id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `details` varchar(70) NOT NULL,
  `ports` int(2) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `nodes`
--

INSERT INTO `nodes` (`id`, `address_id`, `details`, `ports`, `created_at`, `updated_at`) VALUES
(1, 5, 'Yuyis', 8, '2023-02-07', '2023-02-21'),
(2, 2, 'Salida', 8, '2023-02-10', '2023-02-10'),
(3, 5, 'La Esperanza', 8, '2023-02-21', '2023-02-21'),
(4, 1, 'Puente ', 16, '2023-02-21', '2023-02-21'),
(5, 3, 'Entrada', 16, '2023-03-08', '2023-03-08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_promises`
--

DROP TABLE IF EXISTS `payment_promises`;
CREATE TABLE `payment_promises` (
  `id` int(11) NOT NULL,
  `valid_until` date NOT NULL,
  `contract_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_types`
--

DROP TABLE IF EXISTS `payment_types`;
CREATE TABLE `payment_types` (
  `id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `payment_types`
--

INSERT INTO `payment_types` (`id`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Efectivos', '2023-04-25', '2023-04-25'),
(2, 'Pagossss', '2023-04-25', '2023-04-25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plans`
--

DROP TABLE IF EXISTS `plans`;
CREATE TABLE `plans` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `ceil_down_mbps` int(5) NOT NULL,
  `ceil_up_mbps` int(5) NOT NULL,
  `price` float(6,2) NOT NULL,
  `contracts_count` int(5) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `plans`
--

INSERT INTO `plans` (`id`, `name`, `ceil_down_mbps`, `ceil_up_mbps`, `price`, `contracts_count`, `created_at`, `updated_at`) VALUES
(1, 'Plan Basico 300', 11, 7, 300.00, 0, '2023-02-07', '2023-02-10'),
(2, 'Plan Basico 350', 18, 10, 350.00, 0, '2023-02-10', '2023-02-10'),
(3, 'Plan Familia Free', 5, 5, 250.00, 0, '2023-02-10', '2023-02-10'),
(4, 'Plan Normal 400', 19, 15, 400.00, 0, '2023-02-10', '2023-02-10'),
(5, 'Plan Normal 500', 25, 20, 500.00, 0, '2023-02-10', '2023-02-10'),
(6, 'Plan Premium', 35, 35, 600.00, 0, '2023-02-10', '2023-02-10'),
(7, 'Nuevo Plan', 20, 20, 300.00, 0, '2023-03-08', '2023-03-08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `roles` enum('admin','user','developer') NOT NULL DEFAULT 'user',
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `telephone`, `roles`, `created_at`, `updated_at`) VALUES
(16, 'Adan Escobar', 'adn@test.adn', '$2a$10$7Qp66vne3LEFvnVWpocFgenMtqa9/6RW7DlGuUEy48eNfqEdFjLKW', '556985132', 'user', '2023-05-26', '2023-05-26');

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
  ADD KEY `contracts_fk1` (`plan_id`),
  ADD KEY `contracts_fk2` (`node_id`);

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
  ADD KEY `payment_promises_fk0` (`contract_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `contracts`
--
ALTER TABLE `contracts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `nodes`
--
ALTER TABLE `nodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `payment_promises`
--
ALTER TABLE `payment_promises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payment_types`
--
ALTER TABLE `payment_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `plans`
--
ALTER TABLE `plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
  ADD CONSTRAINT `contracts_fk1` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`id`),
  ADD CONSTRAINT `contracts_fk2` FOREIGN KEY (`node_id`) REFERENCES `nodes` (`id`);

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
  ADD CONSTRAINT `payment_promises_fk0` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
