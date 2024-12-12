function CW () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    mspeed,
    SuperBit.enMotors.M2,
    mspeed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    speed,
    SuperBit.enMotors.M4,
    speed
    )
}
function L () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    speed,
    SuperBit.enMotors.M2,
    mspeed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    mspeed,
    SuperBit.enMotors.M4,
    speed
    )
}
function F () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    mspeed,
    SuperBit.enMotors.M2,
    mspeed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    mspeed,
    SuperBit.enMotors.M4,
    mspeed
    )
}
function B () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    speed,
    SuperBit.enMotors.M2,
    speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    speed,
    SuperBit.enMotors.M4,
    speed
    )
}
function CCW () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    speed,
    SuperBit.enMotors.M2,
    speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    mspeed,
    SuperBit.enMotors.M4,
    mspeed
    )
}
function R () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    mspeed,
    SuperBit.enMotors.M2,
    speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    speed,
    SuperBit.enMotors.M4,
    mspeed
    )
}
let mspeed = 0
let speed = 0
SuperBit.RGB_Program().showRainbow(80, 360)
speed = 172
mspeed = -172
basic.forever(function () {
    F()
    basic.pause(2000)
    R()
    basic.pause(2000)
    B()
    basic.pause(2000)
    L()
    basic.pause(2000)
    CW()
    basic.pause(2000)
    CCW()
    basic.pause(2000)
})
