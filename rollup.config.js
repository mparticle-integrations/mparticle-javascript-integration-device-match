import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
    {
        input: 'src/DeviceMatchEventForwarder.js',
        output: {
            file: 'DeviceMatchEventForwarder.js',
            format: 'iife',
            exports: 'named',
            name: 'mpDeviceMatchKit',
            strict: false
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs()
        ]
    },
    {
        input: 'src/DeviceMatchEventForwarder.js',
        output: {
            file: 'dist/DeviceMatchEventForwarder.js',
            format: 'iife',
            exports: 'named',
            name: 'mpDeviceMatchKit',
            strict: false
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs()
        ]
    },
    {
        input: 'src/DeviceMatchEventForwarder.js',
        output: {
            file: 'npm/DeviceMatchEventForwarder.js',
            format: 'cjs',
            exports: 'named',
            name: 'mpDeviceMatchKit',
            strict: false
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs()
        ]
    }
]