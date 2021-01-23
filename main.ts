radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        goForward()
    } else if (receivedNumber == 2) {
        goBackward()
    } else if (receivedNumber == 3) {
        stop()
    }
})
function goBackward () {
    is_going_forward = false
    RingbitCar.freestyle(100, 100)
}
function goForward () {
    is_going_forward = true
    RingbitCar.freestyle(-100, -100)
}
function stop () {
    is_going_forward = false
    RingbitCar.brake()
}
input.onButtonPressed(Button.A, function () {
    goForward()
})
input.onButtonPressed(Button.B, function () {
    stop()
})
let sonar2 = 0
let is_going_forward = false
basic.showIcon(IconNames.Duck)
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P2, AnalogPin.P1)
basic.forever(function () {
    sonar2 = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    if (sonar2 <= 30 && is_going_forward == true) {
        RingbitCar.brake()
        basic.showIcon(IconNames.No)
        music.setVolume(255)
        music.playTone(139, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Yes)
    }
    basic.pause(100)
})
