import Keypad from '../Keypad';
import './style.css'
import { useState } from 'react';

function DisplayCalculator(){
    const [value, setValue] = useState('');
    function handleOnClick(e){
            if(e.target.id === ''){
                setValue('')
            }
            else if(e.target.id === '='){
                    setValue(eval(value))
                }
            else{
                setValue(value + e.target.id)
            }
        }   
    return(
        <div>
            <div className='displayCalculator'>
                <input onChange={()=>{}} type='text' className='screen' value={value}></input>
                <Keypad handleOnClick = {handleOnClick}/>
            </div>
        </div>
    )
}
export default DisplayCalculator;