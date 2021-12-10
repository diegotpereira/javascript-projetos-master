const depoimentoContainer = document.querySelector('.depoimento-container')
const depoimento = document.querySelector('.depoimento')
const usuarioImagem = document.querySelector('.usuario-imagem')
const usuarionome = document.querySelector('.usuarionome')
const funcao = document.querySelector('.funcao')

const depoimentos = [{
        nome: 'Miyah Myles',
        posicao: 'Marketing',
        foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        texto: 'Esse cara é um desenvolvedor front-end incrível que entregou a tarefa exatamente como nós precisamos, faça um favor a si mesmo e contrate-o, você não ficará desapontado com o trabalho entregue'
    },

    {
        nome: 'June Cha',
        posicao: 'Engenheiro de Software',
        foto: 'https://randomuser.me/api/portraits/women/44.jpg',
        texto: 'Esse cara é um desenvolvedor front-end incrível que entregou a tarefa exatamente como precisamos, faça um favor a você e contrate-o, você não ficará desapontado com o trabalho entregue. Ele fará um esforço extra para se certificar de que você está feliz com seu projeto. Com certeza irei trabalhar novamente com ele!',
    },
    {
        nome: 'Iida Niskanen',
        posicao: 'Administrador de banco de dados',
        foto: 'https://randomuser.me/api/portraits/women/68.jpg',
        texto: "Esse cara é um trabalhador esforçado. A comunicação com ele também era muito boa e ele era muito responsivo o tempo todo, algo que não é fácil de encontrar em muitos freelancers. Com certeza vamos repetir com ele.",
    },
    {
        nome: 'Renee Sims',
        posicao: 'Recepcionista',
        foto: 'https://randomuser.me/api/portraits/women/65.jpg',
        texto: "Esse cara faz tudo o que pode para fazer o trabalho bem feito. Esta é a segunda vez que o contratei e vou contratá-lo novamente no futuro.",
    },
    {
        nome: 'Jonathan Nunfiez',
        posicao: 'Designer gráfico',
        foto: 'https://randomuser.me/api/portraits/men/43.jpg',
        texto: "Tive minha preocupação de que, devido ao prazo apertado, esse projeto não pudesse ser concluído. Mas esse cara provou que eu estava errado, não só ele entregou um trabalho excelente, mas ele conseguiu entregar 1 dia antes do prazo. E quando pedi algumas revisões ele as fez em MINUTOS. Estou ansioso para trabalhar com ele novamente e o recomendo totalmente. Obrigado novamente!",
    },
    {
        nome: 'Sasha Ho',
        posicao: 'Contadora',
        foto: 'https://images.pexels.com/fotos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        texto: 'Esse mulher é um designer de primeira linha e desenvolvedor de front-end. Ele se comunica bem, trabalha rápido e produz trabalhos de qualidade. Tivemos a sorte de trabalhar com ele!',
    },
    {
        nome: 'Veeti Seppanen',
        posicao: 'Diretor',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        texto: 'Esse cara é um jovem e talentoso profissional de TI, proativo e responsável, com uma forte ética de trabalho. Ele é muito forte em conversões PSD2HTML e tecnologia HTML / CSS. Ele aprende rápido, ansioso para aprender novas tecnologias. Ele é focado e tem uma boa dinâmica para cumprir prazos e resultados excepcionais.',
    },
]

let index = 1

function atualizarDepoimento() {

    const { nome, posicao, foto, texto } = depoimentos[index]

    depoimento.innerHTML = texto
    usuarioImagem.src = foto
    usuarionome.innerHTML = nome
    funcao.innerHTML = posicao

    index++

    if (index > depoimentos.length - 1) {

        index = 0
    }
}

setInterval(atualizarDepoimento, 10000)