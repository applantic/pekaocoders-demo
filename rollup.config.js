import scss  from 'rollup-plugin-scss';

export default {
    input: 'src/main.js',
    output: {
        file: 'demo/main.min.js',
        format: 'umd'
    },
    plugins: [
        scss({
            output: 'demo/main.css'
        }),
    ]
};
