window.addEventListener('load', function () {
        
    selectWrap()
    modalWindow()

})

function selectWrap() {

    let selectDefault = document.querySelectorAll('.default_option'),
        selects = document.querySelectorAll('.select_ul .option')

    selects.forEach((select) => {
        select.addEventListener('click', function () {
            let currient = this.textContent
            this.parentNode.parentNode.children[0].children[0].children[0].innerHTML = currient
            this.parentNode.parentNode.classList.remove("active")
        })
    })

    selectDefault.forEach((select) => {
        select.addEventListener('click', function () {
            this.parentNode.classList.toggle("active")
        })
    })
}

function modalWindow() {
    let submit = document.querySelector('.btn-submit'),
        accept = document.querySelector('.btn-accept'),
        modal = document.querySelector('.modal')

    submit.addEventListener('click', function (event) {
        event.preventDefault();
        calculatingCost()
        modal.style.display = 'block'
    })

    accept.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'none'
    })
}

function calculatingCost(){

    let Members = document.querySelector('#members'),
        Days = document.querySelector('#days'),
        Base = document.querySelector('#base'),
        LevelComfort = document.querySelector('#levelComfort'),
        cost = document.querySelector('#cost'),
        titleCost = document.querySelector('#title-cost')

    let members = Members.value,
        days = Days.value,
        base = Base.children[0].textContent,
        levelComfort = LevelComfort.children[0].textContent

    let coefficientBase,
        coefficientLevelComf

    if (members <= 0){
        titleCost.style.display = 'none'
        cost.innerHTML = 'Вы не указали количество людей'
        return 0
    }

    if (days <= 0){
        titleCost.style.display = 'none'
        cost.innerHTML = 'Вы не указали количество дней'
        return 0
    }

    switch(base){
        case 'Голицыно':{
            coefficientBase = 1
            break
        }
        case 'Крутицы':{
            coefficientBase = 1.5
            break
        }
        case 'Сокол':{
            coefficientBase = 2
            break
        }
        default:{
            titleCost.style.display = 'none'
            cost.innerHTML = 'Вы не выбрали базу отдыха'
            return 0
        }
    }

    switch(levelComfort){
        case 'Стандарт':{
            coefficientLevelComf = 1
            break
        }
        case 'Семейный':{
            coefficientLevelComf = 1.5
            break
        }
        case 'Комфорт+':{
            coefficientLevelComf = 2
            break
        }
        case 'Люкс':{
            coefficientLevelComf = 2.5
            break
    }
        default:{
            titleCost.style.display = 'none'
            cost.innerHTML = 'Вы не выбрали уровень комфорта'
            return 0
        }
    }
            
    let messege = formulaCalcCost(members, days,coefficientBase,coefficientLevelComf)

    cost.innerHTML = `${Math.floor(messege/1000)}.000 рублей`

    titleCost.style.display = 'block'
    Members.value = null
    Days.value = null
    Base.children[0].innerHTML = 'не выбрано'
    LevelComfort.children[0].innerHTML = 'не выбрано' 
    
}

function formulaCalcCost(members, days, base, levelComfort){

    return (1500*members*days*base*levelComfort)

}