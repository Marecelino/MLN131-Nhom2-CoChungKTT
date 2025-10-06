import type { Course, QuizQuestion, Topic, Person,  TimelineEvent } from '../types';



export const religionCourse: Course = {
  id: "tongiao-vn",
  title: "Tự do Tín ngưỡng & An ninh Quốc gia",
  subtitle: "🎓 Khóa học Chuyên đề Đại học",
  description:
    "Khóa học phân tích chính sách tôn giáo Việt Nam, các âm mưu lợi dụng và vai trò của sinh viên trong bối cảnh hiện đại, dựa trên các nghiên cứu và giáo trình CNXHKH.",
  lessons: [
    {
      id: 1,
      chapter: 1,
      title: "Bức tranh Toàn cảnh Tôn giáo Việt Nam",
      duration: "30 phút",
      description:
        "Quan điểm của Đảng, Nhà nước và bối cảnh đa dạng, hòa bình của tôn giáo tại Việt Nam.",
      content: `
      <h3 class="lesson-modal__subtitle">Nền tảng & Thực trạng</h3>
      <p>Việt Nam là một quốc gia có nhiều tôn giáo.
Nước ta hiện nay có 43 tổ chức thuộc 16 tôn giáo đã
được công nhận và cấp đăng ký hoạt động với khoảng
57.000 chức sắc, 157.000 chức việc và hơn 29.000 cơ sở
thờ tự. Các tôn giáo nội sinh (Cao Đài, Hòa Hảo) và tôn giáo du nhập (Phật giáo, Công giáo, Tin Lành, Hồi giáo…) tồn tại bên nhau, mang nhiều dấu ấn văn hóa địa phương và chung sống hòa bình trên diện rộng.</p>

      <h3 class="lesson-modal__subtitle">Đặc điểm nổi bật</h3>
      <ul class="lesson-modal__list">
        <li>Đa dạng về nguồn gốc, truyền thống và hình thức tổ chức.</li>
        <li>Tín đồ các tôn giáo Việt Nam phần lớn là nhân
dân lao động, có lòng yêu nước, tinh thần dân tộc.
</li>

        <li>Chức sắc tôn giáo có vai trò quan trọng về đời sống tâm linh và có ảnh hưởng xã hội.</li>
      <li>Chức sắc tôn giáo là tín đồ có chức vụ, phẩm sắc trong
tôn giáo, họ tự nguyện thực hiện thường xuyên nếp sống
riêng theo giáo lý, giáo luật của tôn giáo mà mình tin theo.
Về mặt tôn giáo, chức năng của họ là truyền bá, thực hành
giáo lý, giáo luật, lễ nghi, quản lý tổ chức của tôn giáo,
duy trì, củng cố, phát triển tôn giáo, chuyên chăm lo đến
đời sống tâm linh của tín đồ</li>
<li>các tôn giáo ở Việt Nam đều có quan hệ với
các tổ chức, cá nhân tôn giáo ở nước ngoài</li>
      </ul>

      <blockquote>
        "Không có tôn giáo nào du nhập vào Việt Nam mà không mang dấu ấn bản sắc văn hóa Việt Nam."
        <cite>—  Theo Báo Nhân dân điện tử: "Tôn trọng, bảo đảm quyền tự
do tín ngưỡng của nhân dân", ngày 22/12/2020</cite>
      </blockquote>
<!-- Nhúng video YouTube -->
<div class="lesson-modal__video" style="position:relative;padding-top:56.25%;height:0;margin:1rem 0;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/gzkVgU7J42k "
    title="Video minh họa phân tích tình huống (điểm bắt đầu 7:23)"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

      <!-- Sources:  -->
    `
    },
    {
      id: 2,
      chapter: 2,
      title: "Âm mưu & Thủ đoạn Lợi dụng Tôn giáo",
      duration: "60 phút",
      description:
        "Phân tích chiến lược 'Diễn biến hòa bình' và 4 thủ đoạn chính mà các thế lực thù địch sử dụng.",
      content: `
      <h3 class="lesson-modal__subtitle">Chiến lược "Diễn biến hòa bình" và tôn giáo</h3>
      <p>Đây là một chiến lược phi quân sự, sử dụng các thủ đoạn tinh vi nhằm tác động chuyển hóa từ bên trong trên mọi lĩnh vực, với mục tiêu cuối cùng là xóa bỏ vai trò lãnh đạo của Đảng Cộng sản và lật đổ chế độ xã hội chủ nghĩa.</p>
      <p>Các thế lực thù địch coi vấn đề dân tộc và tôn giáo được xem là những "mũi nhọn" công kích do tính chất nhạy cảm, phức tạp và khả năng thu hút sự chú ý của dư luận quốc tế</p>

      <h3 class="lesson-modal__subtitle">Bốn thủ đoạn chính</h3>
      <ol class="lesson-modal__list--ordered">
      <li><strong>Lợi dụng quyền tự do tín ngưỡng</strong> thường núp dưới chiêu bài "đấu tranh cho dân chủ, nhân quyền, tự do tôn giáo" để che đậy ý đồ thực sự là chống phá chính quyền</li>
        <li><strong>Xuyên tạc chính sách:</strong> Phát tán thông tin sai lệch, vu cáo "đàn áp tôn giáo", bóp méo nội dung Luật Tín ngưỡng, tôn giáo.</li>
        <li><strong>Kích động tranh chấp đất đai:</strong> Lợi dụng khiếu kiện liên quan cơ sở thờ tự để tạo điểm nóng, xuyên tạc thực tế thành "cướp đất tôn giáo".</li>
        <li><strong>Thành lập tổ chức bất hợp pháp:</strong> Lập hội, nhóm núp bóng tôn giáo nhưng thực chất mang mục tiêu chính trị, tập hợp lực lượng chống đối.</li>
        <li><strong>Quốc tế hóa vấn đề:</strong> trị cố tình tạo ra hoặc thổi phồng các vụ việc phức tạp trong nước, sau đó xuyên tạc, bóp méo sự thật và vu cáo Việt Nam "đàn áp tôn giáo" tại các diễn đàn, hội nghị quốc tế. Mục đích của hành động này là hạ thấp uy tín của Việt Nam, tạo cớ để các chính phủ và tổ chức nước ngoài can thiệp vào công việc nội bộ</li>
      </ol>

      <div class="note-card note-card--danger"><strong>Lưu ý thực tiễn:</strong> Những chiến thuật này thường vận hành theo chuỗi: từ tạo/khai thác mâu thuẫn địa phương → khuếch đại thông tin → tổ chức tập hợp → vận động quốc tế.</div>
<div class="lesson-modal__video" style="position:relative;padding-top:56.25%;height:0;margin:1rem 0;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/E9PVmZ4O_CQ "
    title="Video minh họa phân tích tình huống (điểm bắt đầu 7:23)"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
      <!-- Sources:  -->
    `
    },
    {
      id: 3,
      chapter: 3,
      title: "Các Vụ việc Điển hình",
      duration: "50 phút",
      description:
        "Thực tiễn tại Việt Nam đã ghi nhận nhiều vụ việc phức tạp, cho thấy sự đa dạng trong các hình thức lợi dụng tôn giáo, từ các tổ chức phản động có mục tiêu chính trị rõ ràng đến các hiện tượng 'tà đạo' gây bất ổn xã hội nghiêm trọng.",
      content: `
      <h3 class="lesson-modal__subtitle">Tình huống 1: Tây Nguyên và Tây Bắc: Từ FULRO đến Khủng bố</h3>
      <p>Khu vực Tây Nguyên và Tây Bắc, với đặc điểm đa dạng về dân tộc và tôn giáo, từ lâu đã là địa bàn trọng điểm mà các thế lực thù địch tập trung chống phá. Lợi dụng những khó khăn trong đời sống và sự thiếu hiểu biết của một bộ phận đồng bào dân tộc thiểu số, chúng đã tìm cách nhen nhóm tư tưởng ly khai, tự trị.</p>
<p><strong>●	Vụ tấn công khủng bố tại Đắk Lắk (11/6/2023): </strong> Đây là đỉnh điểm của hoạt động lợi dụng vấn đề dân tộc, tôn giáo, thể hiện sự leo thang về mức độ bạo lực và tính chất nguy hiểm. Một nhóm gần 100 đối tượng đã sử dụng vũ khí tấn công vào hai trụ sở Ủy ban nhân dân xã Ea Tiêu và Ea Ktur (huyện Cư Kuin), sát hại 9 người (bao gồm bí thư xã, chủ tịch xã, công an) và làm nhiều người khác bị thương.Hành vi này đã được các cơ quan chức năng xác định là "khủng bố nhằm chống chính quyền nhân dân", với tính chất man rợ, mất nhân tính. Cuộc điều tra đã chỉ ra vai trò chỉ đạo, hậu thuẫn trực tiếp từ các tổ chức phản động lưu vong có trụ sở tại Mỹ như "Nhóm Hỗ trợ người Thượng (MSGI)" và "Người Thượng vì công lý (MSFJ)", với mưu đồ thành lập "Nhà nước Đêga". Phiên tòa xét xử sau đó đã truy tố 100 bị cáo với các tội danh đặc biệt nghiêm trọng.</p>
<div class="lesson-modal__video" style="position:relative;padding-top:56.25%;height:0;margin:1rem 0;">
  <iframe
    src="https://www.youtube.com/embed/t0gZwgSfDb8
"
    title="Video minh họa: Mô tả ngắn"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p><strong>●	"Hội thánh Tin lành Đấng Christ": </strong>Tổ chức này được xác định là một "tổ chức phản động đội lốt tôn giáo" để tiến hành các hoạt động xâm phạm an ninh quốc gia.19 Về bản chất, đây là sự biến tướng của tổ chức "Tin lành Đêga" trước đây, lợi dụng tín ngưỡng Tin lành để tuyên truyền tư tưởng ly khai, tự trị trong đồng bào dân tộc thiểu số ở Tây Nguyên.</p>
  <img src="https://congan.daklak.gov.vn/documents/10181/1035057/1.png/0095e016-f603-494e-a0e1-63916a2d8a94?t=1711694334235 "  class="lesson-modal__image" />
<p><strong>●	Tổ chức bất hợp pháp "Dương Văn Mình": </strong>đã tồn tại 33 năm, núp bóng tín ngưỡng, tôn giáo nhằm tập hợp lực lượng, tuyên truyền tư tưởng ly khai, lập "Nhà nước riêng của người Mông" do Dương Văn Mình làm "vua", gây ra nhiều vụ việc phức tạp về ANTT, tiềm ẩn nguy cơ mất ổn định an ninh quốc gia.</p>
  <img src="https://baotuyenquang.com.vn/media/images/2023/12/img_20231227155234.jpg "  class="lesson-modal__image" />
<h3 class="lesson-modal__subtitle">Tình huống 2: Hiện tượng "Tà đạo" và các Tổ chức Tôn giáo Trái phép</h3>
<p><strong>"Hội thánh của Đức Chúa Trời " </strong></p>
<p><strong>●	Nguồn gốc và Bản chất :</strong> Tổ chức này có tên đầy đủ là "World mission society Church of God" (WMSCOG), do Ahn Sahng Hong thành lập tại Hàn Quốc năm 1964 và du nhập vào Việt Nam từ khoảng năm 2001. Mặc dù lấy giáo lý từ Kinh Thánh của đạo Tin lành, nhưng tổ chức này đã xuyên tạc, bóp méo và tự đưa ra những tín điều lệch lạc như tin vào "Đức Chúa Trời Mẹ". Chính vì vậy, HTĐCTM bị hầu hết các tổ chức Tin lành chính thống coi là "tà đạo" và không được công nhận.</p>
     <p><strong>●	Phương thức hoạt động: </strong>hoạt động một cách tinh vi, lén lút và mang đậm màu sắc của mô hình kinh doanh đa cấp. Chúng thường nhắm đến các đối tượng dễ bị tổn thương như sinh viên, phụ nữ nội trợ, những người đang gặp khó khăn, bất trắc trong cuộc sống. Để tiếp cận "con mồi", chúng núp bóng dưới nhiều hình thức như các trung tâm từ thiện, các buổi hội thảo kỹ năng, bán hàng online, sau đó dần dần thao túng tâm lý bằng cách gieo rắc nỗi sợ hãi về "ngày tận thế".</p>
<p><strong>●	Hệ lụy xã hội: </strong> gây ra những hậu quả nặng nề. Nhiều gia đình tan vỡ khi có người thân tham gia, mù quáng tin theo những lời rao giảng cực đoan như đập bỏ bàn thờ tổ tiên, coi cha mẹ, người thân là "ma quỷ", bỏ bê học hành, công việc, dâng hiến tài sản cho tổ chức. Các hành vi này không chỉ vi phạm nghiêm trọng Luật Tín ngưỡng, tôn giáo mà còn đi ngược lại hoàn toàn với thuần phong mỹ tục và đạo lý "uống nước nhớ nguồn" của dân tộc Việt Nam. Trước tình hình đó, Bộ Công an và công an các địa phương đã liên tục phát đi cảnh báo, đồng thời phát hiện và xử lý hàng chục vụ việc, giải tán nhiều tụ điểm sinh hoạt trái phép trên cả nước.</p>
     <div class="note-card note-card--danger"><strong>Cảnh báo chiến lược:</strong> Các âm mưu này thường nhắm vào vùng nghèo, vùng sâu, nơi tồn tại các mâu thuẫn kinh tế — do đó giải pháp phải kết hợp an ninh với phát triển.</div>
<div class="lesson-modal__video" style="position:relative;padding-top:56.25%;height:0;margin:1rem 0;">
  <iframe
    src="https://www.youtube.com/embed/L04ovtBOVfs
"
    title="Video minh họa: Mô tả ngắn"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
      <!-- Sources:  -->
    `
    },
    {
      id: 4,
      chapter: 4,
      title: "Chính sách Nhất quán & Hệ thống Pháp luật",
      duration: "55 phút",
      description:
        "Phân tích Hiến pháp, Luật Tín ngưỡng Tôn giáo và công cụ pháp lý để bảo vệ an ninh quốc gia.",
      content: `
      <h3 class="lesson-modal__subtitle">Khung pháp lý cơ bản</h3>
      <ul class="lesson-modal__list">
        <li><strong>Hiến pháp 2013 — Điều 24:</strong>
            <ol class="lesson-modal__list--ordered">
            <li>Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật.</li>
           <li>  Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo.</li>
            <li> Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật</li>
        </li></ol>
        <li><strong>Luật số 02/2016/QH14 của Quốc hội: LUẬT TÍN NGƯỠNG, TÔN GIÁO : </strong>được Quốc hội Việt Nam thông qua vào ngày 18 tháng 11 năm 2016 và có hiệu lực từ 01 tháng 01 năm 2018. Luật này quy định về quyền tự do tín ngưỡng, tôn giáo, hoạt động tín ngưỡng và tôn giáo, tổ chức tôn giáo, cũng như quyền và nghĩa vụ của các cơ quan, tổ chức, cá nhân liên quan đến hoạt động này. Luật nhấn mạnh việc Nhà nước tôn trọng và bảo vệ quyền tự do tín ngưỡng, tôn giáo của mọi người, đồng thời bảo vệ các cơ sở tín ngưỡng và tài sản hợp pháp. </li>
        <li><strong>Bộ luật Hình sự — Điều 116 (sửa đổi):</strong> Tội phá hoại chính sách đoàn kết được quy định tại Điều 116 Bộ luật Hình sự 2015 (sửa đổi, bổ sung 2025), xử lý hành vi xâm phạm khối đại đoàn kết dân tộc và đoàn kết tôn giáo. Đây là tội xâm phạm an ninh quốc gia, ảnh hưởng trực tiếp đến ổn định chính trị và trật tự xã hội.</li>
      </ul>

      <div class="note-card note-card--info"><strong>Ghi chú:</strong> Hệ thống pháp luật vận hành theo nguyên tắc kép: bảo vệ hoạt động tôn giáo hợp pháp đồng thời có công cụ xử lý khi hoạt động đó bị lạm dụng cho mục tiêu chống phá.</div>
<div class="lesson-modal__video" style="position:relative;padding-top:56.25%;height:0;margin:1rem 0;">
  <iframe
    src="https://www.youtube.com/embed/hVJ0967bh7I
"
    title="Video minh họa: Mô tả ngắn"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
      <!-- Sources:  -->
    `
    },
    {
      id: 5,
      chapter: 5,
      title: "Giải pháp từ Gốc rễ & Công tác Vận động",
      duration: "45 phút",
      description:
        "Vai trò của phát triển kinh tế - xã hội và công tác vận động quần chúng.",
      content: `
      <h3 class="lesson-modal__subtitle">Giải pháp căn cơ</h3>
      <p>Giải quyết nguyên nhân gốc rễ (đói nghèo, lạc hậu, thiếu tiếp cận thông tin) là nền tảng để vô hiệu hóa thủ đoạn lợi dụng tôn giáo. Chương trình phát triển kinh tế - xã hội (ví dụ Chương trình 135) tập trung đầu tư hạ tầng, sản xuất và đào tạo tại vùng đặc biệt khó khăn, góp phần giảm nghèo và làm mất "mảnh đất màu mỡ" cho tuyên truyền phá hoại.</p>

      <h3 class="lesson-modal__subtitle">Công tác vận động quần chúng</h3>
      <div class="note-card note-card--info"><strong>Nguyên tắc:</strong> nhằm
động viên đồng bào nêu cao tinh thần yêu nước, ý thức bảo
vệ độc lập và thống nhất đất nước thông qua việc thực
hiện tốt các chính sách kinh tế - xã hội, an ninh, quốc
phòng, bảo đảm lợi ích vật chất và tinh thần của nhân dân
nói chung, trong đó có đồng bào tôn giáo.
</div>
<p>Đẩy mạnh phát triển kinh tế, xã hội, văn hóa vùng
đồng bào theo các tôn giáo, nhằm nâng cao trình độ, đời
sống mọi mặt cho đồng bào, làm cho quần chúng nhân dân
nhận thức đầy đủ, đúng đắn đường lối, chính sách của
Đảng, pháp luật của Nhà nước, tích cực, nghiêm chỉnh
thực hiện đường lối, chính sách, pháp luật, trong đó có
chính sách, pháp luật về tín ngưỡng, tôn giáo.</p>
<div class="lesson-modal__video" style="position:relative;padding-top:56.25%;height:0;margin:1rem 0;">
  <iframe
    src="https://www.youtube.com/embed/HKI0eipc9tI
"
    title="Video minh họa: Mô tả ngắn"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
      <!-- Sources:  -->
    `
    },
    {
      id: 6,
      chapter: 6,
      title: "Vai trò và Trách nhiệm của Sinh viên",
      duration: "40 phút",
      description:
        "Sinh viên là lực lượng xung kích trong việc bảo vệ nền tảng tư tưởng trên không gian mạng.",
      content: `
      <h3 class="lesson-modal__subtitle">Nâng cao "Miễn dịch số"</h3>
      <div class="note-card note-card--danger">Sinh viên là một trong những mục tiêu chính của chiến lược "diễn biến hòa bình" vì đây là lực lượng đông đảo, nhạy bén với công nghệ, và sẽ nắm giữ các vị trí quan trọng trong xã hội tương lai. Các thế lực thù địch tiếp cận sinh viên thông qua nhiều kênh đa dạng như mạng xã hội, các chương trình học bổng, các sản phẩm văn hóa, hội thảo quốc tế... nhằm gieo rắc tư tưởng hoài nghi, lôi kéo, kích động họ có những phát ngôn, hành động chống đối.</div>
      <div class="note-card note-card--info">
Do đó, nhiệm vụ hàng đầu của sinh viên là phải trang bị cho mình "năng lực miễn dịch số", tức là khả năng nhận diện và sàng lọc thông tin. Sinh viên cần học cách phát hiện các dấu hiệu của thông tin xấu độc, tuyên truyền phá hoại: ngôn ngữ kích động, cực đoan; các nguồn tin không rõ ràng, thiếu kiểm chứng; việc sử dụng hình ảnh, video bị cắt ghép, sai bối cảnh; và các trang mạng, tài khoản cá nhân có lịch sử đăng tải thông tin tiêu cực, một chiều, công kích Nhà nước.Việc tiếp xúc với quá nhiều thông tin sai lệch có thể dẫn đến tâm lý "bình thường hóa" tin giả, vì vậy, việc xây dựng một bộ lọc tư duy phê phán là vô cùng cần thiết
</div>

      <h3 class="lesson-modal__subtitle">Hành động và tổ chức</h3>
      <ul class="lesson-modal__list">
        <li>Tham gia Câu lạc bộ Lý luận trẻ, các cuộc thi chính luận và hoạt động tình nguyện ở vùng sâu — vừa học vừa thực hành đấu tranh tư tưởng.</li>
        <li>Lấy "xây" để "chống": lan tỏa thông tin tích cực về thành tựu, chính sách, và câu chuyện thực tế tại cơ sở.</li>
        <li>Báo cáo nội dung xấu độc, xuyên tạc cho cơ quan chức năng hoặc quản trị mạng xã hội khi phát hiện.</li>
      </ul>

      <div class="note-card"><strong>Hành động nhỏ — tác động lớn:</strong> Một sinh viên biết kiểm chứng và phản bác có thể ngăn chặn nhiều bước trong chuỗi khuếch đại thông tin sai lệch.</div>

      <!-- Sources:  -->
    `
    },
    {
      id: 7,
      chapter: 7,
      title: "Chính sách của Đảng và Nhà nước về Tín ngưỡng — Tôn giáo",
      duration: "50 phút",
      description:
        "Nền tảng hiến pháp, luật pháp và quan điểm nhất quán của Đảng — cách thức thực hiện chính sách và giới hạn pháp lý.",
      content: `
    <h3 class="lesson-modal__subtitle">1. Nền tảng hiến định và quan điểm cơ bản</h3>
    <p>Hiến pháp năm 2013 khẳng định: <em>"Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật. Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo."</em></p>
    <p>Đảng ta nhận định: <strong>tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân, đang và sẽ tồn tại cùng dân tộc trong quá trình xây dựng chủ nghĩa xã hội</strong>, do đó chính sách cần vừa bảo đảm quyền tự do, vừa phòng chống lợi dụng tôn giáo để phá hoại khối đại đoàn kết và an ninh quốc gia. <cite>— giáo trình; Luận giải Hiến pháp & chính sách.</cite></p>

    <img src="https://cand.com.vn/Files/Image/chienthang/2016/08/19/5b72f8f9-9844-4318-ab67-dd846f8b78af....jpg" alt="Hiến pháp và luật tôn giáo" class="lesson-modal__image" />

    <h3 class="lesson-modal__subtitle">2. Khuôn khổ pháp luật chính</h3>
    <ul class="lesson-modal__list">
      <li><strong>Hiến pháp 2013 (Điều 24):</strong> bảo đảm quyền tự do tín ngưỡng, tôn giáo và nguyên tắc bình đẳng trước pháp luật.</li>
      <li><strong>Luật Tín ngưỡng, Tôn giáo 2016 (có hiệu lực 2018):</strong> định nghĩa rõ thuật ngữ, quy định quyền, thủ tục công nhận tổ chức tôn giáo, đồng thời nêu những hành vi bị nghiêm cấm.</li>
      <li><strong>Bộ luật Hình sự (Điều 116 và các khoản liên quan):</strong> hình sự hóa hành vi lợi dụng tôn giáo nhằm chia rẽ dân tộc, chống chính quyền hoặc xâm phạm an ninh quốc gia (chỉ xử lý khi có mục đích chính trị rõ ràng).</li>
    </ul>

    <p class="note-card note-card--info"><strong>Điểm nhấn:</strong> Hệ thống pháp luật được thiết kế “kép”: tạo không gian bảo hộ cho sinh hoạt tôn giáo hợp pháp đồng thời xác định giới hạn để xử lý hành vi lợi dụng tôn giáo nhằm mục tiêu chống phá.</p>

    <h3 class="lesson-modal__subtitle">3. Quan điểm và phương pháp thực thi chính sách</h3>
    <ol class="lesson-modal__list--ordered">
      <li><strong>Tôn trọng và bảo đảm quyền tự do tín ngưỡng:</strong> mọi công dân được tự do theo hoặc không theo tôn giáo; tổ chức tôn giáo được Nhà nước thừa nhận hoạt động theo pháp luật.</li>
      <li><strong>Đại đoàn kết dân tộc:</strong> chính sách hướng tới đoàn kết giữa đồng bào có đạo và không có đạo; nghiêm cấm phân biệt đối xử vì lý do tín ngưỡng.</li>
      <li><strong>Công tác vận động quần chúng:</strong> <em>"Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng"</em> — mục tiêu là xây dựng đồng thuận xã hội, khuyến khích tinh thần 'tốt đời, đẹp đạo' và tham gia phát triển đất nước.</li>
      <li><strong>Giải pháp phòng ngừa:</strong> phát triển kinh tế — xã hội vùng có đông đồng bào tôn giáo, nâng cao đời sống, giảm "mảnh đất màu mỡ" cho luận điệu chia rẽ.</li>
    </ol>

    <img src="https://media.vov.vn/sites/default/files/styles/large/public/2022-11/1_168.jpg" alt="Khuôn khổ pháp lý - Luật 2016 và Điều 116" class="lesson-modal__image" />

    <h3 class="lesson-modal__subtitle">4. Vai trò của các cơ quan và trách nhiệm thực thi</h3>
    <p>Công tác tôn giáo là trách nhiệm của cả hệ thống chính trị: tổ chức đảng, chính quyền, Mặt trận Tổ quốc, các đoàn thể — phối hợp quản lý, vận động, giải quyết khiếu nại, bảo đảm quyền và xử lý hành vi vi phạm.</p>

    <h3 class="lesson-modal__subtitle">5. Trích dẫn minh họa từ giáo trình</h3>
    <blockquote>
      "Tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân, đang và sẽ tồn tại cùng dân tộc trong quá trình xây dựng chủ nghĩa xã hội ở nước ta." 
      <cite> — Giáo trình CNXHKH .</cite>
    </blockquote>

    <blockquote>
      "Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng." 
      <cite>— Nghị quyết 25-NQ/TW  </cite>
    </blockquote>

    <h3 class="lesson-modal__subtitle">6. Nguồn & Tài liệu tham khảo (để đối chiếu)</h3>
    <ul class="lesson-modal__list">
      <li>Giáo trình chương VI: <em>II — Tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội</em>.</li>
      <li>Báo cáo/ phân tích: <em>Tôn giáo, Chính sách và Âm mưu Lợi dụng</em> (phân tích Luật Tín ngưỡng, tôn giáo 2016; Điều 116 BLHS; công tác vận động quần chúng).</li>
      <li>Văn bản luật tham khảo: Hiến pháp 2013 (Điều 24); Luật Tín ngưỡng, Tôn giáo 2016; Bộ luật Hình sự (Điều 116). </li>
    </ul>

    <p class="lesson-modal__note"><strong>Ghi chú dành cho giảng viên:</strong> khi dùng nội dung này, có thể trích trực tiếp Điều 24 Hiến pháp và các đoạn cụ thể của Luật 2016/ Điều 116 để học viên đọc — đồng thời khuyến nghị phân tích trường hợp thực tế (ví dụ: quy trình công nhận tổ chức tôn giáo; một vụ lợi dụng tôn giáo đã bị pháp luật xử lý) để minh họa.</p>

    <div class="lesson-modal__video" style="position:relative;padding-top:56.25%;height:0;margin:1rem 0;">
  <iframe
    src="https://www.youtube.com/embed/y6hlQ7rlvCE
"
    title="Video minh họa: Mô tả ngắn"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
  `
    }
  ]

};


export const courseQuizzes: QuizQuestion[] = [
  {
  question: "Cần làm gì để tránh bị lôi kéo, dắt mũi bởi các âm mưu và thủ đoạn lợi dụng tôn giáo?",
  options: [
    { text: "Nâng cao trình độ học vấn và nhận thức cho người dân, đặc biệt ở vùng sâu, vùng xa, vùng đồng bào dân tộc thiểu số.", isCorrect: false },
    { text: "Tuyên truyền, phổ biến sâu rộng cho người dân về chính sách tôn giáo của Nhà nước và các âm mưu, thủ đoạn của kẻ xấu.", isCorrect: false },
    { text: "Rèn luyện tư duy phản biện và kỹ năng kiểm chứng thông tin.", isCorrect: false },
    { text: "Tích cực tham gia vào đời sống cộng đồng và tin tưởng vào hệ thống chính trị.", isCorrect: false },
    { text: "Ý kiến khác.", isCorrect: true }
  ],
  explanation: "Những câu trả lời trên đều đúng nhưng chưa đủ .“Giữa nhịp sống vội vã, con người thường lãng quên việc chăm sóc điều gì – thứ quyết định sự bình yên hay bất an trong chính họ?”"

},
  {
    question: "Theo quan điểm của Đảng, nội dung cốt lõi của công tác tôn giáo là gì?",
    options: [
      { text: "Quản lý hành chính chặt chẽ", isCorrect: false },
      { text: "Công tác vận động quần chúng", isCorrect: true },
      { text: "Hợp tác quốc tế về tôn giáo", isCorrect: false },
      { text: "Xây dựng mới các cơ sở thờ tự", isCorrect: false },
    ],
    explanation: "Nghị quyết số 25-NQ/TW xác định: 'Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng'."
  }
  
];


export const religionTimeline: TimelineEvent[] = [
  {
    period: 'Văn hóa Đông Sơn (khoảng 1000 TCN – thế kỷ 1)',
    title: 'Tín ngưỡng bản địa — thờ Thần Mặt Trời',
    description:
      'Bằng chứng khảo cổ Đông Sơn cho thấy thờ cúng Thần Mặt Trời và các thực hành vật linh gắn với nông nghiệp lúa nước, đặt nền tảng cho đời sống tâm linh người Việt.',
    side: 'right',
    imageUrl:
      'https://baotanglichsu.vn/DataFiles/2024/09/News/Tieng%20Viet/16.9.2024/Tao%20sang%20thoi%20Dong%20Son%20ky%201/2.png',
  },
  {
    period: 'Trước thế kỷ 10',
    title: 'Hình thành tín ngưỡng thờ Mẫu',
    description:
      'Tín ngưỡng thờ Mẫu (Mẫu Trời, Mẫu Đất, Mẫu Nước) phát triển mạnh, đề cao vai trò nữ thần, là trục văn hóa dân gian bền vững của xã hội nông nghiệp Việt Nam.',
    side: 'left',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.N0_653BI3sbhQoFe-iLnoQHaKa?cb=12&pid=ImgDet&w=192&h=269&c=7&dpr=1.7&o=7&rm=3',
  },
  {
    period: 'thế kỷ thứ II sau Công nguyên',
    title: 'Phật giáo du nhập — Trung tâm Luy Lâu',
    description:
      'Phật giáo truyền vào sớm qua đường biển từ Ấn Độ; Luy Lâu (Thuận Thành, Bắc Ninh) là một trung tâm Phật giáo quan trọng của Giao Chỉ.',
    side: 'right',
    imageUrl: 'https://i.ex-cdn.com/phatgiao.org.vn/files/content/2021/05/26/ai-la-nguoi-dep-nhat-1-1652.jpg',
  },
  {
    period: 'Thời kỳ Bắc thuộc (từ thế kỷ 1 trở đi)',
    title: 'Nho giáo và Đạo giáo du nhập',
    description:
      'Nho giáo được truyền bá chủ yếu trong bối cảnh Bắc thuộc và dần trở thành công cụ tổ chức hành chính; Đạo giáo nhập vào hệ thống tín ngưỡng dân gian.',
    side: 'left',
    imageUrl: 'https://th.bing.com/th/id/R.c2f3a56eb45e0d10575134bdfabd748b?rik=Pemo6HwPzRdCiQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-d3Stdp00sM0%2fVWXbDVuSBAI%2fAAAAAAAAF5M%2ftOa-HpelIVQ%2fs1600%2fheader.png&ehk=nPW1OV7%2bizLi%2bPvXnC6bRXU6%2bi8rYyq5KvsFjL3MtSI%3d&risl=&pid=ImgRaw&r=0',
  },
  
  {
    period: 'Thế kỷ 10–15 (Nhà Lý - Trần)',
    title: 'Tam giáo đồng nguyên — Phật giáo là quốc giáo',
    description:
      'Sau độc lập, Nho – Đạo – Phật dung hòa; Phật giáo đạt cực thịnh, trở thành hệ tư tưởng chủ đạo trong đời sống triều đình và dân gian.',
    side: 'right',
    imageUrl:
      'https://media.thaythichtructhaiminh.com/files/f1/2020/12/phat-hoang-tran-nhan-tong-so-to-thien-phai-truc-lam-yen-tu_optimized.jpg',
  },
  {
    period: 'Thế kỷ 15',
    title: 'Tín ngưỡng thờ Mẫu được hệ thống hóa',
    description:
      'Từ thế kỷ 15 hình thành hệ thống Mẫu Tam Phủ/Tứ Phủ, nghi lễ hầu đồng và nhân vật Mẫu như Liễu Hạnh được đưa vào thờ tự có tổ chức.',
    side: 'left',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Tu_vi%E1%BB%87n_V%C4%A9nh_Nghi%C3%AAm%2C_trong_Ph%E1%BA%ADt_%C4%91i%E1%BB%87n_%28Ban_th%E1%BB%9D_Tam_th%C3%A1nh_m%E1%BA%ABu%29_%285%29.jpg/800px-Tu_vi%E1%BB%87n_V%C4%A9nh_Nghi%C3%AAm%2C_trong_Ph%E1%BA%ADt_%C4%91i%E1%BB%87n_%28Ban_th%E1%BB%9D_Tam_th%C3%A1nh_m%E1%BA%ABu%29_%285%29.jpg',
  },
  {
    period: 'Năm 1533',
    title: 'Công giáo bắt đầu truyền bá',
    description:
      'Ghi nhận đầu tiên về truyền giáo Công giáo tại một số làng Bắc Bộ (sự kiện mở đầu cho hiện diện Kitô giáo ở Việt Nam).',
    side: 'right',
    imageUrl: 'https://hocviendaminh.com/storage/image/2024/11/1-1731893197.jpg',
  },
  {
    period: 'Năm 1651',
    title: 'Hệ thống hóa chữ Quốc ngữ (Alexandre de Rhodes)',
    description:
      'Alexandre de Rhodes xuất bản "Từ điển Việt–Bồ–La" (1651) — bước quan trọng trong quá trình Latinh hóa tiếng Việt, tiền đề cho chữ Quốc ngữ.',
    side: 'left',
    imageUrl:
      'https://tse4.mm.bing.net/th/id/OIP.1xW_-l4FVrzNR0FzZmhSBwHaD_?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    period: 'Năm 1659',
    title: 'Thành lập cơ cấu Giáo hội (hai giáo phận đầu tiên)',
    description:
      'Tòa Thánh thiết lập hai giáo phận truyền giáo, đánh dấu tổ chức hoá hoạt động Công giáo tại Việt Nam.',
    side: 'right',
    imageUrl: 'https://tgpsaigon.net/Images/Articles/LargeImages/08092024_164354.jpg',
  },
  {
    period: 'Năm 1911',
    title: 'Tin Lành chính thức du nhập',
    description:
      'Năm 1911 các truyền giáo viên của Hội C&MA đến Đà Nẵng — mốc chính thức cho sự du nhập của Tin Lành vào VN hiện đại.',
    side: 'left',
    imageUrl: 'https://httlvn.org/wp-content/uploads/2022/01/03-Da-nang-1924-1068x698.jpg',
  },
  {
    period: 'Năm 1926',
    title: 'Sự ra đời của Đạo Cao Đài',
    description:
      'Tại Tây Ninh, Cao Đài ra đời với tính dung hợp (Phật – Lão – Nho và các yếu tố phương Tây), nhanh chóng thu hút đông tín đồ ở miền Nam.',
    side: 'right',
    imageUrl:
      'https://nld.mediacdn.vn/291774122806476800/2023/9/28/cung-thoi-tai-bao-an-tu-1-1695865745310469794125.jpg',
  },
  {
    period: 'Năm 1939',
    title: 'Phật giáo Hòa Hảo được thành lập',
    description:
      'Đức Huỳnh Phú Sổ khai sáng Phật giáo Hòa Hảo (1939) — phong trào Phật giáo thực hành tại gia, lan rộng mạnh ở đồng bằng sông Cửu Long.',
    side: 'left',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.wE9nb4RaHi09igvbSZbjUAAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    period: 'Ngày 14/06/1955',
    title: 'Sắc lệnh 234/SL',
    description:
      'Chủ tịch Hồ Chí Minh ký Sắc lệnh 234/SL bảo đảm quyền tự do tín ngưỡng, thờ cúng — nền tảng pháp lý đầu tiên của Nhà nước VNDCCH về tôn giáo.',
    side: 'right',
    imageUrl:
      'https://dms.luutru.gov.vn/files/ecm/source_files/2020/06/12/saclenhtudotinnguong-105733-120620-76.png',
  },
  {
    period: 'Từ 1975 – 1980s',
    title: 'Tái cấu trúc tôn giáo sau thống nhất',
    description:
      'Sau 1975, đời sống tôn giáo trải qua tái tổ chức, điều chỉnh pháp chế và quan hệ với nhà nước; dẫn đến các bước hợp tác/điều chỉnh trong quản lý tôn giáo.',
    side: 'left',
    imageUrl: 'https://i.ytimg.com/vi/HG2HGAxN8Y0/maxresdefault.jpg',
  },
  {
    period: 'Năm 1981',
    title: 'Thống nhất Phật giáo (GHPGVN)',
    description:
      'Đại hội tại chùa Quán Sứ (4–7/11/1981) thống nhất các tổ chức, thành lập Giáo hội Phật giáo Việt Nam — tổ chức Phật giáo toàn quốc được nhà nước công nhận.',
    side: 'right',
    imageUrl: 'https://i.ex-cdn.com/phatgiao.org.vn/files/f1/Contents/anhminh/20171117/Quan-Su-ngoi-chua-ghi-dau-cac-ky-dai-hoi.jpg',
  },
  {
    period: 'Năm 19/06/1988',
    title: 'Tôn phong 117 Thánh Tử đạo Việt Nam',
    description:
      'Giáo hoàng Gioan Phaolô II tôn phong 117 vị tử đạo Việt Nam tại Vatican — sự kiện có ý nghĩa lớn đối với cộng đồng Công giáo.',
    side: 'left',
    imageUrl: 'https://images.hdgmvietnam.com/images/Image/Picture/Video/CacThanhTuDao-VietNam.jpg',
  },
  {
    period: 'Ngày 18/06/2004',
    title: 'Pháp lệnh Tín ngưỡng, Tôn giáo (2004)',
    description:
      'Ủy ban Thường vụ Quốc hội ban hành Pháp lệnh 2004 — khung pháp lý chi tiết cho quản lý hoạt động tôn giáo thời Đổi Mới.',
    side: 'right',
    imageUrl: 'https://cms.btgcp.gov.vn/upload/post/05_03_2024/giai-phap-nang-cao-hieu-qua-thuc-hien-phap-luat-ve-ton-giao-o-nuoc-ta-hien-nay-eed842b0bb46eee492f2395f874f58d1.jpg',
  },
  {
    period: '2008, 2014, 2019,  2025',
    title: 'Việt Nam đăng cai Đại lễ Vesak Liên Hợp Quốc',
    description:
      'Việt Nam đăng cai các kỳ Đại lễ Vesak (2008, 2014, 2019) và được dự kiến lần nữa vào 2025 — dấu hiệu hội nhập Phật giáo quốc tế.',
    side: 'left',
    imageUrl: 'https://angiang.gov.vn/sites/default/files/inline-images/vesaklhq.jpg',
  },
  {
    period: 'Ngày 18/11/2016',
    title: 'Luật Tín ngưỡng, Tôn giáo (2016)',
    description:
      'Quốc hội thông qua Luật Tín ngưỡng, Tôn giáo (có hiệu lực chính thức sau đó) — nâng cấp khung pháp lý, làm rõ khái niệm và quyền/tổ chức tôn giáo.',
    side: 'right',
    imageUrl: 'https://www.nxbctqg.org.vn/img_data/images/images/nhung%20noi%20dung20102017.jpg',
  },
  {
    period: 'Những năm 2020 – Nay',
    title: 'Xu hướng đương đại và thách thức',
    description:
      'Tôn giáo đóng góp nhiều cho công tác xã hội; đồng thời xuất hiện hiện tượng tôn giáo mới, vấn đề quản lý, an ninh tôn giáo và tranh luận quốc tế xung quanh tự do tôn giáo.',
    side: 'left',
    imageUrl: 'https://tapchicongsan.org.vn/image/journal/article?img_id=40098096&t=1588859285874',
  }
];

export const featuredTopics: Topic[] = [
  {
    id: 'religion-analysis',
    title: 'Tôn giáo ở Việt Nam: Đặc điểm, Chính sách & Thách thức',
    description: 'Phân tích chuyên sâu về bức tranh tôn giáo đa dạng, chính sách nhất quán của Đảng và các âm mưu lợi dụng tôn giáo để chống phá nhà nước. Ảnh : Chủ tịch Hồ Chí Minh nói chuyện thân mật với các đại biểu tôn giáo trong Quốc hội nước Việt Nam Dân chủ Cộng hòa năm 1960 (Trung tâm Lưu trữ Quốc gia III, Tài liệu ảnh giai đoạn (1954 - 1985) (LIV), SLT 1474). ',
    imageUrl: 'https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/7/31/bho-voi-ton-giao-595.jpg?width=0&s=jsAdgCK9qu9NMiF_wZvzQQ',
    link: `/course/${religionCourse.id}`, // Link đến khóa học đã có
    status: 'published',
  },
  {
    id: 'party-history',
    title: 'Lịch sử Đảng Cộng sản Việt Nam',
    description: 'Dòng thời gian các sự kiện trọng đại, phân tích vai trò lãnh đạo của Đảng qua các thời kỳ lịch sử và những bài học kinh nghiệm.',
    imageUrl: 'https://cdn.luatminhkhue.vn/lmk/articles/98/492281/lich-su-hinh-thanh-va-phat-trien-cua-dang-cong-san-viet-nam-492281.jpg',
    link: '#',
    status: 'coming_soon',
  },
  {
    id: 'political-economy',
    title: 'Kinh tế Chính trị Mác - Lênin',
    description: 'Các quy luật kinh tế cơ bản, phân tích nền kinh tế thị trường định hướng xã hội chủ nghĩa tại Việt Nam và các xu hướng toàn cầu.',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.iYh02jBbYNh42n5CughUQwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    link: '#',
    status: 'coming_soon',
  },
];

// Dữ liệu trích xuất từ file của bạn: :contentReference[oaicite:0]{index=0}
export const persons: Person[] = [
  {
    id: 'p1',
    name: 'Quốc Sư  Khuông Việt (Ngô Chân Lưu)',
    religion: 'Phật giáo (Vô Ngôn Thông)',
    period: 'Đinh - Tiền Lê (Thế kỷ X)',
    birthDeath: '933–1011',
    bio: 'Khuông Việt thiền sư 匡越禪師 (933-1011) tên thật là Ngô Chân Lưu 吳真流 người hương Cát Lợi, huyện Thường Lạc, lúc bé học đạo Nho, lớn lên đi tu, là thế hệ thứ tư, dòng thiền Quan Bích, học trò sư Vân Phong ở chùa Khai Quốc, thành Đại La. Năm 40 tuổi nổi tiếng tinh thông Thiền học, được vua Đinh Tiên Hoàng (970-979) ban cho hiệu là Khuông Việt đại sư và phong chức Tăng thống, coi trọng như vị quốc sư.Khi vua Lê Đại Hành (980-1105) lên ngôi, ông được tham dự vào những việc quan trọng của triều đình. Năm 986, ông và sư Pháp Thuận được nhà vua cử ra giao thiệp với sứ giả nhà Tống là Lý Giác. Công việc hoàn thành tốt đẹp và khi sứ giả trở về, ông có sáng tác khúc ca Vương lang quy để tặng.Ông mất ngày 15 tháng Hai năm Tân Hợi, niên hiệu Thuận Thiên thứ hai (tức ngày 22-3-1011).Tác phẩm hiện còn bài từ Vương lang quy, 2 câu thơ, và một bài kệ ứng khẩu lúc sắp mất.',
    contributions: [
      'Thiết lập chức Tăng thống, thể chế hóa vai trò Phật giáo trong triều đình',
      'Cố vấn triều chính, tham gia tổ chức bộ máy triều chính',
      'Tham gia ngoại giao, góp phần bảo vệ độc lập trước nhà Tống'
    ],
    imageUrl: 'https://th.bing.com/th/id/R.cd45784c6589175341422e75fa42e338?rik=Gz7A9nKA1nntEA&riu=http%3a%2f%2fthuviengdpt.info%2fwp-content%2fuploads%2f2020%2f07%2fToKhuongViet-NgoChanLuu_02.jpg&ehk=atj0GaeA1koLQcG9wDJKFEcY530kwRaUdP6gdHYR1RU%3d&risl=&pid=ImgRaw&r=0',
    gallery: ['https://ngotoc.vn/uploads/news/2016_03/chua-dai-bi-den-giong-soc-son.jpg','https://t.ex-cdn.com/phatgiao.org.vn/resize/800x740/files/leduyen/2019/01/09/khuong-viet-thien-su-1108.jpg'],
    tags: ['tôn giáo','ngoại giao','chính trị']
  },
  {
    id: 'p2',
    name: 'Vạn Hạnh',
    religion: 'Phật giáo',
    period: 'Tiền Lê - Lý (Thế kỷ X–XI)',
    birthDeath: 'c. 937–1018',
    bio: 'Quốc sư Vạn Hạnh — thiền sư có ảnh hưởng lớn, người dìu dắt Lý Công Uẩn, tham gia chuyển giao quyền lực và thuyết phục dời đô về Thăng Long.',
    contributions: [
      'có công đức nuôi dưỡng, dạy dỗ Lý Công Uẩn trở thành tướng sĩ tài ba, văn võ song toàn, hữu dụng cho đất nước Đại Việt. Với cương vị cố vấn Quân sư, Quốc sư của các Triều Đinh, Tiền Lê và đầu Nhà Lý',
      'giúp Vua Lý Thái Tổ dời đô từ Hoa Lư về thành Đại La – Thăng Long – Hà Nội ngày nay, tạo cho đất nước Đại Việt có một trung tâm văn hóa, chính trị xã hội ổn định không ngừng phát triển, vươn ra tầm cao mới, xứng đáng là Thủ đô ngàn năm văn hiến của Đại Việt cũng như Việt Nam ngày nay.',
      'Định hướng chính trị và tư tưởng cho vương triều mới'
    ],
    imageUrl: 'https://i.ex-cdn.com/phatgiao.org.vn/files/content/2020/08/19/rm6a4947-copy-copy-0716.jpg',
    gallery: ['https://i.ex-cdn.com/phatgiao.org.vn/files/content/2020/08/19/1604-quoc-su-van-hanh-cong-duc-doi-voi-dao-phap-va-dan-toc-0715.jpg','https://image.giacngo.vn/w645/UserImages/2018/07/21/15/chua%20tieu%20son.jpg'],
    tags: ['chính trị','đổi đô','tư tưởng']
  },
  {
    id: 'p3',
    name: 'Trần Nhân Tông (Trần Khâm)',
    religion: 'Phật giáo (Sáng lập Thiền phái Trúc Lâm)',
    period: 'Nhà Trần (Thế kỷ XIII–XIV)',
    birthDeath: '1258–1308',
    bio: 'Đức vua Trần Nhân Tông tên húy là Khâm, sinh ngày 11/11 âm lịch năm Mậu Ngọ (tức 07/12/1258), là con trưởng của vua Trần Thánh Tông và Nguyên Thánh Thiên Cảm Hoàng hậu Trần Thị Thiều. Sinh thời, Ngài có tướng mạo rất phi phàm. Theo Đại Việt Sử ký toàn thư, khi sinh ra, thân Ngài có màu sắc hoàng kim, nước da vàng sáng rất đẹp, nên gọi Ngài là Phật kim. Ngài rất thông minh hiếu học, đọc hết sách vở, suốt thông nội điển (kinh) và ngoại điển (sách đời).Vào năm 1274, khi 16 tuổi, Ngài được phong làm Hoàng Thái tử. Đã hai lần Ngài từ chối ngôi vị nhưng vua cha không đồng ý. Sau đó, vua cha cưới trưởng nữ của Nguyên Từ Quốc Mẫu cho Ngài (tức là Khâm Từ Hoàng hậu sau này). Hai vợ chồng sống trong cảnh vui hòa, hạnh phúc nhưng tâm Ngài vẫn luôn ưa thích sự tu hành.Một hôm, vào nửa đêm, Ngài trèo thành trốn đi với ý định vào núi Yên Tử tu hành. Đến chùa Tháp núi Đông Cứu, vì người mệt nhọc quá, Ngài bèn vào nằm nghỉ trong tháp. Vị Sư trụ trì ở đây thấy tướng mạo Ngài phi phàm liền làm cơm thiết đãi. Vua cha hay tin, sai các quan đi tìm, bất đắc dĩ Ngài phải quay về cung thành.Khi trưởng thành, Ngài được vua cha đặc biệt quan tâm, nhằm chuẩn bị cho việc kế tục ngai vàng, chấn hưng Đại Việt. Năm 21 tuổi (năm 1279), Ngài lên ngôi Hoàng đế, hiệu là Trần Nhân Tông, tự xưng là Hiếu Hoàng. Tuy ở địa vị cao sang, Ngài vẫn giữ mình thanh tịnh và thường đến chùa Tư Phước tu tập. Một hôm nghỉ trưa, Ngài mơ thấy trong rốn mọc lên một hoa sen vàng lớn bằng bánh xe, trên hoa sen có Đức Phật vàng. Có người đứng bên cạnh Ngài nói: “Biết ông Phật này chăng? Là Đức Phật Biến Chiếu”. Tỉnh giấc, Ngài đem việc đó tâu lên vua cha. Vua Thánh Tông khen là việc kỳ lạ và đặc biệt.Sau giấc chiêm bao, Ngài bắt đầu ăn chay nên thân thể gầy ốm. Vua Thánh Tông biết được nên khóc than: “Nay ta đã già, chỉ trông cậy một mình con, con lại làm như thế, làm sao gánh vác được sự nghiệp của tổ tiên?” Mặc dù rơi nước mắt nhưng vua Trần Nhân Tông vẫn quyết ăn chay.Những khi giặc Nguyên sang xâm chiếm Đại Việt, Ngài gác việc tu học Phật Pháp để lo giữ gìn xã tắc. Với tài mưu lược sáng suốt, khả năng đoàn kết toàn dân, Ngài đã hai lần cùng vua cha và các tướng lĩnh lãnh đạo quân dân đánh tan quân xâm lược Nguyên - Mông (1285, 1287 - 1288), bảo vệ vững chắc nền độc lập, tự chủ của dân tộc.Sau 14 năm trị vì đất nước năm Quý Tỵ (1293), Ngài nhường ngôi cho con là Trần Thuyên (tức vua Trần Anh Tông) và lên ngôi Thái thượng hoàng, chuẩn bị con đường xuất gia tu hành.Đến tháng 10 năm Kỷ Hợi (1299), Ngài xuất gia tu hành ở núi Yên Tử (nay thuộc tỉnh Quảng Ninh). Ở đây, Ngài chuyên cần tu tập theo hạnh đầu đà (khổ hạnh), lấy hiệu là Hương Vân Đại Đầu-đà và sáng lập nên dòng Thiền Trúc Lâm Yên Tử. Sau đó Ngài lập chùa, cất tinh xá, khai giảng để tiếp độ chúng Tăng, vì vậy học chúng đua nhau đến rất đông.Sau đó, Ngài đến chùa Phổ Minh ở Phủ Thiên Trường (nay thuộc tỉnh Nam Định) lập giảng đường, giảng dạy mấy năm. Ngài lại vân du đến trại Bố Chính lập am Tri Kiến (nay thuộc tỉnh Quảng Bình) rồi ở đó. Khi tu tập trên núi Yên Sơn thành tựu được sự giác ngộ, Ngài xuống núi đi hoằng dương Phật Pháp, làm lợi lạc cho chúng sinh.Năm 1308, sau nhiều năm xuất gia tu tập, Thượng hoàng Trần Nhân Tông (hiệu là Trúc Lâm đại sĩ) viên tịch tại am Ngọa Vân, núi Yên Tử. Với những đóng góp to lớn của Trần Nhân Tông cho đạo pháp và dân tộc, Ngài đã được người đời kính trọng, sau được suy tôn là Phật Hoàng Trần Nhân Tông (hay còn gọi là vua Phật Việt Nam).',
    contributions: [
      'Ngài đã hai lần cùng vua cha và các tướng lĩnh lãnh đạo quân dân đánh tan quân xâm lược Nguyên - Mông (1285, 1287 - 1288)',
      'Sáng lập  Thiền phái Trúc Lâm Yên Tử (thiền thuần túy Việt Nam)',
      'Thực thi chính sách hòa giải, phục hồi kinh tế và củng cố khối đại đoàn kết'
    ],
    imageUrl: 'https://media.thaythichtructhaiminh.com/files/f1/2020/12/phat-hoang-tran-nhan-tong-so-to-thien-phai-truc-lam-yen-tu_optimized.jpg',
    gallery: ['https://sohanews.sohacdn.com/160588918557773824/2024/8/6/chuyen-vua-tran-nhan-tong-coi-ao-dap-cho-thu-cap-tuong-dich-2797-1722930526548-1722930527162734366387.jpg','https://th.bing.com/th/id/R.256a64633dfe5c0d709d8f6847dbaac4?rik=d3wmL9rs%2bhQebA&riu=http%3a%2f%2fredsvn.net%2fwp-content%2fuploads%2f2018%2f09%2fTran-Nhan-Tong.jpg&ehk=GbmVuCmHjCIbFRvN2gWe0ah08usYJEA3I1fbkGdYjWA%3d&risl=&pid=ImgRaw&r=0','https://ik.imagekit.io/tvlk/blog/2023/05/nui-yen-tu-4.jpg?tr=dpr-2,w-675'],
    tags: ['quốc gia','văn hóa','lãnh đạo']
  },
  {
    id: 'p4',
    name: 'Đoàn Minh Huyên (Phật Thầy Tây An)',
    religion: 'Bửu Sơn Kỳ Hương',
    period: 'Nguyễn (Thế kỷ XIX)',
    birthDeath: '1807–1856',
    bio: 'Đoàn Minh Huyên còn có tên là Đoàn Văn Huyên, đạo hiệu: Giác Linh, quê ở Tòng Sơn, Cái Tàu thượng, tổng An Thạnh thượng, tỉnh Sa Đéc (nay thuộc tỉnh Đồng Tháp).Năm 1849, ở Nam Kỳ, xảy ra vụ mất mùa và đại dịch (kéo dài đến 1850), đã làm nhân dân lâm vào cảnh cùng cực, khổ đau và chết chóc. Trong hoàn cảnh ấy, ông Đoàn Minh Huyên từ Tòng Sơn vào Tràm Dư, rồi đến vùng Kiến Thạnh (nay là làng Long Kiến, huyện Chợ Mới, tỉnh An Giang) trổ tài trị bệnh cho dân. Từ chỗ chữa trị bệnh có kết quả, ông dìu dắt được nhiều bệnh nhân và người thân của họ nghe theo những điều dạy khuyên của ông.Thấy người tin theo ngày một đông, nên ngay năm ấy (1849), ông đã sáng lập ra đạo Bửu Sơn Kỳ Hương, với tôn chỉ và phương pháp hành đạo rất đơn giản.Nghe ông chữa bệnh bằng nước cúng (nước lã), bông cúng,...đồng thời rao giảng đạo, quan tỉnh An Giang nghi ngờ ông là gian đạo sĩ, hoạt động chính trị nên bắt giam, nhưng xét không có bằng chứng phải thả tự do cho ông. Song ông buộc phải quy y theo đạo phật (phái Lâm Tế) và tu tại chùa Tây An, dưới chân núi Sam (Châu Đốc). Từ đó, ông được người dân tin tưởng gọi tôn kính là Phật Thầy Tây An.Mặc dù bị chỉ định cư trú, song ông vẫn thường đi lại khắp miền sông Hậu, phổ biến giáo lý Tứ Ân, đồng thời vận động dân nghèo khai hoang, dần hình thành 4 trung tâm dinh điền lớn, đó là Đồng Tháp Mười(Đồng Tháp), Thới Sơn (Tịnh Biên), Láng Linh và Cái Dầu (đều thuộc Châu Phú)...Phật Thầy Tây An viên tịch ngày 10 tháng 9 năm 1856), lúc 49 tuổi. Hiện mộ ông ở phía sau chùa Tây An (Châu Đốc), không đấp nấm theo lời căn dặn của ông.Tương truyền, Phật Thầy Tây An có viết mấy quyển kinh, kệ sau đây:-Chuẩn đề chú,-Thái dương kinh-Khai kinh kệ-Thái âm kinh .Ông có nhiều đệ tử giỏi, như Đức Cố Quản (Trần Văn Thành), Tăng Chủ (Bùi Đình Thân), Đạo Xuyến (Nguyễn Văn Xuyến), Đạo Lập (Phạm Thái Chung), Đạo Thắng (Nguyễn Văn Thắng),v.v...',
    contributions: [
      'chữa trị bệnh , hỗ trợ kết thúc đại dịch năm 1850',
      'Sáng lập đạo Bửu Sơn Kỳ Hương',
      'Tổ chức tín đồ khai hoang, lập 4 trung tâm dinh điền lớn, mở mang bờ cõi Nam Bộ'
      
    ],
    imageUrl: 'https://tongphuochiep-vinhlong.com/wp-content/uploads/2021/02/Untitled.jpg',
    gallery: ['https://tongphuochiep-vinhlong.com/wp-content/uploads/2021/02/H2-353x700.jpg','https://1.bp.blogspot.com/-io3297ah734/XygfIDOeOSI/AAAAAAAAA2E/lu771vjLD9czXwqWtAp9L0Peo0z2t7UOgCLcBGAsYHQ/s1600/cu-lao-ong-chuong-1.jpg'],
    tags: ['khai hoang','Nam Bộ','xã hội']
  },
  {
    id: 'p5',
    name: 'Nguyễn Trường Tộ',
    religion: 'Công giáo',
    period: 'Nguyễn (Thế kỷ XIX)',
    birthDeath: '1830–1871',
    bio: 'Nguyễn Trường Tộ sinh năm 1830 tại làng Bùi Chu, nay thuộc xã Hưng Trung, huyện Hưng Nguyên, tỉnh Nghệ An, trong một gia đình Công giáo, cha làm nghề thuốc Đông y. Từ nhỏ, ông nổi tiếng thông minh, học một biết mười, được mệnh danh là “Trạng Tộ”.Ông được tiếp thu cả văn hóa Đông – Tây, cổ – kim. Thuở thiếu thời, Nguyễn Trường Tộ học Hán học trong vùng và sau đó được giám mục Gauthier dạy tiếng Pháp cùng các môn khoa học cơ bản – những kiến thức hiếm có đối với trí thức Việt Nam lúc bấy giờ. Năm 20 tuổi, ông có dịp sang Pháp, Ý, Hồng Kông để học hỏi, mở rộng hiểu biết về văn minh phương Tây, tham quan các cơ sở công kỹ nghệ, gặp gỡ học giả và kỹ sư châu Âu. Từ đó, ông hình thành tư tưởng canh tân, khát vọng giúp nước, giúp dân.Sống trong thời kỳ đất nước bị thực dân Pháp xâm lược, ông thấu hiểu nỗi lầm than của nhân dân và nhận thấy thế nước yếu, triều đình bảo thủ, lúng túng. Năm 1863, ông dâng lên triều đình ba bản điều trần nổi tiếng: “Tế cấp luận”, “Giáo môn luận” và “Thiên hạ phân hợp đại thế luận”, trong đó Tế cấp luận được xem là quan trọng nhất. Ông khẳng định: “Việc khẩn cấp nhất của đất nước là giữ cho được những gì chưa mất. Muốn vậy phải mau mau canh tân đất nước.”Tư tưởng canh tân, tự cường dân tộc của Nguyễn Trường Tộ thể hiện trong 58 bản điều trần gửi vua Tự Đức suốt 10 năm (1861–1871), đề cập đến các lĩnh vực chính trị, kinh tế, giáo dục, khoa học và quân sự. Cụ thể:Chính trị – ngoại giao: hòa hoãn để tìm thời cơ, mở rộng bang giao, khôi phục chủ quyền.Kinh tế – tài chính: cải cách thuế má, khai hoang, khai thác tài nguyên.Giáo dục – khoa học: đổi mới giáo dục, gửi học sinh du học, học tập kỹ nghệ tiên tiến.Quân sự: tinh binh tinh cán, hiện đại hóa vũ khí.Tuy có tài năng xuất chúng và tấm lòng yêu nước sâu sắc, Nguyễn Trường Tộ lại không được trọng dụng do sự bảo thủ và thành kiến tôn giáo của triều đình. Dẫu vậy, ông vẫn kiên trì, bền bỉ đấu tranh tư tưởng, thể hiện phẩm chất của một nhà cải cách lớn, một trí thức yêu nước tiêu biểu của thế kỷ XIX.Nguyễn Trường Tộ mất năm 1871, để lại dấu ấn sâu đậm trong lịch sử tư tưởng canh tân đất nước Việt Nam.',
    contributions: [
      'Soạn hàng loạt điều trần đề xuất cải cách toàn diện (giáo dục, quân sự, kinh tế, ngoại giao)',
      'Thúc đẩy phổ cập kiến thức thực tiễn và dùng chữ Quốc ngữ để mở rộng dân trí',
      'Đại diện cho khuynh hướng tiếp nhận khoa học - kỹ thuật phương Tây nhằm tự cường'
    ],
    imageUrl: 'https://sidoni.net/upload/baiquet/thumb/tim-hieu-tieu-su-cuoc-doi-va-su-nghiep-cua-nguyen-truong-to7161.jpg',
    gallery: ['https://giaoxuchauson.com/uploads/news/2019/a.2_59.jpg','https://baotanglichsu.vn/DataFiles/Uploaded/image/cao%20ba%20quat/A%202a.jpg'],
    tags: ['cải cách','giáo dục','hội nhập']
  },
  {
    id: 'p6',
    name: 'Huỳnh Phú Sổ',
    religion: 'Phật giáo Hòa Hảo',
    period: 'Cận đại (Thế kỷ XX)',
    birthDeath: '1920–1947',
    bio: 'Huỳnh Phú Sổ sinh ngày 15 tháng 1 năm 1920, nhằm ngày 25 tháng 11 năm Kỷ Mùi tại làng Hoà Hảo, quận Tân Châu, tỉnh Châu Đốc, (nay thuộc thị trấn Phú Mỹ, huyện Phú Tân, tỉnh An Giang); con của ông Hương Cả (người đứng đầu trong làng) Huỳnh Công Bộ và bà Lê Thị Nhậm. Thuở nhỏ ông thông minh, học hết bằng sơ học yếu lược Pháp - Việt nhưng hay bị đau ốm nên đành bỏ dở việc học.Trong một lần lên núi Sam (thuộc Bảy Núi, An Giang), tiếp xúc với phái Phật giáo Bửu Sơn Kỳ Hương, Huỳnh Phú Sổ giỏi trị bệnh và luyện chí tu hành. Năm 1937, ông về làng chữa bệnh cho dân, và viết sám giảng Khuyên người đời tu niệm (1939)2 .Từ thuở bé, Huỳnh Phú Sổ đã có căn tính của một người tu hành, ông không thích đàn địch, ca hát, cười giỡn như các bạn cùng trang lứa, lúc nào ông cũng trầm tư, tỉnh mặc, thích ở nơi thanh vắng, yên tĩnh. Ông lại hổ thẹn và phản đối ngay khi nghe song thân bàn chuyện kiếm người bạn đời cho ông.Ngày 18 tháng 5 năm Kỷ Mão, tức ngày 4 tháng 7 năm 1939, Huỳnh Phú Sổ tuyên bố khai lập đạo Phật giáo Hòa Hảo, khi ấy ông chỉ mới 19 tuổi.”Khai đạo”Ngày 18 tháng 5 năm Kỷ Mão (4 tháng 7 năm 1939), Huỳnh Phú Sổ đứng ra cử hành lễ "Đền linh Khứu Sơn trung thọ mạng" khai đạo, lấy tên là Phật giáo Hòa Hảo, đó vừa là tên quê hương ông vừa có ý nghĩa là "hiếu hòa" và "giao hảo", lại mang một hàm nghĩa là đạo Phật ở làng Hòa Hảo. Từ đó, ông đi chữa bệnh, tiên tri, thuyết pháp và sáng tác thơ văn, kệ giảng. Văn chương của ông bình dân nên dễ đi vào lòng người. Chỉ trong một thời gian ngắn số tín đồ và ảnh hưởng của ông càng ngày càng gia tăng và trở thành một phong trào tín ngưỡng mạnh mẽ khiến Thực dân Pháp lo ngại.Ngày 18 tháng 8 năm 1940, Thực dân Pháp đưa Huỳnh Phú Sổ đi quản thúc tại Sa Đéc.Ngày 23 tháng 5 năm 1940, Thực dân Pháp chuyển ông sang quản thúc ở làng Nhơn Nghĩa, tỉnh Cần Thơ nhưng cả hai nơi này đều được đông đảo quần chúng đến xin nghe thuyết pháp và quy y Phật giáo Hòa Hảo.Vì vậy ngày 28 tháng 7 năm 1940, nhà cầm quyền Pháp đưa Huỳnh Phú Sổ vào bệnh viện Cần Thơ và sau đó chuyển lên nhà thương điên Chợ Quán tại Sài Gòn.Tháng 6 năm 1941, Huỳnh Phú Sổ bị đưa đi quản thúc ở Bạc Liêu. Tại đây ông không được phép trị bệnh và thuyết pháp.Tháng 10 năm 1942, trước tin tức người Pháp sẽ đưa Huỳnh Phú Sổ đi đày ở Ai Lao (Lào), các tín đồ Phật giáo Hòa Hảo và hiến binh Nhật đã giải cứu ông đem về Sài Gòn.Từ tháng 6 đến tháng 8 năm 1945, Huỳnh Phú Sổ đi thuyết pháp và khuyến nông tại 107 địa điểm ở các tỉnh miền Tây Nam Bộ.” Hoạt động chính trị”Ngày 14 tháng 8 năm 1945, Huỳnh Phú Sổ cùng Hồ Văn Ngà, Trần Văn Ân, Nguyễn Văn Sâm, Trần Văn Thạch...đã thành công liên kết tất cả đảng phái và thành lập Mặt trận Quốc gia Thống nhất. Một ngày sau, Nhật tuyên bố đầu hàng vô điều kiện. Ngày 21 tháng 8 năm 1945 Mặt Trận Quốc gia Thống Nhất tổ chức một cuộc biểu tình vĩ đại với trên 200.000 người tham dự, nhưng những người lãnh đạo đã không tuyên bố Việt Nam độc lập và cũng không cướp chính quyền..Một ngày sau, ngày 22/8/1945 Việt Minh cướp chính quyền tại Hà Nội sau một cuộc biểu tình trước nhà hát lớn Hà Nội. Chỉ một ngày sau, ngày 23/8/1945 vua Bảo đại tuyên bố thoái vị và trao quyền lãnh đạo cho Việt Minh. Ngày 24/8/1945 Tổng Bộ Việt Minh phái vào Nam Hoàng Quốc Việt (tức Hà Bá Cang) và Cao Hồng Lãnh. Ngày 25/8/1945 vua Bảo Đại trao quyền và trao ấn, kiếm của Nhà Nguyễn cho đại diện Việt Minh là Trần Huy Liệu.Ngày 25 tháng 8 năm 1945, Việt Minh tổ chức biểu tình và cướp chính quyền tại Sài Gòn.Nơi sinh sống của Huỳnh Phú Sổ, nay là Tổ đình Phật giáo Hòa Hảo. (Phú Mỹ, Phú Tân, An Giang).Ngày 8 tháng 9 năm 1945, Phật giáo Hòa Hảo biểu tình tại Cần Thơ.Ngày 9 tháng 9 năm 1945, Việt Minh cho Quốc gia Tự vệ Cuộc bao vây trụ sở Phật giáo Hòa Hảo ở số 8 đường Sohier, Sài Gòn để bắt Huỳnh Phú Sổ nhưng ông trốn thoát.3Ngày 7 tháng 10 năm 1945, những người Phật giáo Hòa Hảo cầm đầu biểu tình như Huỳnh Thạnh Mậu (em ruột Huỳnh Phú Sổ),Trần Ngọc Hoành (con ông Trần Văn Soái - tức Năm Lửa), Nguyễn Xuân Thiếp (tức nhà thơ Việt Châu - Anh chú bác với học giả Nguyễn Hiến Lê) bị cho là âm mưu cướp chính quyền và đưa ra xử tử hình tại sân vận động Cần Thơ.Ngày 26 tháng 10 năm 1945, Pháp tái chiếm Cần Thơ. Tín đồ Hòa Hảo lùng bắt Việt Minh.Sau tạm ước ngày 6 tháng 3 năm 1946 giữa Pháp và Việt Minh. Việt Minh cải thiện quan hệ với Hòa Hảo. Huỳnh Phú Sổ tham gia Ủy ban Hành chánh Kháng chiến Nam Bộ (do Việt Minh lãnh đạo) với chức vụ Ủy viên Đặc biệt.Ngày 21 tháng 9 năm 1946, Huỳnh Phú Sổ và một số trí thức thiên tả có khuynh hướng dân tộc, dân chủ thành lập Việt Nam Dân chủ Xã hội Đảng, gọi tắt là Dân Xã đảng.Ngày 17 tháng 2 năm 1947, đại diện của Huỳnh Phú Sổ là Nguyễn Bảo Toàn cùng với lãnh tụ các đảng quốc gia khác như: Nguyễn Hải Thần (Việt Nam Cách mạng Đồng minh Hội), Nguyễn Tường Tam (Việt Nam Quốc dân đảng) thành lập Mặt trận Thống nhất Quốc gia Liên hiệp với mục đích hậu thuẫn Bảo Đại đàm phán với Pháp thành lập Quốc gia Việt Nam.Ngày 16 tháng 4 năm 1947, Huỳnh Phú Sổ đột ngột mất tích khi đến Tân Phú, Đồng Tháp Mười để hòa giải sự xung đột giữa Việt Minh và Phật giáo Hòa Hảo. Theo tài liệu của phương Tây và Việt Nam Cộng hòa thì ông đã bị Việt Minh thủ tiêu.',
    contributions: [
      'Thành lập Phật giáo Hòa Hảo và phổ biến giáo lý giản dị, gắn với đời sống nông dân',
      'Khơi dậy tinh thần yêu nước và tổ chức quần chúng tham gia các phong trào kháng chiến',
      'Đóng góp cho an sinh và tổ chức cộng đồng nông thôn'
    ],
    imageUrl: 'https://i.pinimg.com/736x/64/f0/67/64f0670bba997091c4f879f5251bf311.jpg',
    gallery: ['https://tse1.mm.bing.net/th/id/OIP.oUAa_TIpkvsGF3QJUYwtXAHaFL?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3','https://yt3.ggpht.com/gkwVABZVHzrr_S37RyGmkiXZj0Ss3bq65srn315YpS4Nh7qk7i44P3NPhp4EjAOYzQeN_3dXRKMCcA=s1499-c-fcrop64=1,0da70000f258ffff-nd-v1?days_since_epoch=19940','https://images2.thanhnien.vn/Uploaded/bienca/2022_12_18/e5126122b07a6824316b-5506.jpg'],
    tags: ['nông thôn','phong trào','kháng chiến']
  },
  {
    id: 'p7',
    name: 'Trung đội Phật tử chùa Cổ Lễ',
    religion: 'Phật giáo',
    period: 'Kháng chiến chống Pháp (1947)',
    birthDeath: '',
    bio: 'Năm 1947, hưởng ứng Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh, giới tăng ni, Phật tử cả nước đã dấy lên Phong trào “Cởi áo cà sa, khoác chiến bào”. Tiêu biểu cho phong trào đó là sự kiện 27 nhà sư đã thành lập “Trung đội Phật tử” ngày 27-2-1947 tại chùa Cổ Lễ (Nam Định).Ngày 27/2/1947, dưới sự chủ trì của Hòa thượng Thích Thế Long, một buổi lễ phát nguyện đặc biệt đã diễn ra long trọng tại chùa Cổ Lễ. Không tụng kinh, không chuông mõ hôm ấy, 27 nhà sư đã làm lễ “cởi áo cà sa, khoác chiến bào” để lên đường chiến đấu chống thực dân Pháp, bảo vệ quê hương. Họ là những người con yêu nước đến từ nhiều tỉnh như Nam Định, Nghệ An, Hải Phòng, Ninh Bình. Trong không khí xúc động, chư ni Thích Đàm Nhung đã dõng dạc đọc lời phát nguyện:“Cởi áo cà sa khoác chiến bào-Việc quân đâu có quản gian lao-Gậy thiền quét sạch loài xâm lược-Theo gót Trưng Vương tỏ nữ hào” .Ngay sau đó, 27 nhà sư chính thức nhập ngũ, bước vào chiến trường đầy khốc liệt. Trong số họ, 12 vị đã hy sinh anh dũng nơi chiến trận. Những người còn lại  hoặc tiếp tục phục vụ trong quân đội, hoặc trở về với cửa thiền, đóng góp lớn lao cho Giáo hội Phật giáo Việt Nam.',
    contributions: [
      'Thành lập Trung đội Phật tử tại chùa Cổ Lễ năm 1947',
      'Tham gia chiến đấu bảo vệ Tổ quốc trong kháng chiến chống Pháp',
      'Khơi dậy phong trào yêu nước trong giới Phật giáo với tinh thần "đạo pháp gắn liền dân tộc"'
    ],
    imageUrl: 'https://bchannel.vn/wp-content/uploads/2024/07/chua-nam-dinh-8-1.jpg',
    gallery: ['https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/5/3/1187551/Chua-Co-Le-6.jpg','https://tse3.mm.bing.net/th/id/OIP.qNjp-abkSmauvzDCmN-3wAHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'],
    coords: [{ lat: 20.3229, lng: 106.1977 }],
    tags: ['kháng chiến','phật giáo','yêu nước']
  },
  {
    id: 'p8',
    name: 'Đại tá Đinh Thế Hinh (Thích Pháp Lữ)',
    religion: 'Phật giáo',
    period: 'Kháng chiến chống Pháp - hiện đại',
    birthDeath: '',
    bio: ' Sinh năm 1927 tại làng Liêu Thượng, xã Xuân Thành, huyện Xuân Trường, tỉnh Nam Định, ông là con út trong gia đình có 8 người con, gia đình nghèo nhưng sùng đạo, nhiều đời kính ngưỡng Phật pháp. Vì là con trai duy nhất, ông được kỳ vọng sẽ thay cha gìn giữ nếp nhà và đạo lý. Năm 13 tuổi, ông được cha mẹ gửi lên chùa Cổ Lễ - một trong những ngôi chùa cổ kính bậc nhất vùng Đồng bằng Bắc Bộ để tu học, pháp danh được đặt là Thích Pháp Lữ, thể hiện chí nguyện hành trì giáo pháp, sống cuộc đời thanh tịnh.Tại chùa, ông theo pháp môn Tịnh độ - lấy tín nguyện và hành trì niệm danh hiệu Đức Phật A Di Đà làm căn bản tu hành. Nhưng điều đáng quý hơn cả là dù mới chỉ là một hình đồng nhỏ tuổi, ông đã sớm tỏ ra thông minh, chăm chỉ và giàu lòng từ bi. Được các bậc tôn túc thương yêu, gửi gắm, ông lần lượt đi học tiếp tại nhiều chùa lớn khắp miền Bắc: chùa Bút Tháp (Bắc Ninh), chùa Quán Sứ (Hà Nội), chùa Côn Sơn (Hải Dương)... Trong suốt 5 năm tu học, ông không chỉ tinh tấn tu hành mà còn học chữ Quốc ngữ, bồi dưỡng về giáo lý, đọc sách Hán - Nôm và truyền dạy lại cho các bạn đồng tu.Năm 1945, khi Cách mạng Tháng Tám thành công, ông trở về chùa Cổ Lễ phụ giúp Hòa thượng Thích Thế Long trụ trì và bắt đầu dạy chữ Quốc ngữ cho các tăng sinh, tiếp tục hành đạo trong bối cảnh đất nước vừa giành lại nền độc lập nhưng cũng đang đứng trước hiểm họa tái xâm lược của thực dân Pháp.Năm 1946, chiến tranh lan rộng, quân Pháp chiếm đóng trở lại nhiều vùng ở miền Bắc, chùa Cổ Lễ - linh thiêng và yên bình - cũng không tránh khỏi vòng vây kẻ thù, những người tu hành bị buộc phải sơ tán. Trong tình thế đó, các nhà sư không thể đứng ngoài vận mệnh quốc gia. Về nội tâm của Thích Pháp Lữ - chàng trai tuổi chưa tròn đôi mươi, ý chí bảo vệ đạo pháp, hộ quốc an dân đã nung nấu mãnh liệt.Mùa xuân năm 1947, tại chùa Cổ Lễ, hưởng ứng Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh, Hòa thượng Thích Thế Long triệu tập tăng ni trong vùng, tổ chức lễ phát nguyện đặc biệt “Cởi áo cà sa, khoác chiến bào”. Buổi sáng hôm đó, giữa không khí thiêng liêng tràn ngập sân chùa, 27 vị sư trẻ đứng trước Phật đài, trước quốc kỳ và hương hồn tổ tiên, long trọng hạ quyết tâm từ bỏ chiếc áo nâu sồng, gia nhập Vệ quốc đoàn, trở thành những chiến sĩ đầu tiên trong Đội quân Phật tử Việt Nam. Những lời phát biểu của hòa thượng trụ trì hôm đó vẫn in đậm trong ký ức Đại đức Thích Pháp Lữ: “Giặc ngoại xâm đe dọa chủ quyền đất nước, bọn ác quỷ lăm le ngay cửa Phật. Phật pháp bất ly thế gian, khi sơn hà nguy biến, dân chúng điêu linh, các phật tử cũng phải góp sức đánh giặc, cứu nước...”.Từ giây phút ấy, Thích Pháp Lữ trở thành người chiến sĩ mang trong tim hình bóng của Phật, nhưng tay cầm súng, vai đeo ba lô hành quân về chiến khu.Sau khi nhập ngũ, Thích Pháp Lữ (nay là đồng chí Đinh Thế Hinh) được phân công làm Đội trưởng Đội Võ trang tuyên truyền, phụ trách khu vực Bùi Chu, Xuân Trường - những vùng đất Phật giáo sâu đậm. Đội của ông hoạt động bí mật trong vùng địch kiểm soát, vừa tuyên truyền cho Cách mạng, vận động Nhân dân, vừa tiêu diệt những phần tử phản động, bảo vệ cơ sở.Trong ký ức, ông còn nhớ có lần suýt hy sinh. Đó là một buổi trưa năm 1951, khi ông đang hoạt động tại làng Hành Thiện thì bị địch bao vây. Trong tình thế không lối thoát, ông nhanh trí giả làm nhà sư đang ngồi gõ mõ niệm kinh Bát Nhã giữa đám chay với áo nâu, mũ ốc. Quân Pháp vào làng lục soát, thấy ông giống nhà sư thật nên rút đi. Lần đó ông thoát nạn nhờ trí tuệ và... sự hộ trì của Tam bảo!Sau đó, ông tiếp tục hoạt động cho đến ngày miền Bắc hoàn toàn giải phóng, được kết nạp vào Đảng, tiếp tục học tập và trưởng thành trong quân đội. Khi cuộc kháng chiến chống Mỹ cứu nước bước vào giai đoạn ác liệt, ông trở thành Chính ủy Trung đoàn 542 - Bộ Tư lệnh Trường Sơn, đơn vị đóng quân tại A Lưới, Thừa Thiên - Huế.Năm 1972, trong một trận ném bom của máy bay B-52, chỉ huy sở của đơn vị bị đánh sập, hàng chục cán bộ, chiến sĩ hy sinh, Chính ủy Đinh Thế Hinh bị vùi trong đất đá. Tưởng ông đã hy sinh, đồng đội chuẩn bị khâm liệm. Nhưng kỳ diệu thay, sau nhiều giờ hôn mê, ông bất ngờ tỉnh dậy và dùng hết sức đạp tung tấm nylon phủ trên người. Mọi người òa khóc khi thấy ông vẫn còn sống.Sau ba ngày cấp cứu, ông hồi phục và trở lại đơn vị. Ký ức đau thương đó trở thành dấu ấn không thể phai mờ trong cuộc đời binh nghiệp của vị sư xuất trận.Sau ngày đất nước hoàn toàn thống nhất, Đại tá Đinh Thế Hinh nghỉ hưu, nhưng vẫn tiếp tục việc đạo. Ông trở về đời sống cư sĩ, tiếp tục cống hiến cho đạo pháp bằng cách viết bài, giảng giải giáo lý nhà Phật, phổ biến tư tưởng nhập thế cho lớp trẻ.Ông cộng tác với nhiều tạp chí Phật giáo, viết các bài bình luận về triết lý nhân sinh, đạo đức ứng xử trong xã hội hiện đại. Với giọng văn mộc mạc, ông không nói những lời quá cao siêu về đạo Phật, mà viết cho con người, cho đời sống và lương tri. Không ngày nào ông không đọc sách Phật, viết bài, soạn tài liệu. Trong căn hộ nhỏ, hàng trăm cuốn sách vẫn được ông gìn giữ, trân trọng như bảo vật. Ông từng tâm sự: “Tu hành là sự lựa chọn của tâm, không nhất thiết phải ở chùa. Hộ quốc an dân, giúp đời, truyền đạo cũng là tu hành”.',
    contributions: [
      'Tham gia Trung đội Phật tử năm 1947',
      'Trực tiếp chiến đấu trong kháng chiến chống Pháp và chống Mỹ',
      'Gắn bó trọn đời với quân đội, tiêu biểu cho tinh thần “từ bi và dũng cảm”'
    ],
    imageUrl: 'https://khuongviet.com.vn/wp-content/uploads/2024/07/IMG_8202.jpeg',
    gallery: ['Sinh năm 1927 tại làng Liêu Thượng, xã Xuân Thành, huyện Xuân Trường, tỉnh Nam Định, ông là con út trong gia đình có 8 người con, gia đình nghèo nhưng sùng đạo, nhiều đời kính ngưỡng Phật pháp. Vì là con trai duy nhất, ông được kỳ vọng sẽ thay cha gìn giữ nếp nhà và đạo lý. Năm 13 tuổi, ông được cha mẹ gửi lên chùa Cổ Lễ - một trong những ngôi chùa cổ kính bậc nhất vùng Đồng bằng Bắc Bộ để tu học, pháp danh được đặt là Thích Pháp Lữ, thể hiện chí nguyện hành trì giáo pháp, sống cuộc đời thanh tịnh.Tại chùa, ông theo pháp môn Tịnh độ - lấy tín nguyện và hành trì niệm danh hiệu Đức Phật A Di Đà làm căn bản tu hành. Nhưng điều đáng quý hơn cả là dù mới chỉ là một hình đồng nhỏ tuổi, ông đã sớm tỏ ra thông minh, chăm chỉ và giàu lòng từ bi. Được các bậc tôn túc thương yêu, gửi gắm, ông lần lượt đi học tiếp tại nhiều chùa lớn khắp miền Bắc: chùa Bút Tháp (Bắc Ninh), chùa Quán Sứ (Hà Nội), chùa Côn Sơn (Hải Dương)... Trong suốt 5 năm tu học, ông không chỉ tinh tấn tu hành mà còn học chữ Quốc ngữ, bồi dưỡng về giáo lý, đọc sách Hán - Nôm và truyền dạy lại cho các bạn đồng tu.Năm 1945, khi Cách mạng Tháng Tám thành công, ông trở về chùa Cổ Lễ phụ giúp Hòa thượng Thích Thế Long trụ trì và bắt đầu dạy chữ Quốc ngữ cho các tăng sinh, tiếp tục hành đạo trong bối cảnh đất nước vừa giành lại nền độc lập nhưng cũng đang đứng trước hiểm họa tái xâm lược của thực dân Pháp.Năm 1946, chiến tranh lan rộng, quân Pháp chiếm đóng trở lại nhiều vùng ở miền Bắc, chùa Cổ Lễ - linh thiêng và yên bình - cũng không tránh khỏi vòng vây kẻ thù, những người tu hành bị buộc phải sơ tán. Trong tình thế đó, các nhà sư không thể đứng ngoài vận mệnh quốc gia. Về nội tâm của Thích Pháp Lữ - chàng trai tuổi chưa tròn đôi mươi, ý chí bảo vệ đạo pháp, hộ quốc an dân đã nung nấu mãnh liệt.Mùa xuân năm 1947, tại chùa Cổ Lễ, hưởng ứng Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh, Hòa thượng Thích Thế Long triệu tập tăng ni trong vùng, tổ chức lễ phát nguyện đặc biệt “Cởi áo cà sa, khoác chiến bào”. Buổi sáng hôm đó, giữa không khí thiêng liêng tràn ngập sân chùa, 27 vị sư trẻ đứng trước Phật đài, trước quốc kỳ và hương hồn tổ tiên, long trọng hạ quyết tâm từ bỏ chiếc áo nâu sồng, gia nhập Vệ quốc đoàn, trở thành những chiến sĩ đầu tiên trong Đội quân Phật tử Việt Nam. Những lời phát biểu của hòa thượng trụ trì hôm đó vẫn in đậm trong ký ức Đại đức Thích Pháp Lữ: “Giặc ngoại xâm đe dọa chủ quyền đất nước, bọn ác quỷ lăm le ngay cửa Phật. Phật pháp bất ly thế gian, khi sơn hà nguy biến, dân chúng điêu linh, các phật tử cũng phải góp sức đánh giặc, cứu nước...”.Từ giây phút ấy, Thích Pháp Lữ trở thành người chiến sĩ mang trong tim hình bóng của Phật, nhưng tay cầm súng, vai đeo ba lô hành quân về chiến khu.Sau khi nhập ngũ, Thích Pháp Lữ (nay là đồng chí Đinh Thế Hinh) được phân công làm Đội trưởng Đội Võ trang tuyên truyền, phụ trách khu vực Bùi Chu, Xuân Trường - những vùng đất Phật giáo sâu đậm. Đội của ông hoạt động bí mật trong vùng địch kiểm soát, vừa tuyên truyền cho Cách mạng, vận động Nhân dân, vừa tiêu diệt những phần tử phản động, bảo vệ cơ sở.Trong ký ức, ông còn nhớ có lần suýt hy sinh. Đó là một buổi trưa năm 1951, khi ông đang hoạt động tại làng Hành Thiện thì bị địch bao vây. Trong tình thế không lối thoát, ông nhanh trí giả làm nhà sư đang ngồi gõ mõ niệm kinh Bát Nhã giữa đám chay với áo nâu, mũ ốc. Quân Pháp vào làng lục soát, thấy ông giống nhà sư thật nên rút đi. Lần đó ông thoát nạn nhờ trí tuệ và... sự hộ trì của Tam bảo!Sau đó, ông tiếp tục hoạt động cho đến ngày miền Bắc hoàn toàn giải phóng, được kết nạp vào Đảng, tiếp tục học tập và trưởng thành trong quân đội. Khi cuộc kháng chiến chống Mỹ cứu nước bước vào giai đoạn ác liệt, ông trở thành Chính ủy Trung đoàn 542 - Bộ Tư lệnh Trường Sơn, đơn vị đóng quân tại A Lưới, Thừa Thiên - Huế.Năm 1972, trong một trận ném bom của máy bay B-52, chỉ huy sở của đơn vị bị đánh sập, hàng chục cán bộ, chiến sĩ hy sinh, Chính ủy Đinh Thế Hinh bị vùi trong đất đá. Tưởng ông đã hy sinh, đồng đội chuẩn bị khâm liệm. Nhưng kỳ diệu thay, sau nhiều giờ hôn mê, ông bất ngờ tỉnh dậy và dùng hết sức đạp tung tấm nylon phủ trên người. Mọi người òa khóc khi thấy ông vẫn còn sống.Sau ba ngày cấp cứu, ông hồi phục và trở lại đơn vị. Ký ức đau thương đó trở thành dấu ấn không thể phai mờ trong cuộc đời binh nghiệp của vị sư xuất trận.Sau ngày đất nước hoàn toàn thống nhất, Đại tá Đinh Thế Hinh nghỉ hưu, nhưng vẫn tiếp tục việc đạo. Ông trở về đời sống cư sĩ, tiếp tục cống hiến cho đạo pháp bằng cách viết bài, giảng giải giáo lý nhà Phật, phổ biến tư tưởng nhập thế cho lớp trẻ.Ông cộng tác với nhiều tạp chí Phật giáo, viết các bài bình luận về triết lý nhân sinh, đạo đức ứng xử trong xã hội hiện đại. Với giọng văn mộc mạc, ông không nói những lời quá cao siêu về đạo Phật, mà viết cho con người, cho đời sống và lương tri. Không ngày nào ông không đọc sách Phật, viết bài, soạn tài liệu. Trong căn hộ nhỏ, hàng trăm cuốn sách vẫn được ông gìn giữ, trân trọng như bảo vật. Ông từng tâm sự: “Tu hành là sự lựa chọn của tâm, không nhất thiết phải ở chùa. Hộ quốc an dân, giúp đời, truyền đạo cũng là tu hành”.','http://image.congan.com.vn/thumbnail/CATP-1366-2025-5-15/6a-2.jpg'],
    coords: [{ lat: 20.3229, lng: 106.1977 }],
    tags: ['phật giáo','quân đội','anh hùng']
  },

  {
    id: 'p9',
    name: 'Hòa thượng Thích Thanh Quyết',
    religion: 'Phật giáo',
    period: 'Quốc hội khóa XV (2021–2026)',
    birthDeath: '1962-Hiện tại',
    bio: 'Phó Chủ tịch Hội đồng Trị sự Trung ương, Trưởng Ban Trị sự GHPGVN tỉnh Quảng Ninh, đại biểu Quốc hội nhiều khóa, đóng góp cho công tác dân vận và phát triển vùng Phật giáo Quảng Ninh.',
    contributions: [
      'Đại biểu Quốc hội các khóa XIII, XIV, XV',
      'Phát triển Phật giáo tại vùng Đông Bắc',
      'Tham gia xây dựng chính sách pháp luật liên quan đến tôn giáo'
    ],
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.c9m4S6h-KHGeNPe_FUfJ8AHaE7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    gallery: [],
    coords: [{ lat: 20.9500, lng: 107.0833 }],
    tags: ['phật giáo','chính sách','đại đoàn kết']
  },
  {
    id: 'p10',
    name: 'Linh mục Nguyễn Văn Riễn',
    religion: 'Công giáo',
    period: 'Quốc hội khóa XV (2021–2026)',
    birthDeath: '1955- Hiện tại',
    bio: 'Gioan Baotixita Nguyễn Văn Riễn, tên thật là Nguyễn Văn Riễn, sinh ngày 20 tháng 12 năm 1955 tại xã An Tràng, huyện Quỳnh Phụ, tỉnh Thái Bình, thuộc giáo xứ Tràng Lũ, giáo phận Thái Bình. Ông có bằng cử nhân Thần học.Năm 1987, ông được thụ phong linh mục và bổ nhiệm làm phó xứ giáo xứ Kỉnh Nhượng (ấp Trảng Sắn, xã Vĩnh Hòa, huyện Phú Giáo, Bình Dương). Sau khi linh mục chánh xứ Đaminh Đinh Khắc Túc qua đời (1994), ông được giao làm chánh xứ, gắn bó với Kỉnh Nhượng suốt 26 năm, trước đó có 6 năm làm thầy và phó tế mục vụ cũng tại đây.Năm 2013, linh mục Nguyễn Văn Riễn được giao phụ trách giáo điểm trên đường Huỳnh Văn Lũy, thành phố Thủ Dầu Một (Bình Dương). Nơi ông phục vụ là huyện vùng sâu, vùng xa Phú Giáo, đời sống người dân còn nhiều khó khăn. Thấu hiểu hoàn cảnh ấy, ông đã vận động các nhà hảo tâm trong và ngoài nước để hỗ trợ cộng đồng:Mở đường từ ngã ba Cống Triết đến ấp 5 xã Vĩnh Hòa, giúp học sinh và người dân đi lại thuận tiện hơn.Hiến tặng 4.500m² đất để xây xóm tình thương cho hơn 22 hộ gia đình, trong đó 14 căn nhà được hỗ trợ kinh phí xây dựng hoàn toàn.Đóng góp và vận động làm 600m đường, kéo điện hạ thế, giúp người dân ổn định cuộc sống.Hằng năm, ông trích quỹ giáo xứ và nguồn tài trợ để cấp học bổng cho hơn 20 học sinh nghèo hiếu học (500.000 đồng/em/tháng).Những việc làm thiết thực, nhân ái và hướng về cộng đồng đã khiến linh mục Nguyễn Văn Riễn được người dân yêu mến, tín nhiệm.Năm 2016, ông được Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam giới thiệu ứng cử Đại biểu Quốc hội khóa XIV (2016–2021). Sau hội nghị cử tri xã Vĩnh Hòa, tất cả các ý kiến đều tín nhiệm cao với linh mục Nguyễn Văn Riễn.Kết quả, trong cuộc bầu cử ngày 22 tháng 5 năm 2016, linh mục Nguyễn Văn Riễn trúng cử, trở thành một trong 496 đại biểu Quốc hội Việt Nam khóa XIV – là vị linh mục tiêu biểu, vừa tận tụy với đạo, vừa gắn bó, đóng góp tích cực cho đời sống xã hội và cộng đồng.',
    contributions: [
      'Đại biểu Quốc hội khóa XIV–XV',
      'Lãnh đạo Ủy ban Đoàn kết Công giáo Việt Nam',
      'Thúc đẩy tinh thần “Sống tốt đời đẹp đạo” trong cộng đồng Công giáo'
    ],
    imageUrl: 'https://cdn.nhandan.vn/images/7f491ee6c6b660425d7c9ab03f1ec447bef618bebd84e30ce3d14a8c4fc347f89224014c956d8f052400163400f68446240099d3ec05445006d6fe428bbf6211/1505ctdtvlm-1621067069349.jpg',
    gallery: [],
    coords: [{ lat: 11.3254, lng: 106.4770 }],
    tags: ['công giáo','đại đoàn kết','xã hội']
  },
  {
    id: 'p11',
    name: 'CommingSoon...',
    religion: 'CommingSoon...',
    period: 'CommingSoon...',
    birthDeath: 'CommingSoon...',
    bio: 'Sinh Viên FPT ',
    contributions: [
      'CommingSoon...',
      
      
    ],
    imageUrl: 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-coming-soon-label-vector-png-image_12240569.png',
    gallery: [],
    coords: [{ lat: 11.3254, lng: 106.4770 }],
    tags: ['sinh viên','đại đoàn kết','xã hội']
  }
];
