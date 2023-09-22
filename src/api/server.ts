// we're writing rules how to communicate with the server
// const token = 'c595c89d2997cd95852ed7df2eeb70327a97d99488f7b330' //bling
let token = 'be84dcf573b84f8108cea8c871b27fb0e15713c61dea0617' // mine

//  https://github.com/casmdz/DigitalLibrary_Render/blob/main/app/authentication/routes.py

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://check-meowt.onrender.com/users`,
        // const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,

        //
            //https://hotline-bling.glitch.me/api/contacts
            // GET THE LINK DOWN BELOW TOO
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'x-access-token': `Bearer ${token}`
                }
            });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()

    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://check-meowt.onrender.com/register`, //register ? 
        // const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
        // 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)

            })

        if (!response.ok) {
            console.log('Failed to create contact');
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },
    
    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://check-meowt.onrender.com/users${id}`,
        // const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,

            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                console.log('failed to update user');
                throw new Error('Failed to update data on the server')
            }
            return await response.json()
        },

    delete: async (id: string) => {
        const response = await fetch(`https://check-meowt.onrender.com/users${id}`,
        // const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,

            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'x-access-token': `Bearer ${token}`
                },
            })

            if (!response.ok) {
                console.log('failed to delete contact');
                throw new Error('Failed to delete data on the server')
            }
            return;
        },
}