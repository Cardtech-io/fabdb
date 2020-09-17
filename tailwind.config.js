module.exports = {
    theme: {
        extend: {
            backgroundColor: {
                'button-primary': 'var(--button-primary-background-color)',
                'button-primary-hover': 'var(--button-primary-background-color)',
                'secondary': 'var(--button-secondary-background-color)',
                'secondary-hover': 'var(--button-secondary-hover-background-color)',
                'disabled': 'var(--button-disabled-background-color)',
                'disabled-hover': 'var(--button-disabled-hover-background-color)',
                'semi-black': 'rgba(0, 0, 0, 0.5)',
                'nearly-black': 'rgba(0, 0, 0, 0.75)',
            },

            cursor: {
                'help': 'help'
            },

            borderColor: {
                'crumbs': 'var(--crumbs-background-color)'
            },

            height: {
                '1/2': '50%'
            },

            margin: {
                '1px': '1px',
                '1/4': '25%'
            },

            width: {
                '1/7': '14.2857143%',
                '1/8': '12.5%',
                '1/10': '10%',
                '3/10': '30%',
                '7/10': '70%',
                '9/10': '90%'
            }
        },

        borderRadius: {
            'none': '0',
            'sm': '.125rem',
            default: '.35rem',
            'card': '4% / 3%',
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
            outline: '0 0 0 5px rgba(66,153,225,0.5)',
            pitched: '0 0 0 5px #4299e1',
            played: '0 0 0 5px #48bb78',
            black: '0 0 0 5px #000',
            focus: '0 0 0 3px rgba(66,153,225,0.5)',
            none: 'none'
        },

        fontFamily: {
            'sans': ['Raleway', 'Helvetica', 'Helvetica\\ Neue', 'Arial', 'sans-serif'],
            'serif': ['Capitolium', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
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
        margin: ['responsive', 'odd', 'even'],
        opacity: ['disabled', 'hover'],
        textColor: ['responsive', 'hover', 'group-hover'],

    }
};
