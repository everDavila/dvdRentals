const knex = require('../config');

const create = (bodyHome) => {
    ////Insert into ACTOR
        return knex
        .insert(bodyHome) 
        .into('actor')  
        .returning(['actor_id','first_name','last_name','last_update' ])
}

const findAll = () => {
    ////Getting data from ACTOR
    return knex
        .select(['actor_id','first_name','last_name','last_update'])
        .from('actor')
}

const findOne = ( actorId) => {
    ////Select FROM __ WHERE __
        return knex
        .select(['actor_id','first_name','last_name','last_update'])
        .from('actor')
        .where({ actor_id:  actorId });
}

const update = ( actorId, bodyToUpdate) => {
        ////info to update      
        return knex
        .update(bodyToUpdate)  
        .from('actor')
        .where({ actor_id:  actorId })
        .returning(['actor_id','first_name','last_name','last_update'])
}

////Destroy data (deleting from DB)
const destroy = ( actorId) => {
    return knex
        .del() 
        .from('actor') 
        .where({ actor_id:  actorId })
}

//// Deleting DB (hidden data , just chante the status from true to false ) 
const softDelete = ( actorId) => {
    return knex
        .update({ active: false })
        .from('actor')
        .where({ actor_id:  actorId })
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}