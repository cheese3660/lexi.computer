class ScreenDrawingContext {
    // Screen width, and screen height are 
    constructor(screen_width, screen_height, target) {
    }
}

const WHITE = "#ffffff"

const BLACK = "#000000"

function make_character(char=' ',fg=WHITE,bg=BLACK,bold=false,italic=false,underlined=false) {
    return {
        char: char,
        fg: fg,
        bg: bg,
        bold: bold,
        italic: italic,
        underlined: underlined
    }
}