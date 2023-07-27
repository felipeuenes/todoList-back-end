const prisma = require('../database')

module.exports = {
    async create (req, res) {
       
        try {
            
            const { tarefa, prioridade } = req.body;

            if (!tarefa) return res.status(400).json('insira uma tarefa!');        
            if (!prioridade) return res.status(400).json('insira a prioridade');


            const createTarefa = await prisma.tarefas.create({data: { tarefa, prioridade}});
            return res.status(201).json('Tarefa colocada!')


        } catch (error) {
            console.log(error);
        }
    }
}