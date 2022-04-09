import images from './images';

const food = [
  {
    title: 'Sup cá hồi',
    price: '150 000 ',
    tags: 'Chén',
  },
  {
    title: 'Gà nướng ngũ vị',
    price: '350 000',
    tags: '1 con',
  },
  {
    title: 'Baba lẩu rượu vang',
    price: '800 000',
    tags: 'con/1kg',
  },
  
];

const drink = [
  {
    title: 'Rượu vang',
    price: '2 000 000',
    tags: 'Pháp | chai |1lít',
  },
  {
    title: "Rượu Sochu",
    price: '150 000 ',
    tags: 'Hàn Quốc | chai |450ml',
  },
  {
    title: 'Chivas Regal 18',
    price: '1 500 000 VNĐ',
    tags: ' chai | 700ml',
  },
  
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { food, drink, awards };