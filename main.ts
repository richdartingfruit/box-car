function goBackward () {
    is_going_forward = false
    RingbitCar.freestyle(100, 100)
}
function goForward () {
    is_going_forward = true
    RingbitCar.freestyle(-100, -100)
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
        if (bluetoothCommandString == "A") {
            goForward()
        } else if (bluetoothCommandString == "B") {
            goBackward()
        } else if (bluetoothCommandString == "0") {
            stop()
        } else {
            basic.showString("Waiting")
        }
    }
    basic.showIcon(IconNames.Angry)
})
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
