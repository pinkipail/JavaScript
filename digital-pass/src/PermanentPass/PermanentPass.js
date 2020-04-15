import React from 'react'
import './PermanentPass.css'
import Pass from '../components/Pass/Pass';
import PassTitle from '../components/Pass/PassTitle/PassTitle';
import PassSelect from '../components/Pass/PassSelect/PassSelect';
import PassInput from '../components/Pass/PassInput/PassInput';
import PassTextArea from '../components/Pass/PassTextArea/PassTextArea';
import PassButton from '../components/Pass/PassButton/PassButton';

export default function() {
    return (
        <Pass>
            <PassTitle>
                Запрос постоянного пропуска
            </PassTitle>
            <PassSelect name='reason'>
                <option value=''>Основания для работы в условиях повышенной опасности</option>
                <option>соцобслуживание</option>
                <option>непрерывно действующие организации</option>
                <option>обеспечение населения продуктами и ТПП</option>
                <option>неотложные работы в условиях ЧС</option>
            </PassSelect>
            <PassInput type='text' name='org_name' placeholder='Наименование организации'/>
            <PassInput type='text' placeholder='Место нахождения организации' name='org_address' id='address'/>
            <PassInput type='text' placeholder='ОКТМО' name='oktmo'/>  
            <PassInput type='tel' placeholder='Мобильный телефон руководителя' name='chiefs_phone'/>
            <PassSelect name='operation_mode'>
                <option value=''>Режим работы</option>
                <option>По месту нахождения организации</option>
                <option>Разъездная</option>
            </PassSelect>
            <PassSelect name='schedule'>
                <option value=''>График работы</option>
                <option>Односменный</option>
                <option>Многосменный</option>
                <option>Ненормированный</option>
            </PassSelect>
            <PassTextArea placeholder='Пожалуйста, укажите дополнительную информацию для принятия решения о выдаче пропуска в соответствии с Рекомендациями Минтруда РФ от 26.03.2020 в связи с Указом Президента РФ от 25.03.2020 № 206, а также Дополнением к Рекомендациям Минтруда РФ от 27.03.2020 г.'></PassTextArea>
            <PassButton>
                Запросить пропуск
            </PassButton>
        </Pass>
    )
}