import YourQuestionsItem from "./../YourQuestions/YourQuestionsItem";


export function questionsMaker(props){
    return ([
        {
            id: 1,
            title: ' قیمت بلیط هواپیمای '+`${props.flight.from} `+`${props.flight.to} `+'چقدر است؟',
            description: 'قیمت بلیط هواپیمای '+`${props.flight.from} `+`${props.flight.to} `+ 'در هر روز به عوامل مختلفی بستگی دارد و در هر زمان متفاوت است. برای مشاهده قیمت روز بلیط ' +`${props.flight.from} `+`${props.flight.to} `+'رفت و برگشت و یک طرفه در علی بابا جستجو کنید.'
        },
        {
            id: 2,
            title: 'میزان بار مجاز در پرواز '+`${props.flight.from} `+ 'به ' +`${props.flight.to} `+'چقدر است؟',
            description: 'میزان بار مجاز، به ایرلاین یا شرکت هواپیمایی (مانند ماهان، ایران ایر، آسمان و...)، کلاس پرواز، مدل هواپیما و کلاس نرخی بلیط شما بستگی دارد؛ اما میزان بار مجاز برای بلیط‌های کلاس اکونومی معمولا 15 تا ۲۵ کیلوگرم است.'
        },
        {
            id: 3,
            title: 'جریمه اضافه بار در پرواز '+ `${props.flight.from} `+`${props.flight.to} `+'چقدر است؟',
            description: 'به طور میانگین نرخ اضافه بار برای هر کیلوگرم برابر با یک درصد قیمت بلیط در همان مسیر است و مبلغ دقیق آن بر حسب قیمت بلیط،‌ طول پرواز و کلاس پرواز شما محاسبه می‌شود.'
        },
        {
            id: 4,
            title: 'جریمه کنسلی (استرداد) بلیط هواپیمای '+ `${props.flight.from} `+`${props.flight.to} `+'چقدر است؟',
            description: 'درباره میزان جریمه کنسلی بلیط '+`${props.flight.from} `+ 'به ' +`${props.flight.to} `+ 'نمی‌توان یک عدد ثابت مطرح کرد؛ بنابراین بهتر است هنگام انتخاب بلیط در علی بابا روی قوانین استرداد کلیک و محتوای آن را مطالعه کنید.',
        },
        {
            id: 5,
            title: 'برای خرید بلیط هواپیما '+ `${props.flight.from} `+`${props.flight.to} `+'چه باید کرد؟',
            description: 'اگر می‌خواهید خرید بلیط هواپیما شیراز به تهران را با قیمت ارزان انجام دهید، سفرتان را به ایام کم‌سفر نزدیک روزهای وسط هفته، روزهای غیرتعطیل و نیمه دوم سال موکول کنید. ضمنا از تقویم قیمتی علی بابا برای پیدا کردن ارزانترین قیمت استفاده کنید.'
        },
        {
            id: 6,
            title:'چه طور می‌توانم بلیط چارتر '+ `${props.flight.from} `+`${props.flight.to} `+'را بخرم؟',
            description: 'با انتخاب '+`${props.flight.from} `+'و'+`${props.flight.to} `+'سفر و جستجو در علی بابا، لیست بلیط‌های موجود را خواهید دید. حالا در پنجره «نوع بلیط» در کنار صفحه گزینه چارتر را انتخاب کنید تا در صورت موجود بودن، تنها پروازهای چارتر را ببینید.',
        },
        {
            id: 7,
            title:'لیست قیمت بلیط هواپیما '+`${props.flight.from} `+`${props.flight.to} `+'را چه طور پیدا کنیم؟',
            description: 'کافی است در علی بابا مبدا را '+`${props.flight.from} `+'و مقصد را '+`${props.flight.to} `+'تعیین و روی جستجو کلیک کنید. در این زمان لیست قیمت بلیط‌های موجود را مشاهده خوهید کرد. همچنین می‌توانید هتل های '+`${props.flight.to} `+'را از علی بابا رزرو کنید.',
        }
    ]
    )
}

export default function FrequentQuestions(props){
    const Questions = questionsMaker(props);
    return(
        <>
            {Questions.map(question =>
                <YourQuestionsItem title={question.title} description={question.description}/>)}
        </>
    )
}