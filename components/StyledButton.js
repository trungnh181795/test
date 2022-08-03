app.component("styled-button", {
    props:{
      msg: {
        type: String,
        required: true
      },
      bottom: {
        type: String,
        required: true
      }
    },
    template: /*html*/ `
      <button 
        type="button" 
        class="styled-button font-14 weight-400"
        :style="{ marginBottom: bottom }"
      >
        {{ msg }}
      </button>
      `,
  });
  