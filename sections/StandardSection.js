app.component("standard-section", {
    template: /*html*/ `
      <div class="standard section vn-bg-primary" id="standardSection">
        <div class="container">
            <div class="standard-title font-22 weight-600 vn-text-white text-center">
                Đã đến lúc thay nệm mới
            </div>
            <div class="font-14 weight-300 vn-text-white text-center">
                Hãy lựa chọn những chiếc nệm bền vững<br> trên 6 tiêu chí sau 
            </div>
            <div class="standard-list row">
                <div v-for="(standard, index) in standards" class="col-4">
                    <styled-icon
                        :vertical="true"
                        :img="standard.icon"
                        :label="standard.label"
                        :width="'80px'"
                    >
                    </styled-icon>
                </div>
            </div>
            <styled-button 
                :msg="'khám phá ngay'"
                :bottom="'33px'"
            >
            </styled-button>
        </div>
      </div>
          `,
    data() {
      return {
        standards: [
            {
                icon: './assets/icons/lock.svg',
                label: 'Nhà bán<br>uy tín'
            },
            {
                icon: './assets/icons/like-hand.svg',
                label: 'Feedback<br>tích cực'
            },
            {
                icon: './assets/icons/arrow-on-foam.svg',
                label: 'Khả năng<br>thoáng khí'
            },
            {
                icon: './assets/icons/lying-on-foam.svg',
                label: 'Độ cứng phù<br>hợp với thể<br>trạng cơ thể'
            },
            {
                icon: './assets/icons/coin.svg',
                label: 'Giá thành<br>phù hợp với<br>chất lượng'
            },
            {
                icon: './assets/icons/squished-cushion.svg',
                label: 'Chất liệu lành<br>tính cho cả<br>gia đình'
            }
        ],
      };
    },
  });
  