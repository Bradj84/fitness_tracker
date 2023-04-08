const express = require('express');
const { getAllPublicRoutines } = require('../db');
const router = express.Router();

// GET /api/routines
router.get('/', async (req, res, next) => {
    try {
      const routines = await getAllPublicRoutines();
      if(routines) {
        res.send(routines);
      } 
          
    } catch (error) {
      next(error);
    }
  });
// POST /api/routines

router.post('/', async (req, res, next) => {
  const {name, description}= req.body
  try {
    const activities = createActivity({ name, description});
    if(activities) {
      res.send(activities);
    } else {
    }  
  } catch (error) {
    next(error);
  }
});
// PATCH /api/routines/:routineId

router.patch('/', async (req, res, next) => {
  const {name, description}= req.body
  try {
    const activities = createActivity({ name, description});
    if(activities) {
      res.send(activities);
    } else {
    }  
  } catch (error) {
    next(error);
  }
});
      

// DELETE /api/routines/:routineId

router.delete('/', async (req, res, next) => {
  const {name, description}= req.body
  try {
    const activities = createActivity({ name, description});
    if(activities) {
      res.send(activities);
    } else {
    }  
  } catch (error) {
    next(error);
  }
});
      

// POST /api/routines/:routineId/activities

router.post('/', async (req, res, next) => {
  const {name, description}= req.body
  try {
    const activities = createActivity({ name, description});
    if(activities) {
      res.send(activities);
    } else {
    }  
  } catch (error) {
    next(error);
  }
});

module.exports = router;
