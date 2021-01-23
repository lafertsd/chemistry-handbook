let width = window.innerWidth;
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
$('.i1, .i6, .i7, .i8, .i15, .i16, .i9, .i34').addClass('non-metals');
$('.i5, .i14, .i32, .i33, .i51, .i52').addClass('semimetals');
$('.i13, .i31, .i49, .i50, .i81, .i82, .i83, .i84, .i113, .i114, .i115, .i116').addClass('p-t-metals');
$('.i21, .i22, .i23, .i24, .i25, .i26, .i27, .i28, .i29, .i30, .i39, .i40, .i41, .i42, .i43, .i44, .i45, .i46, .i47, .i48, .i72, .i73, .i74, .i75, .i76, .i77, .i78, .i79, .i80, .i104, .i105, .i106, .i107, .i108, .i109, .i110, .i111, .i112  ').addClass('transition-metals');
$('.i58, .i59, .i60, .i61, .i62, .i63, .i64, .i65, .i66, .i67, .i68, .i69, .i70, .i71,.i57, .i0 ').addClass('lanthanides');
$('.i90, .i91, .i92, .i93, .i94, .i95, .i96, .i97, .i98, .i99, .i100, .i101, .i102, .i103, .i119,.i89 ').addClass('actinides');
$('.i3, .i11, .i19, .i37, .i55, .i87').addClass('alkali-metals');
$('.i4, .i12, .i20, .i38, .i56, .i88').addClass('alkaline-earth-metals');
$('.i9, .i17, .i35, .i53, .i85, .i117').addClass('halogens');
$('.i2, .i10, .i18, .i36, .i54, .i86, .i118').addClass('noble-gases');

let nonMetalsB = document.createElement('div');
let semimetalsB = document.createElement('div');
let pTMetalsB = document.createElement('div');
let transitionMetalsB = document.createElement('div');
let lanthanidesB = document.createElement('div');
let actinidesB = document.createElement('div');
let alkaliMetalsB = document.createElement('div');
let alkalineEarthMetalsB = document.createElement('div');
let halogensB = document.createElement('div');
let nobleGasesB = document.createElement('div');

nonMetalsB.className = 'group-el non-metals-box'; 
semimetalsB.className = 'group-el semimetals-box'; 
pTMetalsB.className = 'group-el pTMetals-box'; 
transitionMetalsB.className = 'group-el transitionMetals-box'; 
lanthanidesB.className = 'group-el lanthanides-box'; 
actinidesB.className = 'group-el actinides-box'; 
alkaliMetalsB.className = 'group-el alkaliMetals-box'; 
alkalineEarthMetalsB.className = 'group-el alkalineEarthMetals-box'; 
halogensB.className = 'group-el halogens-box'; 
nobleGasesB.className = 'group-el nobleGases-box'; 
// console.log(nonMetalsa);
// console.log(nonMetals);
boxItem.append(nonMetalsB);
boxItem.append(semimetalsB);
boxItem.append(pTMetalsB);
boxItem.append(transitionMetalsB);
boxItem.append(lanthanidesB);
boxItem.append(actinidesB);
boxItem.append(alkaliMetalsB);
boxItem.append(alkalineEarthMetalsB);
boxItem.append(halogensB);
boxItem.append(nobleGasesB);
// boxItem.append(nonMetalsa);
if (width <= 992) {
    let item = document.querySelectorAll('.item');
    for (let i = 1; i < 119; i++) {
        item[i].classList.remove('i' +i)
    }

    let nonMetals = document.querySelectorAll('.non-metals');
    let semimetals = document.querySelectorAll('.semimetals');
    let pTMetals = document.querySelectorAll('.p-t-metals');
    let transitionMetals = document.querySelectorAll('.transition-metals');
    let lanthanides = document.querySelectorAll('.lanthanides');
    let actinides = document.querySelectorAll('.actinides');
    let alkaliMetals = document.querySelectorAll('.alkali-metals');
    let alkalineEarthMetals = document.querySelectorAll('.alkaline-earth-metals');
    let halogens = document.querySelectorAll('.halogens');
    let nobleGases = document.querySelectorAll('.noble-gases');

    for (let i = 0; i < nonMetals.length; i++) {
        nonMetalsB.append(nonMetals[i]);
    }
    for (let i = 0; i < semimetals.length; i++) {
        semimetalsB.append(semimetals[i]);
    }
    for (let i = 0; i < pTMetals.length; i++) {
        pTMetalsB.append(pTMetals[i]);
    }
    for (let i = 0; i < transitionMetals.length; i++) {
        transitionMetalsB.append(transitionMetals[i]);
    }
    for (let i = 0; i < lanthanides.length; i++) {
        lanthanidesB.append(lanthanides[i]);
    }
    for (let i = 0; i < actinides.length; i++) {
        actinidesB.append(actinides[i]);
    }
    for (let i = 0; i < alkaliMetals.length; i++) {
        alkaliMetalsB.append(alkaliMetals[i]);
    }
    for (let i = 0; i < alkalineEarthMetals.length; i++) {
        alkalineEarthMetalsB.append(alkalineEarthMetals[i]);
    }
    for (let i = 0; i < halogens.length; i++) {
        halogensB.append(halogens[i]);
    }
    for (let i = 0; i < nobleGases.length; i++) {
        nobleGasesB.append(nobleGases[i]);
    }

    
}