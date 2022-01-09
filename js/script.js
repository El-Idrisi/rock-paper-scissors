const computer = document.getElementById('computer')

function getPilihanComputer() {
    const comp = Math.round(Math.random() * 9 + 1)
    if (comp < 4) return 'batu'
    if (comp < 7) return 'kertas'
    return 'gunting'
}

function result(player, comp) {
    if (player == comp) return 'TIE!'
    if (player == 'batu') return (comp == 'gunting') ? 'WIN!' : 'LOSE!'
    if (player == 'kertas') return (comp == 'batu') ? 'WIN!' : 'LOSE!'
    if (player == 'gunting') return (comp == 'kertas') ? 'WIN!' : 'LOSE!'
}

function putar() {
    const gambar = ['batu', 'kertas', 'gunting']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        computer.setAttribute('src', 'img/' + gambar[i++] + '-1.png')
        if (i == gambar.length) i = 0
    }, 100);



}


const batu = document.getElementById('batu')
const kertas = document.getElementById('kertas')
const gunting = document.getElementById('gunting')
const modal = document.querySelector('div.caption')
const modalContent = document.querySelector('div.content')
const modalInfo = document.querySelector('p.info')
const silang = document.getElementById('close')
const pemain = document.getElementById('player')

batu.addEventListener('click', function () {

    const player = batu.getAttribute('id')
    const pilihanComputer = getPilihanComputer()
    const hasil = result(player, pilihanComputer)

    pemain.setAttribute('src', 'img/' + player + '-2.png')

    if (hasil == 'TIE!') {
        modalInfo.style.color = 'blue'
    } else if (hasil == 'WIN!') {
        modalInfo.style.color = 'limegreen'
    } else if (hasil == 'LOSE!') {
        modalInfo.style.color = 'crimson'
    }

    console.log(player + ' + ' + pilihanComputer + ' = ' + hasil)

    putar()

    setTimeout(function () {
        computer.setAttribute('src', 'img/' + pilihanComputer + '-1.png')

        setTimeout(function () {
            modal.style.display = 'block'
        }, 700)

        setTimeout(function () {
            modalContent.classList.toggle('muncul')
            modalInfo.innerHTML = hasil
        }, 800)

    }, 1000)

})
gunting.addEventListener('click', function () {

    const player = gunting.getAttribute('id')
    const pilihanComputer = getPilihanComputer()
    const hasil = result(player, pilihanComputer)
    pemain.setAttribute('src', 'img/' + player + '-2.png')

    if (hasil == 'TIE!') {
        modalInfo.style.color = 'blue'
    } else if (hasil == 'WIN!') {
        modalInfo.style.color = 'limegreen'
    } else if (hasil == 'LOSE!') {
        modalInfo.style.color = 'crimson'
    }

    console.log(player + ' + ' + pilihanComputer + ' = ' + hasil)

    putar()

    setTimeout(function () {
        computer.setAttribute('src', 'img/' + pilihanComputer + '-1.png')

        setTimeout(function () {
            modal.style.display = 'block'
        }, 700)

        setTimeout(function () {
            modalContent.classList.toggle('muncul')
            modalInfo.innerHTML = hasil
        }, 800)

    }, 1000)

})

kertas.addEventListener('click', function () {

    const player = kertas.getAttribute('id')
    const pilihanComputer = getPilihanComputer()
    const hasil = result(player, pilihanComputer)
    pemain.setAttribute('src', 'img/' + player + '-2.png')

    if (hasil == 'TIE!') {
        modalInfo.style.color = 'blue'
    } else if (hasil == 'WIN!') {
        modalInfo.style.color = 'limegreen'
    } else if (hasil == 'LOSE!') {
        modalInfo.style.color = 'crimson'
    }

    console.log(player + ' + ' + pilihanComputer + ' = ' + hasil)

    putar()

    setTimeout(function () {
        computer.setAttribute('src', 'img/' + pilihanComputer + '-1.png')

        setTimeout(function () {
            modal.style.display = 'block'
        }, 700)

        setTimeout(function () {
            modalContent.classList.toggle('muncul')
            modalInfo.innerHTML = hasil
        }, 800)

    }, 1000)

})

modal.addEventListener('click', function (e) {
    modalContent.classList.toggle('muncul')

    setTimeout(function () {
        modal.style.display = 'none'
    }, 500)

})

silang.addEventListener('click', function () {
    modalContent.classList.toggle('muncul')

    setTimeout(function () {
        modal.style.display = 'none'
    }, 500)
})

modalContent.addEventListener('click', function (e) {
    e.stopPropagation()
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})