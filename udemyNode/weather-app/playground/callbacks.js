const getUser = (id, callback) => {
    const user = {
        id: id,
        name: 'Dante'
    };
    setTimeout(() => {
        callback(user)
    }, 1000);
};

getUser(42, (user) => {
    console.log(user);
});