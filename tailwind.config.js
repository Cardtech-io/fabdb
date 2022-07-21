const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'media',

    purge: {
        content: [
            './resources/js/**/*.vue',
            './resources/js/**/*.js',
            './resources/views/**/*.blade.php'
        ],
        // Generated class names that we have to protect for production
        safelist: [
            'sm:w-1/3',
            'sm:w-1/4',
            'sm:w-1/5',
            'sm:w-1/6',
            'sm:w-1/7',
            'sm:w-1/8',
            'md:w-1/3',
            'md:w-1/4',
            'md:w-1/5',
            'md:w-1/6',
            'md:w-1/7',
            'md:w-1/8',
            'h-14'
        ]
    },
    theme: {
        fontWeight: {
            thin: 100,
            normal: 200,
            bold: 400,
        },

        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },

        extend: {
            backgroundColor: {
                'primary': 'var(--button-primary-background-color)',
                'button-primary': 'var(--button-primary-background-color)',
                'button-primary-hover': 'var(--button-primary-background-color)',
                'secondary': 'var(--button-secondary-background-color)',
                'secondary-hover': 'var(--button-secondary-hover-background-color)',
                'disabled': 'var(--button-disabled-background-color)',
                'disabled-hover': 'var(--button-disabled-hover-background-color)',
                'hardly-black': 'rgba(0, 0, 0, 0.25)',
                'semi-black': 'rgba(0, 0, 0, 0.5)',
                'nearly-black': 'rgba(0, 0, 0, 0.85)',
                'nearly-white': 'rgba(255, 255, 255, 0.85)'
            },

            colors: {
                'orange': {
                    '100': '#FFFAF0',
                    '200': '#FEEBC8',
                    '300': '#FBD38D',
                    '400': '#F6AD55',
                    '500': '#ED8936',
                    '600': '#DD6B20',
                    '700': '#C05621',
                    '800': '#9C4221',
                    '900': '#7B341E',
                },
                'teal': {
                    '100': '#7B341E',
                    '200': '#B2F5EA',
                    '300': '#81E6D9',
                    '400': '#4FD1C5',
                    '500': '#38B2AC',
                    '600': '#319795',
                    '700': '#2C7A7B',
                    '800': '#285E61',
                    '900': '#234E52'
                }
            },

            fontSize: {
                '12xl': '8rem',
            },

            lineHeight: {
                '12': '12rem',
            },

            listStyleType: {
                none: 'none',
                disc: 'disc',
                decimal: 'decimal',
                square: 'square',
                roman: 'lower-roman',
            },

            minHeight: {
                '96': '24rem',
                '345px': '345px',
            },

            textColor: {
                'common': '#919191',
                'token': '#919191',
                'promo': '#48BB78',
                'rare': '#008CCC',
                'superrare': '#784E99',
                'majestic': '#C20E10',
                'legendary': '#E59B46',
                'fabled': 'rgba(191,174,62,1)',
            },

            cursor: {
                'help': 'help'
            },

            borderColor: {
                'crumbs': 'var(--crumbs-background-color)'
            },

            height: {
                'card-drawer': '40%',
                '1/4': '25%',
                '9/20': '45%',
                '1/2': '50%',
                '1/3': '33.3333%',
                '1/10': '10%',
                '140': '140px',
                '160': '160px',
                '200': '200px',
            },

            inset: {
                '-1px': '-1px'
            },

            margin: {
                '1px': '1px',
                '1/4': '25%',
                '1/5': '20%',
            },

            maxWidth: {
                '1/2': '50%',
                '3/4': '75%',
                '250': '250px'
            },

            width: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '1/8': '12.5%',
                '1/9': '11.111111%',
                '1/10': '10%',
                '3/10': '30%',
                '7/10': '70%',
                '9/10': '90%',
                '1/20': '5%',
                '200': '200px',
                '250': '250px',
                '300': '300px',
                '350': '350px',
                '450': '450px',
            }
        },

        borderRadius: {
            'none': '0',
            'sm': '.125rem',
            DEFAULT: '.35rem',
            'card': '5.5% / 4.5%',
            'deck': '9999px 9999px .5rem .5rem',
            'lg': '.5rem',
            'full': '9999px',
            'xl': '1rem',
        },

        boxShadow: {
            default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
            md:  '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
            lg:  '0 10px 15px -3px rgba(0, 0, 0, .4), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            xl:  '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
            inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            active: 'inset 0 0 0 2px #68d391',
            highlight: '0 0 0 5px rgba(66,153,225,0.8)',
            error: '0 0 0 3px rgba(220, 38, 38, 0.8)',
            outline: '0 0 0 5px rgba(66,153,225,0.5)',
            pitched: '0 0 0 5px #4299e1',
            played: '0 0 0 5px #48bb78',
            black: '0 0 0 5px #000',
            focus: '0 0 0 3px rgba(66,153,225,0.5)',
            none: 'none'
        },

        fontFamily: {
            'sans': ['Raleway', 'Helvetica', 'Helvetica\\ Neue', 'Arial', 'sans-serif'],
            'serif': ['Lora', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        },

        zIndex: {
            '0': 0,
            '10': 10,
            '20': 20,
            '25': 25,
            '30': 30,
            '40': 40,
            '50': 50,
            '75': 75,
            '100': 100,
            '1000': 1000,
            'auto': 'auto',
        }
    },

    variants: {
        backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive', 'first', 'last'],
        borderWidth: ['responsive', 'last', 'focus'],
        display: ['hover', 'group-hover', 'responsive'],
        height: ['responsive'],
        margin: ['responsive', 'odd', 'even'],
        opacity: ['disabled', 'hover', 'group-hover'],
        padding: ['responsive', 'even'],
        textColor: ['responsive', 'hover', 'group-hover'],
        zIndex: ['responsive', 'hover']
    },

    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class'
        }),

        plugin(({addUtilities}) => {
            addUtilities({
                '.backdrop-blur-2': {
                    'backdrop-filter': 'blur(2px)'
                }
            });
        })
    ]
};
