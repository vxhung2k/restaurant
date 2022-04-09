import React from 'react';
import { Navbar } from '../../components'
import images from '../../constants/images';
import { useState } from 'react';

import './AboutUs.css';

const AboutUs = () => {
  const [isMore1, setMore1] = useState(true);
  const [isMore2, setMore2] = useState(true);
  const handleMore1 = () => {
    setMore1(!isMore1);

  }
  const handleMore2 = () => {
    setMore2(!isMore2)
  }
  return (

    <section className="about">
      <Navbar />
      <div className="about__background_img">
        <img src={images.G} />
      </div>

      <div className="about__container">
        <div className="about__us">
          <h1 className='text-light'><span>👉</span>Về chúng tôi </h1>
          {isMore1 ? (
            <p>Nằm giữa đô thị hiện đại, Vietbowl lại mang đến cảm giác thân thuộc,
              dân dã cho thực khách ngay khi đặt chân vào cửa. Quán phục vụ các món
              ăn dân dã, đặc sản Nam Bộ...
            </p>

          ) : (
            <p>Nằm giữa đô thị hiện đại, Vietbowl lại mang đến cảm giác thân thuộc, dân dã cho thực khách ngay khi đặt chân vào cửa. Quán phục vụ các món ăn dân dã, đặc sản Nam Bộ.<br />
              Quán lấy hình ảnh nón lá Việt Nam làm chủ đề trang trí. Chủ quán khéo léo khi lựa chọn nón lá làm vật trang trí, khiến “linh hồn” của quán trở nên mềm mại và đậm chất
              Việt Nam hơn khi kết hợp trong không gian hiện đại. Không gian này cũng gợi nhớ cách trang trí nhà của người Sài Gòn thập niên 70-80.<br />
              Phong cách thiết kế của nhà hàng mang hơi thở kiến trúc Đông Dương thế kỷ 19. Cách sắp xếp bàn ghế gỗ tuy đơn giản nhưng logic. Bởi theo phong thủy, gỗ mang đến sự ấm
              áp và gần gũi, giúp thực khách có cảm giác ăn nhà hàng như ăn ở nhà. Gam màu chủ đạo của quán là vàng nghệ tương đồng với sắc vàng của những chiếc nón lá, tạo cảm giác
              thư giãn hơn cho thực khách.
              <br />Hương vị và mùi thơm của tô bún Suông Trà Vinh phả vào sống mũi kích thích vị giác người thưởng thức. Phần hồn của món ăn nằm ở những miếng
              chả tôm béo ngậy, mang hình dáng con đuông dừa. Đây cũng là món độc của quán nhờ hương vị đậm chất Trà Vinh. Ngoài ra, quán cũng có nhiều lựa chọn hấp dẫn như bún gỏi dà,
              bún nước Nam Bộ, bánh tằm bì, bún bì nem chạo, bánh hỏi bì nem chạo…<br />
              Để giải nhiệt mùa hè, nước mủ giòn hạt chia sẽ là thực uống bổ dưỡng đáng thưởng thức.
            </p>

          )}
          <div className="view__more">
            {isMore1 ? (
              <button className='button' onClick={handleMore1}>Xem thêm</button>
            ) : (
              <button className='button' onClick={handleMore1}>Thu gọn</button>
            )}
          </div>



        </div>
        <div className="about__img">
          <img src={images.knife} alt="knight" />
        </div>
        <div className="about__us">
          <h1 className='text-light'>Lịch sử phát triển <span>👆</span></h1>
          {isMore2 ? (
            <p>Khi nhắc tới hồ Xuân Hương nghĩa là nhắc tới thành phố Đà Lạt thơ mộng với dòng nước trong xanh, mặt hồ yên ả nhẹ nhàng gợn sóng, hàng cây rủ lá soi bóng nghiêng mình.
              Khung cảnh nơi đây thanh bình và hài hòa với cảnh sắc thiên nhiên, vậy nên những công trình xung quanh khu vực này đặc biệt được chú ý
            </p>

          ) : (
            <p>Khi nhắc tới hồ Xuân Hương nghĩa là nhắc tới thành phố Đà Lạt thơ mộng với dòng nước trong xanh, mặt hồ yên ả nhẹ nhàng gợn sóng, hàng cây rủ lá soi bóng nghiêng mình.
              Khung cảnh nơi đây thanh bình và hài hòa với cảnh sắc thiên nhiên, vậy nên những công trình xung quanh khu vực này đặc biệt được chú ý<br />
              Giữa nhịp chảy trôi hối hả đó thì điểm tô cho vẻ đẹp hữu tình là quán cafe, nhà hàng lặng lẽ bên hồ. Như điểm nổi bật tăng thêm sự quyến rũ và cũng là nơi để du khách
              dừng chân lại thưởng thức cảnh đẹp phố phường cũng như hiểu hơn về con người nơi đây. <br />
              sống động giữa lòng thành phố nhộn nhịp và điểm tô cho nó là những hàng anh đào khoe sắc mỗi dịp xuân về hay những quán cafe, nhà hàng nằm lặng lẽ bên hồ tạo nên một
              cảnh quan đẹp đầy thơ mộng, ghi dấu ấn trong lòng mỗi người khi đặt chân đến thành phố ngàn hoa này.
              <br />Nhà hàng Thủy Tạ nằm trên hồ Xuân Hương là một công trình đặc biệt góp phần làm cho vẻ đẹp thơ mộng của Đà Lạt thêm hoàn mỹ. Chẳng biết từ khi nào là kiến trúc
              này gắn bó với hồ Xuân Hương cho tới tận bây giờ. Nhà hàng gây dấu ấn sâu đậm đối với mỗi du khách khi đến với địa danh này. <br />
              Thủy Tạ tọa lạc ở con đường Trần Quốc Toản, phường 3 sầm uất, nhộn nhịp với thiết kế sang trọng nên thu hút ánh nhìn của đông thực khách đi qua. Chưa kể danh tiếng từ xưa
              tới nay nên khi đặt chân tới phố hoa là người ta tìm ngay tới nhà hàng Thủy Tạ để thưởng thức đặc sản.
              <br />Nhà hàng Thủy Tạ Đà Lạt đã hình thành từ lâu năm, có lịch sử hình thành dài và nhiều thăng trầm. Các cụ lão nơi đây nói rằng nó gắn liền với sự thăng trầm của hồ Xuân
              Hương như hình với bóng, song song.
            </p>
          )}
          <div className="view__more">
            {isMore2 ? (
              <button className='button' onClick={handleMore2}>Xem thêm</button>
            ) : (
              <button className='button' onClick={handleMore2}>Thu gọn</button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
