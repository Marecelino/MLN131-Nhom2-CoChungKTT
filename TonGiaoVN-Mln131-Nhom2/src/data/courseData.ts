import type { Course, QuizQuestion  , Topic , TimelineEvent} from '../types';



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
      <p>Việt Nam là một quốc gia đa tôn giáo: hiện có 16 tôn giáo với 43 tổ chức được công nhận, hơn 29.000 cơ sở thờ tự và hàng chục nghìn chức sắc, chức việc. Các tôn giáo nội sinh (Cao Đài, Hòa Hảo) và tôn giáo du nhập (Phật giáo, Công giáo, Tin Lành, Hồi giáo…) tồn tại bên nhau, mang nhiều dấu ấn văn hóa địa phương và chung sống hòa bình trên diện rộng.</p>

      <h3 class="lesson-modal__subtitle">Đặc điểm nổi bật</h3>
      <ul class="lesson-modal__list">
        <li>Đa dạng về nguồn gốc, truyền thống và hình thức tổ chức.</li>
        <li>Tín đồ phần lớn là lao động, có tinh thần yêu nước, gắn bó với cộng đồng.</li>
        <li>Chức sắc tôn giáo có vai trò quan trọng về đời sống tâm linh và có ảnh hưởng xã hội.</li>
      </ul>

      <blockquote>
        "Không có tôn giáo nào du nhập vào Việt Nam mà không mang dấu ấn bản sắc văn hóa Việt Nam."
        <cite>— Tài liệu tham khảo</cite>
      </blockquote>
<!-- Nhúng video YouTube bắt đầu từ 443 giây -->
<div class="lesson-modal__video" style="position:relative;padding-top:56.25%;height:0;margin:1rem 0;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/gzkVgU7J42k"
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
      <p>Các thế lực thù địch coi tôn giáo là "lĩnh vực mũi nhọn" để gây mất ổn định nội bộ — lợi dụng tính nhạy cảm của niềm tin tôn giáo, mối quan hệ quốc tế của các hội nhóm tôn giáo và môi trường mạng để khuếch đại vấn đề.</p>

      <h3 class="lesson-modal__subtitle">Bốn thủ đoạn chính</h3>
      <ol class="lesson-modal__list--ordered">
        <li><strong>Xuyên tạc chính sách:</strong> Phát tán thông tin sai lệch, vu cáo "đàn áp tôn giáo", bóp méo nội dung Luật Tín ngưỡng, tôn giáo.</li>
        <li><strong>Kích động tranh chấp đất đai:</strong> Lợi dụng khiếu kiện liên quan cơ sở thờ tự để tạo điểm nóng, xuyên tạc thực tế thành "cướp đất tôn giáo".</li>
        <li><strong>Thành lập tổ chức bất hợp pháp:</strong> Lập hội, nhóm núp bóng tôn giáo nhưng thực chất mang mục tiêu chính trị, tập hợp lực lượng chống đối.</li>
        <li><strong>Quốc tế hóa vấn đề:</strong> Chuyển các vụ việc đã bị khuếch đại ra diễn đàn quốc tế để gây sức ép và tạo câu chuyện "vi phạm nhân quyền".</li>
      </ol>

      <div class="note-card note-card--danger"><strong>Lưu ý thực tiễn:</strong> Những chiến thuật này thường vận hành theo chuỗi: từ tạo/khai thác mâu thuẫn địa phương → khuếch đại thông tin → tổ chức tập hợp → vận động quốc tế.</div>

      <!-- Sources:  -->
    `
  },
  {
    id: 3,
    chapter: 3,
    title: "Nghiên cứu Tình huống: Tây Nguyên & Tây Bắc",
    duration: "50 phút",
    description:
      "Đi sâu vào âm mưu thành lập 'Nhà nước Đê-ga' và 'Nhà nước Mông'.",
    content: `
      <h3 class="lesson-modal__subtitle">Tình huống 1: Tây Nguyên — FULRO và "Tin lành Đê-ga"</h3>
      <p>Từ việc lợi dụng khó khăn kinh tế và bất cập lịch sử, một số tổ chức đội lốt tôn giáo (như các nhóm liên quan đến FULRO khi lưu vong) đã cố gắng chính trị hóa đức tin, thành lập các tổ chức mang màu sắc ly khai. Đỉnh điểm là các vụ gây rối quy mô (ví dụ các sự kiện năm 2001 và 2004) đã được phân tích là có sự tổ chức và lợi dụng tôn giáo để kích động bạo lực.</p>

      <h3 class="lesson-modal__subtitle">Tình huống 2: Tây Bắc — Pha trộn tà đạo và chia rẽ văn hóa</h3>
      <p>Ở một số vùng Tây Bắc, thủ đoạn là phát triển các dạng tà đạo (pha trộn giáo lý, yêu cầu từ bỏ phong tục, thờ cúng tổ tiên) để cô lập tín đồ, làm suy yếu liên hệ cộng đồng và dễ thao túng về chính trị, với mục tiêu lâu dài là kích động ly khai hoặc tách rời.</p>

      <div class="note-card note-card--danger"><strong>Cảnh báo chiến lược:</strong> Các âm mưu này thường nhắm vào vùng nghèo, vùng sâu, nơi tồn tại các mâu thuẫn kinh tế — do đó giải pháp phải kết hợp an ninh với phát triển.</div>
<div class="lesson-modal__video" style="position:relative;padding-top:56.25%;height:0;margin:1rem 0;">
  <iframe
    src="https://www.youtube.com/embed/hcoqCCGQFAI
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
        <li><strong>Hiến pháp 2013 — Điều 24:</strong> Khẳng định quyền tự do tín ngưỡng, tôn giáo; tôn giáo bình đẳng trước pháp luật và Nhà nước tôn trọng, bảo hộ quyền này.</li>
        <li><strong>Luật Tín ngưỡng, Tôn giáo 2016:</strong> Thiết lập hành lang pháp lý minh bạch (định nghĩa rõ thuật ngữ, quy định quyền và thủ tục, đơn giản hóa thủ tục công nhận tổ chức tôn giáo).</li>
        <li><strong>Bộ luật Hình sự — Điều 116 (sửa đổi):</strong> Hình sự hóa hành vi lợi dụng tôn giáo để phá hoại chính sách đoàn kết, chia rẽ dân tộc hoặc chống chính quyền (khi có mục đích chính trị rõ ràng).</li>
      </ul>

      <div class="note-card note-card--info"><strong>Ghi chú:</strong> Hệ thống pháp luật vận hành theo nguyên tắc kép: bảo vệ hoạt động tôn giáo hợp pháp đồng thời có công cụ xử lý khi hoạt động đó bị lạm dụng cho mục tiêu chống phá.</div>

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
      <div class="note-card note-card--info"><strong>Nguyên tắc:</strong> Vận động đồng bào tôn giáo thông qua chính sách, tuyên truyền đúng đắn, tôn vinh truyền thống "tốt đời, đẹp đạo" và củng cố khối đại đoàn kết toàn dân.</div>

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
      <p>Sinh viên cần phát triển kỹ năng kiểm chứng thông tin, nhận diện ngôn ngữ kích động, nguồn tin thiếu kiểm chứng, ảnh/video cắt ghép để tránh bị lôi kéo. Việc chủ động kiểm chứng trước khi chia sẻ là bắt buộc.</p>

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

    <img src="/images/party-state-policy.png" alt="Hiến pháp và luật tôn giáo" class="lesson-modal__image" />

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

    <img src="/images/legal-framework.png" alt="Khuôn khổ pháp lý - Luật 2016 và Điều 116" class="lesson-modal__image" />

    <h3 class="lesson-modal__subtitle">4. Vai trò của các cơ quan và trách nhiệm thực thi</h3>
    <p>Công tác tôn giáo là trách nhiệm của cả hệ thống chính trị: tổ chức đảng, chính quyền, Mặt trận Tổ quốc, các đoàn thể — phối hợp quản lý, vận động, giải quyết khiếu nại, bảo đảm quyền và xử lý hành vi vi phạm.</p>

    <h3 class="lesson-modal__subtitle">5. Trích dẫn minh họa từ giáo trình</h3>
    <blockquote>
      "Tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân, đang và sẽ tồn tại cùng dân tộc trong quá trình xây dựng chủ nghĩa xã hội ở nước ta." 
      <cite> — Giáo trình CNXHKH .</cite>
    </blockquote>

    <blockquote>
      "Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng." 
      <cite>— Nghị quyết 25-NQ/TW & giáo trình; </cite>
    </blockquote>

    <h3 class="lesson-modal__subtitle">6. Nguồn & Tài liệu tham khảo (để đối chiếu)</h3>
    <ul class="lesson-modal__list">
      <li>Giáo trình chương VI: <em>II — Tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội</em>. :contentReference[oaicite:2]{index=2}</li>
      <li>Báo cáo/ phân tích: <em>Tôn giáo, Chính sách và Âm mưu Lợi dụng</em> (phân tích Luật Tín ngưỡng, tôn giáo 2016; Điều 116 BLHS; công tác vận động quần chúng). :contentReference[oaicite:3]{index=3}</li>
      <li>Văn bản luật tham khảo: Hiến pháp 2013 (Điều 24); Luật Tín ngưỡng, Tôn giáo 2016; Bộ luật Hình sự (Điều 116). </li>
    </ul>

    <p class="lesson-modal__note"><strong>Ghi chú dành cho giảng viên:</strong> khi dùng nội dung này, có thể trích trực tiếp Điều 24 Hiến pháp và các đoạn cụ thể của Luật 2016/ Điều 116 để học viên đọc — đồng thời khuyến nghị phân tích trường hợp thực tế (ví dụ: quy trình công nhận tổ chức tôn giáo; một vụ lợi dụng tôn giáo đã bị pháp luật xử lý) để minh họa.</p>

    <!-- Nguồn file: Giáo trình 'II- TÔN GIÁO TRONG THỜI KỲ' (xem nội dung chính sách) :contentReference[oaicite:5]{index=5};
         Báo cáo 'Tôn giáo, Chính sách và Âm mưu Lợi dụng' (phân tích Luật 2016, Điều 116, NQ 25-NQ/TW).  -->
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
    period: 'Thời kỳ Hùng Vương - An Dương Vương',
    title: 'Nền tảng Tín ngưỡng Bản địa',
    description: 'Các hình thức tín ngưỡng nguyên thủy như thờ cúng tổ tiên, thờ các vị thần tự nhiên, và thờ Mẫu đã hình thành, đặt nền móng cho đời sống tâm linh người Việt.',
    side: 'right',
    imageUrl: 'https://placehold.co/400x200/BFDBFE/1E3A8A?text=Tín+ngưỡng+Bản+địa',
  },
  {
    period: 'Thế kỷ X - XIV (Nhà Lý - Trần)',
    title: 'Phật giáo là Quốc giáo',
    description: 'Du nhập từ đầu Công nguyên, Phật giáo phát triển cực thịnh, trở thành hệ tư tưởng chủ đạo. Vua Trần Nhân Tông sáng lập Thiền phái Trúc Lâm Yên Tử.',
    side: 'left',
    imageUrl: 'https://placehold.co/400x200/FDE68A/B45309?text=Phật+giáo+Trúc+Lâm',
  },
  {
    period: 'Thế kỷ XVI - XVII',
    title: 'Công giáo và Chữ Quốc ngữ',
    description: 'Các giáo sĩ Dòng Tên như Alexandre de Rhodes đến truyền giáo, góp phần quan trọng vào việc hệ thống hóa và La-tinh hóa tiếng Việt, tạo ra chữ Quốc ngữ.',
    side: 'right',
    imageUrl: 'https://placehold.co/400x200/BFDBFE/1E3A8A?text=Alexandre+de+Rhodes',
  },
  {
    period: 'Nửa đầu thế kỷ XX',
    title: 'Sự ra đời các tôn giáo nội sinh',
    description: 'Gắn liền với bối cảnh xã hội và phong trào giải phóng dân tộc, đạo Cao Đài (1926) và Phật giáo Hòa Hảo (1939) ra đời.',
    side: 'left',
    imageUrl: 'https://placehold.co/400x200/FDE68A/B45309?text=Đạo+Cao+Đài',
  },
  {
    period: 'Ngày 14/6/1955',
    title: 'Sắc lệnh 234/SL',
    description: 'Chủ tịch Hồ Chí Minh ký Sắc lệnh 234/SL, đặt nền tảng pháp lý đầu tiên cho chính sách tôn giáo của Nhà nước Việt Nam Dân chủ Cộng hòa.',
    side: 'right',
    imageUrl: 'https://placehold.co/400x200/BFDBFE/1E3A8A?text=Sắc+lệnh+234/SL',
  },
  {
    period: 'Ngày 18/11/2016',
    title: 'Luật Tín ngưỡng, Tôn giáo',
    description: 'Quốc hội thông qua Luật Tín ngưỡng, Tôn giáo (có hiệu lực từ 2018), thể chế hóa toàn diện quan điểm của Đảng và Nhà nước trong thời kỳ đổi mới.',
    side: 'left',
    imageUrl: 'https://placehold.co/400x200/FDE68A/B45309?text=Luật+Tín+ngưỡng',
  },
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