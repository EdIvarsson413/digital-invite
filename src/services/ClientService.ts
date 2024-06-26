/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// Object that contains request api functions
export default {
    registerGuest( name: string, confirmed: boolean, message: string ) {
        return fetch( `/api/guest`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: name, 
                confirmed: confirmed,
                message: message 
            })
        })
    },
    fetchInvitees() {
        return fetch( `/api/guest`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
    },
    deleteGuest( id: string ) {
        return fetch( `/api/guest/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    },
    changeConfimed( id: string ) {
        return fetch( `/api/guest/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        })
    },
    inputPassword( password: string ) {
        return fetch( `/api/access`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
        })
    },
    changePassword( data: any ) {
        return fetch( `/api/access`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                password: data.password,
                newPassword: data.newPassword
            })
        })
    }
}