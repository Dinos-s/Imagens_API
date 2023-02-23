const PartyModel = require('../models/Party')

function checkPartyBudget(budget, services){
    const priceSum = services.reduce((sum, service) => {
        sum + service.price, 0

        if(priceSum > budget){
            return false
        }
        return true
    })
}

const partyController = {
        // POST
        create: async(req, res)=>{
            try {
                const party = {
                    title: req.body.title,
                    author: req.body.author,
                    description: req.body.description,
                    budget: req.body.budget,
                    image: req.body.image,
                    services: req.body.services
                }

                if(party.services && checkPartyBudget(party.budget, party.services)){
                    res.status(406).json({msg: 'Orçamento insuficente'})
                    return
                }

                const response = await PartyModel.create(party)
                res.status(201).json({response, msg: 'Party created successfully'})
    
            } catch (error) {
                console.log(error);
            }
        },
    
        // GET all
        getAll: async(req, res) => {
            try {
                const services = await PartyModel.find()
                res.json(services)
            } catch (error) {
                console.log(error);
            }
        },
    
        // GET id
        getID: async(req, res) => {
            try {
                const id = req.params.id
                const party = await PartyModel.findById(id)
    
                if (!party) {
                    res.status(404).json({msg: 'Serviço não encontrado'});
                    return;
                }
    
                res.json(party)
            } catch (error) {
                console.log(error);
            }
        },
    
        // PUT / PATCH
        update: async(req, res) => {
            const id = req.params.id
    
            const party = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }
    
            const updateService = await PartyModel.findByIdAndUpdate(id, party)
    
            if (!updateService) {
                res.status(404).json({msg: 'Service not found'})
                return
            }
    
            res.status(200).json({msg:'atualizado com sucesso'})
        },
    
        // DELETE
        delete: async(req, res) => {
            try {
                const id = req.params.id
                const party = await PartyModel.findById(id)
    
                if (!service) {
                    res.status(404).json({msg: 'Serviço não encontrado'});
                    return;
                }
    
                const deleteService = await PartyModel.findByIdAndDelete(id)
    
                res.status(200).json({deleteService, msg: 'Serviço excluido com sucesso'});
    
            } catch (error) {
                console.log(error);
            }
        }
}

module.exports = partyController