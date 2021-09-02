# Room Sensors

> Display of room temperature sensors

## Deploy

### Install Node on RPi Zero
Instructions for RPI zero

https://hassancorrigan.com/blog/install-nodejs-on-a-raspberry-pi-zero/#:~:text=NodeJS%20Install%20Steps%20for%20Pi, xz%20extension).

### Run web server under PM2

```BASH
pm2 serve /home/pi/room-sensors/build 80 --name 'web' 

```

### Create DB

This app requires a sqlite3 file to work with, `api\db\sensors.db` to create the DB do the following

```BASH
$ mkdir db
$ cd db
$ sqlite3 sensors.db
sqlite> .databases
sqlite> exit
```

Then, to create the tables with the model skema run the following code in a python terminal

```Python
from models import *
from sensor_api import *
db.create_all(app = create_app())
```

<!--  -->
