var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]



const toReplaceModel = object => {
    if(Array.isArray(object)){
        let model = [];
        
        
        object.forEach(t => {
                model.push({
                'id': t.id,
                'name': t.user['name'],
                'posts': [
                    {
                        'id': t.user['id'],
                        'text': t['text'],
                        'title': t['title'],
                    }
                ]
            })
        })
        
        return model;
    }
    
}

console.log(toReplaceModel(model));

/* Alternative solution */

/*
let model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1'
        }
    },
    
    {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 0,
            name: 'user 1'
        }
    },
];
*/

/*

    id: 0,
	name: 'User Name',
	posts: [
        {
		id: 0,
		title: 'title',
		text: 'text',
	  },


*/



/*
let filter = model.reduce(
    (hash, {id, title, text, user}) => {
        
        let post = Object.create([]);
        
        hash[id] = {id, name: user['name'],
        posts: [
        {
            id: user['id'],
            title: title,
            text: text
        }]};
        
        return hash;
    },
    []
)
    
    
console.log(filter[0].posts);
console.log(filter[1].posts) // id = 0


// ______________________________

console.log(filter[1]['id']) // id = 1


// MISSION COMPLETE

*/

