from json import loads
from requests import post
from re import sub
from threading import Thread
from serial import Serial
from time import sleep, time

time_to_send = False
url = 'http://localhost:9999'
url_server = 'http://161.35.178.247:9999'
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


def send_measurement(payload):
    room = payload['room']
    sensors = payload['sensors']
    for sensor in sensors:
        id = sensor['id']
        value = sensor['value']
        post(
            '%s/api/rooms/%d/sensors/%d/measurements' %
            (url, room, id), json={'value': value}
        )
        try:
            post(
                '%s/api/rooms/%d/sensors/%d/measurements' %
                (url_server, room, id), json={'value': value}
            )
        except:
            pass

    return True


def check_time():
    global time_to_send
    while True:
        sleep(1)
        if int(time() % 300) == 0:
            time_to_send = True


def main():
    global time_to_send
    Thread(target=check_time).start()

    while True:
        try:
            ser = Serial('/dev/ttyUSB0')
            print('.. port connected')
            while True:
                line = ser.readline()
                text = line.decode('utf-8')
                text = sub(',]}$', ']}', text.strip())
                text = loads(text)
                print(text)
                send_echo(text)
                if time_to_send:
                    send_measurement(text)
                    time_to_send = False

        except:
            print('.. port not found')
            sleep(5)


if __name__ == "__main__":
    main()
