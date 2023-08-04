-- CreateTable
CREATE TABLE `tarefas` (
    `idtarefas` INTEGER NOT NULL AUTO_INCREMENT,
    `tarefa` VARCHAR(45) NOT NULL,
    `prioridade` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idtarefas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `concluidos` (
    `idconcluidos` INTEGER NOT NULL AUTO_INCREMENT,
    `tarefa` VARCHAR(45) NOT NULL,
    `prioridade` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idconcluidos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
