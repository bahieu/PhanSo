function Phanso(tuso, mauso) {
    this.tuso = tuso;
    this.mauso = mauso;
}
Phanso.prototype.setTuSo = function (tuso) {
    this.tuso = tuso;
}
Phanso.prototype.getTuSo = function () {
    return this.tuso;
}
Phanso.prototype.setMauSo = function (mauso) {
    this.mauso = mauso;
}
Phanso.prototype.getMauSo = function () {
    return this.mauso;
}
function UCLN(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}
// Rút gọn phân số
Phanso.prototype.rutGonPS = function () {
    var i = UCLN(this.tuso, this.mauso);
    this.setTuSo(this.tuso / i);
    this.setMauSo(this.mauso / i);
}

// Cộng phân số
Phanso.prototype.congPS = function (ps) {
    var tm = this.tuso * ps.getMauSo() + this.mauso * ps.getTuSo();
    var mm = this.mauso * ps.getMauSo();

    var phanSoMoi = new Phanso(tm, mm);
    phanSoMoi.rutGonPS();

    if ((tm % mm) == 0) {
        console.log(`${this.tuso}/${this.mauso} + ${ps.getTuSo()}/${ps.getMauSo()} = ${phanSoMoi.getTuSo() / phanSoMoi.getMauSo()}`);
    } else {
        console.log(`${this.tuso}/${this.mauso} + ${ps.getTuSo()}/${ps.getMauSo()} = ${phanSoMoi.getTuSo()}/${phanSoMoi.getMauSo()}`);
    }
}

// Trừ phân số
Phanso.prototype.truPS = function (ps) {
    var tm = this.tuso * ps.getMauSo() - this.mauso * ps.getTuSo();
    var mm = this.mauso * ps.getMauSo();

    var phanSoMoi = new Phanso(tm, mm);
    phanSoMoi.rutGonPS();

    if ((tm % mm) == 0) {
        console.log(`${this.tuso}/${this.mauso} - ${ps.getTuSo()}/${ps.getMauSo()} = ${phanSoMoi.getTuSo() / phanSoMoi.getMauSo()}`);
    } else {
        console.log(`${this.tuso}/${this.mauso} - ${ps.getTuSo()}/${ps.getMauSo()} = ${phanSoMoi.getTuSo()}/${phanSoMoi.getMauSo()}`);
    }
}

// Nhân phân số
Phanso.prototype.nhanPS = function (ps) {
    var tm = this.tuso * ps.getTuSo();
    var mm = this.mauso * ps.getMauSo();

    var phanSoMoi = new Phanso(tm, mm);
    phanSoMoi.rutGonPS();

    if ((tm % mm) == 0) {
        console.log(`${this.tuso}/${this.mauso} * ${ps.getTuSo()}/${ps.getMauSo()} = ${phanSoMoi.getTuSo() / phanSoMoi.getMauSo()}`);
    } else {
        console.log(`${this.tuso}/${this.mauso} * ${ps.getTuSo()}/${ps.getMauSo()} = ${phanSoMoi.getTuSo()}/${phanSoMoi.getMauSo()}`);
    }
}

// Chia phân số
Phanso.prototype.chiaPS = function (ps) {
    var tm = this.tuso * ps.getMauSo();
    var mm = this.mauso * ps.getTuSo();

    var phanSoMoi = new Phanso(tm, mm);
    phanSoMoi.rutGonPS();

    if ((tm % mm) == 0) {
        console.log(`${this.tuso}/${this.mauso} : ${ps.getTuSo()}/${ps.getMauSo()} = ${phanSoMoi.getTuSo() / phanSoMoi.getMauSo()}`);
    } else {
        console.log(`${this.tuso}/${this.mauso} : ${ps.getTuSo()}/${ps.getMauSo()} = ${phanSoMoi.getTuSo()}/${phanSoMoi.getMauSo()}`);
    }
}

var ts1 = Number(prompt('Nhập tử số cho phân số thứ 1: '));
var ms1 = Number(prompt('Nhập mẫu số cho phân số thứ 1: '));
var ts2 = Number(prompt('Nhập tử số cho phân số thứ 2: '));
var ms2 = Number(prompt('Nhập mẫu số cho phân số thứ 2: '));

var phanSo1 = new Phanso(ts1, ms1);
var phanSo2 = new Phanso(ts2, ms2);

// phanSo1.congPS(phanSo2);
// phanSo1.truPS(phanSo2);
//phanSo1.nhanPS(phanSo2);
phanSo1.chiaPS(phanSo2);