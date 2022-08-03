app.component("intro-section", {
  template: /*html*/ `
    <div class="section vn-bg-primary-light" id="introSection">
      <div class="intro-background"></div>
      <div class="container">
        <div
          class="intro-title font-32 weight-800 vn-text-secondary text-center text-uppercase"
        >
          thay nệm xẹp lún
        </div>
        <div class="intro-sub-title"></div>
        <styled-button
          :msg="'khám phá ngay'"
          :bottom="'56px'"
        ></styled-button>
      </div>
    </div>
        `,
  data() {
    return {};
  },
});
