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
    question: "Theo quan điểm của Đảng, nội dung cốt lõi của công tác tôn giáo là gì?",
    options: [
      { text: "Quản lý hành chính chặt chẽ", isCorrect: false },
      { text: "Công tác vận động quần chúng", isCorrect: true },
      { text: "Hợp tác quốc tế về tôn giáo", isCorrect: false },
      { text: "Xây dựng mới các cơ sở thờ tự", isCorrect: false },
    ],
    explanation: "Nghị quyết số 25-NQ/TW xác định: 'Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng'."
  },
  // Thêm các câu hỏi khác ở đây
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
    imageUrl: 'https://daomautuphu.vn/wp-content/uploads/2022/08/Mau_Cuu_Trung_Thien_tranh_1.webp',
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
    imageUrl: 'https://hocviendaminh.com/uploads/cong-giao-1533.jpg',
  },
  {
    period: 'Năm 1651',
    title: 'Hệ thống hóa chữ Quốc ngữ (Alexandre de Rhodes)',
    description:
      'Alexandre de Rhodes xuất bản "Từ điển Việt–Bồ–La" (1651) — bước quan trọng trong quá trình Latinh hóa tiếng Việt, tiền đề cho chữ Quốc ngữ.',
    side: 'left',
    imageUrl:
      'https://thethaovanhoa.vn/Images/2019/12/04/alexandre-derhodes.jpg',
  },
  {
    period: 'Năm 1659',
    title: 'Thành lập cơ cấu Giáo hội (hai giáo phận đầu tiên)',
    description:
      'Tòa Thánh thiết lập hai giáo phận truyền giáo, đánh dấu tổ chức hoá hoạt động Công giáo tại Việt Nam.',
    side: 'right',
    imageUrl: '',
  },
  {
    period: 'Năm 1911',
    title: 'Tin Lành chính thức du nhập',
    description:
      'Năm 1911 các truyền giáo viên của Hội C&MA đến Đà Nẵng — mốc chính thức cho sự du nhập của Tin Lành vào VN hiện đại.',
    side: 'left',
    imageUrl: '',
  },
  {
    period: 'Năm 1926',
    title: 'Sự ra đời của Đạo Cao Đài',
    description:
      'Tại Tây Ninh, Cao Đài ra đời với tính dung hợp (Phật – Lão – Nho và các yếu tố phương Tây), nhanh chóng thu hút đông tín đồ ở miền Nam.',
    side: 'right',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/CaoDai_Town_Central_Temple.jpg',
  },
  {
    period: 'Năm 1939',
    title: 'Phật giáo Hòa Hảo được thành lập',
    description:
      'Đức Huỳnh Phú Sổ khai sáng Phật giáo Hòa Hảo (1939) — phong trào Phật giáo thực hành tại gia, lan rộng mạnh ở đồng bằng sông Cửu Long.',
    side: 'left',
    imageUrl: 'https://hoahao.org/uploads/duc-huynh-phu-so.jpg',
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
    imageUrl: '',
  },
  {
    period: 'Năm 1981',
    title: 'Thống nhất Phật giáo (GHPGVN)',
    description:
      'Đại hội tại chùa Quán Sứ (4–7/11/1981) thống nhất các tổ chức, thành lập Giáo hội Phật giáo Việt Nam — tổ chức Phật giáo toàn quốc được nhà nước công nhận.',
    side: 'right',
    imageUrl: 'https://giacngo.vn/uploads/2011/quansu.jpg',
  },
  {
    period: 'Năm 19/06/1988',
    title: 'Tôn phong 117 Thánh Tử đạo Việt Nam',
    description:
      'Giáo hoàng Gioan Phaolô II tôn phong 117 vị tử đạo Việt Nam tại Vatican — sự kiện có ý nghĩa lớn đối với cộng đồng Công giáo.',
    side: 'left',
    imageUrl: 'https://hdgmvietnam.com/uploads/117-tu-dao.jpg',
  },
  {
    period: 'Ngày 18/06/2004',
    title: 'Pháp lệnh Tín ngưỡng, Tôn giáo (2004)',
    description:
      'Ủy ban Thường vụ Quốc hội ban hành Pháp lệnh 2004 — khung pháp lý chi tiết cho quản lý hoạt động tôn giáo thời Đổi Mới.',
    side: 'right',
    imageUrl: '',
  },
  {
    period: '2008, 2014, 2019, (dự kiến 2025)',
    title: 'Việt Nam đăng cai Đại lễ Vesak Liên Hợp Quốc',
    description:
      'Việt Nam đăng cai các kỳ Đại lễ Vesak (2008, 2014, 2019) và được dự kiến lần nữa vào 2025 — dấu hiệu hội nhập Phật giáo quốc tế.',
    side: 'left',
    imageUrl: 'https://nhandan.vn/uploads/vesak.jpg',
  },
  {
    period: 'Ngày 18/11/2016',
    title: 'Luật Tín ngưỡng, Tôn giáo (2016)',
    description:
      'Quốc hội thông qua Luật Tín ngưỡng, Tôn giáo (có hiệu lực chính thức sau đó) — nâng cấp khung pháp lý, làm rõ khái niệm và quyền/tổ chức tôn giáo.',
    side: 'right',
    imageUrl: 'https://www.nxbctqg.org.vn/img_data/images/685607261697_13.jpg',
  },
  {
    period: 'Những năm 2020 – Nay',
    title: 'Xu hướng đương đại và thách thức',
    description:
      'Tôn giáo đóng góp nhiều cho công tác xã hội; đồng thời xuất hiện hiện tượng tôn giáo mới, vấn đề quản lý, an ninh tôn giáo và tranh luận quốc tế xung quanh tự do tôn giáo.',
    side: 'left',
    imageUrl: '',
  }
];

export const featuredTopics: Topic[] = [
  {
    id: 'religion-analysis',
    title: 'Tôn giáo ở Việt Nam: Đặc điểm, Chính sách & Thách thức',
    description: 'Phân tích chuyên sâu về bức tranh tôn giáo đa dạng, chính sách nhất quán của Đảng và các âm mưu lợi dụng tôn giáo để chống phá nhà nước.',
    imageUrl: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Phân+tích+Tôn+giáo',
    link: `/course/${religionCourse.id}`, // Link đến khóa học đã có
    status: 'published',
  },
  {
    id: 'party-history',
    title: 'Lịch sử Đảng Cộng sản Việt Nam',
    description: 'Dòng thời gian các sự kiện trọng đại, phân tích vai trò lãnh đạo của Đảng qua các thời kỳ lịch sử và những bài học kinh nghiệm.',
    imageUrl: 'https://placehold.co/600x400/6B7280/FFFFFF?text=Lịch+sử+Đảng',
    link: '#',
    status: 'coming_soon',
  },
  {
    id: 'political-economy',
    title: 'Kinh tế Chính trị Mác - Lênin',
    description: 'Các quy luật kinh tế cơ bản, phân tích nền kinh tế thị trường định hướng xã hội chủ nghĩa tại Việt Nam và các xu hướng toàn cầu.',
    imageUrl: 'https://placehold.co/600x400/6B7280/FFFFFF?text=Kinh+tế+Chính+trị',
    link: '#',
    status: 'coming_soon',
  },
];

// Dữ liệu trích xuất từ file của bạn: :contentReference[oaicite:0]{index=0}
export const persons: Person[] = [
  {
    id: 'p1',
    name: 'Khuông Việt (Ngô Chân Lưu)',
    religion: 'Phật giáo (Vô Ngôn Thông)',
    period: 'Đinh - Tiền Lê (Thế kỷ X)',
    birthDeath: '933–1011',
    bio: 'Thiền sư Ngô Chân Lưu (Khuông Việt) — Tăng thống khai quốc; cao tăng kiêm cố vấn triều đình, đóng vai trò ngoại giao quan trọng với nhà Tống.',
    contributions: [
      'Thiết lập chức Tăng thống, thể chế hóa vai trò Phật giáo trong triều đình',
      'Cố vấn triều chính, tham gia tổ chức bộ máy nhà nước',
      'Tham gia ngoại giao, góp phần bảo vệ độc lập trước nhà Tống'
    ],
    imageUrl: '/images/ngo-chan-luu.jpg',
    gallery: [],
    tags: ['tôn giáo','ngoại giao','chính trị']
  },
  {
    id: 'p2',
    name: 'Vạn Hạnh',
    religion: 'Phật giáo',
    period: 'Tiền Lê - Lý (Thế kỷ X–XI)',
    birthDeath: 'c. 937–1018/1025',
    bio: 'Quốc sư Vạn Hạnh — thiền sư có ảnh hưởng lớn, người dìu dắt Lý Công Uẩn, tham gia chuyển giao quyền lực và thuyết phục dời đô về Thăng Long.',
    contributions: [
      'Đạo diễn cuộc chuyển giao quyền lực (tạo nền tảng cho nhà Lý)',
      'Cố vấn cho việc dời đô về Thăng Long',
      'Định hướng chính trị và tư tưởng cho vương triều mới'
    ],
    imageUrl: '/images/van-hanh.jpg',
    gallery: [],
    tags: ['chính trị','đổi đô','tư tưởng']
  },
  {
    id: 'p3',
    name: 'Trần Nhân Tông (Trần Khâm)',
    religion: 'Phật giáo (Sáng lập Thiền phái Trúc Lâm)',
    period: 'Nhà Trần (Thế kỷ XIII–XIV)',
    birthDeath: '1258–1308',
    bio: 'Vua Trần, Phật hoàng — lãnh đạo tinh thần và quân sự trong hai cuộc kháng chiến chống Nguyên-Mông; sau nhường ngôi xuất gia, sáng lập Thiền phái Trúc Lâm, hòa hợp đạo & đời.',
    contributions: [
      'Lãnh đạo kháng chiến chống Nguyên-Mông (1285, 1288)',
      'Sáng lập và thống nhất Thiền phái Trúc Lâm (thiền thuần Việt)',
      'Thực thi chính sách hòa giải, phục hồi kinh tế và củng cố khối đại đoàn kết'
    ],
    imageUrl: '/images/tran-nhan-tong.jpg',
    gallery: ['/images/tran-1.jpg','/images/tran-2.jpg'],
    tags: ['quốc gia','văn hóa','lãnh đạo']
  },
  {
    id: 'p4',
    name: 'Đoàn Minh Huyên (Phật Thầy Tây An)',
    religion: 'Bửu Sơn Kỳ Hương',
    period: 'Nguyễn (Thế kỷ XIX)',
    birthDeath: '1807–1856',
    bio: 'Phật Thầy Tây An — người sáng lập Bửu Sơn Kỳ Hương; chữa bệnh, tổ chức tín đồ khai hoang và lập các trung tâm dinh điền ở Nam Bộ.',
    contributions: [
      'Sáng lập đạo Bửu Sơn Kỳ Hương',
      'Tổ chức tín đồ khai hoang, lập 4 trung tâm dinh điền lớn, mở mang bờ cõi Nam Bộ',
      'Xây dựng các trại ruộng/căn cứ dân sinh có giá trị cho kháng chiến sau này'
    ],
    imageUrl: '/images/doan-minh-huyen.jpg',
    gallery: [],
    tags: ['khai hoang','Nam Bộ','xã hội']
  },
  {
    id: 'p5',
    name: 'Nguyễn Trường Tộ',
    religion: 'Công giáo',
    period: 'Nguyễn (Thế kỷ XIX)',
    birthDeath: '1830–1871',
    bio: 'Nhà trí thức Công giáo — tác giả nhiều bản điều trần kêu gọi cải cách (giáo dục, kinh tế, quân sự) nhằm canh tân đất nước trước hiểm họa thực dân.',
    contributions: [
      'Soạn hàng loạt điều trần đề xuất cải cách toàn diện (giáo dục, quân sự, kinh tế, ngoại giao)',
      'Thúc đẩy phổ cập kiến thức thực tiễn và dùng chữ Quốc ngữ để mở rộng dân trí',
      'Đại diện cho khuynh hướng tiếp nhận khoa học - kỹ thuật phương Tây nhằm tự cường'
    ],
    imageUrl: '/images/nguyen-truong-to.jpg',
    gallery: [],
    tags: ['cải cách','giáo dục','hội nhập']
  },
  {
    id: 'p6',
    name: 'Huỳnh Phú Sổ',
    religion: 'Phật giáo Hòa Hảo',
    period: 'Cận đại (Thế kỷ XX)',
    birthDeath: '1920–1947',
    bio: 'Người sáng lập Phật giáo Hòa Hảo — phát triển phong trào tu tại gia ở miền Tây, nhấn mạnh Tứ Ân (trong đó có Ân Đất Nước) và khơi dậy tinh thần yêu nước trong quần chúng.',
    contributions: [
      'Thành lập Phật giáo Hòa Hảo và phổ biến giáo lý giản dị, gắn với đời sống nông dân',
      'Khơi dậy tinh thần yêu nước và tổ chức quần chúng tham gia các phong trào kháng chiến',
      'Đóng góp cho an sinh và tổ chức cộng đồng nông thôn'
    ],
    imageUrl: '/images/huynh-phu-so.jpg',
    gallery: [],
    tags: ['nông thôn','phong trào','kháng chiến']
  },
  {
    id: 'p7',
    name: 'Trung đội Phật tử chùa Cổ Lễ',
    religion: 'Phật giáo',
    period: 'Kháng chiến chống Pháp (1947)',
    birthDeath: '',
    bio: 'Ngày 27/2/1947 tại chùa Cổ Lễ (Nam Định), 27 nhà sư đã phát nguyện “cởi áo cà sa, khoác chiến bào”, thành lập Trung đội Phật tử Vệ quốc đoàn. Đây là biểu tượng của tinh thần nhập thế, yêu nước và sẵn sàng hy sinh vì Tổ quốc.',
    contributions: [
      'Thành lập Trung đội Phật tử tại chùa Cổ Lễ năm 1947',
      'Tham gia chiến đấu bảo vệ Tổ quốc trong kháng chiến chống Pháp',
      'Khơi dậy phong trào yêu nước trong giới Phật giáo với tinh thần "đạo pháp gắn liền dân tộc"'
    ],
    imageUrl: '/images/chua-co-le.jpg',
    gallery: ['/images/co-le-1.jpg','/images/co-le-2.jpg'],
    coords: [{ lat: 20.3229, lng: 106.1977 }],
    tags: ['kháng chiến','phật giáo','yêu nước']
  },
  {
    id: 'p8',
    name: 'Đại tá Đinh Thế Hinh (Thích Pháp Lữ)',
    religion: 'Phật giáo',
    period: 'Kháng chiến chống Pháp - hiện đại',
    birthDeath: '',
    bio: 'Nhà sư Thích Pháp Lữ (thế danh Đinh Thế Hinh) là một trong 27 tăng sĩ chùa Cổ Lễ “cởi áo cà sa, khoác chiến bào”. Ông đã cống hiến trọn đời cho quân đội và được phong quân hàm Đại tá Quân đội nhân dân Việt Nam.',
    contributions: [
      'Tham gia Trung đội Phật tử năm 1947',
      'Trực tiếp chiến đấu trong kháng chiến chống Pháp và chống Mỹ',
      'Gắn bó trọn đời với quân đội, tiêu biểu cho tinh thần “từ bi và dũng cảm”'
    ],
    imageUrl: '/images/thich-phap-lu.jpg',
    gallery: [],
    coords: [{ lat: 20.3229, lng: 106.1977 }],
    tags: ['phật giáo','quân đội','anh hùng']
  },
  {
    id: 'p9',
    name: 'Thượng tọa Thích Tâm Vượng',
    religion: 'Phật giáo',
    period: 'Hiện đại (Thế kỷ XXI)',
    birthDeath: '',
    bio: 'Thượng tọa Thích Tâm Vượng, Viện chủ chùa Cổ Lễ (Nam Định), từng tham gia chiến đấu bảo vệ Tổ quốc trước khi trở lại đời sống tu hành. Ông kế tục và phát huy tinh thần yêu nước của các bậc tiền bối trong thời bình.',
    contributions: [
      'Tham gia chiến đấu bảo vệ Tổ quốc',
      'Kế thừa và phát huy truyền thống yêu nước của Phật giáo chùa Cổ Lễ',
      'Đóng góp cho công tác hoằng pháp và xây dựng đoàn kết tôn giáo'
    ],
    imageUrl: '/images/thich-tam-vuong.jpg',
    gallery: [],
    coords: [{ lat: 20.3229, lng: 106.1977 }],
    tags: ['phật giáo','truyền thống','xây dựng đất nước']
  },
  {
    id: 'p10',
    name: 'Hòa thượng Thích Bảo Nghiêm',
    religion: 'Phật giáo',
    period: 'Quốc hội khóa XV (2021–2026)',
    birthDeath: '',
    bio: 'Phó Chủ tịch Hội đồng Trị sự kiêm Trưởng Ban Hoằng pháp Trung ương GHPGVN, Đại biểu Quốc hội nhiều khóa, đại diện tiếng nói của Phật giáo tại nghị trường.',
    contributions: [
      'Đại biểu Quốc hội các khóa XIII, XIV, XV',
      'Đóng góp cho công tác hoằng pháp và xây dựng chính sách tôn giáo',
      'Góp phần xây dựng khối đại đoàn kết toàn dân tộc'
    ],
    imageUrl: '/images/thich-bao-nghiem.jpg',
    gallery: [],
    coords: [{ lat: 21.0278, lng: 105.8342 }],
    tags: ['phật giáo','quốc hội','đại đoàn kết']
  },
  {
    id: 'p11',
    name: 'Hòa thượng Thích Thanh Quyết',
    religion: 'Phật giáo',
    period: 'Quốc hội khóa XV (2021–2026)',
    birthDeath: '',
    bio: 'Phó Chủ tịch Hội đồng Trị sự Trung ương, Trưởng Ban Trị sự GHPGVN tỉnh Quảng Ninh, đại biểu Quốc hội nhiều khóa, đóng góp cho công tác dân vận và phát triển vùng Phật giáo Quảng Ninh.',
    contributions: [
      'Đại biểu Quốc hội các khóa XIII, XIV, XV',
      'Phát triển Phật giáo tại vùng Đông Bắc',
      'Tham gia xây dựng chính sách pháp luật liên quan đến tôn giáo'
    ],
    imageUrl: '/images/thich-thanh-quyet.jpg',
    gallery: [],
    coords: [{ lat: 20.9500, lng: 107.0833 }],
    tags: ['phật giáo','chính sách','đại đoàn kết']
  },
  {
    id: 'p12',
    name: 'Thượng tọa Thích Đức Thiện',
    religion: 'Phật giáo',
    period: 'Quốc hội khóa XV (2021–2026)',
    birthDeath: '',
    bio: 'Phó Chủ tịch kiêm Tổng Thư ký Hội đồng Trị sự GHPGVN, đại biểu Quốc hội khóa XV (tỉnh Điện Biên), đại diện thế hệ tăng sĩ trẻ có học vấn và năng lực quản lý.',
    contributions: [
      'Đóng góp vào công tác điều hành và cải tiến tổ chức GHPGVN',
      'Thúc đẩy các hoạt động giao lưu tôn giáo quốc tế',
      'Đại diện Phật giáo tham gia xây dựng luật và chính sách quốc gia'
    ],
    imageUrl: '/images/thich-duc-thien.jpg',
    gallery: [],
    coords: [{ lat: 21.3833, lng: 103.0167 }],
    tags: ['phật giáo','lãnh đạo trẻ','chính sách']
  },
  {
    id: 'p13',
    name: 'Thượng tọa Lý Minh Đức',
    religion: 'Phật giáo Nam tông Khmer',
    period: 'Quốc hội khóa XV (2021–2026)',
    birthDeath: '',
    bio: 'Phó Trưởng Ban Trị sự GHPGVN tỉnh Sóc Trăng, đại biểu Quốc hội khóa XIV–XV, đại diện cộng đồng Phật giáo Nam tông Khmer, góp phần củng cố đoàn kết dân tộc và tôn giáo vùng Tây Nam Bộ.',
    contributions: [
      'Đại biểu Quốc hội khóa XIV–XV',
      'Đóng góp phát triển vùng Khmer Nam Bộ',
      'Tăng cường đoàn kết tôn giáo và dân tộc'
    ],
    imageUrl: '/images/ly-minh-duc.jpg',
    gallery: [],
    coords: [{ lat: 9.6034, lng: 105.9739 }],
    tags: ['khmer','phật giáo','đoàn kết']
  },
  {
    id: 'p14',
    name: 'Linh mục Nguyễn Văn Riễn',
    religion: 'Công giáo',
    period: 'Quốc hội khóa XV (2021–2026)',
    birthDeath: '',
    bio: 'Chánh xứ Giáo xứ Thánh Giuse (Phú Cường), Phó Chủ tịch kiêm Tổng Thư ký Ủy ban Đoàn kết Công giáo Việt Nam, đại biểu Quốc hội khóa XIV–XV, đóng góp tích cực cho đoàn kết tôn giáo và công tác xã hội.',
    contributions: [
      'Đại biểu Quốc hội khóa XIV–XV',
      'Lãnh đạo Ủy ban Đoàn kết Công giáo Việt Nam',
      'Thúc đẩy tinh thần “Sống tốt đời đẹp đạo” trong cộng đồng Công giáo'
    ],
    imageUrl: '/images/nguyen-van-rien.jpg',
    gallery: [],
    coords: [{ lat: 11.3254, lng: 106.4770 }],
    tags: ['công giáo','đại đoàn kết','xã hội']
  }
];
