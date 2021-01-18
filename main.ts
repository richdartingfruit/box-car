radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        RingbitCar.back()
    } else if (receivedNumber == 2) {
        RingbitCar.forward()
    } else if (receivedNumber == 3) {
        RingbitCar.brake()
    } else if (receivedNumber == 4) {
        RingbitCar.forward()
    } else if (receivedNumber == 5) {
        RingbitCar.turnleft()
    } else if (receivedNumber == 6) {
        RingbitCar.turnright()
    }
})
input.onButtonPressed(Button.A, function () {
    RingbitCar.back()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
basic.showIcon(IconNames.LeftTriangle)
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P2, AnalogPin.P1)
basic.forever(function () {
	
})
