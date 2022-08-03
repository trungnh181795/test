app.component("register-form", {
    template: /*html*/ `
  <form class="register-form vn-bg-primary">
    <div
      class="register-form-title font-24 weight-600 vn-text-secondary text-uppercase text-center"
    >
      form đăng kí
    </div>
    <div class="register-form-control">
      <input
        class="register-form-text-field font-14 weight-200 vn-text-white"
        placeholder="Họ tên"
        type="text"
        v-model="formValues.clientName"
      />
      <div v-show="formErrors.clientName" class="register-form-error font-10 weight-200 text-left">{{ formErrors.clientName }}</div>
    </div>
    <div class="register-form-control">
      <input
        class="register-form-text-field font-14 weight-200 vn-text-white"
        placeholder="Số điện thoại"
        type="text"
        v-model="formValues.phoneNumber"
      />
      <div v-show="formErrors.phoneNumber" class="register-form-error font-10 weight-200 text-left">{{ formErrors.phoneNumber }}</div>
    </div>
    <div class="register-form-control">
      <div class="register-form-select-wrapper">
        <input 
          @click="toggleSelectOption"
          class="register-form-text-field font-14 weight-200 vn-text-white" 
          placeholder="Chọn sản phẩm"
          type="text"
          v-model="formValues.productName"
        />
      </div>
      <div v-show="formErrors.productName" class="register-form-error font-10 weight-200 text-left">{{ formErrors.productName }}</div>
      <ul v-show="isOptionShow" class="register-form-select-option-list">
          <li @click="updateProductName" class="register-form-select-option-list-item font-12 weight-400">
            Nệm Dunlopillo William
          </li>
          <li @click="updateProductName" class="register-form-select-option-list-item font-12 weight-400">
            Nệm Dunlopillo Cambridge Luxe
          </li>
          <li @click="updateProductName" class="register-form-select-option-list-item font-12 weight-400">
            Nệm Dunlopillo Audrey
          </li>
          <li @click="updateProductName" class="register-form-select-option-list-item font-12 weight-400">
            Nệm Dunlopillo Spine O Master
          </li>
          <li @click="updateProductName" class="register-form-select-option-list-item font-12 weight-400">
            Nệm Dunlopillo Elizabeth
          </li>
          <li @click="updateProductName" class="register-form-select-option-list-item font-12 weight-400">
            Nệm Dunlopillo Circle Of Life
          </li>
      </ul>
    </div>
    <div class="font-14 weight-300 vn-text-white text-left" style="align-self: flex-start;">
      chọn voucher bạn muốn
    </div>
    <div class="register-form-text-field voucher">
      <div class="register-form-voucher d-flex justify-content-start align-items-center">
        <input name="voucherValue" value="200000" @change="updateVoucherValues" class="register-form-radio" type="radio" id="200k" />
        <label
          for="200k"
          class="register-form-label font-14 weight-200 text-white"
        >
          200.000 đ [Cho đơn 3.000.000đ]
        </label>
      </div>
      <div class="register-form-voucher d-flex justify-content-start align-items-center">
        <input name="voucherValue" value="500000" @change="updateVoucherValues" class="register-form-radio" type="radio" id="500k" checked/>
        <label
          for="500k"
          class="register-form-label font-14 weight-200 text-white"
        >
          500.000 đ [Cho đơn 3.000.000đ]
        </label>
      </div>
      <div class="register-form-voucher d-flex justify-content-start align-items-center">
        <input name="voucherValue" value="1000000" @change="updateVoucherValues" class="register-form-radio" type="radio" id="1tr" />
        <label
          for="1tr"
          class="register-form-label font-14 weight-200 text-white"
        >
          1.000.000 đ [Cho đơn 3.000.000đ]
        </label>
      </div>
    </div>
    <button
      type="button"
      class="register-form-btn vn-bg-secondary text-uppercase font-14 weight-600 vn-text-primary"
      @click="handleSubmit"
    >
      nhận ngay
    </button>
  </form>
        `,
    data() {
      return {
        isOptionShow: false,
        formValues: {
          clientName: '',
          phoneNumber: '',
          productName: '',
          voucherValue: ''
        },
        formErrors: {
          clientName: '',
          phoneNumber: '',
          productName: '',
        }
      };
    },
    computed: {
      validateSuccess() {
        return !this.formErrors.clientName && !this.formErrors.phoneNumber && !this.formErrors
      }
    },
    methods: {
      updateVoucherValues(event) {
        this.formValues.voucherValue = event.target.value;
      },
      updateProductName(event) {
        this.formValues.productName = event.target.innerHTML;
        this.isOptionShow = false;
      },
      toggleSelectOption() {
        console.log('toggleSelectOption')
        this.isOptionShow = !this.isOptionShow;
      },
      handleValidate() {
        const validPhoneNumber =
            /^((09|03|07|08|05|849|843|847|848|845|[+]849|[+]843|[+]847|[+]848|[+]845)+([0-9]{8})\b)$/g

        if(!this.formValues.clientName) {
          this.formErrors.clientName = 'Bắt buộc'
        } else this.formErrors.clientName = ''
        if(!this.formValues.phoneNumber) {
          this.formErrors.phoneNumber = 'Bắt buộc'
        } else if(!validPhoneNumber.test(this.formValues.phoneNumber)) {
          this.formErrors.phoneNumber = 'Số điện thoại không đúng định dạng'
        } else this.formErrors.phoneNumber = ''
        if (!this.formValues.productName) {
          this.formErrors.productName = 'Bắt buộc';
        } else this.formErrors.productName = ''
      },
      handleSubmit() {
        this.handleValidate();

        if(this.validateSuccess) {
          console.log("Validation Success");
        }
      }      
    },
    updated() {
      console.log('values', this.formValues);
      console.log('errors', this.formErrors);
    }
  });
  