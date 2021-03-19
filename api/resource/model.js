// build your `Resource` model here
const db= require('../../data/dbConfig')
function find(){
    return db('resources as rs')

}


const getById = (id) => {
    return db('resources as rs').where('projects.project_id', id).first();
  }
  const create = async (resources) => {
    const [id] = await db('resources')
    .insert(resources, ['resource_id', 'resource_name', 'resource_description' ])
    return getById(id)
  }
  module.exports = {
    find,getById,create,
    // intToBool,projectToBody
}