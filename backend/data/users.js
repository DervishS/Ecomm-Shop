import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin user',
        email: 'adm@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Test',
        email: 'Test@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Test2',
        email: 'Test2@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;