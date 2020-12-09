module.exports = {
    purge: {
        enabled: true,
        content: ['./tailwind.ignore', './src/**/*.js', './src/**/*.ts'],
        options: {
            defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
            //safelist: [],
        },
    },
    theme: {
        extend: {
            borderColor: (theme) => ({
                default: theme('colors.gray.200', 'currentColor'),
            }),
            // fontSize: {'base': '17px'},
            screens: {
                xs: '340px',
                sm: '600px',
                md: '960px',
                lg: '1240px',
                xl: '1400px',
                print: { raw: 'print' },
            },
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        display: ['responsive', 'last', 'hover', 'focus', 'group-hover'],
    },
}
