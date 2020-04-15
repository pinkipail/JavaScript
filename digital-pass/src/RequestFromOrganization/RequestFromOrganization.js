import React from 'react'
import './RequestFromOrganization.css'
import Pass from '../components/Pass/Pass';
import PassTitle from '../components/Pass/PassTitle/PassTitle';
import PassSubtitle from '../components/Pass/PassSubtitle/PassSubtitle';
import PassSelect from '../components/Pass/PassSelect/PassSelect';
import PassInput from '../components/Pass/PassInput/PassInput';
import UploadFile from '../components/UploadFile/UploadFile';
import PassBlockWarning from '../components/Pass/PassBlockWarning/PassBlockWarning';
import PassButton from '../components/Pass/PassButton/PassButton';
import { Link } from 'react-router-dom';

export default function() {

    return (
        <Pass>
            <PassTitle>
                Заявка от организации
            </PassTitle>
            <PassSubtitle >
                На выдачу постоянных пропусков сотрудникам организации в случаях, предусмотренных <Link to='#'>Положением</Link>.
            </PassSubtitle >

            <PassSelect name="reason">
                <option value="">Тип организации</option>
                <option>Здравоохранение</option>
                <option>Службы ЖКХ</option>
                <option>Промышленность</option>
                <option>Волонтёр</option>
                <option>Прочее</option>
            </PassSelect>

            <PassInput type="text" placeholder="Наименование организации" name="org_name"/>
            <PassInput type="text" placeholder="Адрес организации" name="org_address"  id="address"/>
            <PassInput type="text" placeholder="ОКТМО" name="oktmo" />  
            <PassInput type="tel" placeholder="Мобильный телефон руководителя" name="chiefs_phone"/>
            <PassInput type="tel" placeholder="Мобильный телефон заявителя" name="my_phone"/>
            <UploadFile label='Файл заявки (XLS или CSV)' name='file' accept=".xls, .csv"/>
            <PassSubtitle>
                Файл заявки должен соответствовать шаблону (<a download href='../../public/samples/request.xls'>скачать шаблон</a>). Допустимые форматы файла — XLS (Excel) или CSV.
            </PassSubtitle>
            <PassBlockWarning>
                Пример файла заявки в формате XLS: <a download href='../../public/samples/request.xls'>скачайте файл себе на компьютер</a> и выберите его.
            </PassBlockWarning>
            <PassBlockWarning>
                Пример файла заявки в формате CSV: <a download href='../../public/samples/request.csv'>скачайте файл себе на компьютер</a>, выберите его и укажите CP-1251 в качестве кодировки файла и ; в качестве разделителя значений.
            </PassBlockWarning>
            <PassButton>Запросить пропуск</PassButton>
        </Pass>
    )
}