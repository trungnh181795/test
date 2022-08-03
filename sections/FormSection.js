app.component("form-section", {
    template: /*html*/ `
      <div class="section vn-bg-blue" id="formSection">
        <div class="container">
            <div class="form-instruction">
                <div class="form-instruction-title text-center">
                    <div class="font-30 weight-400 vn-text-white">
                        Chớp giá tốt
                    </div>
                    <div class="font-36 weight-600 vn-text-white text-uppercase">
                        sắm nệm ngay
                    </div>
                </div>
                <div class="form-instruction-list">
                    <form-step 
                        v-for="(step, index) in steps" 
                        :icon="step.icon"
                        :label="step.label"
                        :index="index"
                    ></form-step>
                </div>
            </div>
            <register-form></register-form>
        </div>        
      </div>
          `,
    data() {
      return {
        steps: [
            {
                icon: './assets/icons/check-list.svg',
                label: 'Để lại <span class="weight-400">thông tin</span> của bạn'
            },
            {
                icon: './assets/icons/head-phone.svg',
                label: 'Nhân viên <span class="weight-400">tư vấn</span> sản phẩm phù hợp với nhu cầu của bạn'
            },
            {
                icon: './assets/icons/truck.svg',
                label: 'Giao hàng <span class="weight-400">miễn phí</span> tận nhà, nhận combo voucher mua sắm và vệ sinh nệm'
            },
        ],
      };
    },
  });
  