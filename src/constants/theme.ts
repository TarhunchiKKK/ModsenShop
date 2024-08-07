import { THEMES } from "@/types";

type ProductImageBreakpoint = 320 | 440 | 640 | 768 | 1024 | 1280 | 1440;

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
    productImageSize: Record<ProductImageBreakpoint, string>;
}

const shared: Omit<ITheme, "background" | "colors"> = {
    fonts: {
        primary: "'DM Sans', sans-serif",
        logo: "'Allerta Stencil', sans-serif",
    },
    transitions: {
        links: "all 0.5s",
        buttons: "all 0.5s",
    },
    productImageSize: {
        [320]: "8.5em",
        [440]: "12.5em",
        [640]: "15.625em",
        [768]: "12.5em",
        [1024]: "18.75em",
        [1280]: "21.25em",
        [1440]: "23.75em",
    },
};

export const Themes: Record<THEMES, ITheme> = {
    light: {
        ...shared,
        background: "#FFFFFF",
        colors: {
            main: {
                logo: "#A18A68",
                white: "#FFFFFF",
                black: "#000000",
            },
            neutral: {
                darkGray: "#707070",
                gray: "#D8D8D8",
                lightGray: "#EFEFEF",
            },
            service: {
                error: "#D82700",
            },
        },
    },
    dark: {
        ...shared,
        background: "#000000",
        colors: {
            main: {
                logo: "#A18A68",
                white: "#000000",
                black: "#FFFFFF",
            },
            neutral: {
                darkGray: "#707070",
                gray: "#D8D8D8",
                lightGray: "#EFEFEF",
            },
            service: {
                error: "#D82700",
            },
        },
    },
};
