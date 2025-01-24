export interface Theme {
    colors: {
        primary: string;
        secondary: string;
    },
    textColor: {
        primary: string;
        secondary: string;
    },
    size: {
        small: {
            padding: string;
            fontSize: string;
        },
        medium: {
            padding: string;
            fontSize: string;
        },
        large: {
            padding: string;
            fontSize: string;
        },
    }
}