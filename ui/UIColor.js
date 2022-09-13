export class UIColor {
    constructor(r, g, b, a) {
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a;
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