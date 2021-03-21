// build your `/api/resources` router here
// build your `/api/Resources` router here
const express = require('express')
const Resources = require('./model')
const router = express.Router()

router.get('/', async (req, res, next)=>{
    try {
        const allResources = await Resources.find()
        res.status(200).json(allResources)
        console.log(res.body, "here")
    } catch (err){
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
      const data = await Resources.getById(req.params.id)
      res.json(data);
    } catch (err) {
      next(err);
    }
})

router.post(
    "/",
    async (req, res, next) => {
      try {
        const data = await Resources.create(req.body);
        res.status(201).json(data);
      } catch (err) {
        next(err);
      }
      // DO YOUR MAGIC
    }
  );

module.exports = router