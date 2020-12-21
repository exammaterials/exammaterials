module.exports = {
    purge: false,
    theme: {
        extend: {
            screens: {
                xs: "320px",
            },
            fontFamily: {
                segoe: ["Segoe UI"],
            },
            minWidth: {
                xs: "320px",
            },
            textColor: {
                main: "var(--colorPrimary)",
                sub: "var(--colorSecondary)",
            },
            backgroundColor: {
                main: "var(--backgroundColorPrimary)",
                "code-block": "var(--backgroundColorSecondary)",
                blockquote: "var(--backgroundColorThird)",
                card: "var(--backgroundColorCard)"
            },
            borderColor: {
                main: "var(--colorPrimary)",
            },
            divideColor: {
                main: "var(--colorPrimary)",
            },
        },
    },
};
