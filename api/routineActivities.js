const express = require('express');
const router = express.Router();

// PATCH /api/routine_activities/:routineActivityId

router.patch('/', async (req, res, next) => {
  try {
    const updateActivity = await getAllActivities();
    if(updateActivity) {
      res.send(updateActivity);
    } else 
      
  }
   catch (error) {
    next(error);
  }
});
      

// DELETE /api/routine_activities/:routineActivityId

router.delete('/', async (req, res, next) => {
  try {
    const destroyRoutineActivity = await getAllActivities();
    if(destroyRoutineActivity) {
      res.send(destroyRoutineActivity);
    } else 
      
  }
   catch (error) {
    next(error);
  }
});
        

module.exports = router;
