-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2023 a las 20:05:54
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
(9, 'San Antonio', '2023-01-30', '2023-01-30'),
(10, 'Nueva Zelanda', '2023-01-30', '2023-01-30'),
(12, 'La Esperanza', '2023-02-04', '2023-02-04'),
(13, 'City', '2023-02-23', '2023-02-23');

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

--
-- Volcado de datos para la tabla `bills`
--

INSERT INTO `bills` (`id`, `concept`, `payment_type_id`, `client_name`, `amount_incomes`, `amount_discharge`, `created_at`, `updated_at`) VALUES
(1, 'Febrero', 1, 'Juan Morales Lopez', '350.00', '0.00', '2023-02-25', '2023-02-25'),
(3, 'PAGO', 4, '', '350.00', '0.00', '2023-02-26', '2023-02-26'),
(4, 'Gasolina', 3, '', '0.00', '200.00', '2023-02-26', '2023-02-26'),
(5, 'Reinaldo', 5, '', '350.00', '0.00', '2023-02-26', '2023-02-26');

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
(309, 'Esc Adn', '9933234293', 1, '2023-01-29', '2023-01-29'),
(310, 'Adriana Lopez', '332345978', 2, '2023-01-29', '2023-01-29'),
(311, 'Felipe Montoya', '55452356', 4, '2023-01-29', '2023-02-23'),
(312, 'Julian Perez', '8364719198', 7, '2023-01-29', '2023-01-29'),
(314, 'Lucia Mendez', '937436498', 4, '2023-01-29', '2023-01-29'),
(315, 'Mario Lopez', '9837492', 1, '2023-01-29', '2023-01-29'),
(316, 'Lorenso de Medichi', '556565532', 6, '2023-01-29', '2023-01-29'),
(317, 'Marcos Jeronimo', '98237128', 3, '2023-01-29', '2023-01-29'),
(318, 'Misael Hernandez', '8126398217', 3, '2023-01-29', '2023-01-29'),
(319, 'Kim Jim-Young', '53445532', 1, '2023-01-29', '2023-01-29'),
(320, 'Yonatan ', '12930912', 2, '2023-02-04', '2023-02-04'),
(321, 'Luciano Lopez', '12321', 10, '2023-02-04', '2023-02-04'),
(322, 'usuarioUno', '9933234291', 6, '2023-02-04', '2023-03-11'),
(323, 'Francisco', '98765430', 1, '2023-02-04', '2023-02-04');

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

--
-- Volcado de datos para la tabla `contracts`
--

INSERT INTO `contracts` (`id`, `client_id`, `plan_id`, `day_cut`, `server_id`, `state`, `ip`, `netmask`, `mac_address`, `created_invoice`, `details`, `created_at`, `updated_at`) VALUES
(10, 309, 3, 1, 1, 'Activo', '10.10.10.121', '255.255.255.0', 'MAC', 1, '', '2023-01-30', '2023-01-30'),
(11, 311, 5, 1, 1, 'Activo', '12.10.134.12', '255.255.255.0', 'MAC_EJEMPLO', 1, '', '2023-01-30', '2023-01-30'),
(12, 316, 4, 1, 1, 'Activo', '192.168.6.120', '255.255.255.0', 'MAC:NEW:ADD', 1, '', '2023-01-30', '2023-01-30');

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

--
-- Volcado de datos para la tabla `invoices`
--

INSERT INTO `invoices` (`id`, `contract_id`, `from`, `to`, `created_at`, `updated_at`, `die_date`, `state`) VALUES
(3, 10, '2023-02-01', '2023-02-28', '2023-02-28', '2023-02-28', '2023-02-04', 'Activa'),
(5, 11, '2023-02-01', '2023-02-28', '2023-02-28', '2023-02-28', '2023-02-04', 'Activa');

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

--
-- Volcado de datos para la tabla `nodes`
--

INSERT INTO `nodes` (`id`, `address_id`, `details`, `ports`, `disponibles`, `usados`, `created_at`, `updated_at`) VALUES
(1, 1, 'Puente...', 16, 0, 16, '2023-01-07', '2023-02-12'),
(2, 7, 'Cancha 2da del 11', 16, 0, 0, '2023-01-14', '2023-01-14'),
(3, 2, 'ejemplo', 8, 0, 0, '2023-01-14', '2023-01-14'),
(13, 1, 'Bellota E/S', 8, 0, 0, '2023-02-12', '2023-02-12'),
(14, 1, 'Meme', 16, 0, 0, '2023-02-23', '2023-02-23');

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
(1, 'Plan 350', 10, 16, '350.00', 0, '2023-01-15', '2023-01-15'),
(2, 'Plan 400', 30, 25, '400.00', 0, '2023-01-15', '2023-01-15'),
(3, 'Premium', 50, 60, '600.00', 0, '2023-01-15', '2023-01-15'),
(4, 'Familiar', 5, 8, '250.00', 0, '2023-01-15', '2023-01-15'),
(5, 'Plan 300', 8, 5, '300.00', 0, '2023-01-15', '2023-02-23');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=324;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
