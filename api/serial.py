from json import loads
from time import sleep
from requests import post
import serial
import re

url = 'http://localhost:9999'
sample = {
    "room": 1,
    "sensors": [
        {"id": 1, "value": 24.69},
        {"id": 2, "value": -127.00},
        {"id": 3, "value": -127.00},
        {"id": 4, "value": -127.00},
        {"id": 5, "value": -127.00},
        {"id": 6, "value": -127.00},
        {"id": 7, "value": -127.00},
        {"id": 8, "value": -127.00},
        {"id": 9, "value": -127.00},
        {"id": 10, "value": -127.00}
    ]
}


def send_echo(payload):
    room = payload['room']
    sensors = payload['sensors']
    for sensor in sensors:
        id = sensor['id']
        value = sensor['value']
        post(
            '%s/api/echo/rooms/%d/sensors/%d/measurements' %
            (url, room, id), json={'value': value}
        )
    return True


def main():
    send_echo(sample)


if __name__ == "__main__":
    main()

# while True:
#     try:
#         ser = serial.Serial('/dev/ttyS0')
#         print('.. port connected')
#         while True:
#             line = ser.readline()
#             text = line.decode('utf-8')
#             text = re.sub(',]}$', ']}', text.strip())
#             process_data(loads(text))
#
#     except:
#         print('.. port not found')
#         sleep(5)
