let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Vova'},
            {id: 3, name: 'Petr'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Kate'},
            {id: 6, name: 'Nina'}
        ],
        messages: [
            {id: 1, message: 'Hi! How are you?'},
            {id: 2, message: 'Hey!'},
            {id: 3, message: 'Where are you?'},
        ],
    },

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, I\'m here!', likesCount: 0},
            {id: 2, message: 'Anyone\'s here?', likesCount: 23}
        ],
    }
};


export default state;