module.exports = {
    purge: [
        './resources/js/**/*.vue',
        './resources/views/**/*.blade.php'
    ],
    theme: {
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
                'nearly-black': 'rgba(0, 0, 0, 0.75)',
            },

            fontSize: {
                '12xl': '8rem',
            },

            lineHeight: {
                '12': '12rem',
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
                '250': '250px',
                '350': '350px',
                '450': '450px',
            }
        },

        borderRadius: {
            'none': '0',
            'sm': '.125rem',
            default: '.35rem',
            'card': '5.5% / 4.5%',
            'lg': '.5rem',
            'full': '9999px',
            'xl': '1rem',
        },

        boxShadow: {
            default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
            md:  '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
            lg:  '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            xl:  '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
            inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            active: 'inset 0 0 0 2px #68d391',
            highlight: '0 0 0 5px rgba(66,153,225,0.8)',
            error: '0 0 0 5px rgba(220, 38, 38, 1)',
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
        borderRadius: ['responsive', 'first', 'last'],
        borderWidth: ['responsive', 'last'],
        height: ['responsive'],
        margin: ['responsive', 'odd', 'even'],
        opacity: ['disabled', 'hover'],
        padding: ['responsive', 'even'],
        textColor: ['responsive', 'hover', 'group-hover'],
    },

    plugins: [
        require('@tailwindcss/custom-forms'),
    ]
};
