// kazaksha reducer init state

export const datesTranslates = [
  {kazakh: 'Дүйсенбі', rus: 'понедельник', example: 'Бір аптаДА сабақ үш рет: дүйсенбіДЕ, сәрсенбіДЕ, жұмаДА.', exampleTranslate: 'Одну неделю-В урок три раза: понедельник-В, среда-В, пятницу-В', rating: 1},
  {kazakh: 'Сейсенбі', rus: 'вторник', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Сәрсенбі', rus: 'среда', example: 'Бір аптаДА сабақ үш рет: дүйсенбіДЕ, сәрсенбіДЕ, жұмаДА.', exampleTranslate: 'Одну неделю-В урок три раза: понедельник-В, среда-В, пятницу-В', rating: 1},
  {kazakh: 'Бейсенбі', rus: 'четверг', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Жұма', rus: 'пятница', example: 'Бір аптаДА сабақ үш рет: дүйсенбіДЕ, сәрсенбіДЕ, жұмаДА.', exampleTranslate: 'Одну неделю-В урок три раза: понедельник-В, среда-В, пятницу-В', rating: 1},
  {kazakh: 'Сенбі', rus: 'суббота', example: 'Сабақ бір апта+да бір рет сенбі+ДЕ сағат тоғызДА', exampleTranslate: 'Урок одну неделю-В один раз субботу-В час девять-В', rating: 1},
  {kazakh: 'Жексенбі', rus: 'воскресенье', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Жексенбі', rus: 'воскресенье', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Күн', rus: 'солнце, день', example: 'Күн ыстық', exampleTranslate: 'День жаркий\\жарко (солнце горячее)', rating: 1},
  {kazakh: 'сағат', rus: 'час', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'апта', rus: 'неделя', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'ай', rus: 'месяц', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'тәулік', rus: 'сутки', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Қаңтар', rus: 'январь', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Ақпан', rus: 'февраль', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Наурыз', rus: 'март', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Сәуір\\көкек', rus: 'апрель', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Мамыр', rus: 'май', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Маусым', rus: 'июнь', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Шілде', rus: 'июль', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Тамыз', rus: 'август', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Қыркүйек', rus: 'сентябрь', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Қазан', rus: 'октябрь', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Қараша', rus: 'ноябрь', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Желтоқсан', rus: 'декабрь', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'ТУҒАН КҮН', rus: 'день рождения', example: 'Менің туған күн+ІМ қарашаДА.', exampleTranslate: 'Мой дернь рождения-МОЙ ноябре-В', rating: 1},
  {kazakh: 'Бүгін', rus: 'сегодня', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'ертең', rus: 'завтра', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'кешке', rus: 'вечером', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'биыл', rus: 'в этом году', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'былтыр', rus: 'в прошлом году', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'таңертең', rus: 'утром', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'бүрсүгіні', rus: 'послезавтра', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'келесі күні', rus: 'на \\в следующий день', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'өткен күні', rus: 'в прошлый день\\позавчера', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'арғыкүні', rus: 'позавчера', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'күндіз', rus: 'днем', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'осы жолы', rus: 'в этот раз', example: '---', exampleTranslate: '---', rating: 1},
  {kazakh: 'Сағат қанша? Сағат неше?', rus: 'Который час? (Час сколько)', example: 'Қанша сағат демал+ды+ң?', exampleTranslate: 'Сколько время отдыхал?', rating: 1},

]
