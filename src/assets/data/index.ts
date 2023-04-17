import { ImageSourcePropType } from "react-native/types";

export interface Tutorial {
    id: number;
    title: string;
    description: string;
    img: ImageSourcePropType;
    link: string;
    style: { width: number; height: number; };
  }

export const tutorials: Tutorial[] = [
    {
      id: 1,
      title: 'Desmaio',
      description: 'Aprenda a identificar os sinais de um desmaio e como agir para ajudar a pessoa a se recuperar.',
      img: require('../images/desmaio.png') ,
      link: 'https://www.youtube.com/watch?v=2TIbOv00gAQ',
      style: {width: 150, height: 100},
    },
    {
      id: 2,
      title: 'Envenenamento',
      description: 'Saiba como agir em caso de envenenamento, para evitar que o veneno se espalhe pelo organismo da vítima.',
      img: require('../images/envenenamento.png') ,
      link: 'https://www.youtube.com/watch?v=AVvzac8fqSQ',
      style: {width: 150, height: 150},
    },
    {
      id: 3,
      title: 'Fratura',
      description: 'Conheça as principais técnicas de primeiros socorros para ajudar uma pessoa que sofreu uma fratura.',
      img: require('../images/fraturas.png') ,
      link: 'https://www.youtube.com/watch?v=lRgqKdmyaz0',
      style: {width: 150, height: 150},
    },
    {
      id: 4,
      title: 'Kit primeiros socorros',
      description: 'Saiba quais são os itens essenciais que devem estar presentes em um kit de primeiros socorros e como utilizá-los corretamente.',
      img: require('../images/kit_primeiros_socorros.png') ,
      link: 'https://www.youtube.com/watch?v=WoB0AQ2aqgA',
      style: {width: 150, height: 150},
    },
    {
      id: 5,
      title: 'Manobra de Heimlich',
      description: 'Aprenda como realizar a manobra de Heimlich para ajudar alguém que esteja engasgado.',
      img: require('../images/manobra_heimlich.png') ,
      link: 'https://www.youtube.com/watch?v=tC-OiNlHpcI',
      style: {width: 150, height: 150},
    },
  ];