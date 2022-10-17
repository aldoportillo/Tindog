import {nanoid} from 'nanoid'

const dogs = [
    {
        name: "Rex",
        avatar: require("./rex.png"),
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        id: nanoid(),
    },{
        name: "Bella",
        avatar: require("./bella.png"),
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        id: nanoid(),
    },
    {
        name: "Teddy",
        avatar: require("./teddy.png"),
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        id: nanoid(),
    }
]

export default dogs