/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',

            black: '#000',
            white: '#fff',

            blueGray: {
                50: '#F8FAFC',
                100: '#F2F5F9',
                200: '#E3E8EF',
                300: '#CDD5E0',
                400: '#96A3B6',
                500: '#677489',
                600: '#495567',
                700: '#354153',
                800: '#20293A',
                900: '#101729',
            },

            gray: {
                50: '#E9E9EA',
                100: '#D3D3D4',
                200: '#A8A8AA',
                300: '#7C7C7F',
                400: '#515155',
                500: '#25252A',
                600: '#1E1E22',
                700: '#161619',
                800: '#0F0F11',
                900: '#070708',
            },

            blue: {
                50: '#E9ECFD',
                100: '#D3D9FC',
                200: '#A7B4F9',
                300: '#7B8EF7',
                400: '#4D6AF6',
                500: '#1F40FF',
                600: '#1739C4',
                700: '#122A93',
                800: '#0C1C62',
                900: '#060E31',
            },

            violet: {
                50: '#F0EBFD',
                100: '#E0D7FC',
                200: '#C3B0F9',
                300: '#A589F8',
                400: '#8864F6',
                500: '#7534FF',
                600: '#5534C4',
                700: '#3F2693',
                800: '#2B1962',
                900: '#150C31',
            },

            green: {
                50: '#E7FDF2',
                100: '#CFFBE6',
                200: '#9FF7CD',
                300: '#6FF3B3',
                400: '#3FEF9A',
                500: '#0FEB81',
                600: '#0CBC67',
                700: '#098D4D',
                800: '#065E34',
                900: '#032F1A',
            },

            pink: {
                50: '#F9E7FE',
                100: '#F3CEFD',
                200: '#E89DFA',
                300: '#DC6CF8',
                400: '#D13BF5',
                500: '#C50AF3',
                600: '#9E08C2',
                700: '#760692',
                800: '#4F0461',
                900: '#270231',
            },

            yellow: {
                50: '#FEFCE8',
                100: '#FEF9C3',
                200: '#FEF08A',
                300: '#FDE047',
                400: '#FACC15',
                500: '#EAB308',
                600: '#CA8A04',
                700: '#A16207',
                800: '#854D0E',
                900: '#713F12',
            },

            orange: {
                50: '#FFF7ED',
                100: '#FFEDD5',
                200: '#FED7AA',
                300: '#FDBA74',
                400: '#FB923C',
                500: '#F97316',
                600: '#EA580C',
                700: '#C2410C',
                800: '#9A3412',
                900: '#7C2D12',
            },
            red: {
                50: '#fdf2f2',
                100: '#fde2e2',
                200: '#fbc5c5',
                300: '#f9a8a8',
                400: '#f47272',
                500: '#ef4444',
                600: '#dc2626',
                700: '#b91c1c',
                800: '#991b1b',
                900: '#7f1d1d',
            },
        },
        spacing: {
            px: '1px',
            '0': '0px',
            '0.5': '0.125rem',
            '1': '0.25rem',
            '1.5': '0.375rem',
            '2': '0.5rem',
            '2.5': '0.625rem',
            '3': '0.75rem',
            '3.5': '0.875rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '7': '1.75rem',
            '8': '2rem',
            '9': '2.25rem',
            '10': '2.5rem',
            '11': '2.75rem',
            '12': '3rem',
            '14': '3.5rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '28': '7rem',
            '32': '8rem',
            '36': '9rem',
            '40': '10rem',
            '44': '11rem',
            '48': '12rem',
            '52': '13rem',
            '56': '14rem',
            '60': '15rem',
            '64': '16rem',
            '72': '18rem',
            '80': '20rem',
            '82': '22rem',
            '96': '24rem',
            '112': '28rem',
            '128': '32rem',
            '144': '36rem',
            '160': '40rem'
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            body: '#fff',
        }),
        backgroundImage: {
            none: 'none',
            'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
            'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
            'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
            'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
            'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
            'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
            'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
            'gradient-zospace-1': 'linear-gradient(180deg, rgba(20, 20, 22, 0.9) 29.21%, rgba(0, 10, 255, 0.72) 75.43%)',
            'gradient-zospace-2': 'linear-gradient(178.46deg, rgba(26, 104, 130, 0) 17.98%, #FF9A3D 38.85%, #FFBE38 40.3%, #4827A5 74.77%)'
        },
        backgroundOpacity: (theme) => theme('opacity'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        borderColor: theme => ({
            ...theme('colors'),
            DEFAULT: '#E3E8EF',
        }),
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '4': '4px',
            '8': '8px',
            '12': '12px',
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        },
        container: {},
        cursor: {
            auto: 'auto',
            DEFAULT: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed',
        },
        fill: {
            current: 'currentColor',
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        flexGrow: {
            '0': '0',
            DEFAULT: '1',
        },
        flexShrink: {
            '0': '0',
            DEFAULT: '1',
        },
        fontFamily: {
            body: '"Sen", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            heading: '"Sen", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            sans: '"Sen", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
        fontSize: {
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.25rem' }],
            base: ['1rem', { lineHeight: '1.5rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1.16' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['5.5rem', { lineHeight: '1' }],
            '9xl': ['6rem', { lineHeight: '1' }],
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            full: '100%',
            screen: '100vh',
        }),
        inset: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            full: '100%',
            '-1/2': '-50%',
            '-1/3': '-33.333333%',
            '-2/3': '-66.666667%',
            '-1/4': '-25%',
            '-2/4': '-50%',
            '-3/4': '-75%',
            '-full': '-100%',
        }),
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
        margin: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        maxHeight: {
            full: '100%',
            screen: '100vh',
        },
        maxWidth: {
            none: 'none',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            prose: '65ch',
        },
        minHeight: {
            '0': '0',
            full: '100%',
            screen: '100vh',
        },
        minWidth: {
            '0': '0',
            full: '100%',
        },
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        opacity: {
            '0': '0',
            '5': '0.05',
            '10': '0.1',
            '20': '0.2',
            '25': '0.25',
            '30': '0.3',
            '40': '0.4',
            '50': '0.5',
            '60': '0.6',
            '70': '0.7',
            '75': '0.75',
            '80': '0.8',
            '90': '0.9',
            '95': '0.95',
            '100': '1',
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': '11',
            '12': '12',
        },
        padding: theme => theme('spacing'),
        placeholderColor: theme => theme('colors'),
        stroke: {
            current: 'currentColor',
        },
        textColor: theme => ({
            ...theme('colors'),
            body: '#070708',
        }),
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            '2full': '200%',
            screen: '100vw',
        }),
        zIndex: {
            auto: 'auto',
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50',
        },
    },
    variants: {
        accessibility: ['responsive', 'focus-within', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        animation: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundClip: ['responsive'],
        backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        backgroundImage: ['responsive'],
        backgroundOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        borderOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        boxSizing: ['responsive'],
        clear: ['responsive'],
        container: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        divideColor: ['responsive', 'dark'],
        divideOpacity: ['responsive'],
        divideStyle: ['responsive'],
        divideWidth: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontVariantNumeric: ['responsive'],
        fontWeight: ['responsive'],
        gap: ['responsive'],
        gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
        gridAutoColumns: ['responsive'],
        gridAutoFlow: ['responsive'],
        gridAutoRows: ['responsive'],
        gridColumn: ['responsive'],
        gridColumnEnd: ['responsive'],
        gridColumnStart: ['responsive'],
        gridRow: ['responsive'],
        gridRowEnd: ['responsive'],
        gridRowStart: ['responsive'],
        gridTemplateColumns: ['responsive'],
        gridTemplateRows: ['responsive'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        justifyItems: ['responsive'],
        justifySelf: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        order: ['responsive'],
        outline: ['responsive', 'focus-within', 'focus'],
        overflow: ['responsive'],
        overscrollBehavior: ['responsive'],
        padding: ['responsive'],
        placeContent: ['responsive'],
        placeItems: ['responsive'],
        placeSelf: ['responsive'],
        placeholderColor: ['responsive', 'dark', 'focus'],
        placeholderOpacity: ['responsive', 'focus'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
        ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
        ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
        ringOpacity: ['responsive', 'focus-within', 'focus'],
        ringWidth: ['responsive', 'focus-within', 'focus'],
        rotate: ['responsive', 'hover', 'focus'],
        scale: ['responsive', 'hover', 'focus'],
        skew: ['responsive', 'hover', 'focus'],
        space: ['responsive'],
        stroke: ['responsive'],
        strokeWidth: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        textOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        textOverflow: ['responsive'],
        textTransform: ['responsive'],
        transform: ['responsive'],
        transformOrigin: ['responsive'],
        transitionDelay: ['responsive'],
        transitionDuration: ['responsive'],
        transitionProperty: ['responsive'],
        transitionTimingFunction: ['responsive'],
        translate: ['responsive', 'hover', 'focus'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive', 'focus-within', 'focus'],
    },
    corePlugins: {},
    plugins: [],
}