import type { Course, QuizQuestion } from '../types';

export const religionCourse: Course = {
  id: 'tongiao-vn',
  title: 'Tự do Tín ngưỡng & An ninh Quốc gia',
  subtitle: '🎓 Khóa học Chuyên đề Đại học',
  description: 'Phân tích chính sách tôn giáo Việt Nam, các âm mưu lợi dụng và vai trò của sinh viên trong bối cảnh hiện đại, dựa trên các báo cáo nghiên cứu chuyên sâu.',
  lessons: [
    {
      id: 1,
      chapter: 1,
      title: 'Bức tranh Toàn cảnh Tôn giáo Việt Nam',
      duration: '30 phút',
      description: 'Giới thiệu quan điểm của Đảng, Nhà nước và bối cảnh đa dạng, hòa bình của tôn giáo tại Việt Nam.',
      content: `
        <h3 class="lesson-modal__subtitle">Nền tảng Lý luận & Bối cảnh</h3>
        <p>Quan điểm của Đảng và Nhà nước Việt Nam về tôn giáo được xác định rõ: đây là một nhu cầu tinh thần của một bộ phận nhân dân, sẽ tồn tại lâu dài cùng dân tộc. Bối cảnh tôn giáo Việt Nam có những đặc điểm cơ bản: tính đa dạng, sự chung sống hòa bình, và lòng yêu nước của đa số tín đồ.</p>
        <img src="https://placehold.co/700x300/e0f2fe/1e40af?text=Sự+đa+dạng+tôn+giáo" alt="Đa dạng tôn giáo" class="lesson-modal__image">
        <h3 class="lesson-modal__subtitle">Thách thức Cốt lõi</h3>
        <p>Vấn đề trung tâm là cân bằng giữa việc bảo đảm quyền tự do tín ngưỡng đã được hiến định và nhiệm vụ bảo vệ an ninh quốc gia. Đây không phải là mâu thuẫn trong chính sách, mà là một bài toán quản trị đòi hỏi sự kết hợp hài hòa giữa pháp quyền, phát triển kinh tế - xã hội và công tác vận động quần chúng.</p>
      `
    },
    {
      id: 2,
      chapter: 2,
      title: 'Âm mưu & Thủ đoạn Lợi dụng Tôn giáo',
      duration: '60 phút',
      description: 'Phân tích chiến lược "Diễn biến hòa bình" và 4 thủ đoạn chính mà các thế lực thù địch sử dụng.',
      content: `
         <h3 class="lesson-modal__subtitle">Chiến lược "Diễn biến hòa bình"</h3>
         <p>Trong chiến lược này, tôn giáo được xem là một "vũ khí lợi hại" để công kích và phá hoại từ bên trong, nhằm xóa bỏ vai trò lãnh đạo của Đảng Cộng sản.</p>
         <div class="note-card"><strong>Tại sao là tôn giáo?</strong> Vì đây là vấn đề nhạy cảm, có khả năng kết nối cộng đồng mạnh mẽ và có mối quan hệ với các tổ chức quốc tế.</div>
         <h3 class="lesson-modal__subtitle">Phân tích 4 thủ đoạn chính</h3>
         <ol class="lesson-modal__list--ordered">
             <li><strong>Xuyên tạc chính sách & lan truyền tin giả:</strong> Tuyên truyền luận điệu "đàn áp tôn giáo" qua không gian mạng.</li>
             <li><strong>Kích động tranh chấp đất đai:</strong> Lợi dụng các vướng mắc về đất đai, cơ sở thờ tự để thổi phồng, tạo "điểm nóng".</li>
             <li><strong>Thành lập tổ chức bất hợp pháp:</strong> Lập các hội, nhóm núp bóng tôn giáo để tập hợp lực lượng chính trị đối trọng.</li>
             <li><strong>Quốc tế hóa vấn đề:</strong> Biến các vụ việc trong nước thành vấn đề "nhân quyền" tại các diễn đàn quốc tế để kêu gọi can thiệp.</li>
         </ol>
      `
    },
    {
      id: 3,
      chapter: 3,
      title: 'Nghiên cứu Tình huống: Tây Nguyên & Tây Bắc',
      duration: '50 phút',
      description: 'Đi sâu vào các vụ việc điển hình về âm mưu thành lập "Nhà nước Đê-ga" và "Nhà nước Mông".',
      content: `
        <h3 class="lesson-modal__subtitle">Tình huống 1: Tây Nguyên và âm mưu "Nhà nước Đê-ga"</h3>
        <p>Các thế lực thù địch, tàn dư FULRO đã lợi dụng khó khăn kinh tế và khác biệt văn hóa để chia rẽ khối đại đoàn kết. Trọng tâm là việc chính trị hóa đức tin thông qua tổ chức ngụy tạo "Tin lành Đê-ga", đỉnh điểm là các vụ bạo loạn năm 2001 và 2004.</p>
        <h3 class="lesson-modal__subtitle">Tình huống 2: Tây Bắc và âm mưu "Nhà nước Mông"</h3>
        <p>Thủ đoạn chính là tuyên truyền các "tà đạo" như "Giê sùa", pha trộn giáo lý Kitô giáo với tín ngưỡng bản địa, yêu cầu tín đồ từ bỏ thờ cúng tổ tiên để dễ dàng thao túng, kích động tư tưởng ly khai.</p>
      `
    },
    {
      id: 4,
      chapter: 4,
      title: 'Chính sách Nhất quán & Hệ thống Pháp luật',
      duration: '55 phút',
      description: 'Phân tích nền tảng Hiến pháp, Luật Tín ngưỡng, tôn giáo và các công cụ pháp lý để bảo vệ an ninh quốc gia.',
      content: `
        <h3 class="lesson-modal__subtitle">Nền tảng Hiến pháp và Pháp luật</h3>
        <ul class="lesson-modal__list">
          <li><strong>Hiến pháp 2013 (Điều 24):</strong> Khẳng định "Mọi người có quyền tự do tín ngưỡng, tôn giáo".</li>
          <li><strong>Luật Tín ngưỡng, tôn giáo (2016):</strong> Tạo hành lang pháp lý minh bạch, đơn giản hóa thủ tục và quy định rõ các hành vi bị cấm.</li>
        </ul>
        <div class="note-card note-card--danger"><strong>Công cụ pháp lý:</strong> Bộ luật Hình sự quy định về "Tội phá hoại chính sách đoàn kết", hình sự hóa các hành vi gây chia rẽ tôn giáo nhằm chống chính quyền, phân biệt rõ giữa "tôn giáo" (được bảo vệ) và "lợi dụng tôn giáo" (bị truy tố).</div>
      `
    },
    {
      id: 5,
      chapter: 5,
      title: 'Giải pháp từ Gốc rễ & Công tác Vận động',
      duration: '45 phút',
      description: 'Tìm hiểu về vai trò của phát triển kinh tế - xã hội và công tác vận động quần chúng trong việc củng cố khối đại đoàn kết.',
      content: `
        <h3 class="lesson-modal__subtitle">Phương pháp "Công tác vận động quần chúng"</h3>
        <p>Nghị quyết số 25-NQ/TW xác định: "Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng". Mục tiêu là xây dựng sự đồng thuận xã hội, đoàn kết toàn dân với nòng cốt là Mặt trận Tổ quốc Việt Nam.</p>
        <h3 class="lesson-modal__subtitle">Giải quyết nguyên nhân gốc rễ: Phát triển Kinh tế - Xã hội</h3>
        <p>Đảng và Nhà nước coi việc nâng cao đời sống vật chất, tinh thần cho nhân dân, đặc biệt ở vùng đồng bào dân tộc thiểu số, là giải pháp căn cơ để vô hiệu hóa âm mưu của kẻ thù, củng cố "thế trận lòng dân".</p>
      `
    },
    {
      id: 6,
      chapter: 6,
      title: 'Vai trò và Trách nhiệm của Sinh viên',
      duration: '40 phút',
      description: 'Xác định vai trò xung kích của sinh viên trong việc bảo vệ nền tảng tư tưởng trên không gian mạng.',
      content: `
        <h3 class="lesson-modal__subtitle">Nâng cao "Miễn dịch số"</h3>
        <p>Sinh viên là mục tiêu chính của "diễn biến hòa bình". Nhiệm vụ hàng đầu là phải trang bị <strong>"năng lực miễn dịch số"</strong> - khả năng nhận diện và sàng lọc thông tin xấu độc trên không gian mạng.</p>
        <h3 class="lesson-modal__subtitle">Mặt trận trí tuệ: "Lấy xây để chống"</h3>
        <p>Không chỉ phòng thủ, sinh viên cần chủ động tấn công trên mặt trận trí tuệ bằng cách:</p>
        <ul class="lesson-modal__list">
            <li><strong>Đấu tranh trực tiếp:</strong> Viết bài, bình luận phản bác các luận điệu sai trái một cách có lập luận.</li>
            <li><strong>Đấu tranh gián tiếp (Lấy "xây" để "chống"):</strong> Chủ động lan tỏa thông tin tích cực, những câu chuyện thật về thành tựu đất nước để tạo ra dòng chảy thông tin áp đảo, đẩy lùi tin giả.</li>
        </ul>
      `
    },
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