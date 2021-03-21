// build your `Project` model here
const db= require('../../data/dbConfig')
const helpers = require('./project-middleware')

// function intToBool(int) {
//     return int === 1 ? true : false
//   }
//   function projectToBody(project) {
//     const result = {
//       ...project,
//       project_completed: intToBool(project.project_completed),
//     };
//     return result;
//   }

function find(){
    const getProject = db('projects as pr')
    .select('pr.project_name', 'pr.project_description', 'pr.project_completed')
return getProject.then(projects=>{
    return projects.map(project=> helpers.projectToBody(project))
})
}


const getProjects = async () => {
    try{
        const projects = await db('projects')
        return projects.map(project => {
            project.project_completed === 0 ?
            {...project, project_completed: false} :
            {...project, project_completed: true}
        })
    } catch(err){
        return {err: 'not getting projects'}
    }
}

// const getById = (id) => {
//     return db('projects').where('projects.project_id', id).first();
//   }

  const create = async (project) => {
    const [id] = await db('projects')
    .insert(project, ['project_id', 'project_name', 'project_description' ])
    return getById(id)
  }

  const getById = async (project_id) =>{
    try{
        const project = await db('projects').where({project_id}).first()
        return {
            ...project, project_completed: project.project_completed === 0 ? false : true
        }

    } catch(err){
        return {err: 'not getting project'}
    }
}

module.exports = {
     find, 
    getById,create,getProjects
    // intToBool,projectToBody
}