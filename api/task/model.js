// build your `Task` model here
const db= require('../../data/dbConfig.js')
const helper = require('../project/project-middleware')

function find(){
    const allTasks = db('tasks as t')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed' , 'p.project_name', 'p.project_description')
.join('projects as p', 't.project_id', 'p.project_id')
    return allTasks.then(tasks =>{
        return tasks.map(task => helper.taskToBody(task))
    })
}



const getById = (id) => {
    return db('tasks as ts')
    .where('ts.task_id', id)
    .first();
  }
  const create = async (tasks) => {
    const [id] = await db('tasks')
    .insert(tasks, ['task_id', 'task_description', 'task_notes', 'task_completed', 'project_id' ])
    return getById(id).then(tasks.map(task => helper.taskToBody(task)))
    // getById(id)
  }


  module.exports = {
    find,getById,create,
    // intToBool,projectToBody
}