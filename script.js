// let burger = document.getElementsByClassName('menu');
// let remove = document.getElementsByClassName('btn-remove');
// let nav = document.getElementsByClassName('nav-list');

// burger.addEventListener('click', function(){
//     nav.classList.toggle('nav-list-activ');
// })
const windowWidth = window.innerWidth;
$('.menu').click(function(){
    $('.nav-list').toggleClass('nav-list-activ');
    $('.content').toggleClass('content-activ');
    if (windowWidth <= 480) {
        $('.content').removeClass('content-activ');
    }

})
$('.btn-remove').click(function(){
    $('.nav-list').removeClass('nav-list-activ');
})
let boxItem = document.getElementById('periodic');
console.log(boxItem);
let numEl = [];
let nameEl = [,'H', 'He', 'Li', 'Be', 'B','C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Ti', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'];

for(i = 0; i < 120; i++){
    let y = i;
    let item = document.createElement('div');
    let name = document.createElement('div');
    let num = document.createElement('span');
    let arrItem = [];
        numEl.push(i);
        item.className = 'item i' + i;
        arrItem.push(item);
        
        console.log(arrItem);
        num.className = 'item-num';
        name.className = 'item-name';
        if (typeof item.textContent !== "undefined") {
                num.innerText = y;
                name.innerText = nameEl[y];
        } else {
                num.textContent = y;
                name.textContent = nameEl[y];
        }
        boxItem.append(item);
        item.append(num);
        item.append(name);
        
}
$('.i1, .i6, .i7, .i8, .i15, .i16, .i34').addClass('non-metals');
$('.i5, .i14, .i32, .i33, .i51, .i52, .i84').addClass('semimetals');
$('.i13, .i31, .i49, .i50, .i81, .i82, .i83, .i113, .i114, .i115, .i116').addClass('p-t-metals');
$('.i21, .i22, .i23, .i24, .i25, .i26, .i27, .i28, .i29, .i30, .i39, .i40, .i41, .i42, .i43, .i44, .i45, .i46, .i47, .i48, .i72, .i73, .i74, .i75, .i76, .i77, .i78, .i79, .i80, .i104, .i105, .i106, .i107, .i108, .i109, .i110, .i111, .i112, .i57, .i89').addClass('transition-metals');
$('.i58, .i59, .i60, .i61, .i62, .i63, .i64, .i65, .i66, .i67, .i68, .i69, .i70, .i71, .i0 ').addClass('lanthanides');
$('.i90, .i91, .i92, .i93, .i94, .i95, .i96, .i97, .i98, .i99, .i100, .i101, .i102, .i103, .i119 ').addClass('actinides');
$('.i3, .i11, .i19, .i37, .i55, .i87').addClass('alkali-metals');
$('.i4, .i12, .i20, .i38, .i56, .i88').addClass('alkaline-earth-metals');
$('.i9, .i17, .i35, .i53, .i85, .i117').addClass('halogens');
$('.i2, .i10, .i18, .i36, .i54, .i86, .i118').addClass('noble-gases');
console.log(numEl);