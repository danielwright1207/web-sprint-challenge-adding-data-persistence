// build your `/api/tasks` router here
// build your `/api/Tasks` router here
// build your `/api/Resources` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/', async (req, res, next)=>{
    try {
        const allTasks = await Tasks.find()
        res.status(200).json(allTasks)
        console.log(res.body, "here")
    } catch (err){
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
      const data = await Tasks.getById(req.params.id)
      res.json(data);
    } catch (err) {
      next(err);
    }
})

router.post(
    "/",
    async (req, res, next) => {
      try {
        const data = await Tasks.create(req.body);
        res.status(201).json(data);
      } catch (err) {
        next(err);
      }
      // DO YOUR MAGIC
    }
  );

module.exports = router