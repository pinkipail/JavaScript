import React from 'react'
import './TemporaryPass.css'

export default function() {
    return (
        <div className='pass'>
        <form>
          <div className='pass__title'>
            Запрос временного пропуска
          </div>
          <div className='pass__subtitle'>
            Временный поиск выдается для разового покидания места проживания по причинам, предусмотренным соответствующим 
            <a href='/#'>Указом</a>.
          </div>
          <select className='select' required>
            <option value=''>Причина запроса пропуска</option>
            <option>на работу</option>
            <option>в магазин / аптеку</option>
            <option>к врачу</option>
            <option>в банк / организацию</option>
            <option>к родственникам</option>
            <option>прогулка</option>
          </select>
          <input className='input' type="text" id="address" name="address" placeholder='Адрес назначения' required />
          <input className='input date' type="date" placeholder='Дата и время начала пропуска' required />
          <select className='select' required>
            <option value=''>Срок действия пропуска</option>
            <option>15 минут</option>
            <option>30 минут</option>
            <option>45 минут</option>
            <option>1 час</option>
            <option>1,5 часа</option>
            <option>2 часа</option>
          </select>
          <select className='select' required>
            <option value=''>Тип транспорта</option>
            <option>Пешком</option>
            <option>Общественный транспорт</option>
            <option>Личный автомобиль</option>
          </select>
          <button className='btn-submit' type='submit'>Запросить пропуск</button>
        </form>
      </div>
    )
}