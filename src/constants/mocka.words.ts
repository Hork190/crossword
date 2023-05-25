/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IQuestion {
    word: string,
    question: string,
    tip: string,
    detailLink?: string,
    number: number,
}

const rawListWord = [
'йогурт',
'орех',
'робот',
'блоха',
'быдло',
'честность',
'человек',
'алчность',
'деньги',
'привет',
'страна',
'день',
'подруга',
'победа',
'тренер',
'занятие',
'янтарь',
'тенис',
'слон',
'кот',
'торт',
'жираф',
'фраза',
'феник',
'жена',
'жеребьевка']
const rawListWordAnimal = [
    ['кот','вопрос про кот', 'подсказка кот'],
    ['собака','вопрос про собака', 'подсказка собака'],
    ['крот','вопрос про крот', 'подсказка крот'],
    ['торт','вопрос про торт', 'подсказка торт'],
    ['рог','вопрос про рог', 'подсказка рог'],
]
export const listWord: IQuestion[] = rawListWordAnimal.map((list, i) => ({
    word: list[0],
    question: `${list[1]}`,
    tip: list[2],
    detailLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    number: i + 1
}))

export const food = [
    [
      {
        "question": {
          "word": "рис",
          "question": "вопрос про рис",
          "tip": "подсказка рис",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 4
        },
        "word": "рис",
        "value": "р",
        "cell": 13,
        "row": 15,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "рис",
          "question": "вопрос про рис",
          "tip": "подсказка рис",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 4
        },
        "word": "рис",
        "value": "и",
        "cell": 13,
        "row": 16,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "рис",
          "question": "вопрос про рис",
          "tip": "подсказка рис",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 4
        },
        "word": "рис",
        "value": "с",
        "cell": 13,
        "row": 17,
        "isHorizontal": false
      }
    ],
    [
      {
        "question": {
          "word": "хлеб",
          "question": "вопрос про хлеб",
          "tip": "подсказка хлеб",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 8
        },
        "word": "хлеб",
        "value": "х",
        "cell": 20,
        "row": 10,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "хлеб",
          "question": "вопрос про хлеб",
          "tip": "подсказка хлеб",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 8
        },
        "word": "хлеб",
        "value": "л",
        "cell": 20,
        "row": 11,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "хлеб",
          "question": "вопрос про хлеб",
          "tip": "подсказка хлеб",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 8
        },
        "word": "хлеб",
        "value": "е",
        "cell": 20,
        "row": 12,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "хлеб",
          "question": "вопрос про хлеб",
          "tip": "подсказка хлеб",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 8
        },
        "word": "хлеб",
        "value": "б",
        "cell": 20,
        "row": 13,
        "isHorizontal": false
      }
    ],
    [
      {
        "question": {
          "word": "пицца",
          "question": "вопрос про пицца",
          "tip": "подсказка пицца",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 9
        },
        "word": "пицца",
        "value": "п",
        "cell": 17,
        "row": 8,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "пицца",
          "question": "вопрос про пицца",
          "tip": "подсказка пицца",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 9
        },
        "word": "пицца",
        "value": "и",
        "cell": 18,
        "row": 8,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "пицца",
          "question": "вопрос про пицца",
          "tip": "подсказка пицца",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 9
        },
        "word": "пицца",
        "value": "ц",
        "cell": 19,
        "row": 8,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "пицца",
          "question": "вопрос про пицца",
          "tip": "подсказка пицца",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 9
        },
        "word": "пицца",
        "value": "ц",
        "cell": 20,
        "row": 8,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "пицца",
          "question": "вопрос про пицца",
          "tip": "подсказка пицца",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 9
        },
        "word": "пицца",
        "value": "а",
        "cell": 21,
        "row": 8,
        "isHorizontal": true
      }
    ],
    [
      {
        "question": {
          "word": "омлет",
          "question": "вопрос про омлет",
          "tip": "подсказка омлет",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 2
        },
        "word": "омлет",
        "value": "о",
        "cell": 24,
        "row": 10,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "омлет",
          "question": "вопрос про омлет",
          "tip": "подсказка омлет",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 2
        },
        "word": "омлет",
        "value": "м",
        "cell": 24,
        "row": 11,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "омлет",
          "question": "вопрос про омлет",
          "tip": "подсказка омлет",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 2
        },
        "word": "омлет",
        "value": "л",
        "cell": 24,
        "row": 12,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "омлет",
          "question": "вопрос про омлет",
          "tip": "подсказка омлет",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 2
        },
        "word": "омлет",
        "value": "е",
        "cell": 24,
        "row": 13,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "омлет",
          "question": "вопрос про омлет",
          "tip": "подсказка омлет",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 2
        },
        "word": "омлет",
        "value": "т",
        "cell": 24,
        "row": 14,
        "isHorizontal": false
      }
    ],
    [
      {
        "question": {
          "word": "яишница",
          "question": "вопрос про яишница",
          "tip": "подсказка яишница",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 1
        },
        "word": "яишница",
        "value": "я",
        "cell": 18,
        "row": 7,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "яишница",
          "question": "вопрос про яишница",
          "tip": "подсказка яишница",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 1
        },
        "word": "яишница",
        "value": "и",
        "cell": 18,
        "row": 8,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "яишница",
          "question": "вопрос про яишница",
          "tip": "подсказка яишница",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 1
        },
        "word": "яишница",
        "value": "ш",
        "cell": 18,
        "row": 9,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "яишница",
          "question": "вопрос про яишница",
          "tip": "подсказка яишница",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 1
        },
        "word": "яишница",
        "value": "н",
        "cell": 18,
        "row": 10,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "яишница",
          "question": "вопрос про яишница",
          "tip": "подсказка яишница",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 1
        },
        "word": "яишница",
        "value": "и",
        "cell": 18,
        "row": 11,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "яишница",
          "question": "вопрос про яишница",
          "tip": "подсказка яишница",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 1
        },
        "word": "яишница",
        "value": "ц",
        "cell": 18,
        "row": 12,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "яишница",
          "question": "вопрос про яишница",
          "tip": "подсказка яишница",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 1
        },
        "word": "яишница",
        "value": "а",
        "cell": 18,
        "row": 13,
        "isHorizontal": false
      }
    ],
    [
      {
        "question": {
          "word": "салат",
          "question": "вопрос про салат",
          "tip": "подсказка салат",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 3
        },
        "word": "салат",
        "value": "с",
        "cell": 13,
        "row": 17,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "салат",
          "question": "вопрос про салат",
          "tip": "подсказка салат",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 3
        },
        "word": "салат",
        "value": "а",
        "cell": 14,
        "row": 17,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "салат",
          "question": "вопрос про салат",
          "tip": "подсказка салат",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 3
        },
        "word": "салат",
        "value": "л",
        "cell": 15,
        "row": 17,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "салат",
          "question": "вопрос про салат",
          "tip": "подсказка салат",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 3
        },
        "word": "салат",
        "value": "а",
        "cell": 16,
        "row": 17,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "салат",
          "question": "вопрос про салат",
          "tip": "подсказка салат",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 3
        },
        "word": "салат",
        "value": "т",
        "cell": 17,
        "row": 17,
        "isHorizontal": true
      }
    ],
    [
      {
        "question": {
          "word": "гамбургер",
          "question": "вопрос про гамбургер",
          "tip": "подсказка гамбургер",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 6
        },
        "word": "гамбургер",
        "value": "г",
        "cell": 17,
        "row": 13,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "гамбургер",
          "question": "вопрос про гамбургер",
          "tip": "подсказка гамбургер",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 6
        },
        "word": "гамбургер",
        "value": "а",
        "cell": 18,
        "row": 13,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "гамбургер",
          "question": "вопрос про гамбургер",
          "tip": "подсказка гамбургер",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 6
        },
        "word": "гамбургер",
        "value": "м",
        "cell": 19,
        "row": 13,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "гамбургер",
          "question": "вопрос про гамбургер",
          "tip": "подсказка гамбургер",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 6
        },
        "word": "гамбургер",
        "value": "б",
        "cell": 20,
        "row": 13,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "гамбургер",
          "question": "вопрос про гамбургер",
          "tip": "подсказка гамбургер",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 6
        },
        "word": "гамбургер",
        "value": "у",
        "cell": 21,
        "row": 13,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "гамбургер",
          "question": "вопрос про гамбургер",
          "tip": "подсказка гамбургер",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 6
        },
        "word": "гамбургер",
        "value": "р",
        "cell": 22,
        "row": 13,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "гамбургер",
          "question": "вопрос про гамбургер",
          "tip": "подсказка гамбургер",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 6
        },
        "word": "гамбургер",
        "value": "г",
        "cell": 23,
        "row": 13,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "гамбургер",
          "question": "вопрос про гамбургер",
          "tip": "подсказка гамбургер",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 6
        },
        "word": "гамбургер",
        "value": "е",
        "cell": 24,
        "row": 13,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "гамбургер",
          "question": "вопрос про гамбургер",
          "tip": "подсказка гамбургер",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 6
        },
        "word": "гамбургер",
        "value": "р",
        "cell": 25,
        "row": 13,
        "isHorizontal": true
      }
    ],
    [
      {
        "question": {
          "word": "галеты",
          "question": "вопрос про галеты",
          "tip": "подсказка галеты",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 7
        },
        "word": "галеты",
        "value": "г",
        "cell": 17,
        "row": 13,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "галеты",
          "question": "вопрос про галеты",
          "tip": "подсказка галеты",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 7
        },
        "word": "галеты",
        "value": "а",
        "cell": 17,
        "row": 14,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "галеты",
          "question": "вопрос про галеты",
          "tip": "подсказка галеты",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 7
        },
        "word": "галеты",
        "value": "л",
        "cell": 17,
        "row": 15,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "галеты",
          "question": "вопрос про галеты",
          "tip": "подсказка галеты",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 7
        },
        "word": "галеты",
        "value": "е",
        "cell": 17,
        "row": 16,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "галеты",
          "question": "вопрос про галеты",
          "tip": "подсказка галеты",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 7
        },
        "word": "галеты",
        "value": "т",
        "cell": 17,
        "row": 17,
        "isHorizontal": false
      },
      {
        "question": {
          "word": "галеты",
          "question": "вопрос про галеты",
          "tip": "подсказка галеты",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 7
        },
        "word": "галеты",
        "value": "ы",
        "cell": 17,
        "row": 18,
        "isHorizontal": false
      }
    ],
    [
      {
        "question": {
          "word": "роллы",
          "question": "вопрос про роллы",
          "tip": "подсказка роллы",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 5
        },
        "word": "роллы",
        "value": "р",
        "cell": 15,
        "row": 15,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "роллы",
          "question": "вопрос про роллы",
          "tip": "подсказка роллы",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 5
        },
        "word": "роллы",
        "value": "о",
        "cell": 16,
        "row": 15,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "роллы",
          "question": "вопрос про роллы",
          "tip": "подсказка роллы",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 5
        },
        "word": "роллы",
        "value": "л",
        "cell": 17,
        "row": 15,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "роллы",
          "question": "вопрос про роллы",
          "tip": "подсказка роллы",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 5
        },
        "word": "роллы",
        "value": "л",
        "cell": 18,
        "row": 15,
        "isHorizontal": true
      },
      {
        "question": {
          "word": "роллы",
          "question": "вопрос про роллы",
          "tip": "подсказка роллы",
          "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "number": 5
        },
        "word": "роллы",
        "value": "ы",
        "cell": 19,
        "row": 15,
        "isHorizontal": true
      }
    ]
  ]

export const animals = [
    [
        {
            "question": {
                "word": "ворон",
                "question": "вопрос про ворон",
                "tip": "подсказка ворон",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "ворон",
            "value": "в",
            "cell": 22,
            "row": 7,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "ворон",
                "question": "вопрос про ворон",
                "tip": "подсказка ворон",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "ворон",
            "value": "о",
            "cell": 23,
            "row": 7,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "ворон",
                "question": "вопрос про ворон",
                "tip": "подсказка ворон",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "ворон",
            "value": "р",
            "cell": 24,
            "row": 7,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "ворон",
                "question": "вопрос про ворон",
                "tip": "подсказка ворон",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "ворон",
            "value": "о",
            "cell": 25,
            "row": 7,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "ворон",
                "question": "вопрос про ворон",
                "tip": "подсказка ворон",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "ворон",
            "value": "н",
            "cell": 26,
            "row": 7,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "крыса",
                "question": "вопрос про крыса",
                "tip": "подсказка крыса",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "крыса",
            "value": "к",
            "cell": 23,
            "row": 5,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "крыса",
                "question": "вопрос про крыса",
                "tip": "подсказка крыса",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "крыса",
            "value": "р",
            "cell": 24,
            "row": 5,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "крыса",
                "question": "вопрос про крыса",
                "tip": "подсказка крыса",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "крыса",
            "value": "ы",
            "cell": 25,
            "row": 5,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "крыса",
                "question": "вопрос про крыса",
                "tip": "подсказка крыса",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "крыса",
            "value": "с",
            "cell": 26,
            "row": 5,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "крыса",
                "question": "вопрос про крыса",
                "tip": "подсказка крыса",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "крыса",
            "value": "а",
            "cell": 27,
            "row": 5,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "крокодил",
                "question": "вопрос про крокодил",
                "tip": "подсказка крокодил",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "крокодил",
            "value": "к",
            "cell": 23,
            "row": 5,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "крокодил",
                "question": "вопрос про крокодил",
                "tip": "подсказка крокодил",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "крокодил",
            "value": "р",
            "cell": 23,
            "row": 6,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "крокодил",
                "question": "вопрос про крокодил",
                "tip": "подсказка крокодил",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "крокодил",
            "value": "о",
            "cell": 23,
            "row": 7,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "крокодил",
                "question": "вопрос про крокодил",
                "tip": "подсказка крокодил",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "крокодил",
            "value": "к",
            "cell": 23,
            "row": 8,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "крокодил",
                "question": "вопрос про крокодил",
                "tip": "подсказка крокодил",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "крокодил",
            "value": "о",
            "cell": 23,
            "row": 9,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "крокодил",
                "question": "вопрос про крокодил",
                "tip": "подсказка крокодил",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "крокодил",
            "value": "д",
            "cell": 23,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "крокодил",
                "question": "вопрос про крокодил",
                "tip": "подсказка крокодил",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "крокодил",
            "value": "и",
            "cell": 23,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "крокодил",
                "question": "вопрос про крокодил",
                "tip": "подсказка крокодил",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "крокодил",
            "value": "л",
            "cell": 23,
            "row": 12,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "феник",
                "question": "вопрос про феник",
                "tip": "подсказка феник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "феник",
            "value": "ф",
            "cell": 20,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "феник",
                "question": "вопрос про феник",
                "tip": "подсказка феник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "феник",
            "value": "е",
            "cell": 21,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "феник",
                "question": "вопрос про феник",
                "tip": "подсказка феник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "феник",
            "value": "н",
            "cell": 22,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "феник",
                "question": "вопрос про феник",
                "tip": "подсказка феник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "феник",
            "value": "и",
            "cell": 23,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "феник",
                "question": "вопрос про феник",
                "tip": "подсказка феник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "феник",
            "value": "к",
            "cell": 24,
            "row": 11,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "жираф",
                "question": "вопрос про жираф",
                "tip": "подсказка жираф",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "жираф",
            "value": "ж",
            "cell": 20,
            "row": 7,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "жираф",
                "question": "вопрос про жираф",
                "tip": "подсказка жираф",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "жираф",
            "value": "и",
            "cell": 20,
            "row": 8,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "жираф",
                "question": "вопрос про жираф",
                "tip": "подсказка жираф",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "жираф",
            "value": "р",
            "cell": 20,
            "row": 9,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "жираф",
                "question": "вопрос про жираф",
                "tip": "подсказка жираф",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "жираф",
            "value": "а",
            "cell": 20,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "жираф",
                "question": "вопрос про жираф",
                "tip": "подсказка жираф",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "жираф",
            "value": "ф",
            "cell": 20,
            "row": 11,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "чайка",
                "question": "вопрос про чайка",
                "tip": "подсказка чайка",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "чайка",
            "value": "ч",
            "cell": 18,
            "row": 6,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "чайка",
                "question": "вопрос про чайка",
                "tip": "подсказка чайка",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "чайка",
            "value": "а",
            "cell": 18,
            "row": 7,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "чайка",
                "question": "вопрос про чайка",
                "tip": "подсказка чайка",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "чайка",
            "value": "й",
            "cell": 18,
            "row": 8,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "чайка",
                "question": "вопрос про чайка",
                "tip": "подсказка чайка",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "чайка",
            "value": "к",
            "cell": 18,
            "row": 9,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "чайка",
                "question": "вопрос про чайка",
                "tip": "подсказка чайка",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "чайка",
            "value": "а",
            "cell": 18,
            "row": 10,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "собака",
                "question": "вопрос про собака",
                "tip": "подсказка собака",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "собака",
            "value": "с",
            "cell": 15,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "собака",
                "question": "вопрос про собака",
                "tip": "подсказка собака",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "собака",
            "value": "о",
            "cell": 16,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "собака",
                "question": "вопрос про собака",
                "tip": "подсказка собака",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "собака",
            "value": "б",
            "cell": 17,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "собака",
                "question": "вопрос про собака",
                "tip": "подсказка собака",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "собака",
            "value": "а",
            "cell": 18,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "собака",
                "question": "вопрос про собака",
                "tip": "подсказка собака",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "собака",
            "value": "к",
            "cell": 19,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "собака",
                "question": "вопрос про собака",
                "tip": "подсказка собака",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "собака",
            "value": "а",
            "cell": 20,
            "row": 10,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "бегемот",
                "question": "вопрос про бегемот",
                "tip": "подсказка бегемот",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "бегемот",
            "value": "б",
            "cell": 17,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "бегемот",
                "question": "вопрос про бегемот",
                "tip": "подсказка бегемот",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "бегемот",
            "value": "е",
            "cell": 17,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "бегемот",
                "question": "вопрос про бегемот",
                "tip": "подсказка бегемот",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "бегемот",
            "value": "г",
            "cell": 17,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "бегемот",
                "question": "вопрос про бегемот",
                "tip": "подсказка бегемот",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "бегемот",
            "value": "е",
            "cell": 17,
            "row": 13,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "бегемот",
                "question": "вопрос про бегемот",
                "tip": "подсказка бегемот",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "бегемот",
            "value": "м",
            "cell": 17,
            "row": 14,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "бегемот",
                "question": "вопрос про бегемот",
                "tip": "подсказка бегемот",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "бегемот",
            "value": "о",
            "cell": 17,
            "row": 15,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "бегемот",
                "question": "вопрос про бегемот",
                "tip": "подсказка бегемот",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "бегемот",
            "value": "т",
            "cell": 17,
            "row": 16,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "слон",
                "question": "вопрос про слон",
                "tip": "подсказка слон",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "слон",
            "value": "с",
            "cell": 15,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "слон",
                "question": "вопрос про слон",
                "tip": "подсказка слон",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "слон",
            "value": "л",
            "cell": 16,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "слон",
                "question": "вопрос про слон",
                "tip": "подсказка слон",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "слон",
            "value": "о",
            "cell": 17,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "слон",
                "question": "вопрос про слон",
                "tip": "подсказка слон",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "слон",
            "value": "н",
            "cell": 18,
            "row": 15,
            "isHorizontal": true
        }
    ]
]

export const feels = [
    [
        {
            "question": {
                "word": "елейность",
                "question": "вопрос про елейность",
                "tip": "подсказка елейность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "елейность",
            "value": "е",
            "cell": 3,
            "row": 16,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "елейность",
                "question": "вопрос про елейность",
                "tip": "подсказка елейность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "елейность",
            "value": "л",
            "cell": 4,
            "row": 16,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "елейность",
                "question": "вопрос про елейность",
                "tip": "подсказка елейность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "елейность",
            "value": "е",
            "cell": 5,
            "row": 16,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "елейность",
                "question": "вопрос про елейность",
                "tip": "подсказка елейность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "елейность",
            "value": "й",
            "cell": 6,
            "row": 16,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "елейность",
                "question": "вопрос про елейность",
                "tip": "подсказка елейность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "елейность",
            "value": "н",
            "cell": 7,
            "row": 16,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "елейность",
                "question": "вопрос про елейность",
                "tip": "подсказка елейность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "елейность",
            "value": "о",
            "cell": 8,
            "row": 16,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "елейность",
                "question": "вопрос про елейность",
                "tip": "подсказка елейность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "елейность",
            "value": "с",
            "cell": 9,
            "row": 16,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "елейность",
                "question": "вопрос про елейность",
                "tip": "подсказка елейность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "елейность",
            "value": "т",
            "cell": 10,
            "row": 16,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "елейность",
                "question": "вопрос про елейность",
                "tip": "подсказка елейность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "елейность",
            "value": "ь",
            "cell": 11,
            "row": 16,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "праздник",
                "question": "вопрос про праздник",
                "tip": "подсказка праздник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "праздник",
            "value": "п",
            "cell": 15,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "праздник",
                "question": "вопрос про праздник",
                "tip": "подсказка праздник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "праздник",
            "value": "р",
            "cell": 16,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "праздник",
                "question": "вопрос про праздник",
                "tip": "подсказка праздник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "праздник",
            "value": "а",
            "cell": 17,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "праздник",
                "question": "вопрос про праздник",
                "tip": "подсказка праздник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "праздник",
            "value": "з",
            "cell": 18,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "праздник",
                "question": "вопрос про праздник",
                "tip": "подсказка праздник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "праздник",
            "value": "д",
            "cell": 19,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "праздник",
                "question": "вопрос про праздник",
                "tip": "подсказка праздник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "праздник",
            "value": "н",
            "cell": 20,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "праздник",
                "question": "вопрос про праздник",
                "tip": "подсказка праздник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "праздник",
            "value": "и",
            "cell": 21,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "праздник",
                "question": "вопрос про праздник",
                "tip": "подсказка праздник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "праздник",
            "value": "к",
            "cell": 22,
            "row": 23,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "ливание",
                "question": "вопрос про ливание",
                "tip": "подсказка ливание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "ливание",
            "value": "л",
            "cell": 21,
            "row": 18,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ливание",
                "question": "вопрос про ливание",
                "tip": "подсказка ливание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "ливание",
            "value": "и",
            "cell": 21,
            "row": 19,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ливание",
                "question": "вопрос про ливание",
                "tip": "подсказка ливание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "ливание",
            "value": "в",
            "cell": 21,
            "row": 20,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ливание",
                "question": "вопрос про ливание",
                "tip": "подсказка ливание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "ливание",
            "value": "а",
            "cell": 21,
            "row": 21,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ливание",
                "question": "вопрос про ливание",
                "tip": "подсказка ливание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "ливание",
            "value": "н",
            "cell": 21,
            "row": 22,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ливание",
                "question": "вопрос про ливание",
                "tip": "подсказка ливание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "ливание",
            "value": "и",
            "cell": 21,
            "row": 23,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ливание",
                "question": "вопрос про ливание",
                "tip": "подсказка ливание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "ливание",
            "value": "е",
            "cell": 21,
            "row": 24,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "варнье",
                "question": "вопрос про варнье",
                "tip": "подсказка варнье",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "варнье",
            "value": "в",
            "cell": 16,
            "row": 6,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "варнье",
                "question": "вопрос про варнье",
                "tip": "подсказка варнье",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "варнье",
            "value": "а",
            "cell": 17,
            "row": 6,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "варнье",
                "question": "вопрос про варнье",
                "tip": "подсказка варнье",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "варнье",
            "value": "р",
            "cell": 18,
            "row": 6,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "варнье",
                "question": "вопрос про варнье",
                "tip": "подсказка варнье",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "варнье",
            "value": "н",
            "cell": 19,
            "row": 6,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "варнье",
                "question": "вопрос про варнье",
                "tip": "подсказка варнье",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "варнье",
            "value": "ь",
            "cell": 20,
            "row": 6,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "варнье",
                "question": "вопрос про варнье",
                "tip": "подсказка варнье",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "варнье",
            "value": "е",
            "cell": 21,
            "row": 6,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "хотьба",
                "question": "вопрос про хотьба",
                "tip": "подсказка хотьба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "хотьба",
            "value": "х",
            "cell": 23,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "хотьба",
                "question": "вопрос про хотьба",
                "tip": "подсказка хотьба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "хотьба",
            "value": "о",
            "cell": 23,
            "row": 18,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "хотьба",
                "question": "вопрос про хотьба",
                "tip": "подсказка хотьба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "хотьба",
            "value": "т",
            "cell": 23,
            "row": 19,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "хотьба",
                "question": "вопрос про хотьба",
                "tip": "подсказка хотьба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "хотьба",
            "value": "ь",
            "cell": 23,
            "row": 20,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "хотьба",
                "question": "вопрос про хотьба",
                "tip": "подсказка хотьба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "хотьба",
            "value": "б",
            "cell": 23,
            "row": 21,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "хотьба",
                "question": "вопрос про хотьба",
                "tip": "подсказка хотьба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "хотьба",
            "value": "а",
            "cell": 23,
            "row": 22,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "зависть",
                "question": "вопрос про зависть",
                "tip": "подсказка зависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "зависть",
            "value": "з",
            "cell": 18,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "зависть",
                "question": "вопрос про зависть",
                "tip": "подсказка зависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "зависть",
            "value": "а",
            "cell": 19,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "зависть",
                "question": "вопрос про зависть",
                "tip": "подсказка зависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "зависть",
            "value": "в",
            "cell": 20,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "зависть",
                "question": "вопрос про зависть",
                "tip": "подсказка зависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "зависть",
            "value": "и",
            "cell": 21,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "зависть",
                "question": "вопрос про зависть",
                "tip": "подсказка зависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "зависть",
            "value": "с",
            "cell": 22,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "зависть",
                "question": "вопрос про зависть",
                "tip": "подсказка зависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "зависть",
            "value": "т",
            "cell": 23,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "зависть",
                "question": "вопрос про зависть",
                "tip": "подсказка зависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "зависть",
            "value": "ь",
            "cell": 24,
            "row": 19,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "злость",
                "question": "вопрос про злость",
                "tip": "подсказка злость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "злость",
            "value": "з",
            "cell": 18,
            "row": 4,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "злость",
                "question": "вопрос про злость",
                "tip": "подсказка злость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "злость",
            "value": "л",
            "cell": 19,
            "row": 4,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "злость",
                "question": "вопрос про злость",
                "tip": "подсказка злость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "злость",
            "value": "о",
            "cell": 20,
            "row": 4,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "злость",
                "question": "вопрос про злость",
                "tip": "подсказка злость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "злость",
            "value": "с",
            "cell": 21,
            "row": 4,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "злость",
                "question": "вопрос про злость",
                "tip": "подсказка злость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "злость",
            "value": "т",
            "cell": 22,
            "row": 4,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "злость",
                "question": "вопрос про злость",
                "tip": "подсказка злость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "злость",
            "value": "ь",
            "cell": 23,
            "row": 4,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "движение",
                "question": "вопрос про движение",
                "tip": "подсказка движение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "движение",
            "value": "д",
            "cell": 16,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "движение",
                "question": "вопрос про движение",
                "tip": "подсказка движение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "движение",
            "value": "в",
            "cell": 17,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "движение",
                "question": "вопрос про движение",
                "tip": "подсказка движение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "движение",
            "value": "и",
            "cell": 18,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "движение",
                "question": "вопрос про движение",
                "tip": "подсказка движение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "движение",
            "value": "ж",
            "cell": 19,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "движение",
                "question": "вопрос про движение",
                "tip": "подсказка движение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "движение",
            "value": "е",
            "cell": 20,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "движение",
                "question": "вопрос про движение",
                "tip": "подсказка движение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "движение",
            "value": "н",
            "cell": 21,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "движение",
                "question": "вопрос про движение",
                "tip": "подсказка движение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "движение",
            "value": "и",
            "cell": 22,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "движение",
                "question": "вопрос про движение",
                "tip": "подсказка движение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "движение",
            "value": "е",
            "cell": 23,
            "row": 2,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "желание",
                "question": "вопрос про желание",
                "tip": "подсказка желание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "желание",
            "value": "ж",
            "cell": 19,
            "row": 2,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "желание",
                "question": "вопрос про желание",
                "tip": "подсказка желание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "желание",
            "value": "е",
            "cell": 19,
            "row": 3,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "желание",
                "question": "вопрос про желание",
                "tip": "подсказка желание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "желание",
            "value": "л",
            "cell": 19,
            "row": 4,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "желание",
                "question": "вопрос про желание",
                "tip": "подсказка желание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "желание",
            "value": "а",
            "cell": 19,
            "row": 5,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "желание",
                "question": "вопрос про желание",
                "tip": "подсказка желание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "желание",
            "value": "н",
            "cell": 19,
            "row": 6,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "желание",
                "question": "вопрос про желание",
                "tip": "подсказка желание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "желание",
            "value": "и",
            "cell": 19,
            "row": 7,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "желание",
                "question": "вопрос про желание",
                "tip": "подсказка желание",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "желание",
            "value": "е",
            "cell": 19,
            "row": 8,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "тоска",
                "question": "вопрос про тоска",
                "tip": "подсказка тоска",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "тоска",
            "value": "т",
            "cell": 19,
            "row": 15,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "тоска",
                "question": "вопрос про тоска",
                "tip": "подсказка тоска",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "тоска",
            "value": "о",
            "cell": 19,
            "row": 16,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "тоска",
                "question": "вопрос про тоска",
                "tip": "подсказка тоска",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "тоска",
            "value": "с",
            "cell": 19,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "тоска",
                "question": "вопрос про тоска",
                "tip": "подсказка тоска",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "тоска",
            "value": "к",
            "cell": 19,
            "row": 18,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "тоска",
                "question": "вопрос про тоска",
                "tip": "подсказка тоска",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "тоска",
            "value": "а",
            "cell": 19,
            "row": 19,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "злоба",
                "question": "вопрос про злоба",
                "tip": "подсказка злоба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "злоба",
            "value": "з",
            "cell": 11,
            "row": 7,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "злоба",
                "question": "вопрос про злоба",
                "tip": "подсказка злоба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "злоба",
            "value": "л",
            "cell": 12,
            "row": 7,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "злоба",
                "question": "вопрос про злоба",
                "tip": "подсказка злоба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "злоба",
            "value": "о",
            "cell": 13,
            "row": 7,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "злоба",
                "question": "вопрос про злоба",
                "tip": "подсказка злоба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "злоба",
            "value": "б",
            "cell": 14,
            "row": 7,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "злоба",
                "question": "вопрос про злоба",
                "tip": "подсказка злоба",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "злоба",
            "value": "а",
            "cell": 15,
            "row": 7,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "боль",
                "question": "вопрос про боль",
                "tip": "подсказка боль",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "боль",
            "value": "б",
            "cell": 11,
            "row": 13,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "боль",
                "question": "вопрос про боль",
                "tip": "подсказка боль",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "боль",
            "value": "о",
            "cell": 11,
            "row": 14,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "боль",
                "question": "вопрос про боль",
                "tip": "подсказка боль",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "боль",
            "value": "л",
            "cell": 11,
            "row": 15,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "боль",
                "question": "вопрос про боль",
                "tip": "подсказка боль",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "боль",
            "value": "ь",
            "cell": 11,
            "row": 16,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "зуд",
                "question": "вопрос про зуд",
                "tip": "подсказка зуд",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 19
            },
            "word": "зуд",
            "value": "з",
            "cell": 11,
            "row": 7,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "зуд",
                "question": "вопрос про зуд",
                "tip": "подсказка зуд",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 19
            },
            "word": "зуд",
            "value": "у",
            "cell": 11,
            "row": 8,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "зуд",
                "question": "вопрос про зуд",
                "tip": "подсказка зуд",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 19
            },
            "word": "зуд",
            "value": "д",
            "cell": 11,
            "row": 9,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "бег",
                "question": "вопрос про бег",
                "tip": "подсказка бег",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "бег",
            "value": "б",
            "cell": 18,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "бег",
                "question": "вопрос про бег",
                "tip": "подсказка бег",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "бег",
            "value": "е",
            "cell": 19,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "бег",
                "question": "вопрос про бег",
                "tip": "подсказка бег",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "бег",
            "value": "г",
            "cell": 20,
            "row": 8,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "гордыня",
                "question": "вопрос про гордыня",
                "tip": "подсказка гордыня",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "гордыня",
            "value": "г",
            "cell": 8,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "гордыня",
                "question": "вопрос про гордыня",
                "tip": "подсказка гордыня",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "гордыня",
            "value": "о",
            "cell": 9,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "гордыня",
                "question": "вопрос про гордыня",
                "tip": "подсказка гордыня",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "гордыня",
            "value": "р",
            "cell": 10,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "гордыня",
                "question": "вопрос про гордыня",
                "tip": "подсказка гордыня",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "гордыня",
            "value": "д",
            "cell": 11,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "гордыня",
                "question": "вопрос про гордыня",
                "tip": "подсказка гордыня",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "гордыня",
            "value": "ы",
            "cell": 12,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "гордыня",
                "question": "вопрос про гордыня",
                "tip": "подсказка гордыня",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "гордыня",
            "value": "н",
            "cell": 13,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "гордыня",
                "question": "вопрос про гордыня",
                "tip": "подсказка гордыня",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "гордыня",
            "value": "я",
            "cell": 14,
            "row": 9,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "горечь",
                "question": "вопрос про горечь",
                "tip": "подсказка горечь",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "горечь",
            "value": "г",
            "cell": 20,
            "row": 8,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "горечь",
                "question": "вопрос про горечь",
                "tip": "подсказка горечь",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "горечь",
            "value": "о",
            "cell": 20,
            "row": 9,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "горечь",
                "question": "вопрос про горечь",
                "tip": "подсказка горечь",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "горечь",
            "value": "р",
            "cell": 20,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "горечь",
                "question": "вопрос про горечь",
                "tip": "подсказка горечь",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "горечь",
            "value": "е",
            "cell": 20,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "горечь",
                "question": "вопрос про горечь",
                "tip": "подсказка горечь",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "горечь",
            "value": "ч",
            "cell": 20,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "горечь",
                "question": "вопрос про горечь",
                "tip": "подсказка горечь",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "горечь",
            "value": "ь",
            "cell": 20,
            "row": 13,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "вопрос",
                "question": "вопрос про вопрос",
                "tip": "подсказка вопрос",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "вопрос",
            "value": "в",
            "cell": 9,
            "row": 8,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "вопрос",
                "question": "вопрос про вопрос",
                "tip": "подсказка вопрос",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "вопрос",
            "value": "о",
            "cell": 9,
            "row": 9,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "вопрос",
                "question": "вопрос про вопрос",
                "tip": "подсказка вопрос",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "вопрос",
            "value": "п",
            "cell": 9,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "вопрос",
                "question": "вопрос про вопрос",
                "tip": "подсказка вопрос",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "вопрос",
            "value": "р",
            "cell": 9,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "вопрос",
                "question": "вопрос про вопрос",
                "tip": "подсказка вопрос",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "вопрос",
            "value": "о",
            "cell": 9,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "вопрос",
                "question": "вопрос про вопрос",
                "tip": "подсказка вопрос",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "вопрос",
            "value": "с",
            "cell": 9,
            "row": 13,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "событие",
                "question": "вопрос про событие",
                "tip": "подсказка событие",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "событие",
            "value": "с",
            "cell": 9,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "событие",
                "question": "вопрос про событие",
                "tip": "подсказка событие",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "событие",
            "value": "о",
            "cell": 10,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "событие",
                "question": "вопрос про событие",
                "tip": "подсказка событие",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "событие",
            "value": "б",
            "cell": 11,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "событие",
                "question": "вопрос про событие",
                "tip": "подсказка событие",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "событие",
            "value": "ы",
            "cell": 12,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "событие",
                "question": "вопрос про событие",
                "tip": "подсказка событие",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "событие",
            "value": "т",
            "cell": 13,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "событие",
                "question": "вопрос про событие",
                "tip": "подсказка событие",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "событие",
            "value": "и",
            "cell": 14,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "событие",
                "question": "вопрос про событие",
                "tip": "подсказка событие",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "событие",
            "value": "е",
            "cell": 15,
            "row": 13,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "жение",
                "question": "вопрос про жение",
                "tip": "подсказка жение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "жение",
            "value": "ж",
            "cell": 16,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "жение",
                "question": "вопрос про жение",
                "tip": "подсказка жение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "жение",
            "value": "е",
            "cell": 17,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "жение",
                "question": "вопрос про жение",
                "tip": "подсказка жение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "жение",
            "value": "н",
            "cell": 18,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "жение",
                "question": "вопрос про жение",
                "tip": "подсказка жение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "жение",
            "value": "и",
            "cell": 19,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "жение",
                "question": "вопрос про жение",
                "tip": "подсказка жение",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "жение",
            "value": "е",
            "cell": 20,
            "row": 11,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "честность",
                "question": "вопрос про честность",
                "tip": "подсказка честность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "честность",
            "value": "ч",
            "cell": 17,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "честность",
                "question": "вопрос про честность",
                "tip": "подсказка честность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "честность",
            "value": "е",
            "cell": 17,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "честность",
                "question": "вопрос про честность",
                "tip": "подсказка честность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "честность",
            "value": "с",
            "cell": 17,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "честность",
                "question": "вопрос про честность",
                "tip": "подсказка честность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "честность",
            "value": "т",
            "cell": 17,
            "row": 13,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "честность",
                "question": "вопрос про честность",
                "tip": "подсказка честность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "честность",
            "value": "н",
            "cell": 17,
            "row": 14,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "честность",
                "question": "вопрос про честность",
                "tip": "подсказка честность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "честность",
            "value": "о",
            "cell": 17,
            "row": 15,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "честность",
                "question": "вопрос про честность",
                "tip": "подсказка честность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "честность",
            "value": "с",
            "cell": 17,
            "row": 16,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "честность",
                "question": "вопрос про честность",
                "tip": "подсказка честность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "честность",
            "value": "т",
            "cell": 17,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "честность",
                "question": "вопрос про честность",
                "tip": "подсказка честность",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "честность",
            "value": "ь",
            "cell": 17,
            "row": 18,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "ненависть",
                "question": "вопрос про ненависть",
                "tip": "подсказка ненависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "ненависть",
            "value": "н",
            "cell": 15,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ненависть",
                "question": "вопрос про ненависть",
                "tip": "подсказка ненависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "ненависть",
            "value": "е",
            "cell": 15,
            "row": 13,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ненависть",
                "question": "вопрос про ненависть",
                "tip": "подсказка ненависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "ненависть",
            "value": "н",
            "cell": 15,
            "row": 14,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ненависть",
                "question": "вопрос про ненависть",
                "tip": "подсказка ненависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "ненависть",
            "value": "а",
            "cell": 15,
            "row": 15,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ненависть",
                "question": "вопрос про ненависть",
                "tip": "подсказка ненависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "ненависть",
            "value": "в",
            "cell": 15,
            "row": 16,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ненависть",
                "question": "вопрос про ненависть",
                "tip": "подсказка ненависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "ненависть",
            "value": "и",
            "cell": 15,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ненависть",
                "question": "вопрос про ненависть",
                "tip": "подсказка ненависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "ненависть",
            "value": "с",
            "cell": 15,
            "row": 18,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ненависть",
                "question": "вопрос про ненависть",
                "tip": "подсказка ненависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "ненависть",
            "value": "т",
            "cell": 15,
            "row": 19,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "ненависть",
                "question": "вопрос про ненависть",
                "tip": "подсказка ненависть",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "ненависть",
            "value": "ь",
            "cell": 15,
            "row": 20,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "радость",
                "question": "вопрос про радость",
                "tip": "подсказка радость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "радость",
            "value": "р",
            "cell": 14,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "радость",
                "question": "вопрос про радость",
                "tip": "подсказка радость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "радость",
            "value": "а",
            "cell": 15,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "радость",
                "question": "вопрос про радость",
                "tip": "подсказка радость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "радость",
            "value": "д",
            "cell": 16,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "радость",
                "question": "вопрос про радость",
                "tip": "подсказка радость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "радость",
            "value": "о",
            "cell": 17,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "радость",
                "question": "вопрос про радость",
                "tip": "подсказка радость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "радость",
            "value": "с",
            "cell": 18,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "радость",
                "question": "вопрос про радость",
                "tip": "подсказка радость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "радость",
            "value": "т",
            "cell": 19,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "радость",
                "question": "вопрос про радость",
                "tip": "подсказка радость",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "радость",
            "value": "ь",
            "cell": 20,
            "row": 15,
            "isHorizontal": true
        }
    ]
]

export const works = [
    [
        {
            "question": {
                "word": "грузчик",
                "question": "вопрос про грузчик",
                "tip": "подсказка грузчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 26
            },
            "word": "грузчик",
            "value": "г",
            "cell": 20,
            "row": 21,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "грузчик",
                "question": "вопрос про грузчик",
                "tip": "подсказка грузчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 26
            },
            "word": "грузчик",
            "value": "р",
            "cell": 20,
            "row": 22,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "грузчик",
                "question": "вопрос про грузчик",
                "tip": "подсказка грузчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 26
            },
            "word": "грузчик",
            "value": "у",
            "cell": 20,
            "row": 23,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "грузчик",
                "question": "вопрос про грузчик",
                "tip": "подсказка грузчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 26
            },
            "word": "грузчик",
            "value": "з",
            "cell": 20,
            "row": 24,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "грузчик",
                "question": "вопрос про грузчик",
                "tip": "подсказка грузчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 26
            },
            "word": "грузчик",
            "value": "ч",
            "cell": 20,
            "row": 25,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "грузчик",
                "question": "вопрос про грузчик",
                "tip": "подсказка грузчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 26
            },
            "word": "грузчик",
            "value": "и",
            "cell": 20,
            "row": 26,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "грузчик",
                "question": "вопрос про грузчик",
                "tip": "подсказка грузчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 26
            },
            "word": "грузчик",
            "value": "к",
            "cell": 20,
            "row": 27,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "лесоруб",
                "question": "вопрос про лесоруб",
                "tip": "подсказка лесоруб",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "лесоруб",
            "value": "л",
            "cell": 16,
            "row": 22,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "лесоруб",
                "question": "вопрос про лесоруб",
                "tip": "подсказка лесоруб",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "лесоруб",
            "value": "е",
            "cell": 17,
            "row": 22,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "лесоруб",
                "question": "вопрос про лесоруб",
                "tip": "подсказка лесоруб",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "лесоруб",
            "value": "с",
            "cell": 18,
            "row": 22,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "лесоруб",
                "question": "вопрос про лесоруб",
                "tip": "подсказка лесоруб",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "лесоруб",
            "value": "о",
            "cell": 19,
            "row": 22,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "лесоруб",
                "question": "вопрос про лесоруб",
                "tip": "подсказка лесоруб",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "лесоруб",
            "value": "р",
            "cell": 20,
            "row": 22,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "лесоруб",
                "question": "вопрос про лесоруб",
                "tip": "подсказка лесоруб",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "лесоруб",
            "value": "у",
            "cell": 21,
            "row": 22,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "лесоруб",
                "question": "вопрос про лесоруб",
                "tip": "подсказка лесоруб",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 12
            },
            "word": "лесоруб",
            "value": "б",
            "cell": 22,
            "row": 22,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "математик",
                "question": "вопрос про математик",
                "tip": "подсказка математик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "математик",
            "value": "м",
            "cell": 6,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "математик",
                "question": "вопрос про математик",
                "tip": "подсказка математик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "математик",
            "value": "а",
            "cell": 7,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "математик",
                "question": "вопрос про математик",
                "tip": "подсказка математик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "математик",
            "value": "т",
            "cell": 8,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "математик",
                "question": "вопрос про математик",
                "tip": "подсказка математик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "математик",
            "value": "е",
            "cell": 9,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "математик",
                "question": "вопрос про математик",
                "tip": "подсказка математик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "математик",
            "value": "м",
            "cell": 10,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "математик",
                "question": "вопрос про математик",
                "tip": "подсказка математик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "математик",
            "value": "а",
            "cell": 11,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "математик",
                "question": "вопрос про математик",
                "tip": "подсказка математик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "математик",
            "value": "т",
            "cell": 12,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "математик",
                "question": "вопрос про математик",
                "tip": "подсказка математик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "математик",
            "value": "и",
            "cell": 13,
            "row": 8,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "математик",
                "question": "вопрос про математик",
                "tip": "подсказка математик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 18
            },
            "word": "математик",
            "value": "к",
            "cell": 14,
            "row": 8,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "р",
            "cell": 28,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "а",
            "cell": 29,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "з",
            "cell": 30,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "р",
            "cell": 31,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "а",
            "cell": 32,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "б",
            "cell": 33,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "о",
            "cell": 34,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "т",
            "cell": 35,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "ч",
            "cell": 36,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "и",
            "cell": 37,
            "row": 11,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "разработчик",
                "question": "вопрос про разработчик",
                "tip": "подсказка разработчик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 1
            },
            "word": "разработчик",
            "value": "к",
            "cell": 38,
            "row": 11,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "конюх",
                "question": "вопрос про конюх",
                "tip": "подсказка конюх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 29
            },
            "word": "конюх",
            "value": "к",
            "cell": 6,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "конюх",
                "question": "вопрос про конюх",
                "tip": "подсказка конюх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 29
            },
            "word": "конюх",
            "value": "о",
            "cell": 6,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "конюх",
                "question": "вопрос про конюх",
                "tip": "подсказка конюх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 29
            },
            "word": "конюх",
            "value": "н",
            "cell": 6,
            "row": 13,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "конюх",
                "question": "вопрос про конюх",
                "tip": "подсказка конюх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 29
            },
            "word": "конюх",
            "value": "ю",
            "cell": 6,
            "row": 14,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "конюх",
                "question": "вопрос про конюх",
                "tip": "подсказка конюх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 29
            },
            "word": "конюх",
            "value": "х",
            "cell": 6,
            "row": 15,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "логист",
                "question": "вопрос про логист",
                "tip": "подсказка логист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "логист",
            "value": "л",
            "cell": 5,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "логист",
                "question": "вопрос про логист",
                "tip": "подсказка логист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "логист",
            "value": "о",
            "cell": 6,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "логист",
                "question": "вопрос про логист",
                "tip": "подсказка логист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "логист",
            "value": "г",
            "cell": 7,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "логист",
                "question": "вопрос про логист",
                "tip": "подсказка логист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "логист",
            "value": "и",
            "cell": 8,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "логист",
                "question": "вопрос про логист",
                "tip": "подсказка логист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "логист",
            "value": "с",
            "cell": 9,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "логист",
                "question": "вопрос про логист",
                "tip": "подсказка логист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 10
            },
            "word": "логист",
            "value": "т",
            "cell": 10,
            "row": 12,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "учитель",
                "question": "вопрос про учитель",
                "tip": "подсказка учитель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "учитель",
            "value": "у",
            "cell": 12,
            "row": 0,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "учитель",
                "question": "вопрос про учитель",
                "tip": "подсказка учитель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "учитель",
            "value": "ч",
            "cell": 12,
            "row": 1,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "учитель",
                "question": "вопрос про учитель",
                "tip": "подсказка учитель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "учитель",
            "value": "и",
            "cell": 12,
            "row": 2,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "учитель",
                "question": "вопрос про учитель",
                "tip": "подсказка учитель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "учитель",
            "value": "т",
            "cell": 12,
            "row": 3,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "учитель",
                "question": "вопрос про учитель",
                "tip": "подсказка учитель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "учитель",
            "value": "е",
            "cell": 12,
            "row": 4,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "учитель",
                "question": "вопрос про учитель",
                "tip": "подсказка учитель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "учитель",
            "value": "л",
            "cell": 12,
            "row": 5,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "учитель",
                "question": "вопрос про учитель",
                "tip": "подсказка учитель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 6
            },
            "word": "учитель",
            "value": "ь",
            "cell": 12,
            "row": 6,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "политик",
                "question": "вопрос про политик",
                "tip": "подсказка политик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "политик",
            "value": "п",
            "cell": 16,
            "row": 4,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "политик",
                "question": "вопрос про политик",
                "tip": "подсказка политик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "политик",
            "value": "о",
            "cell": 16,
            "row": 5,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "политик",
                "question": "вопрос про политик",
                "tip": "подсказка политик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "политик",
            "value": "л",
            "cell": 16,
            "row": 6,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "политик",
                "question": "вопрос про политик",
                "tip": "подсказка политик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "политик",
            "value": "и",
            "cell": 16,
            "row": 7,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "политик",
                "question": "вопрос про политик",
                "tip": "подсказка политик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "политик",
            "value": "т",
            "cell": 16,
            "row": 8,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "политик",
                "question": "вопрос про политик",
                "tip": "подсказка политик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "политик",
            "value": "и",
            "cell": 16,
            "row": 9,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "политик",
                "question": "вопрос про политик",
                "tip": "подсказка политик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 15
            },
            "word": "политик",
            "value": "к",
            "cell": 16,
            "row": 10,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "биолог",
                "question": "вопрос про биолог",
                "tip": "подсказка биолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 19
            },
            "word": "биолог",
            "value": "б",
            "cell": 16,
            "row": 19,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "биолог",
                "question": "вопрос про биолог",
                "tip": "подсказка биолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 19
            },
            "word": "биолог",
            "value": "и",
            "cell": 16,
            "row": 20,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "биолог",
                "question": "вопрос про биолог",
                "tip": "подсказка биолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 19
            },
            "word": "биолог",
            "value": "о",
            "cell": 16,
            "row": 21,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "биолог",
                "question": "вопрос про биолог",
                "tip": "подсказка биолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 19
            },
            "word": "биолог",
            "value": "л",
            "cell": 16,
            "row": 22,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "биолог",
                "question": "вопрос про биолог",
                "tip": "подсказка биолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 19
            },
            "word": "биолог",
            "value": "о",
            "cell": 16,
            "row": 23,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "биолог",
                "question": "вопрос про биолог",
                "tip": "подсказка биолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 19
            },
            "word": "биолог",
            "value": "г",
            "cell": 16,
            "row": 24,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "принц",
                "question": "вопрос про принц",
                "tip": "подсказка принц",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 31
            },
            "word": "принц",
            "value": "п",
            "cell": 10,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "принц",
                "question": "вопрос про принц",
                "tip": "подсказка принц",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 31
            },
            "word": "принц",
            "value": "р",
            "cell": 11,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "принц",
                "question": "вопрос про принц",
                "tip": "подсказка принц",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 31
            },
            "word": "принц",
            "value": "и",
            "cell": 12,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "принц",
                "question": "вопрос про принц",
                "tip": "подсказка принц",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 31
            },
            "word": "принц",
            "value": "н",
            "cell": 13,
            "row": 2,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "принц",
                "question": "вопрос про принц",
                "tip": "подсказка принц",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 31
            },
            "word": "принц",
            "value": "ц",
            "cell": 14,
            "row": 2,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "дальнобой",
                "question": "вопрос про дальнобой",
                "tip": "подсказка дальнобой",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "дальнобой",
            "value": "д",
            "cell": 28,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дальнобой",
                "question": "вопрос про дальнобой",
                "tip": "подсказка дальнобой",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "дальнобой",
            "value": "а",
            "cell": 29,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дальнобой",
                "question": "вопрос про дальнобой",
                "tip": "подсказка дальнобой",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "дальнобой",
            "value": "л",
            "cell": 30,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дальнобой",
                "question": "вопрос про дальнобой",
                "tip": "подсказка дальнобой",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "дальнобой",
            "value": "ь",
            "cell": 31,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дальнобой",
                "question": "вопрос про дальнобой",
                "tip": "подсказка дальнобой",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "дальнобой",
            "value": "н",
            "cell": 32,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дальнобой",
                "question": "вопрос про дальнобой",
                "tip": "подсказка дальнобой",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "дальнобой",
            "value": "о",
            "cell": 33,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дальнобой",
                "question": "вопрос про дальнобой",
                "tip": "подсказка дальнобой",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "дальнобой",
            "value": "б",
            "cell": 34,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дальнобой",
                "question": "вопрос про дальнобой",
                "tip": "подсказка дальнобой",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "дальнобой",
            "value": "о",
            "cell": 35,
            "row": 9,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дальнобой",
                "question": "вопрос про дальнобой",
                "tip": "подсказка дальнобой",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 11
            },
            "word": "дальнобой",
            "value": "й",
            "cell": 36,
            "row": 9,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "п",
            "cell": 10,
            "row": 2,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "р",
            "cell": 10,
            "row": 3,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "о",
            "cell": 10,
            "row": 4,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "г",
            "cell": 10,
            "row": 5,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "р",
            "cell": 10,
            "row": 6,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "а",
            "cell": 10,
            "row": 7,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "м",
            "cell": 10,
            "row": 8,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "м",
            "cell": 10,
            "row": 9,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "и",
            "cell": 10,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "с",
            "cell": 10,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "программист",
                "question": "вопрос про программист",
                "tip": "подсказка программист",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 2
            },
            "word": "программист",
            "value": "т",
            "cell": 10,
            "row": 12,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "манагер",
                "question": "вопрос про манагер",
                "tip": "подсказка манагер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "манагер",
            "value": "м",
            "cell": 29,
            "row": 8,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "манагер",
                "question": "вопрос про манагер",
                "tip": "подсказка манагер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "манагер",
            "value": "а",
            "cell": 29,
            "row": 9,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "манагер",
                "question": "вопрос про манагер",
                "tip": "подсказка манагер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "манагер",
            "value": "н",
            "cell": 29,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "манагер",
                "question": "вопрос про манагер",
                "tip": "подсказка манагер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "манагер",
            "value": "а",
            "cell": 29,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "манагер",
                "question": "вопрос про манагер",
                "tip": "подсказка манагер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "манагер",
            "value": "г",
            "cell": 29,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "манагер",
                "question": "вопрос про манагер",
                "tip": "подсказка манагер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "манагер",
            "value": "е",
            "cell": 29,
            "row": 13,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "манагер",
                "question": "вопрос про манагер",
                "tip": "подсказка манагер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 4
            },
            "word": "манагер",
            "value": "р",
            "cell": 29,
            "row": 14,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "админ",
                "question": "вопрос про админ",
                "tip": "подсказка админ",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "админ",
            "value": "а",
            "cell": 12,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "админ",
                "question": "вопрос про админ",
                "tip": "подсказка админ",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "админ",
            "value": "д",
            "cell": 13,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "админ",
                "question": "вопрос про админ",
                "tip": "подсказка админ",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "админ",
            "value": "м",
            "cell": 14,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "админ",
                "question": "вопрос про админ",
                "tip": "подсказка админ",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "админ",
            "value": "и",
            "cell": 15,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "админ",
                "question": "вопрос про админ",
                "tip": "подсказка админ",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 21
            },
            "word": "админ",
            "value": "н",
            "cell": 16,
            "row": 13,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "чиновник",
                "question": "вопрос про чиновник",
                "tip": "подсказка чиновник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "чиновник",
            "value": "ч",
            "cell": 9,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "чиновник",
                "question": "вопрос про чиновник",
                "tip": "подсказка чиновник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "чиновник",
            "value": "и",
            "cell": 10,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "чиновник",
                "question": "вопрос про чиновник",
                "tip": "подсказка чиновник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "чиновник",
            "value": "н",
            "cell": 11,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "чиновник",
                "question": "вопрос про чиновник",
                "tip": "подсказка чиновник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "чиновник",
            "value": "о",
            "cell": 12,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "чиновник",
                "question": "вопрос про чиновник",
                "tip": "подсказка чиновник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "чиновник",
            "value": "в",
            "cell": 13,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "чиновник",
                "question": "вопрос про чиновник",
                "tip": "подсказка чиновник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "чиновник",
            "value": "н",
            "cell": 14,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "чиновник",
                "question": "вопрос про чиновник",
                "tip": "подсказка чиновник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "чиновник",
            "value": "и",
            "cell": 15,
            "row": 10,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "чиновник",
                "question": "вопрос про чиновник",
                "tip": "подсказка чиновник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 16
            },
            "word": "чиновник",
            "value": "к",
            "cell": 16,
            "row": 10,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "кузнец",
                "question": "вопрос про кузнец",
                "tip": "подсказка кузнец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 28
            },
            "word": "кузнец",
            "value": "к",
            "cell": 16,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "кузнец",
                "question": "вопрос про кузнец",
                "tip": "подсказка кузнец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 28
            },
            "word": "кузнец",
            "value": "у",
            "cell": 16,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "кузнец",
                "question": "вопрос про кузнец",
                "tip": "подсказка кузнец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 28
            },
            "word": "кузнец",
            "value": "з",
            "cell": 16,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "кузнец",
                "question": "вопрос про кузнец",
                "tip": "подсказка кузнец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 28
            },
            "word": "кузнец",
            "value": "н",
            "cell": 16,
            "row": 13,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "кузнец",
                "question": "вопрос про кузнец",
                "tip": "подсказка кузнец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 28
            },
            "word": "кузнец",
            "value": "е",
            "cell": 16,
            "row": 14,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "кузнец",
                "question": "вопрос про кузнец",
                "tip": "подсказка кузнец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 28
            },
            "word": "кузнец",
            "value": "ц",
            "cell": 16,
            "row": 15,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "фермер",
                "question": "вопрос про фермер",
                "tip": "подсказка фермер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 23
            },
            "word": "фермер",
            "value": "ф",
            "cell": 25,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "фермер",
                "question": "вопрос про фермер",
                "tip": "подсказка фермер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 23
            },
            "word": "фермер",
            "value": "е",
            "cell": 26,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "фермер",
                "question": "вопрос про фермер",
                "tip": "подсказка фермер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 23
            },
            "word": "фермер",
            "value": "р",
            "cell": 27,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "фермер",
                "question": "вопрос про фермер",
                "tip": "подсказка фермер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 23
            },
            "word": "фермер",
            "value": "м",
            "cell": 28,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "фермер",
                "question": "вопрос про фермер",
                "tip": "подсказка фермер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 23
            },
            "word": "фермер",
            "value": "е",
            "cell": 29,
            "row": 13,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "фермер",
                "question": "вопрос про фермер",
                "tip": "подсказка фермер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 23
            },
            "word": "фермер",
            "value": "р",
            "cell": 30,
            "row": 13,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "гиолог",
                "question": "вопрос про гиолог",
                "tip": "подсказка гиолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "гиолог",
            "value": "г",
            "cell": 28,
            "row": 16,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "гиолог",
                "question": "вопрос про гиолог",
                "tip": "подсказка гиолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "гиолог",
            "value": "и",
            "cell": 28,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "гиолог",
                "question": "вопрос про гиолог",
                "tip": "подсказка гиолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "гиолог",
            "value": "о",
            "cell": 28,
            "row": 18,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "гиолог",
                "question": "вопрос про гиолог",
                "tip": "подсказка гиолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "гиолог",
            "value": "л",
            "cell": 28,
            "row": 19,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "гиолог",
                "question": "вопрос про гиолог",
                "tip": "подсказка гиолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "гиолог",
            "value": "о",
            "cell": 28,
            "row": 20,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "гиолог",
                "question": "вопрос про гиолог",
                "tip": "подсказка гиолог",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 20
            },
            "word": "гиолог",
            "value": "г",
            "cell": 28,
            "row": 21,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "столяр",
                "question": "вопрос про столяр",
                "tip": "подсказка столяр",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "столяр",
            "value": "с",
            "cell": 19,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "столяр",
                "question": "вопрос про столяр",
                "tip": "подсказка столяр",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "столяр",
            "value": "т",
            "cell": 20,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "столяр",
                "question": "вопрос про столяр",
                "tip": "подсказка столяр",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "столяр",
            "value": "о",
            "cell": 21,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "столяр",
                "question": "вопрос про столяр",
                "tip": "подсказка столяр",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "столяр",
            "value": "л",
            "cell": 22,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "столяр",
                "question": "вопрос про столяр",
                "tip": "подсказка столяр",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "столяр",
            "value": "я",
            "cell": 23,
            "row": 12,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "столяр",
                "question": "вопрос про столяр",
                "tip": "подсказка столяр",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 13
            },
            "word": "столяр",
            "value": "р",
            "cell": 24,
            "row": 12,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "п",
            "cell": 26,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "р",
            "cell": 26,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "е",
            "cell": 26,
            "row": 13,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "п",
            "cell": 26,
            "row": 14,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "о",
            "cell": 26,
            "row": 15,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "д",
            "cell": 26,
            "row": 16,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "а",
            "cell": 26,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "в",
            "cell": 26,
            "row": 18,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "а",
            "cell": 26,
            "row": 19,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "т",
            "cell": 26,
            "row": 20,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "е",
            "cell": 26,
            "row": 21,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "л",
            "cell": 26,
            "row": 22,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "преподаватель",
                "question": "вопрос про преподаватель",
                "tip": "подсказка преподаватель",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 7
            },
            "word": "преподаватель",
            "value": "ь",
            "cell": 26,
            "row": 23,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "монарх",
                "question": "вопрос про монарх",
                "tip": "подсказка монарх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 30
            },
            "word": "монарх",
            "value": "м",
            "cell": 12,
            "row": 26,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "монарх",
                "question": "вопрос про монарх",
                "tip": "подсказка монарх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 30
            },
            "word": "монарх",
            "value": "о",
            "cell": 13,
            "row": 26,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "монарх",
                "question": "вопрос про монарх",
                "tip": "подсказка монарх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 30
            },
            "word": "монарх",
            "value": "н",
            "cell": 14,
            "row": 26,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "монарх",
                "question": "вопрос про монарх",
                "tip": "подсказка монарх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 30
            },
            "word": "монарх",
            "value": "а",
            "cell": 15,
            "row": 26,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "монарх",
                "question": "вопрос про монарх",
                "tip": "подсказка монарх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 30
            },
            "word": "монарх",
            "value": "р",
            "cell": 16,
            "row": 26,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "монарх",
                "question": "вопрос про монарх",
                "tip": "подсказка монарх",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 30
            },
            "word": "монарх",
            "value": "х",
            "cell": 17,
            "row": 26,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "продавец",
                "question": "вопрос про продавец",
                "tip": "подсказка продавец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "продавец",
            "value": "п",
            "cell": 24,
            "row": 15,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "продавец",
                "question": "вопрос про продавец",
                "tip": "подсказка продавец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "продавец",
            "value": "р",
            "cell": 24,
            "row": 16,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "продавец",
                "question": "вопрос про продавец",
                "tip": "подсказка продавец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "продавец",
            "value": "о",
            "cell": 24,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "продавец",
                "question": "вопрос про продавец",
                "tip": "подсказка продавец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "продавец",
            "value": "д",
            "cell": 24,
            "row": 18,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "продавец",
                "question": "вопрос про продавец",
                "tip": "подсказка продавец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "продавец",
            "value": "а",
            "cell": 24,
            "row": 19,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "продавец",
                "question": "вопрос про продавец",
                "tip": "подсказка продавец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "продавец",
            "value": "в",
            "cell": 24,
            "row": 20,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "продавец",
                "question": "вопрос про продавец",
                "tip": "подсказка продавец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "продавец",
            "value": "е",
            "cell": 24,
            "row": 21,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "продавец",
                "question": "вопрос про продавец",
                "tip": "подсказка продавец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 9
            },
            "word": "продавец",
            "value": "ц",
            "cell": 24,
            "row": 22,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "директор",
                "question": "вопрос про директор",
                "tip": "подсказка директор",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "директор",
            "value": "д",
            "cell": 13,
            "row": 20,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "директор",
                "question": "вопрос про директор",
                "tip": "подсказка директор",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "директор",
            "value": "и",
            "cell": 13,
            "row": 21,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "директор",
                "question": "вопрос про директор",
                "tip": "подсказка директор",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "директор",
            "value": "р",
            "cell": 13,
            "row": 22,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "директор",
                "question": "вопрос про директор",
                "tip": "подсказка директор",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "директор",
            "value": "е",
            "cell": 13,
            "row": 23,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "директор",
                "question": "вопрос про директор",
                "tip": "подсказка директор",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "директор",
            "value": "к",
            "cell": 13,
            "row": 24,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "директор",
                "question": "вопрос про директор",
                "tip": "подсказка директор",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "директор",
            "value": "т",
            "cell": 13,
            "row": 25,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "директор",
                "question": "вопрос про директор",
                "tip": "подсказка директор",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "директор",
            "value": "о",
            "cell": 13,
            "row": 26,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "директор",
                "question": "вопрос про директор",
                "tip": "подсказка директор",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 8
            },
            "word": "директор",
            "value": "р",
            "cell": 13,
            "row": 27,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "колхозник",
                "question": "вопрос про колхозник",
                "tip": "подсказка колхозник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 24
            },
            "word": "колхозник",
            "value": "к",
            "cell": 22,
            "row": 10,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "колхозник",
                "question": "вопрос про колхозник",
                "tip": "подсказка колхозник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 24
            },
            "word": "колхозник",
            "value": "о",
            "cell": 22,
            "row": 11,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "колхозник",
                "question": "вопрос про колхозник",
                "tip": "подсказка колхозник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 24
            },
            "word": "колхозник",
            "value": "л",
            "cell": 22,
            "row": 12,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "колхозник",
                "question": "вопрос про колхозник",
                "tip": "подсказка колхозник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 24
            },
            "word": "колхозник",
            "value": "х",
            "cell": 22,
            "row": 13,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "колхозник",
                "question": "вопрос про колхозник",
                "tip": "подсказка колхозник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 24
            },
            "word": "колхозник",
            "value": "о",
            "cell": 22,
            "row": 14,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "колхозник",
                "question": "вопрос про колхозник",
                "tip": "подсказка колхозник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 24
            },
            "word": "колхозник",
            "value": "з",
            "cell": 22,
            "row": 15,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "колхозник",
                "question": "вопрос про колхозник",
                "tip": "подсказка колхозник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 24
            },
            "word": "колхозник",
            "value": "н",
            "cell": 22,
            "row": 16,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "колхозник",
                "question": "вопрос про колхозник",
                "tip": "подсказка колхозник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 24
            },
            "word": "колхозник",
            "value": "и",
            "cell": 22,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "колхозник",
                "question": "вопрос про колхозник",
                "tip": "подсказка колхозник",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 24
            },
            "word": "колхозник",
            "value": "к",
            "cell": 22,
            "row": 18,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "делец",
                "question": "вопрос про делец",
                "tip": "подсказка делец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 25
            },
            "word": "делец",
            "value": "д",
            "cell": 10,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "делец",
                "question": "вопрос про делец",
                "tip": "подсказка делец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 25
            },
            "word": "делец",
            "value": "е",
            "cell": 11,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "делец",
                "question": "вопрос про делец",
                "tip": "подсказка делец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 25
            },
            "word": "делец",
            "value": "л",
            "cell": 12,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "делец",
                "question": "вопрос про делец",
                "tip": "подсказка делец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 25
            },
            "word": "делец",
            "value": "е",
            "cell": 13,
            "row": 23,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "делец",
                "question": "вопрос про делец",
                "tip": "подсказка делец",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 25
            },
            "word": "делец",
            "value": "ц",
            "cell": 14,
            "row": 23,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "дезигнер",
                "question": "вопрос про дезигнер",
                "tip": "подсказка дезигнер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "дезигнер",
            "value": "д",
            "cell": 11,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "дезигнер",
                "question": "вопрос про дезигнер",
                "tip": "подсказка дезигнер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "дезигнер",
            "value": "е",
            "cell": 11,
            "row": 18,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "дезигнер",
                "question": "вопрос про дезигнер",
                "tip": "подсказка дезигнер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "дезигнер",
            "value": "з",
            "cell": 11,
            "row": 19,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "дезигнер",
                "question": "вопрос про дезигнер",
                "tip": "подсказка дезигнер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "дезигнер",
            "value": "и",
            "cell": 11,
            "row": 20,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "дезигнер",
                "question": "вопрос про дезигнер",
                "tip": "подсказка дезигнер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "дезигнер",
            "value": "г",
            "cell": 11,
            "row": 21,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "дезигнер",
                "question": "вопрос про дезигнер",
                "tip": "подсказка дезигнер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "дезигнер",
            "value": "н",
            "cell": 11,
            "row": 22,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "дезигнер",
                "question": "вопрос про дезигнер",
                "tip": "подсказка дезигнер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "дезигнер",
            "value": "е",
            "cell": 11,
            "row": 23,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "дезигнер",
                "question": "вопрос про дезигнер",
                "tip": "подсказка дезигнер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 14
            },
            "word": "дезигнер",
            "value": "р",
            "cell": 11,
            "row": 24,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "уборщик",
                "question": "вопрос про уборщик",
                "tip": "подсказка уборщик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "уборщик",
            "value": "у",
            "cell": 15,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "уборщик",
                "question": "вопрос про уборщик",
                "tip": "подсказка уборщик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "уборщик",
            "value": "б",
            "cell": 16,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "уборщик",
                "question": "вопрос про уборщик",
                "tip": "подсказка уборщик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "уборщик",
            "value": "о",
            "cell": 17,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "уборщик",
                "question": "вопрос про уборщик",
                "tip": "подсказка уборщик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "уборщик",
            "value": "р",
            "cell": 18,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "уборщик",
                "question": "вопрос про уборщик",
                "tip": "подсказка уборщик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "уборщик",
            "value": "щ",
            "cell": 19,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "уборщик",
                "question": "вопрос про уборщик",
                "tip": "подсказка уборщик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "уборщик",
            "value": "и",
            "cell": 20,
            "row": 19,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "уборщик",
                "question": "вопрос про уборщик",
                "tip": "подсказка уборщик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 5
            },
            "word": "уборщик",
            "value": "к",
            "cell": 21,
            "row": 19,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "дипломат",
                "question": "вопрос про дипломат",
                "tip": "подсказка дипломат",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "дипломат",
            "value": "д",
            "cell": 11,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дипломат",
                "question": "вопрос про дипломат",
                "tip": "подсказка дипломат",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "дипломат",
            "value": "и",
            "cell": 12,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дипломат",
                "question": "вопрос про дипломат",
                "tip": "подсказка дипломат",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "дипломат",
            "value": "п",
            "cell": 13,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дипломат",
                "question": "вопрос про дипломат",
                "tip": "подсказка дипломат",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "дипломат",
            "value": "л",
            "cell": 14,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дипломат",
                "question": "вопрос про дипломат",
                "tip": "подсказка дипломат",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "дипломат",
            "value": "о",
            "cell": 15,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дипломат",
                "question": "вопрос про дипломат",
                "tip": "подсказка дипломат",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "дипломат",
            "value": "м",
            "cell": 16,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дипломат",
                "question": "вопрос про дипломат",
                "tip": "подсказка дипломат",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "дипломат",
            "value": "а",
            "cell": 17,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "дипломат",
                "question": "вопрос про дипломат",
                "tip": "подсказка дипломат",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 17
            },
            "word": "дипломат",
            "value": "т",
            "cell": 18,
            "row": 17,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "т",
            "cell": 18,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "е",
            "cell": 19,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "с",
            "cell": 20,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "т",
            "cell": 21,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "и",
            "cell": 22,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "р",
            "cell": 23,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "о",
            "cell": 24,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "в",
            "cell": 25,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "а",
            "cell": 26,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "щ",
            "cell": 27,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "и",
            "cell": 28,
            "row": 17,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "тестироващик",
                "question": "вопрос про тестироващик",
                "tip": "подсказка тестироващик",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 3
            },
            "word": "тестироващик",
            "value": "к",
            "cell": 29,
            "row": 17,
            "isHorizontal": true
        }
    ],
    [
        {
            "question": {
                "word": "шахтер",
                "question": "вопрос про шахтер",
                "tip": "подсказка шахтер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 27
            },
            "word": "шахтер",
            "value": "ш",
            "cell": 18,
            "row": 14,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "шахтер",
                "question": "вопрос про шахтер",
                "tip": "подсказка шахтер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 27
            },
            "word": "шахтер",
            "value": "а",
            "cell": 18,
            "row": 15,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "шахтер",
                "question": "вопрос про шахтер",
                "tip": "подсказка шахтер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 27
            },
            "word": "шахтер",
            "value": "х",
            "cell": 18,
            "row": 16,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "шахтер",
                "question": "вопрос про шахтер",
                "tip": "подсказка шахтер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 27
            },
            "word": "шахтер",
            "value": "т",
            "cell": 18,
            "row": 17,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "шахтер",
                "question": "вопрос про шахтер",
                "tip": "подсказка шахтер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 27
            },
            "word": "шахтер",
            "value": "е",
            "cell": 18,
            "row": 18,
            "isHorizontal": false
        },
        {
            "question": {
                "word": "шахтер",
                "question": "вопрос про шахтер",
                "tip": "подсказка шахтер",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 27
            },
            "word": "шахтер",
            "value": "р",
            "cell": 18,
            "row": 19,
            "isHorizontal": false
        }
    ],
    [
        {
            "question": {
                "word": "официант",
                "question": "вопрос про официант",
                "tip": "подсказка официант",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "официант",
            "value": "о",
            "cell": 13,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "официант",
                "question": "вопрос про официант",
                "tip": "подсказка официант",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "официант",
            "value": "ф",
            "cell": 14,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "официант",
                "question": "вопрос про официант",
                "tip": "подсказка официант",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "официант",
            "value": "и",
            "cell": 15,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "официант",
                "question": "вопрос про официант",
                "tip": "подсказка официант",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "официант",
            "value": "ц",
            "cell": 16,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "официант",
                "question": "вопрос про официант",
                "tip": "подсказка официант",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "официант",
            "value": "и",
            "cell": 17,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "официант",
                "question": "вопрос про официант",
                "tip": "подсказка официант",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "официант",
            "value": "а",
            "cell": 18,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "официант",
                "question": "вопрос про официант",
                "tip": "подсказка официант",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "официант",
            "value": "н",
            "cell": 19,
            "row": 15,
            "isHorizontal": true
        },
        {
            "question": {
                "word": "официант",
                "question": "вопрос про официант",
                "tip": "подсказка официант",
                "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "number": 22
            },
            "word": "официант",
            "value": "т",
            "cell": 20,
            "row": 15,
            "isHorizontal": true
        }
    ]
]

export const shorts = [
            [
                {
                    "question": {
                        "word": "рог",
                        "question": "вопрос про рог",
                        "tip": "подсказка рог",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 5
                    },
                    "word": "рог",
                    "value": "р",
                    "cell": 13,
                    "row": 10,
                    "isHorizontal": true
                },
                {
                    "question": {
                        "word": "рог",
                        "question": "вопрос про рог",
                        "tip": "подсказка рог",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 5
                    },
                    "word": "рог",
                    "value": "о",
                    "cell": 14,
                    "row": 10,
                    "isHorizontal": true
                },
                {
                    "question": {
                        "word": "рог",
                        "question": "вопрос про рог",
                        "tip": "подсказка рог",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 5
                    },
                    "word": "рог",
                    "value": "г",
                    "cell": 15,
                    "row": 10,
                    "isHorizontal": true
                }
            ],
            [
                {
                    "question": {
                        "word": "собака",
                        "question": "вопрос про собака",
                        "tip": "подсказка собака",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 2
                    },
                    "word": "собака",
                    "value": "с",
                    "cell": 14,
                    "row": 9,
                    "isHorizontal": false
                },
                {
                    "question": {
                        "word": "собака",
                        "question": "вопрос про собака",
                        "tip": "подсказка собака",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 2
                    },
                    "word": "собака",
                    "value": "о",
                    "cell": 14,
                    "row": 10,
                    "isHorizontal": false
                },
                {
                    "question": {
                        "word": "собака",
                        "question": "вопрос про собака",
                        "tip": "подсказка собака",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 2
                    },
                    "word": "собака",
                    "value": "б",
                    "cell": 14,
                    "row": 11,
                    "isHorizontal": false
                },
                {
                    "question": {
                        "word": "собака",
                        "question": "вопрос про собака",
                        "tip": "подсказка собака",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 2
                    },
                    "word": "собака",
                    "value": "а",
                    "cell": 14,
                    "row": 12,
                    "isHorizontal": false
                },
                {
                    "question": {
                        "word": "собака",
                        "question": "вопрос про собака",
                        "tip": "подсказка собака",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 2
                    },
                    "word": "собака",
                    "value": "к",
                    "cell": 14,
                    "row": 13,
                    "isHorizontal": false
                },
                {
                    "question": {
                        "word": "собака",
                        "question": "вопрос про собака",
                        "tip": "подсказка собака",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 2
                    },
                    "word": "собака",
                    "value": "а",
                    "cell": 14,
                    "row": 14,
                    "isHorizontal": false
                }
            ],
            [
                {
                    "question": {
                        "word": "кот",
                        "question": "вопрос про кот",
                        "tip": "подсказка кот",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 1
                    },
                    "word": "кот",
                    "value": "к",
                    "cell": 14,
                    "row": 13,
                    "isHorizontal": true
                },
                {
                    "question": {
                        "word": "кот",
                        "question": "вопрос про кот",
                        "tip": "подсказка кот",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 1
                    },
                    "word": "кот",
                    "value": "о",
                    "cell": 15,
                    "row": 13,
                    "isHorizontal": true
                },
                {
                    "question": {
                        "word": "кот",
                        "question": "вопрос про кот",
                        "tip": "подсказка кот",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 1
                    },
                    "word": "кот",
                    "value": "т",
                    "cell": 16,
                    "row": 13,
                    "isHorizontal": true
                }
            ],
            [
                {
                    "question": {
                        "word": "торт",
                        "question": "вопрос про торт",
                        "tip": "подсказка торт",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 4
                    },
                    "word": "торт",
                    "value": "т",
                    "cell": 16,
                    "row": 13,
                    "isHorizontal": false
                },
                {
                    "question": {
                        "word": "торт",
                        "question": "вопрос про торт",
                        "tip": "подсказка торт",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 4
                    },
                    "word": "торт",
                    "value": "о",
                    "cell": 16,
                    "row": 14,
                    "isHorizontal": false
                },
                {
                    "question": {
                        "word": "торт",
                        "question": "вопрос про торт",
                        "tip": "подсказка торт",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 4
                    },
                    "word": "торт",
                    "value": "р",
                    "cell": 16,
                    "row": 15,
                    "isHorizontal": false
                },
                {
                    "question": {
                        "word": "торт",
                        "question": "вопрос про торт",
                        "tip": "подсказка торт",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 4
                    },
                    "word": "торт",
                    "value": "т",
                    "cell": 16,
                    "row": 16,
                    "isHorizontal": false
                }
            ],
            [
                {
                    "question": {
                        "word": "крот",
                        "question": "вопрос про крот",
                        "tip": "подсказка крот",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 3
                    },
                    "word": "крот",
                    "value": "к",
                    "cell": 15,
                    "row": 15,
                    "isHorizontal": true
                },
                {
                    "question": {
                        "word": "крот",
                        "question": "вопрос про крот",
                        "tip": "подсказка крот",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 3
                    },
                    "word": "крот",
                    "value": "р",
                    "cell": 16,
                    "row": 15,
                    "isHorizontal": true
                },
                {
                    "question": {
                        "word": "крот",
                        "question": "вопрос про крот",
                        "tip": "подсказка крот",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 3
                    },
                    "word": "крот",
                    "value": "о",
                    "cell": 17,
                    "row": 15,
                    "isHorizontal": true
                },
                {
                    "question": {
                        "word": "крот",
                        "question": "вопрос про крот",
                        "tip": "подсказка крот",
                        "detailLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "number": 3
                    },
                    "word": "крот",
                    "value": "т",
                    "cell": 18,
                    "row": 15,
                    "isHorizontal": true
                }
            ]
]