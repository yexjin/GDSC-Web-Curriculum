const eating = (food) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var eatFood = food
            console.log(eatFood)
            resolve(eatFood)
        },0)
    })
}

eating("하나")
.then(eating("둘"))
.then(eating("셋"))
.then(eating("넷"))
.then(eating("다섯"))

// 하나
// 둘
// 셋
// 넷
// 다섯

