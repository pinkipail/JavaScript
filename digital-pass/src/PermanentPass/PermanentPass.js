import React from 'react'
import './PermanentPass.css'

export default function() {
    return (
        <div className='temporary-pass'>
            <form>
                <div className='pass__title'>
                    Запрос постоянного пропуска
                </div>
                <select className="select" name="reason" required="required">
                    <option value="">Основания для работы в условиях повышенной опасности</option>
                    <option>соцобслуживание</option>
                    <option>непрерывно действующие организации</option>
                    <option>обеспечение населения продуктами и ТПП</option>
                    <option>неотложные работы в условиях ЧС</option>
                </select>

                <input type="text"  className='input' placeholder="Наименование организации" name="org_name" required="required"/>

                <input type="text" className='input' placeholder="Место нахождения организации" name="org_address" required="required"/>

                <input type="text" className='input' placeholder="ОКТМО" name="oktmo" required="required"/>  

                <input type="tel" className='input' placeholder="Мобильный телефон руководителя" name="chiefs_phone" required="required"/>

                <select className='select' name="operation_mode" required="required" >
                    <option defaultValue>Режим работы</option>
                    <option>По месту нахождения организации</option>
                    <option>Разъездная</option>
                </select>

                <select className='select' name="schedule" required="required">
                    <option defaultValue>График работы</option>
                    <option>Односменный</option>
                    <option>Многосменный</option>
                    <option>Ненормированный</option>
                </select>

                <textarea className='text-area' placeholder="Пожалуйста, укажите дополнительную информацию для принятия решения о выдаче пропуска в соответствии с Рекомендациями Минтруда РФ от 26.03.2020 в связи с Указом Президента РФ от 25.03.2020 № 206, а также Дополнением к Рекомендациям Минтруда РФ от 27.03.2020 г.">

                </textarea>

                <button className='btn-submit'>Запросить пропуск</button>
            </form>
        </div>
    )
}