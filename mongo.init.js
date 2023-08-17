db.createUser({
    roles: [
        {
            role: 'readWrtie',
            db: 'bookhub',
        },
    ],
});