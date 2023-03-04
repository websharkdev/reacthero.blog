export const IntroCards = [
  {
    id: '0',
    title: 'нафига этот блок.',
    text: 'этот блок текста существует чтобы вам было проще читать данную страницу… по этому продолжать читать этот текст нету смысла. всё. стоп. хватит… зачем вы читаете дальше?',
    featured: false,
  },
  {
    id: '1',
    title: 'што здесь.',
    text: 'вы попали на блог reacthero. тут вы узнате многое о react (ну типа логично), фронтенде в целом, продуктивности, и много о чем ещё.',
    featured: true,
  },
  {
    id: '2',
    title: 'создатель.',
    text: 'тэкс, меня зовут Лёша (@webshark.dev). по факту этот блог, мой большой конспект с практикой.',
    featured: false,
  },
]

export const PhoneNotioficationsData = [
  {
    id: '0',
    ago: '15',
    title: 'текст уведомления',
    text: 'ваш любимый канал выпустил новый пост по реакту который стоит прочитать. там много чего интересного что можно применить в работе.',
  },
  {
    id: '1',
    ago: '4',
    title: 'текст уведомления',
    text: 'та читай ты уже эту статью, это ж бомба... 💣💥',
  },
]

export const SocialMediaCards = [
  {
    id: '0',
    title: 'этот пункт тоже не нужно читать',
    text: 'пункт существует, чтобы вашему глазу было бы приятнее смотреть на эту страницу. по этому продолжать читать нету смысла.',
    featured: false,
  },
  {
    id: '1',
    title: 'комьюнити',
    text: 'пункт существует, чтобы вашему глазу было бы приятнее смотреть на эту страницу. по этому продолжать читать нету смысла.',
    featured: true,
  },
  {
    id: '2',
    title: 'social сети',
    featured: false,
    links: [
      {
        id: '0',
        link: 'https://t.me/websharkdev',
        title: 'telegram',
      },
      {
        id: '1',
        link: 'https://t.me/websharkdev',
        title: 'telegram',
      },
      {
        id: '2',
        link: 'https://t.me/websharkdev',
        title: 'telegram (в разработке)',
      },
    ],
  },
]

export const HomePageData = [
  {
    index: '0',
    name: 'знакомство',
    enName: 'intro',
    component: 'IntroWrapper',
  },
  {
    index: '1',
    name: 'топчэг',
    enName: 'best',
    component: 'HomePosts',
  },
  {
    index: '2',
    name: 'социал  медиа',
    enName: 'social media',
    component: 'SocialMediaWrapper',
  },
  {
    index: '3',
    name: 'купить кофейку',
    enName: 'buy a cup coffe',
    component: 'BuyMeACoffeWrapper',
  },
]
