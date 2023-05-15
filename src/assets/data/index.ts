import { ImageSourcePropType } from "react-native/types";

export interface Tutorial {
    id: number;
    title: string;
    description: string;
    img: ImageSourcePropType;
    link: string;
    style: { width: number|string; height: number|string; };
    extend: boolean;
  }

export const tutorials: Tutorial[] = [
    {
      id: 1,
      title: 'Desmaio',
      description: 'Aprenda a identificar os sinais de um desmaio e como agir para ajudar a pessoa a se recuperar.',
      img: require('../images/desmaio.png') ,
      link: 'https://www.youtube.com/watch?v=2TIbOv00gAQ',
      style: {width: 150, height: 100},
      extend: false
    },
    {
      id: 2,
      title: 'Envenenamento',
      description: 'Saiba como agir em caso de envenenamento, para evitar que o veneno se espalhe pelo organismo da vítima.',
      img: require('../images/veneno.png') ,
      link: 'https://www.youtube.com/watch?v=AVvzac8fqSQ',
      style: {width: 150, height: 150},
      extend: false
    },
    {
      id: 3,
      title: 'Fratura',
      description: 'Conheça as principais técnicas de primeiros socorros para ajudar uma pessoa que sofreu uma fratura.',
      img: require('../images/fratura.png') ,
      link: 'https://www.youtube.com/watch?v=lRgqKdmyaz0',
      style: {width: 150, height: 150},
      extend: false
    },
    {
      id: 4,
      title: 'Kit primeiros socorros',
      description: 'Saiba quais são os itens essenciais que devem estar presentes em um kit de primeiros socorros e como utilizá-los corretamente.',
      img: require('../images/medikit.png') ,
      link: 'https://www.youtube.com/watch?v=WoB0AQ2aqgA',
      style: {width: 150, height: 150},
      extend: true
    },
    {
      id: 5,
      title: 'Manobra de Heimlich',
      description: 'Aprenda como realizar a manobra de Heimlich para ajudar alguém que esteja engasgado.',
      img: require('../images/hipoglicemia.png') ,
      link: 'https://www.youtube.com/watch?v=tC-OiNlHpcI',
      style: {width: 150, height: 150},
      extend: false
    },
    {
    id: 6,
      title: 'Hipoglicemia',
      description: 'Saiba como identificar e agir em caso de hipoglicemia, uma condição causada pela baixa de açúcar no sangue.',
      img: require('../images/hipoglicemia.png'),
      link: 'https://youtu.be/wPmabvom3wI',
      style: { width: 150, height: 100 },
      extend: false
    },
    {
      id: 7,
      title: 'Insolação',
      description: 'Aprenda a reconhecer os sintomas de insolação e as medidas de primeiros socorros a serem tomadas.',
      img: require('../images/insolacao.png'),
      link: 'https://youtu.be/jMG6K2LwIok',
      style: { width: 150, height: 150 },
      extend: false
    },
    {
      id: 8,
      title: 'Convulsão',
      description: 'Saiba como agir corretamente em caso de convulsão e quais medidas de primeiros socorros tomar.',
      img: require('../images/convulsao.png'),
      link: 'https://youtu.be/iqMseZk3Dx8',
      style: { width: 150, height: 150 },
      extend: false
    },
    {
      id: 9,
      title: 'Queimaduras Pequenas',
      description: 'Conheça as medidas de primeiros socorros para tratar queimaduras pequenas e aliviar a dor da vítima.',
      img: require('../images/queimaLeve.png'),
      link: 'https://youtu.be/zXVJRIPupqM',
      style: { width: 150, height: 100 },
      extend: false
    },
    {
      id: 10,
      title: 'Queimaduras Graves',
      description: 'Saiba como agir em caso de queimaduras graves e como prestar os primeiros socorros corretamente.',
      img: require('../images/queimaGrave.png'),
      link: 'https://youtu.be/ZtkwWQEiznY',
      style: { width: 150, height: 150 },
      extend: false
    },
    {
      id: 11,
      title: 'Infarto',
      description: 'Aprenda a identificar os sintomas de um infarto e as medidas de primeiros socorros a serem tomadas enquanto a ajuda médica não chega.',
      img: require('../images/infarto.png'),
      link: 'https://youtu.be/HcvJ69Gydeg',
      style: { width: 150, height: 150 },
      extend: false
    },
  ];

