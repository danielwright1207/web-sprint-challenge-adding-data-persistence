// build your `Task` model here


const db= require('../../data/dbConfig')


function find(){
    const allTasks = db('tasks')
    // .join('projects as p', 'ts.project_id', 'p.project_id')
    // .select('tasks.task_notes', 'tasks.task_description', 'tasks.task_completed')
    // console.log(allTasks)
    return allTasks
}
const getById = (id) => {
    return db('tasks as ts').where('ts.task_id', id).first();
  }
  const create = async (tasks) => {
    const [id] = await db('tasks')
    .insert(tasks, ['task_id', 'task_description', 'task_notes', 'task_completed', 'project_id' ])
    return getById(id)
  }
  module.exports = {
    find,getById,create,
    // intToBool,projectToBody
}