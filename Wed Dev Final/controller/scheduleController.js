const Schedule = require("../models/schedule");
const asyncHandler = require('express-async-handler')

// Display list of all days of the schedule.
exports.schedule_list = asyncHandler(async (req, res, next) => {

  let fullSchedule = await Schedule.find({}, "week dow topic").exec();

  // Define the order of days
  const order = ['monday', 'wednesday', 'friday'];

  //Sort schedule by order of days
  fullSchedule.sort((a, b) => {
      if (a.week === b.week) {
      return order.indexOf(a.dow) - order.indexOf(b.dow);
      }
      else {
        return a.week - b.week;
      }
  });



  fullSchedule = fullSchedule.map((obj) => {
    // TODO any pre-processing of the schedule data 

    return obj;
  })

  res.render('schedule', {"schedule": fullSchedule, page: 'schedule'});

});
