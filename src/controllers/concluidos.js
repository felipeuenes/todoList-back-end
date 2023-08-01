const prisma = require('../database')


module.exports = {
    async create (req, res) {

        const { id } = req.params;
        
        try {
          if (!id) return res.status(400).json('erro, sem id');   
          
          const listTask = await prisma.tarefas.findUnique({
            where: { idtarefas: Number(id) }
          });

    //       const arrayTarefas = Object.entries(listTask)
    
    //       console.log(arrayTarefas);
    //      for (const dado of arrayTarefas) {
    //   await prisma.concluidos.create({
    //     data: {
    //       tarefa: dado[0],
    //       prioridade: dado[0] 
    //     }
    //   })
    // }
      
      // console.log('Dados copiados com sucesso!');

      if (listTask) {
        await prisma.concluidos.create({
          data: {
            tarefa: listTask.tarefa,
            prioridade: listTask.prioridade,
          }
        });
      } else {
        console.error('Tarefa não encontrada.');
      }

      return res.status(201).json({ message: "Dados copiados com sucesso!" })
      
  } catch (error) {
    console.error('Erro ao copiar dados:', error);
  } finally {
    await prisma.$disconnect();
  }

    }
  }