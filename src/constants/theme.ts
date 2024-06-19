import { THEMES } from "@/types";

interface ITheme {
    fonts: {
        primary: string;
        logo: string;
    };
    background: string;
    colors: {
        main: {
            logo: string;
            white: string;
            black: string;
        };
        neutral: {
            darkGray: string;
            gray: string;
            lightGray: string;
        };
        service: {
            error: string;
        };
    };
    transitions: {
        links: string;
        buttons: string;
    };
}

export const Themes: Record<THEMES, ITheme> = {
    light: {
        fonts: {
            primary: "'DM Sans', sans-serif",
            logo: "'Allerta Stencil', sans-serif"
        },
        background: "#FFFFFF",
        colors: {
            main: {
                logo: "#A18A68",
                white: "#FFFFFF",
                black: "#000000"
            },
            neutral: {
                darkGray: "#707070",
                gray: "#D8D8D8",
                lightGray: "#EFEFEF"
            },
            service: {
                error: "#D82700"
            }
        },
        transitions: {
            links: "all 0.5s",
            buttons: "all 0.5s"
        }
    },
    dark: {
        fonts: {
            primary: "'DM Sans', sans-serif",
            logo: "'Allerta Stencil', sans-serif"
        },
        background: "#000000",
        colors: {
            main: {
                logo: "#A18A68",
                white: "#000000",
                black: "#FFFFFF"
            },
            neutral: {
                darkGray: "#707070",
                gray: "#D8D8D8",
                lightGray: "#EFEFEF"
            },
            service: {
                error: "#D82700"
            }
        },
        transitions: {
            links: "all 0.5s",
            buttons: "all 0.7s"
        }
    }
};
