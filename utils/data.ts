import groomQR from '@/public/groom_qr.jpeg';
import brideQR from '@/public/bride_qr.jpeg';
import { PartyItemProps } from '@/components/party/party-item';
import { StaticImageData } from 'next/image';
export const links = [
  {
    name: 'Giới thiệu',
    hash: '#intro',
  },
  {
    name: 'Chuyện tình yêu',
    hash: '#story',
  },
  {
    name: 'Sự kiện',
    hash: '#events',
  },
  {
    name: 'Tiệc cưới',
    hash: '#parties',
  },
  {
    name: 'Album cưới',
    hash: '#album',
  },
  {
    name: 'Lời chúc',
    hash: '#wishes',
  },
  {
    name: 'Lời cảm ơn',
    hash: '#congrats',
  },
] as const;

export const albumUrls = [
  {
    src: 'https://i.imgur.com/qZSXtdf.jpg', //0 - 9216
    height: 4000,
    width: 6000,
  },
  {
    src: 'https://i.imgur.com/bB0qUlt.jpg', //1 - 9615
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/j36kQCh.jpg', //2 - 9586
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/XBKpMDU.jpg', //3 - 0255
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/LrBeJJ4.jpg', //4 - 0161
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/eCTbl7l.jpg', //5 - 9334
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/0FBnvPb.jpg', //6 - 0173
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/H02JaEa.jpg', //7 - 9387
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/xz8I5iB.jpg', //8 - 9589
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/0hS58Fg.jpg', //9 - 9590
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/NknvcAF.jpg', //10 - 9818
    height: 4000,
    width: 6000,
  },
  {
    src: 'https://i.imgur.com/CCUT5fL.jpg', //11 - 9591
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/MzFKCFA.jpg', //12 - 9593
    height: 3451,
    width: 2384,
  },
  {
    src: 'https://i.imgur.com/r8oTUg4.jpg', //13 - 0434
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/IpPkixq.jpg', //14 - 9570
    height: 3640,
    width: 2399,
  },
  {
    src: 'https://i.imgur.com/bmHkqbh.jpg', //15 - 9779
    height: 4000,
    width: 6000,
  },
  {
    src: 'https://i.imgur.com/8yoW1hd.jpg', //16 - 0659
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/B1XdNP3.jpg', //17 - 0263
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/XkEJEKe.jpg', //18 - 0093
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/Pv2lT9y.jpg', //19 - 0408
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/AcUxm5n.jpg', //20 - 9260
    height: 6000,
    width: 4000,
  },
  {
    src: 'https://i.imgur.com/5kXLhDB.jpg', //21 - 0423
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/ImcADAN.jpg', //22 - 9592
    height: 4608,
    width: 3072,
  },
  {
    src: 'https://i.imgur.com/KsPTFHy.jpg', //23 - 0433
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/cRTJ9pH.jpg', //24 - 0422
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/nuAixcA.jpg', //25 - 9584
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/hAVbYfh.jpg', //26 - 9665
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/iiN9oZB.jpg', //27 - 8379
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/vwAvHmn.jpg', //28 - 9584
    height: 3509,
    width: 2341,
  },
  {
    src: 'https://i.imgur.com/z6iIt2C.jpg', //29 - 0149
    height: 4000,
    width: 6000,
  },
  {
    src: 'https://i.imgur.com/i6IN3QH.jpg', //30 - 9584
    height: 3936,
    width: 2624,
  },
  {
    src: 'https://i.imgur.com/Atfrdlb.jpg', //31 - 9584
    height: 3936,
    width: 2624,
  },
] as Array<StaticImageData>;

export const storyLine = [
  {
    title: 'Từ bạn thân thành người yêu',
    description: `3 năm cấp Ba, chúng cùng học, cùng làm cán bộ lớp, là bạn thân, luôn giúp đỡ nhau học tập với mục tiêu đỗ Đại học. \n
    Đạt được mục tiêu đó, chúng mình xuống Thủ đô theo đuổi ước mơ và vẫn là bạn tốt của nhau như vậy. Thời gian trôi vừa đúng lúc Em cảm nhận thấy tình cảm với Anh hơi khác thì Anh chợt tỏ tình “làm người yêu tao nhé!\n”
    Những năm tháng Đại học rực rỡ đó, Em và Anh lặng lẽ bình yên bên nhau, cùng nhau rong ruổi khắp phố phường Hà Nội, cùng trải qua bao thăng trầm, buồn vui`,
    year: '09 - 2018',
    image: {
      src: 'https://i.imgur.com/zcZMylA.jpg',
      width: 5120,
      height: 5120,
    } as StaticImageData,
  },
  {
    title: 'Chuyến đi chơi xa đầu tiên của chúng mình',
    description: `Em và Anh cùng nhau vi vu, cùng thưởng thức những món ăn mới, cùng lần đầu chơi trò mạo hiểm, cùng mệt, cùng cười, cùng vui. 
    Đà Lạt đẹp tuyệt vời, nhất định chúng mình sẽ trở lại`,
    year: '02 - 2022',
    image: {
      src: 'https://i.imgur.com/KB23k0f.jpg',
      width: 1837,
      height: 1837,
    } as StaticImageData,
  },
  {
    title:
      'Chúng mình luôn có nhau trong những dấu mốc quan trọng của cuộc đời',
    description: `Năm 2022, Em tốt nghiệp Cử nhân ngành Du lịch. Năm 2023, Anh tốt nghiệp Kỹ sư ngành IT. \n
    Chúng mình đã hẹn nhau cùng tốt nghiệp sớm và lời hẹn đó đều đã được thực hiện trọn vẹn. 
    Em và Anh đã cùng cố gắng, đồng hành, cổ vũ, giúp đỡ nhau đi qua thời sinh viên thật đáng nhớ cùng những người bạn thật tuyệt vời`,
    year: ['05 - 2022', '05 - 2023'] as Array<string>,
    image: {
      src: 'https://i.imgur.com/xskZEmk.jpg',
      width: 1440,
      height: 1440,
    } as StaticImageData,
  },
  {
    title: 'Lời cầu hôn bất ngờ',
    description: `Ngày hôm đó, Em tin mình là cô gái hạnh phúc nhất thế giới. Dưới khung cảnh lãng mạn với biết bao 
    lời chúc phúc của những người em thương và cả những người xa lạ, Anh bất ngờ cầu hôn em. 
    Nhiệm kỳ 5 năm làm người yêu, chúng mình đã hoàn thành rất xuất sắc. Từ đây, Em đồng ý "thăng chức" cho Anh thành bạn đời của Em…`,
    year: '10 - 2023',
    image: {
      src: 'https://i.imgur.com/0BBAD0Y.jpg',
      width: 3119,
      height: 3119,
    } as StaticImageData,
  },
] as const;

export const couple = {
  groom: {
    name: 'Nguyễn Tuấn',
    image: {
      src: 'https://i.imgur.com/Z7eFICZ.jpg',
      width: 1264,
      height: 1896,
    } as StaticImageData,
    description:
      'Anh - chàng trai luôn đam mê với các phép tính, câu lệnh, lập trình, thể thao,… và giờ đây Anh mê cách làm Em cười hạnh phúc',
    facebook: 'https://www.facebook.com/tuantoquq2109',
    instagram: 'https://www.instagram.com/tuanbnb',
  },
  bride: {
    name: 'Trương Bích',
    image: {
      src: 'https://i.imgur.com/t1YlXru.jpg',
      width: 3072,
      height: 4319,
    } as StaticImageData,
    description:
      'Em - cô gái tự lập từ nhỏ, thích chăm sóc những người xung quanh, thích cái đẹp, thích bay nhảy và thích cả sự chân thành, thông minh của Anh',
    facebook: 'https://www.facebook.com/TTB.bichnobi',
    instagram: 'https://www.instagram.com/bichnobi',
  },
};

export const events = [
  {
    image: {
      src: 'https://i.imgur.com/zBX2MCZ.jpg',
      width: 968,
      height: 968,
    } as StaticImageData,
    title: 'LỄ DẠM NGÕ',
    date: '29/10/2023',
    time: '09:00 AM',
    location: 'Lục Liễu, Đạo Trù, Tam Đảo, Vĩnh Phúc',
    mapUrl: 'https://maps.app.goo.gl/q2KkyWbSNr9X4qCSA',
  },
  {
    image: {
      src: 'https://i.imgur.com/fBgsCq0.jpg',
      width: 1304,
      height: 1304,
    } as StaticImageData,
    title: 'LỄ ĂN HỎI',
    date: '11/11/2023',
    time: '08:30 AM',
    location: 'Lục Liễu, Đạo Trù, Tam Đảo, Vĩnh Phúc',
    mapUrl: 'https://maps.app.goo.gl/q2KkyWbSNr9X4qCSA',
  },
  {
    image: {
      src: 'https://i.imgur.com/EgKcU1q.jpg',
      width: 1956,
      height: 2725,
    } as StaticImageData,
    title: 'LỄ VU QUY',
    date: '02/12/2023',
    time: '08:00 AM',
    location: 'Lục Liễu, Đạo Trù, Tam Đảo, Vĩnh Phúc',
    mapUrl: 'https://maps.app.goo.gl/q2KkyWbSNr9X4qCSA',
  },
  {
    image: albumUrls[12],
    title: 'LỄ THÀNH HÔN',
    date: '02/12/2023',
    time: '10:00 AM',
    location: 'Đồng Quán, Yên Dương, Tam Đảo, Vĩnh Phúc',
    mapUrl: 'https://maps.app.goo.gl/rHwK7nZ7d2QQsoc4A',
  },
] as const;

export const slides = [albumUrls[29], albumUrls[15], albumUrls[0]];

export const banks = [
  {
    bankName: 'Techcombank',
    cardNumber: '1903 9075 5100 17',
    cardHolder: 'NGUYEN HOANG ANH TUAN',
    image: groomQR,
    type: 'GROOM',
  },
  {
    bankName: 'Techcombank',
    cardNumber: '1903 6078 0040 16',
    cardHolder: 'TRUONG THI BICH',
    image: brideQR,
    type: 'BRIDE',
  },
];

export const parties: Array<PartyItemProps> = [
  {
    house: 'NHÀ TRAI',
    hour: '17',
    minute: '00',
    date: 'Thứ Sáu | 01 . 12 . 2023',
    address: 'Đồng Quán, Yên Dương, Tam Đảo, Vĩnh Phúc',
    location: 'https://maps.app.goo.gl/rHwK7nZ7d2QQsoc4A',
  },
  {
    house: 'NHÀ GÁI',
    hour: '17',
    minute: '00',
    date: 'Thứ Sáu | 01 . 12 . 2023',
    address: 'Lục Liễu, Đạo Trù, Tam Đảo, Vĩnh Phúc',
    location: 'https://maps.app.goo.gl/q2KkyWbSNr9X4qCSA',
  },
];
