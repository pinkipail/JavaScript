import React, { useState } from 'react'
import './TemporaryPass.css'
import Pass from '../components/Pass/Pass';
import PassTitle from '../components/Pass/PassTitle/PassTitle';
import PassSubtitle from '../components/Pass/PassSubtitle/PassSubtitle';
import {Link} from 'react-router-dom';
import PassSelect from '../components/Pass/PassSelect/PassSelect';
import PassInput from '../components/Pass/PassInput/PassInput';
import PassButton from '../components/Pass/PassButton/PassButton';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

export default function() {

    return (
        <Pass>
          <PassTitle>
            Запрос временного пропуска
          </PassTitle>
          <PassSubtitle>
            Временный поиск выдается для разового покидания места проживания по причинам, предусмотренным соответствующим <Link to='#'>Указом</Link>.
          </PassSubtitle>
          <PassSelect name='reason'>
            <option value=''>Причина запроса пропуска</option>
            <option>на работу</option>
            <option>в магазин/аптеку</option>
            <option>к врачу</option>
            <option>в банк/организацию</option>
            <option>к родственникам</option>
            <option>прогулка</option>
          </PassSelect>
          <PassInput onChange={()=> console.log('fdsfsd')} type='text' name='address' placeholder='Адрес назначения' id='address'/>
                      
          <Flatpickr
            options={{
              enableTime: true,
              dateFormat: "d.m.Y H:i",
              time_24hr: true,
            }}
            render={
              (props, ref) => {
                return <PassInput type='date' name='date' placeholder='Дата и время начала пропуска'  inputRef={ref}/>
              }}
          />
          
          <PassSelect name='period'>
            <option value=''>Срок действия пропуска</option>
            <option>15 минут</option>
            <option>30 минут</option>
            <option>45 минут</option>
            <option>1 час</option>
            <option>1,5 часа</option>
            <option>2 часа</option>
          </PassSelect>
          <PassSelect name='transport'>
            <option value=''>Тип транспорта</option>
            <option>Пешком</option>
            <option>Общественный транспорт</option>
            <option>Личный автомобиль</option>
          </PassSelect>
          <PassButton content='hello'>Запросить пропуск</PassButton>
      </Pass>
    )
}