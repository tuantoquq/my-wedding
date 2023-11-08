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
    title: 'Anh chị siêu cute luôn ạ 🥰',
    description: 'Chúc mừng anh chị hạnh phúc ạ 💕',
    year: 2023,
    image: image0149,
  },
  {
    title: 'BẠN CÓ TIN VÀO DUYÊN PHẬN KHÔNG?',
    description: `Chúng mình quen nhau chẳng ở nơi nhà hàng sang trọng hay bãi biển lãng mạn nào cả.Tình cờ mình gặp nhau 1 lần năm 2014 trong một buổi tham gia lớp học thử tiếng anh của trung tâm Langmaster
    Mình ngồi cạnh nhau và được bắt cặp làm bài tập theo nhóm 2 người
    Mình quen nhau từ đó
    Anh học giao thông vận tải ngành cầu đường
    Em học chuyên ngành du lịch
    Chúng mình cũng chẳng có chuyện gì để nói,bởi biết nói gì bây giờ`,
    year: 2023,
    image: image0161,
  },
  {
    title: 'BẠN CÓ TIN VÀO DUYÊN PHẬN KHÔNG?',
    description: `Chúng mình quen nhau chẳng ở nơi nhà hàng sang trọng hay bãi biển lãng mạn nào cả.Tình cờ mình gặp nhau 1 lần năm 2014 trong một buổi tham gia lớp học thử tiếng anh của trung tâm Langmaster
    Mình ngồi cạnh nhau và được bắt cặp làm bài tập theo nhóm 2 người
    Mình quen nhau từ đó
    Anh học giao thông vận tải ngành cầu đường
    Em học chuyên ngành du lịch
    Chúng mình cũng chẳng có chuyện gì để nói,bởi biết nói gì bây giờ`,
    year: 2023,
    image: image9370,
  },
] as const;

export const couple = {
  groom: {
    name: 'Nguyễn Tuấn',
    image: image0149,
    description:
      'Anh chàng trai kĩ sư trẻ mới ra trường đang trên con đường tìm kiếm thành công và xây dựng sự nghiệp của chính mình .Anh yêu cây, yêu hoa đặc biệt hoa hồng.Trước giờ cũng chưa tán tỉnh hay yêu cô gái nào cả.Sáng đi làm tối về lại chăm chút vào vườn hoa cây cối.Anh thích động vật đam mê với cây cỏ.Cứ tới mùa hoa hồng nở tràn ngập hoa thơm ngát',
    facebook: '',
    instagram: '',
  },
  bride: {
    name: 'Trương Bích',
    image: image9370,
    description:
      'Em cô gái tự lập từ bé,đôi lúc em quên mình là một đoá hoa,cá tính mạnh mẽ và em nghĩ cũng sẽ không cần một bờ vai để tựa vào.Anh ngồi bàn giấy làm hành chính với những con số hình vẽ khô khan Em làm lúc nào cũng tất bật sáng tối đôi khi còn không có cả thời gian cho bản thân chứ chưa nói tới chuyện yêu thương ai',
    facebook: '',
    instagram: '',
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
