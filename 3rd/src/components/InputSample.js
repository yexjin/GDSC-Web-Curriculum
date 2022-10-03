import React, {useState} from 'react'

function InputSample() {

    // text : 현재 상태, setText : text를 바꿔주는 Setter 함수
    // text의 초깃 값은 ''
    const [text, setText] = useState('');

    // 값이 바뀌었을 때, text 값을 업데이트
    const onChange = (e) =>{
        setText(e.target.value)
    }

    // text 값을 ''로 바뀌게!
        const onReset = () =>{
        setText('');
    }

    return (
        <div>

            {/* value={text} 해주는 것도 매우 중요 상태가 바뀌었을 때 input 값이 바뀌어야하니까! */}
            <input onChange={onChange} value={text}/>
            <button onClick = {onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}

export default InputSample