# node-kegboard
NodeJS library to interface with a kegbot kegboard. Implements the keboard serial protocol as defined here: https://kegbot.org/docs/kegboard/serial-protocol/

## Installation
```javascript
npm install kegboard --save
```

## Usage
Create a kegboard instance, passing the kegboard device name
```javascript
var Kegboard = require('kegboard');
var myKegBoard = new Kegboard({port: '/dev/ttyACM2'});
```

Add listeners for kegboard messages
```javascript
myKegBoard.on('hello', function (data) {
    console.log(data);
});
```

Will output:
```json
{
  "firmware_version": 18,
  "serial_number": "KB-0102-0E32-F1234567",
  "uptime_ms": 11022781,
  "uptime_days": 5
}
```

### To do
* check CRC before reading kegboard message
* Test other message types
* Send data to the kegboard
