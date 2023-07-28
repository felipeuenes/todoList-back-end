const prisma = require('../database')

module.exports = {
  async create (req, res) {
    try {
      const { tarefa, prioridade } = req.body;
      if (!tarefa) return res.status(400).json('insira uma tarefa!');        
      if (!prioridade) return res.status(400).json('insira a prioridade');

      await prisma.tarefas.create({data: { tarefa, prioridade}});
      
      return res.status(201).json({ message: "Tarefa criada com sucesso" })
    } catch (error) {
      console.log(error);
    }
  },

  async read (req, res) {
    const { id } = req.query

    if (id) {
      try {
          const listTask = await prisma.tarefas.findUnique({
            where: { idtarefas: Number(id) }
          })
    
          return res.json(listTask)
      } catch (err) {
        console.log('Deu erro:', err)
      }
    }

    const listTasks = await prisma.tarefas.findMany()
    return res.json(listTasks)
  },

  async update (req, res) {
    const { id } = req.params
    const { tarefa, prioridade } = req.body

    if (!tarefa) return res.status(400).json({ message: "Digite alguma tarefa"})
    if (!prioridade) return res.status(400).json({ message: "Coloque alguma prioridade"})

    if (id && tarefa && prioridade) {
      try {
          const updateTask = await prisma.tarefas.update({
            where: { idtarefas: Number(id) },
            data: {
                tarefa, prioridade
            }
          })
    
          return res.json({ message: "Tarefa atualizada com sucesso" })
      } catch (err) {
        console.log('Deu erro:', err)
      }
    }

    return res.status(400).json({ message: "Digite um id valido" })
  },

  async delete (req, res) {
    const { id } = req.params

    if (id) {
      await prisma.tarefas.delete({
        where: {idtarefas: Number(id)}
      })

      return res.json({message: `Tarefa ${id} foi deletada com sucesso`})
    }

    return res.json({ message: "informe um id valido" })
  }
}