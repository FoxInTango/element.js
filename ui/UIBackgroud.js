export class UIBackgroud {
    constructor(color) {
        this._color = color;
    }

    set r(r) { this._r = r; }
    set g(g) { this._g = g; }
    set b(b) { this._b = b; }
    set a(a) { this._a = a; }

    get r() { return this._r; }
    get g() { return this._g; }
    get b() { return this._b; }
    get a() { return this._a; }
}