from json import loads
from time import sleep
import requests
import serial

url = 'http://localhost:9999'

while True:
    try:
        ser = serial.Serial('/dev/ttyS0')
        print('.. port connected')
        break
    except:
        print('.. port not found')
        sleep(5)

while True:
    line = ser.readline()
    print(loads(line))
