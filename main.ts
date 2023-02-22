basic.showNumber(0)
basic.showIcon(IconNames.Yes)
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.pause(1000)
serial.writeLine("?")
basic.forever(function () {
    serial.writeLine("kon nitiha arigatou")
    basic.pause(1000)
})
