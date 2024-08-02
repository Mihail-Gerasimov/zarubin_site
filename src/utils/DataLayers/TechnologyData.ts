interface ITechnology {
  id: number;
  title: string;
  description: string;
}

export const TechnologyData: ITechnology[] = [
  {
    id: 1,
    title: 'front',
    description:
      'VueJS, ReactJS, CSS3, HTML5, Less, SASS/SCSS, Stylus, Nuxt, TreeJS, WebGL',
  },
  {
    id: 2,
    title: 'back',
    description: 'PHP: Bitrix, Symfony, Laravel, NodeJS, Python, Golang',
  },
  {
    id: 3,
    title: 'mobile',
    description: 'IOS (Flutter), Android (Kotlin, Java)',
  },
  {
    id: 4,
    title: 'devops',
    description:
      'Git/GitLab, Docker, CI/CD Jenkins, Kubernetes, ELK, PostgreSQL, MS SQL, RabbitMQ, Kafka, Zabbix, Grafana',
  },
];
