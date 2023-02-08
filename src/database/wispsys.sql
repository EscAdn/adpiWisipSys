-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-02-2023 a las 04:43:53
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

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
CREATE DATABASE IF NOT EXISTS `wispsys` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;
USE `wispsys`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `address` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `addresses`
--

INSERT INTO `addresses` (`id`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Example', '2023-02-10', '2023-02-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_spanish2_ci NOT NULL,
  `telephone` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `address_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `name`, `telephone`, `address_id`, `created_at`, `updated_at`) VALUES
(1, 'Jon MirchaS', '6890841312', 1, '2023-02-07', '2023-02-07'),
(2, 'Nikolas Shurman', '3479237819', 1, '2023-02-07', '2023-02-07');

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
  `state` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `ip` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `netmask` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `mac_address` varchar(17) COLLATE utf8_spanish2_ci NOT NULL,
  `details` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `node_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `contracts`
--

INSERT INTO `contracts` (`id`, `client_id`, `plan_id`, `day_cut`, `server_id`, `state`, `ip`, `netmask`, `mac_address`, `details`, `node_id`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 1, 0, 'disabled', '192.168.7.101', '255.255.255.0', 'MAC_ADDRESS_NEW', 'Cambio el datp', 1, '2023-02-07', '2023-02-07'),
(3, 1, 1, 1, 0, 'eneble', '192.168.7.10', '255.255.255.0', 'MAC_ADDRESS', 'None', 1, '2023-02-07', '2023-02-07');

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
  `due_date` date NOT NULL,
  `state` varchar(20) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nodes`
--

CREATE TABLE `nodes` (
  `id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `details` varchar(70) COLLATE utf8_spanish2_ci NOT NULL,
  `ports` int(2) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `nodes`
--

INSERT INTO `nodes` (`id`, `address_id`, `details`, `ports`, `created_at`, `updated_at`) VALUES
(1, 1, 'Nodo Uno', 16, '2023-02-07', '2023-02-07');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plans`
--

CREATE TABLE `plans` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
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
(1, 'Plan Example', 50, 30, 450.00, 0, '2023-02-07', '2023-02-07');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

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
-- Indices de la tabla `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `contracts`
--
ALTER TABLE `contracts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nodes`
--
ALTER TABLE `nodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `payment_promises`
--
ALTER TABLE `payment_promises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `plans`
--
ALTER TABLE `plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

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
