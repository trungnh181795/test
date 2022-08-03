app.component("consequence-section", {
    template: /*html*/ `
      <div class="consequence section vn-bg-blue" id="consequenceSection">
         <div class="container">
            <div class="consequence-title font-22 weight-600 vn-text-white text-center">
                Nếu tiếp tục nằm, chuyện gì sẽ xảy ra?
            </div>
            <div class="row">
                <div v-for="(consequence, index) in consequences" class="col-6">
                    <media-card :img="consequence.img" :label="consequence.label"></media-card>
                </div>
            </div>
        </div>
      </div>
          `,
    data() {
      return {
        consequences: [
            {
                img: './assets/images/arm-scratching.jpg',
                label: 'Rệp giường <span class="vn-text-secondary">cắn gây  đỏ, ngứa rát</span> và <span class="vn-text-secondary">dị ứng</span>'
            },
            {
                img: './assets/images/neck-hurt.jpg',
                label: 'Nệm cũ kém nâng đỡ  gây <span class="vn-text-secondary">đau lưng, mỏi cổ</span>'
            },
            {
                img: './assets/images/kid.jpg',
                label: '<span class="vn-text-secondary">Rệp giường, bụi mịn và  da chết</span> gây các bệnh  về đường hô hấp'
            },
            {
                img: './assets/images/girl-with-cup.jpg',
                label: 'Nệm xuống cấp gây mất ngủ, <span class="vn-text-secondary">mệt mỏi</span> và  <span class="vn-text-secondary">uể oải kéo dài</span>'
            },
            {
                img: './assets/images/stinky.jpg',
                label: '<span class="vn-text-secondary">Mùi hôi</span> và <span class="vn-text-secondary">thẩm mỹ</span> ảnh hưởng đến <span class="vn-text-secondary">không  gian nghỉ ngơi</span> '
            },
            {
                img: './assets/images/rash.jpg',
                label: 'Nệm cũ xuống cấp gây <span class="vn-text-secondary">hầm bí, mụn lưng</span>'
            }
        ]
      };
    },
  });
  