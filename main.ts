input.onButtonPressed(Button.A, function () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    70,
    1
    )
})
input.onButtonPressed(Button.AB, function () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    0,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    80,
    0
    )
})
basic.forever(function () {
    if (input.lightLevel() < 30) {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        70,
        1
        )
    } else {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        0,
        0
        )
    }
})
