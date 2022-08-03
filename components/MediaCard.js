app.component("media-card", {
    props: {
      img: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
    },
    template: /*html*/ `
      <div class="media-card">
        <div class="media-card-img">
          <img :src="img" alt="" />
        </div>
        <div class="media-card-content">
          <div
            class="font-12 weight-200 vn-text-white text-center"
            v-html="label"
          >
          </div>
        </div>
      </div>
        `,
  });
  