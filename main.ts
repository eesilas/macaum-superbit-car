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
function stop () {
    SuperBit.MotorStopAll()
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
function test () {
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
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
SuperBit.RGB_Program().showRainbow(80, 360)
let _var = 172
speed = _var
mspeed = 0 - _var
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showNumber(1)
            F()
        } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showNumber(2)
            B()
        } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showNumber(3)
            L()
        } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showNumber(4)
            R()
        } else if (huskylens.isAppear(5, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showNumber(5)
            test()
        } else {
            stop()
        }
    } else {
        basic.showIcon(IconNames.Meh)
        stop()
    }
})
