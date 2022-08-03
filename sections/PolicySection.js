app.component("policy-section", {
    template: /*html*/ `
      <div class="section vn-bg-primary-light" id="policySection">
       <div class="container">
            <div class="policy-title font-24 weight-500 vn-text-white text-center">
                Chính sách từ Vua Nệm
            </div>
            <div class="font-14 weight-300 vn-text-white text-center">
                Vấn đề tài chính không nên là rào cản ngăn bạn  đến với những giấc ngủ ngon. Tại Vua Nệm,  chúng tôi mang đến rất nhiều giải pháp hỗ trợ  người tiêu dùng
            </div>
            <ul class="policy-list">
                <li 
                    v-for="(term, index) in terms" 
                    class="policy-list-item"
                >
                    <div class="policy-list-item-img">
                        <img :src="term.img" alt="" />
                    </div>
                    <div class="policy-list-item-content">
                        <div 
                            class="font-14 weight-400 vn-text-white text-left"
                            v-html="term.label"
                        >
                        </div>
                        <a class="d-block font-14 weight-300 vn-text-white text-start text-underline">
                            {{ term.action.label }}
                        </a>
                    </div>
                </li>
            </ul>
       </div>
      </div>
          `,
    data() {
      return {
        terms: [
            {
                img: './assets/images/couple.jpg',
                label: 'Thanh toán trả góp<span class="vn-text-teal">0% lãi suất</span> - 0% âu lo của chúng tôi',
                action: {
                    label: 'Xem thêm',
                    event: 'click'
                }
            },
            {
                img: './assets/images/girl-sleeping.jpg',
                label: 'Trải nghiệm <span class="vn-text-teal">100 ngày nằm thử miễn phí</span> để tìm được chiếc nệm phù hợp!',
                action: {
                    label: 'Xem thêm',
                    event: 'click'
                },
            },
            {
                img: './assets/images/machine.jpg',
                label: '<span class="vn-text-teal">Máy Test Nệm đến từ Canada</span> - 5 phút chọn ngay nệm phù hợp!',
                action: {
                    label: 'Test ngay',
                    event: 'click'
                },
            },
            {
                img: './assets/images/cushion.jpg',
                label: 'Vua Nệm<span class="vn-text-teal"> thu mua nệm cũ</span> với mức giá hỗ trợ tới 5 triệu đồng',
                action: {
                    label: 'Xem thêm',
                    event: 'click'
                },
            },
        ],
      };
    },
  });
  