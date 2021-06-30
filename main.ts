let pressure = 0
input.onButtonPressed(Button.A, function () {
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    music.playMelody("C5 C5 B B C5 C5 B B ", 175)
    basic.showString("INTRUDER!")
})
basic.forever(function () {
    pressure = pins.analogReadPin(AnalogPin.P0)
    while (pressure > 500) {
        music.playMelody("C5 C5 B B C5 C5 B B ", 175)
        radio.sendString("INTRUDER!")
        basic.showString("INTRUDER!")
    }
})
