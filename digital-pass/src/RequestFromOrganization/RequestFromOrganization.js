import React from 'react'
import './RequestFromOrganization.css'

export default function() {
    return (
        <div className='request-from-organization'>
            <form>
                <div className='pass__title'>
                Заявка от организации
                </div>
                <div className='pass__subtitle'>
                    На выдачу постоянных пропусков сотрудникам организации в случаях, предусмотренных <a href='/'>Положением</a>.
                </div>
                <select className='select' name="reason" required="required">
                    <option value="">Тип организации</option>
                    <option>Здравоохранение</option>
                    <option>Службы ЖКХ</option>
                    <option>Промышленность</option>
                    <option>Волонтёр</option>
                    <option>Прочее</option></select>

                <input type="text"  className='input' placeholder="Наименование организации" name="org_name" required="required"/>

                <input type="text" className='input' placeholder="Адрес организации" name="org_address" required="required"/>

                <input type="text" className='input' placeholder="ОКТМО" name="oktmo" required="required"/>  

                <input type="tel" className='input' placeholder="Мобильный телефон руководителя" name="chiefs_phone" required="required"/>

                <input type="tel" className='input' placeholder="Мобильный телефон заявителя" name="my_phone" required="required"/>

                <input type="text" className='input' placeholder="Мобильный телефон заявителя" name="my_phone" required="required"/>


                <div className='pass__subtitle'>
                    Файл заявки должен соответствовать шаблону (<a href='/'>скачать шаблон</a>). Допустимые форматы файла — XLS (Excel) или CSV.
                </div>

                <button className='btn-submit'>Запросить пропуск</button>
            </form>
        </div>
    )
}