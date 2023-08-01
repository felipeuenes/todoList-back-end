const prisma = require('../database')


module.exports = {
    async create (req, res) {

        const { id } = req.params;
        
        try {
          if (!id) return res.status(400).json('erro, sem id');   
          
          const listTask = await prisma.tarefas.findUnique({
            where: { idtarefas: Number(id) }
          });
    
         for (const dado of dadosOrigem) {
      await prisma.concluidos.create({
        data: {
          tarefa, prioridade
        }
      })
    }
      
      console.log('Dados copiados com sucesso!');
  } catch (error) {
    console.error('Erro ao copiar dados:', error);
  } finally {
    await prisma.$disconnect();
  }

    }
  }