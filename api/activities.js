const express = require('express');
const router = express.Router();
const { getAllActivities,
    getActivityById,
    getActivityByName,
    attachActivitiesToRoutines,
    createActivity,
    updateActivity }  = require("../db")

// GET /api/activities/:activityId/routines

// GET /api/activities/:activityId/routines
router.get('/:activityId/routines', async (req, res, next) => {
    try {
      const routines = await getPublicRoutinesByActivity({id: req.params.activityId});
      if(routines) {
        res.send(routines);
      } else {
        next({
          name: 'NotFound',
          message: `No Routines found for Activity ${req.params.activityId}`
        })
      }
    } catch (error) {
      next(error);
    }
  });

// GET /api/activities
router.get('/', async (req, res, next) => {
    try {
      const activities = await getAllActivities();
      if(activities) {
        res.send(activities);
      } else {
        next({
          name: 'NotFound',
          message: `No Routines found for Activity ${req.params.activityId}`
        })
      }
    } catch (error) {
      next(error);
    }
  });
// POST /api/activities

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
        

// PATCH /api/activities/:activityId

router.patch('/', async (req, res, next) => {
    try {
      const updateActivity = await getAllActivities();
      if(updateActivity) {
        res.send(updateActivity);
      } 
        
    }
     catch (error) {
      next(error);
    }
  });

module.exports = router;
