import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: 'src/DeviceMatchEventForwarder.js',
    output: {
        file: 'DeviceMatchEventForwarder.js',
        format: 'umd',
        exports: 'named',
        name: 'mp-deviceMatch-kit',
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
        format: 'umd',
        exports: 'named',
        name: 'mp-deviceMatch-kit',
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