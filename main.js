const btnKick = document.getElementById('btn-kick');
const btnKickHard = document.getElementById('btn-kick-hard');


function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert(this.name + ' програв бій!');
        btnKick.disabled = true;
        btnKickHard.disabled = true;
    } else {
        this.damageHP -= count;
    }

    this.renderHP();
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    const percent = (this.damageHP / this.defaultHP) * 100;
    this.elProgressbar.style.width = percent + '%';
    
    if (percent < 20) {
        this.elProgressbar.style.backgroundColor = '#f44336';
    } else if (percent < 60) {
        this.elProgressbar.style.backgroundColor = '#ffeb3b';
    } else {
        this.elProgressbar.style.backgroundColor = '#4caf50';
    }
}

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP
};

function random(num) {
    return Math.ceil(Math.random() * num);
}


btnKick.addEventListener('click', function () {
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

btnKickHard.addEventListener('click', function () {
    character.changeHP(random(35));
    enemy.changeHP(random(35));
});