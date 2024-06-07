-- Criação do banco de dados
CREATE DATABASE VetAppointments;
USE VetAppointments;

-- Tabela de Usuários
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20)
) COMMENT 'Tabela contendo informações dos usuários (tutores)';

-- Tabela de Pets
CREATE TABLE Pets (
    pet_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    pet_name VARCHAR(255) NOT NULL,
    animal_type VARCHAR(50) NOT NULL,
    breed VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
) COMMENT 'Tabela contendo informações dos pets';

-- Tabela de Serviços
CREATE TABLE Services (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
) COMMENT 'Tabela contendo os tipos de serviços oferecidos';

INSERT INTO Services (name) VALUES
('Consulta'),
('Ultrasson'),
('Raio-X'),
('Vacinação'),
('Cirurgia'),
('Exames Hematológicos');

-- Tabela de Horários
CREATE TABLE ScheduleTimes (
    schedule_time_id INT AUTO_INCREMENT PRIMARY KEY,
    day_of_week ENUM('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado') NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL
) COMMENT 'Tabela contendo os horários disponíveis para agendamento';

INSERT INTO ScheduleTimes (day_of_week, start_time, end_time) VALUES
('Segunda', '14:00:00', '17:00:00'),
('Terça', '14:00:00', '17:00:00'),
('Quarta', '14:00:00', '17:00:00'),
('Quinta', '14:00:00', '17:00:00'),
('Sexta', '14:00:00', '17:00:00');

-- Tabela de Agendamentos
CREATE TABLE Appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    pet_id INT,
    service_id INT,
    schedule_time_id INT,
    appointment_date DATE NOT NULL,
    confirmed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (pet_id) REFERENCES Pets(pet_id),
    FOREIGN KEY (service_id) REFERENCES Services(service_id),
    FOREIGN KEY (schedule_time_id) REFERENCES ScheduleTimes(schedule_time_id)
) COMMENT 'Tabela contendo os agendamentos realizados';

-- Tabela de Bloqueios de Horários
CREATE TABLE BlockedTimes (
    blocked_time_id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    schedule_time_id INT NOT NULL,
    FOREIGN KEY (schedule_time_id) REFERENCES ScheduleTimes(schedule_time_id)
) COMMENT 'Tabela contendo os horários bloqueados para agendamentos';

-- Criação de índices para melhorar a performance nas buscas
CREATE INDEX idx_appointment_date_time ON Appointments (appointment_date, schedule_time_id);
CREATE INDEX idx_blocked_date_time ON BlockedTimes (date, schedule_time_id);
