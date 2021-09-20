from requests import post
from time import sleep

url = 'http://localhost:9999/api/echo/rooms/1/sensors/1/measurements'


def request(url, val):
    data = {"value": val}
    r = post(url, json=data)
    print(data, r.text)
    sleep(0.5)


for z in range(0, 10):
    for i in range(26, 30,):
        request(url, i)

for i in range(25, 40):
    request(url, i)

for i in range(100, 0, -1):
    request(url, i)
