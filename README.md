

# bpi-gpio

A minimal package to control the GPIO pins for BananaPi using node.

---
### Description
As mentioned this package will help you to easily control the GPIO pins
for BPI boards, but it is tested just on ***[BPI m2 berry](http://wiki.banana-pi.org/Banana_Pi_BPI-M2_Berry)***

---
### Dependencies
This Library uses (gpio) utility from ***[wiringPi](http://wiringpi.com/)*** .
To make sure that ***[wiringPi](http://wiringpi.com/)*** is installed, run the
following command on the Terminal 

>gpio -v 

If there are no errors, you are good to go :)

---

###  Usage
This package has just three functions.

***1.mode(pin, mode)*** 
This function takes two arguments the first one is the GPIO number and the second is the mode, 
until now we have just two modes(OUTPUT or INPUT)

Example:
>const GPIO = require('bpi-gpio')
const LED = 17
GPIO.mode(LED, GPIO.OUTPUT)

###
***2.read(pin)***
This function takes just one argument which is the GPIO pin number.

Example:
>const GPIO = require('bpi-gpio')
const LED = 17
GPIO.read(LED)

***3.write(pin, value)***
This function takes two arguments the first one is the GPIO pin number and the second
is the value you want to write
***hint:*** you should change the pin mode to OUTPUT before using this function.

Example:
>const GPIO = require('bpi-gpio')
const LED = 17
GPIO.mode(LED, GPIO.OUTPUT)
GPIO.write(LED, GPIO.HIGH)

