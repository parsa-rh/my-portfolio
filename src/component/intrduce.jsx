import react from 'react';

export default function Intrduce (props) {
return (
    <div className='intrduse-container'>
        <div className='intrduse-header'>
            {props.language==="english" ? "Welcome" : "دورود"}
        </div>
        <div className='intrduse-body'>
            {props.language==="english" ? "In the world of objects and functions that are growing every moment by developers, it is our honor that we become although small, but effective member."
            : 'در دنیایه شیع ها و توابع که هر لحظه توسط توسعه دهنده ها در حال رشد است این افتخار ما است که یک عضو هر چند کوچک ولی مواثر واقع شویم' }
        </div>
    </div>
)
}