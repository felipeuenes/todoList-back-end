-- CreateTable
CREATE TABLE "tarefas" (
    "idtarefas" SERIAL NOT NULL,
    "tarefa" VARCHAR(45) NOT NULL,
    "prioridade" VARCHAR(45) NOT NULL,

    CONSTRAINT "tarefas_pkey" PRIMARY KEY ("idtarefas")
);

-- CreateTable
CREATE TABLE "concluidos" (
    "idconcluidos" SERIAL NOT NULL,
    "tarefa" VARCHAR(45) NOT NULL,
    "prioridade" VARCHAR(45) NOT NULL,

    CONSTRAINT "concluidos_pkey" PRIMARY KEY ("idconcluidos")
);
