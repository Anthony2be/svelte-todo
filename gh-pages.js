var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Anthony2be/svelte-todo.git',
        user: {
            name: 'Anthony2be',
            email: 'adubovitsky1234@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)