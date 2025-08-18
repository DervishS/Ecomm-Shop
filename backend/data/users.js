import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin user',
        email: 'adm@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Dervish',
        email: 'Dervish@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Skenderi',
        email: 'Skenderi@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;