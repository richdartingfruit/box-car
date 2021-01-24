function turnForwardLeft () {
    is_going_forward = true
    RingbitCar.freestyle(-100, 20)
}
function goBackward () {
    is_going_forward = false
    RingbitCar.freestyle(100, 100)
}
function goForward () {
    is_going_forward = true
    RingbitCar.freestyle(-100, -100)
}
function turnForwardRight () {
    is_going_forward = true
    RingbitCar.freestyle(20, -100)
}
bluetooth.onBluetoothConnected(function () {
    isBluetoothConnected = true
})
function stop () {
    is_going_forward = false
    RingbitCar.brake()
}
bluetooth.onBluetoothDisconnected(function () {
    isBluetoothConnected = false
})
input.onButtonPressed(Button.A, function () {
    goForward()
})
input.onButtonPressed(Button.B, function () {
    stop()
})
function turnBackwordRight () {
    is_going_forward = false
    RingbitCar.freestyle(100, -20)
}
function turnBackwordLeft () {
    is_going_forward = false
    RingbitCar.freestyle(-20, 100)
}
let sonar2 = 0
let is_going_forward = false
let isBluetoothConnected = false
basic.showIcon(IconNames.House)
RingbitCar.init_wheel(AnalogPin.P2, AnalogPin.P1)
isBluetoothConnected = false
let bluetoothCommandString = ""
bluetooth.startUartService()
basic.forever(function () {
    if (isBluetoothConnected == true) {
        bluetoothCommandString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        if (bluetoothCommandString == "1") {
            goForward()
        } else if (bluetoothCommandString == "7") {
            goBackward()
        } else if (bluetoothCommandString == "B") {
            stop()
        } else if (bluetoothCommandString == "3") {
            turnForwardLeft()
        } else if (bluetoothCommandString == "5") {
            turnForwardRight()
        } else if (bluetoothCommandString == "6") {
            turnBackwordLeft()
        } else if (bluetoothCommandString == "8") {
            turnBackwordRight()
        }
    }
})
basic.forever(function () {
    sonar2 = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    if (sonar2 <= 15 && is_going_forward == true) {
        RingbitCar.brake()
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    basic.pause(100)
})
