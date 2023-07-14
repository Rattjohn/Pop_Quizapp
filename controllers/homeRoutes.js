const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('homepage', {
        logged_in: false
    })
})

router.get('/newPage', (req, res) => {
    res.render('newPage', {
        logged_in: true,
        questions: [
            {
                question: "What color is the sky",
                answers: [
                    "blue", "green", "yellow"
                ]
            }
        ]
    })
})

module.exports = router