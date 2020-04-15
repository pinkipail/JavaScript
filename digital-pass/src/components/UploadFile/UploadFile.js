import React,{useState} from 'react'
import './UploadFile.css'

export default function(props) {

    const [label,setLabel] = useState(props.label)
    const defaultLabel = props.label

    function uploadFile(event){
        const file = event.nativeEvent.target.files[0]
        file ? setLabel(file.name) : setLabel(defaultLabel)
    }

    return(
        <label className="file-mask" htmlFor="file">
            <input type="file" className="input-file" name={props.name}  id="file" required="required" accept={props.accept}
            onChange={(event)=>{uploadFile(event)}}/>
            <div className="file-mask__label">{label}</div>
            <div className="file-mask__button">Выбрать файл</div>
        </label>
    )
}