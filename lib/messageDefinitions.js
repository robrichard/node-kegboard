'use strict';

module.exports = [
    {
        type: 'hello',
        id: '0100',
        tags: [
            {
                id: '01',
                name: 'firmware_version',
                type: 'uint16'
            },
            {
                id: '02',
                name: 'protocol_version',
                type: 'uint16'
            },
            {
                id: '03',
                name: 'serial_number',
                type: 'string'
            },
            {
                id: '04',
                name: 'uptime_ms',
                type: 'uint32'
            },
            {
                id: '05',
                name: 'uptime_days',
                type: 'uint32'
            }
        ]
    },
    {
        type: 'board_configuration',
        id: '0200',
        tags: [
            {
                id: '01',
                name: 'board_name',
                type: 'string'
            },
            {
                id: '02',
                name: 'baud_rate',
                type: 'uint16'
            },
            {
                id: '03',
                name: 'update_interval',
                type: 'uint16'
            },
            {
                id: '04',
                name: 'watchdog_timeout',
                type: 'uint16'
            }
        ]
    },
    {
        type: 'meter_status',
        id: '1000',
        tags: [
            {
                id: '01',
                name: 'meter_name',
                type: 'string'
            },
            {
                id: '02',
                name: 'meter_reading',
                type: 'uint32'
            }
        ]
    },
    {
        type: 'temperature_reading',
        id: '1100',
        tags: [
            {
                id: '01',
                name: 'sensor_name',
                type: 'string'
            },
            {
                id: '02',
                name: 'sensor_reading',
                type: 'temp_t'
            }
        ]
    },
    {
        type: 'output_status',
        id: '1200',
        tags: [
            {
                id: '01',
                name: 'output_name',
                type: 'string'
            },
            {
                id: '02',
                name: 'output_reading',
                type: 'output_t'
            }
        ]
    },
    {
        type: 'auth_token',
        id: '1400',
        tags: [
            {
                id: '01',
                name: 'device_name',
                type: 'string'
            },
            {
                id: '02',
                name: 'token',
                type: 'bytes'
            },
            {
                id: '03',
                name: 'status',
                type: 'uint8'
            }
        ]
    }
];