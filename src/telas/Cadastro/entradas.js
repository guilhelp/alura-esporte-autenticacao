export const entradas = [
    {
        id: '1',
        label: 'E-mail',
        name: 'email',
        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
        messageError: 'Digite um email válido',
        secureTextEntry: false,
    },
    {
        id: '2',
        label: 'Senha',
        name: 'senha',
        secureTextEntry: true,
        messageError: 'A senha deve conter no mínimo 6 caracteres',
        pattern: '.{6,}',
    },
    {
        id: '3',
        label: 'Confirme a senha',
        name: 'confirmaSenha',
        secureTextEntry: true,
        messageError: 'As senhas não conferem',
    }
]