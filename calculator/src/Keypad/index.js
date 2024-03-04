import './style.css'

function Keypad(props){
    return(
        <div onClick={(props.handleOnClick)} className = 'keyPads'>
            <div className = 'buttons'>
            <div id ='8' className = 'button'>8</div>
            <div id ='7' className = 'button'>7</div>
            <div id ='9' className = 'button'>9</div>
            <div id ='/' className = 'button'>÷</div>
            <div style={{backgroundColor:'yellow'}} id ='' className = 'button'>AC</div>
            <div id ='4' className = 'button'>4</div>
            <div id ='5' className = 'button'>5</div>
            <div id ='6' className = 'button'>6</div>
            <div id ='*' className = 'button'>x</div>
            <div style={{backgroundColor:'yellow'}} id ='' className = 'button'>√</div>
            <div id ='1' className = 'button'>1</div>
            <div id ='2' className = 'button'>2</div>
            <div id ='3' className = 'button'>3</div>
            <div id ='-' className = 'button'>-</div>
            <div style={{backgroundColor:'yellow'}} id ='%' className = 'button'>%</div>
            <div id ='.' className = 'button'>.</div>
            <div id ='0' className = 'button'>0</div>
            <div id ='=' className = 'button'>=</div>
            <div id ='+' className = 'button'>+</div>
            <div style={{backgroundColor:'yellow'}} id ='' className = 'button'>e*</div>
            </div>
        </div>
    )
}
export default Keypad;