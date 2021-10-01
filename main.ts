basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    if (input.lightLevel() > 70) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, input.lightLevel())
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
