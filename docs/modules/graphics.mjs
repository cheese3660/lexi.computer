export const WHITE = "#ffffff"
 
export const BLACK = "#000000"

export const BLOCK_CHAR = "█"

export class ScreenDrawingContext {
    // Screen width, and screen height are 
    constructor(width, height, target) {
        this.width = width;
        this.height = height;
        this.lines = [];
        this.characters = [];
        this.target = target;
        this.click_handlers = {};
        
        for (let line_no = 0; line_no < height; line_no++) {
            //this.lines.push([false, "<p class=\"nospace\"></p>"]);
            let line = "<p class=\"nospace\">";
            let row = [];
            for (let col_no = 0; col_no < height; col_no++) {
                row.push(make_character());
                line += "&nbsp;";
            }
        }
        target.addEventListener("click", (evt) => this.clicked(evt))
    }

    redraw() {
        var html = "";
    }

    redraw_line(line_no) {
        var html = "<p class=\"nospace\">";
        var last_info = {
            fg: WHITE,
            bg: BLACK,
            bold: false,
            italic: false,
            underlined: false
        };
        var made_style = false; // This gets updated once a style tag is made so we no to close it

        
        if (made_style) {
            html += "</span>";
        }
        html += "</p>";
        return html;
    }


    clicked(evt) {
        const rect = self.target.getBoundingClientRect();
        const local_x = evt.clientX - rect.x;
        const local_y = evt.clientY - rect.y;
        if (local_x < 0 || local_x >= rect.width) return;
        if (local_y < 0 || local_y >= rect.height) return;
        let column = Math.floor((local_x/rect.width) * this.width);
        let row = Math.floor((local_y/rect.height) * this.height);
        console.log("context got a click at: ", column, row);
        this.click_handlers.entries.forEach(entry => {
            let [name, handler] = entry;
            handler(column, row)
        });
    }

    register_handler(name, handler_func) {
        this.click_handlers[name] = handler_func;
    }

    deregister_handler(name) {
        delete(this.click_handlers[name]);
    }
}


export function make_character(char=' ',fg=WHITE,bg=BLACK,bold=false,italic=false,underlined=false) {
    return {
        char: char,
        fg: fg,
        bg: bg,
        bold: bold,
        italic: italic,
        underlined: underlined
    };
}


export class GraphicsContext {
    constructor(screen) {
        this.ctx = screen
    }

    rect(char,x,y,w,h,fill=false) {
        // This draws a rectangle to the screen
    }
}

export class GraphicsWindow {
    constructor(context, x=0,y=0,w=0,h=0) {

    }
}