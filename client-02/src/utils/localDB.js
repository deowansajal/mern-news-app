export const localDB = {
    setItem: (name, value) => {
        localStorage.setItem(name, value)
    },
    getToken: () => localStorage.getItem('token'),
    removeToken: () => localStorage.removeItem('token'),
}
