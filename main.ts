input.onButtonPressed(Button.A, function () {
    radio.sendString("Hallo")
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Blastoise")
    basic.showIcon(IconNames.House)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Charizard")
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(1)
