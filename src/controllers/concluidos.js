const prisma = require('../database')


module.exports = {
    async create (req, res) {

        const { id } = req.params;
        
        try {
          if (!id) return res.status(400).json('erro, sem id');   
          
          const listTask = await prisma.tarefas.findUnique({
            where: { idtarefas: Number(id) }
          });
    
        //   return res.json(listTask)

          await prisma.concluidos.create({ data:{ tarefa, prioridade}});
          
          return res.status(201).json({ message: "Tarefa concluida com sucesso" })
        } catch (error) {
          console.log(error);
        }
      },
}