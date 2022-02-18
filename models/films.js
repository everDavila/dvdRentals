const knex = require('../config');

const create = (bodyHome) => {
    ////Insert into film
        return knex
        .insert(bodyHome) 
        .into('film')  
        .returning(['film_id','title','description','release_year' ])
}

const findAll = () => {
    ////Getting data from film
    return knex
        .select(['film_id','title','description','release_year'])
        .from('film')
}

const findOne = ( idFilm) => {
    ////Select FROM __ WHERE __
        return knex
        .select(['film_id','title','description','release_year'])
        .from('film')
        .where({ film_id:  idFilm });
} 

module.exports = {
    create,
    findAll,
    findOne
}