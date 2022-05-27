basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 11) {
        cuteBot.moveTime(cuteBot.Direction.backward, 30, 2)
        cuteBot.moveTime(cuteBot.Direction.left, 30, 1)
        cuteBot.forward()
    }
})
basic.forever(function () {
    cuteBot.moveTime(cuteBot.Direction.forward, 45, 5)
})
basic.forever(function () {
    music.playMelody("C5 A G B A G A B ", 120)
})
