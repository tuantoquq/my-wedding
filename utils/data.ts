import image0093 from '@/public/HUY00093.jpg';
import image0149 from '@/public/HUY00149.jpg';
import image0161 from '@/public/HUY00161.jpg';
import image0173 from '@/public/HUY00173.jpg';
import image0225 from '@/public/HUY00255.jpg';
import image0263 from '@/public/HUY00263.jpg';
import image0659 from '@/public/HUY00659.jpg';
import image9216 from '@/public/HUY09216.jpg';
import image9334 from '@/public/HUY09334.jpg';
import image9370 from '@/public/HUY09370.jpg';
import image9615 from '@/public/HUY09615.jpg';
import image9779 from '@/public/HUY09779.jpg';
import image9818 from '@/public/HUY09818.jpg';
import image9837 from '@/public/HUY09837.jpg';
import image9969 from '@/public/HUY09969.jpg';
import groomQR from '@/public/groom_qr.jpeg';
import brideQR from '@/public/bride_qr.jpeg';
import story01 from '@/public/story_01.jpg';
import story02 from '@/public/story_02.jpg';
import story03 from '@/public/story_03.jpg';
import story04 from '@/public/story_04.jpg';
import story05 from '@/public/story_05.jpg';
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

// Chọn số lượng ảnh là bội của 15 thôi nhé ạ
export const albums = [
  image0149,
  image9216,
  image9779,
  image9818,
  image0093,
  image0161,
  image0173,
  image0225,
  image0263,
  image9615,
  image9837,
  image9969,
  image0659,
  image9334,
  image9370,
] as const;

export const storyLine = [
  {
    title: 'Từ bạn thân thành người yêu',
    description: `3 năm cấp 3 học cùng nhau, cùng làm cán bộ lớp, chúng mình là bạn thân của nhau, luôn giúp đỡ nhau học tập chỉ với mục tiêu đỗ Đại học. 
      Đạt được mục tiêu đó, chúng mình xuống Thủ đô vẫn là bạn bè tốt như vậy. Thời gian trôi vừa đúng lúc Em cảm nhận tình cảm đối với Anh hơi khác thì Anh tỏ tình “làm người yêu tao nhé!” 
      Những năm tháng Đại học rực rỡ đó, chúng mình lặng lẽ bình yên bên nhau, cùng nhau trải qua bao khó khăn, vất vả, cùng nhau rong ruổi khắp các con phố của Hà Nội`,
    year: '09 - 2018',
    image: story01,
  },
  {
    title: 'Chuyến đi chơi xa đầu tiên của 2 đứa',
    description: `Đà Lạt đẹp tuyệt vời, nhất định chúng mình sẽ trở lại`,
    year: '02 - 2022',
    image: story02,
  },
  {
    title: 'Em tốt nghiệp cử nhân sớm',
    description: `Chúng mình đã cùng nhau đi hết thời sinh viên của Em, đợi Anh nữa thui`,
    year: '05 - 2022',
    image: story03,
  },
  {
    title: 'Anh tốt nghiệp kỹ sư sớm',
    description: `Chúng mình đã hẹn cùng nhau tốt nghiệp sớm, vậy là tròn 1 năm sau Anh giữ đúng lời hẹn đó`,
    year: '05 - 2023',
    image: story04,
  },
  {
    title: 'Anh bất ngờ cầu hôn em',
    description: `Em tin ngày hôm đó Em là người hạnh phúc nhất thế giới. Nhiệm kỳ 5 năm làm người yêu chúng mình đã hoàn thành rất xuất sắc, từ đây Em đồng ý thăng chức cho Anh thành bạn đời của Em…`,
    year: '10 - 2023',
    image: story05,
  },
] as const;

export const couple = {
  groom: {
    name: 'Nguyễn Tuấn',
    image: image0149,
    description:
      'Anh, chàng trai luôn mải mê với các phép tính, câu lệnh, lập trình, thể thao. Giờ đây anh mê làm em cười hạnh phúc...',
    facebook: 'https://www.facebook.com/tuantoquq2109',
    instagram: 'https://www.instagram.com/tuanbnb',
  },
  bride: {
    name: 'Trương Bích',
    image: image9370,
    description:
      'Em, cô gái tự lập từ bé, thích chăm sóc mọi người, thích cái đẹp, thích bay nhảy và thích luôn sự chân thành, chất phác của Anh',
    facebook: 'https://www.facebook.com/TTB.bichnobi',
    instagram: 'https://www.instagram.com/bichnobi',
  },
};

export const events = [
  {
    image: image9615,
    title: 'LỄ DẠM NGÕ',
    date: '29/10/2023',
    time: '09:00 AM',
    location: 'Lục Liễu, Đạo Trù, Tam Đảo, Vĩnh Phúc',
    mapUrl: 'https://maps.app.goo.gl/q2KkyWbSNr9X4qCSA',
  },
  {
    image: image9370,
    title: 'LỄ ĂN HỎI',
    date: '11/11/2023',
    time: '08:30 AM',
    location: 'Lục Liễu, Đạo Trù, Tam Đảo, Vĩnh Phúc',
    mapUrl: 'https://maps.app.goo.gl/q2KkyWbSNr9X4qCSA',
  },
  {
    image: image9216,
    title: 'LỄ VU QUY',
    date: '02/12/2023',
    time: '08:00 AM',
    location: 'Lục Liễu, Đạo Trù, Tam Đảo, Vĩnh Phúc',
    mapUrl: 'https://maps.app.goo.gl/q2KkyWbSNr9X4qCSA',
  },
  {
    image: image9779,
    title: 'LỄ THÀNH HÔN',
    date: '02/12/2023',
    time: '10:00 AM',
    location: 'ĐỒNG QUÁN, YÊN DƯƠNG, TAM ĐẢO, VĨNH PHÚC',
    mapUrl: 'https://maps.app.goo.gl/rHwK7nZ7d2QQsoc4A',
  },
] as const;

export const slides = [image0149, image9216, image9779];

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
