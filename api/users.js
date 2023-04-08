/* eslint-disable no-useless-catch */
const express = require("express");
const router = express.Router();

// POST /api/users/registerconst registerUser = async () => {
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

// POST /api/users/login
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
// GET /api/users/me

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
        

// GET /api/users/:username/routines

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

module.exports = router;
