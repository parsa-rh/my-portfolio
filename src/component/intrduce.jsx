import react from 'react';

export default function Intrduce (props) {
return (
    <div className='intrduse-container'>
        <div className='intrduse-header'>
            {props.language==="english" ? "header" : "سرفصل"}
        </div>
        <div className='intrduse-body'>
            {props.language==="english" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus ratione quisquam tempora excepturi! Recusandae, rem! Explicabo id consectetur atque, neque, ipsam voluptas deleniti, eaque quidem velit placeat fuga vero?"
            : "امروزه جاوا اسکریپت در جاهای مختلف حضور دارد و کارهای متنوعی با آن انجام می‌شود. هرچند جاوا اسکریپت را کنار HTML و CSS  از مدت‌ها قبل یکی از آرزوهای برنامه نویسان جاوا اسکریپت این بود که بتوانند کدهای خود را به جز مرورگر کاربر در سمت سرور هم اجرا کنند." }
        </div>
    </div>
)
}