app.component("form-step", {
    props: {
      icon: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      index: {
        type: Number,
        required: true,
      }
    },
    template: /*html*/ `
      <div class="step d-flex justify-content-start align-items-start">
        <div class="step-icon">
          <img :src="icon" alt="" />
        </div>

        <div class="d-flex flex-column justify-content-start align-items-start">
          <div class="font-22 weight-600 vn-text-white text-left text-uppercase">
            bước {{ index + 1 }}
          </div>
          <div 
            class="font-16 weight-200 vn-text-white text-left"
            v-html="label"
          >
          </div>
        </div>
      </div>
        `,
  });
  