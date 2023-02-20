import { GitHubIcon, InstagramIcon, TelegramIcon } from '@/assets/icons/ui'

export const home_data = {
  languages: ['en', 'es', 'ru', 'uk'],
  contacts: [
    {
      id: 0,
      name: 'alexey.bortnytskyi@gmail.com',
      href: 'mailto:alexey.bortnytskyi@gmail.com',
    },
    {
      id: 1,
      name: '34 680 522 262',
      href: 'tel:34680522262',
    },
  ],
  socials: [
    {
      id: 0,
      href: 'https://www.instagram.com/webshark.dev/',
      icon: InstagramIcon,
    },
    {
      id: 1,
      href: 'https://t.me/websharkdev',
      icon: TelegramIcon,
    },
    {
      id: 2,
      href: 'https://github.com/websharkdev',
      icon: GitHubIcon,
    },
  ],
  mail: 'alexey.bortnytskyi@gmail.com',
  cv_link: 'https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae',
}

// @ts-ignore
export const myAge = Math.floor((new Date() - new Date('19 Jun 2003')) / (60 * 60 * 24 * 1000 * 365))

export const user_data = {
  fio: '',
  header_fio: 'Bortnytskyi. Alexey',
  logoName: 'webshark.translate',
  menu: [
    {
      id: 0,
      title: 'Home',
      link: '/',
    },
    {
      id: 1,
      title: 'Translate',
      link: '/translate',
    },
    {
      id: 2,
      title: 'Synonyms',
      link: '/synonyms',
    },
  ],
  home_title: 'We open up language to everyone',
  home_buttons: [
    {
      id: 0,
      name: 'Translate',
      href: '/translate',
      className: 'button-primary',
    },
    {
      id: 1,
      name: 'Synonyms',
      href: '/synonyms',
      className: 'button-secondary',
    },
  ],
}

export const IntroCards = [
  {
    id: 0,
    title: 'нафига этот блок.',
    text: 'этот блок текста существует чтобы вам было проще читать данную страницу… по этому продолжать читать этот текст нету смысла. всё. стоп. хватит… зачем вы читаете дальше?',
    featured: false,
  },
  {
    id: 1,
    title: 'што здесь.',
    text: 'вы попали на блог reacthero. тут вы узнате многое о react (ну типа логично), фронтенде в целом, продуктивности, и много о чем ещё.',
    featured: true,
  },
  {
    id: 2,
    title: 'создатель.',
    text: 'тэкс, меня зовут Лёша (@webshark.dev). по факту этот блог, мой большой конспект с практикой.',
    featured: false,
  },
]

export const PhoneNotioficationsData = [
  {
    id: 0,
    ago: 15,
    title: 'текст уведомления',
    text: 'ваш любимый канал выпустил новый пост по реакту который стоит прочитать. там много чего интересного что можно применить в работе.',
  },
  {
    id: 1,
    ago: 4,
    title: 'текст уведомления',
    text: 'та читай ты уже эту статью, это ж бомба... 💣💥',
  },
]

export const SocialMediaCards = [
  {
    id: 0,
    title: 'этот пункт тоже не нужно читать',
    text: 'пункт существует, чтобы вашему глазу было бы приятнее смотреть на эту страницу. по этому продолжать читать нету смысла.',
    featured: false,
  },
  {
    id: 1,
    title: 'комьюнити',
    text: 'пункт существует, чтобы вашему глазу было бы приятнее смотреть на эту страницу. по этому продолжать читать нету смысла.',
    featured: true,
  },
  {
    id: 2,
    title: 'social сети',
    featured: false,
    links: [
      {
        id: 0,
        link: 'https://t.me/websharkdev',
        title: 'telegram',
      },
      {
        id: 1,
        link: 'https://t.me/websharkdev',
        title: 'telegram',
      },
      {
        id: 2,
        link: 'https://t.me/websharkdev',
        title: 'telegram (в разработке)',
      },
    ],
  },
]

export const helpUkraineEN = {
  section: 'about',
  images: [
    {
      id: 0,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Civilian_evacuation_across_Irpin_River_2022-03-08_4.jpg/1280px-Civilian_evacuation_across_Irpin_River_2022-03-08_4.jpg',
      alt: 'Evacuation of residents across the Irpin River',
    },
    {
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/A_damaged_building_in_Mashtorf.jpg/1280px-A_damaged_building_in_Mashtorf.jpg',
      alt: 'Burnt house in Mashtorf',
    },
    {
      id: 2,
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Transfer_of_civilians_from_Irpin_to_Kyiv_due_to_Russian_attacks.jpg',
      alt: 'Evacuation of civilians from Irpin to Kyiv across the Romanovsky bridge.',
    },
    {
      id: 3,
      src: 'https://img.pravda.com/images/doc/6/d/6d5c838-bd1c7be-fm1ly2uxmaaqt9v.jpg',
      alt: 'Destroid house',
    },
    {
      id: 4,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-d11a-08da043367e7_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
    {
      id: 5,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-218a-08da04336e78_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
    {
      id: 5,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-d1df-08da04336396_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
  ],
  text: [
    {
      id: 0,
      text: `My name is Olexii, I'm a frontend developer from Irpin (city close to Kyiv), Ukraine.`,
    },
    {
      id: 1,
      text: `On 24th of February 2022 I woke up to war: Russian armed forces have invaded my country. Driven by chauvinistic ideals and determination to eradicate the Ukrainian people, this act of aggression can only be described as genocide.`,
    },
    {
      id: 2,
      text: `Russian soldiers spare no thought when bombing residential areas, hospitals, schools, museums, cultural heritages, and civilian infrastructure. The list of committed war crimes grows longer by the minute, while the rest of the world largely remains passive.`,
    },
    {
      id: 3,
      text: `Be on the right side of history! Today it's us, tomorrow it could be you.`,
    },
  ],

  financially: {
    section: 'Help financially.',
    text: 'Please consider helping Ukraine fight back by donating to local charitable funds. Avoid donating to global funds such as Red Cross, UNCR, or other non-UA based NGOs — their support is ineffective.',
    aids: [
      {
        id: 0,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/880x879.png/a59090/000000?Text=880x879',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 1,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 2,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 3,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 4,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
    ],
  },
}

export const helpUkraineRU = {
  section: 'about',
  images: [
    {
      id: 0,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Civilian_evacuation_across_Irpin_River_2022-03-08_4.jpg/1280px-Civilian_evacuation_across_Irpin_River_2022-03-08_4.jpg',
      alt: 'Evacuation of residents across the Irpin River',
    },
    {
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/A_damaged_building_in_Mashtorf.jpg/1280px-A_damaged_building_in_Mashtorf.jpg',
      alt: 'Burnt house in Mashtorf',
    },
    {
      id: 2,
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Transfer_of_civilians_from_Irpin_to_Kyiv_due_to_Russian_attacks.jpg',
      alt: 'Evacuation of civilians from Irpin to Kyiv across the Romanovsky bridge.',
    },
    {
      id: 3,
      src: 'https://img.pravda.com/images/doc/6/d/6d5c838-bd1c7be-fm1ly2uxmaaqt9v.jpg',
      alt: 'Destroid house',
    },
    {
      id: 4,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-d11a-08da043367e7_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
    {
      id: 5,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-218a-08da04336e78_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
    {
      id: 5,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-d1df-08da04336396_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
  ],
  text: [
    {
      id: 0,
      text: `My name is Olexii, I'm a frontend developer from Irpin (city close to Kyiv), Ukraine.`,
    },
    {
      id: 1,
      text: `On 24th of February 2022 I woke up to war: Russian armed forces have invaded my country. Driven by chauvinistic ideals and determination to eradicate the Ukrainian people, this act of aggression can only be described as genocide.`,
    },
    {
      id: 2,
      text: `Russian soldiers spare no thought when bombing residential areas, hospitals, schools, museums, cultural heritages, and civilian infrastructure. The list of committed war crimes grows longer by the minute, while the rest of the world largely remains passive.`,
    },
    {
      id: 3,
      text: `Be on the right side of history! Today it's us, tomorrow it could be you.`,
    },
  ],

  financially: {
    section: 'Help financially.',
    text: 'Please consider helping Ukraine fight back by donating to local charitable funds. Avoid donating to global funds such as Red Cross, UNCR, or other non-UA based NGOs — their support is ineffective.',
    aids: [
      {
        id: 0,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/880x879.png/a59090/000000?Text=880x879',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 1,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 2,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 3,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 4,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
    ],
  },
}
