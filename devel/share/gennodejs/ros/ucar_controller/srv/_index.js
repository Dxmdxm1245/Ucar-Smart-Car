
"use strict";

let GetMaxVel = require('./GetMaxVel.js')
let GetSensorTF = require('./GetSensorTF.js')
let SetSensorTF = require('./SetSensorTF.js')
let SetLEDMode = require('./SetLEDMode.js')
let SetMaxVel = require('./SetMaxVel.js')
let GetBatteryInfo = require('./GetBatteryInfo.js')

module.exports = {
  GetMaxVel: GetMaxVel,
  GetSensorTF: GetSensorTF,
  SetSensorTF: SetSensorTF,
  SetLEDMode: SetLEDMode,
  SetMaxVel: SetMaxVel,
  GetBatteryInfo: GetBatteryInfo,
};
