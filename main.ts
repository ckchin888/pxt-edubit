basic.forever(function () {
    edubitTrafficLightBit.setLed(LedColor.Red, 1)
    edubitTrafficLightBit.setLed(LedColor.Yellow, 0)
    edubitTrafficLightBit.setLed(LedColor.Green, 0)
    basic.pause(200)
    edubitTrafficLightBit.setLed(LedColor.Red, 0)
    edubitTrafficLightBit.setLed(LedColor.Yellow, 1)
    edubitTrafficLightBit.setLed(LedColor.Green, 0)
    basic.pause(200)
    edubitTrafficLightBit.setLed(LedColor.Red, 0)
    edubitTrafficLightBit.setLed(LedColor.Yellow, 0)
    edubitTrafficLightBit.setLed(LedColor.Green, 1)
    basic.pause(200)
})
