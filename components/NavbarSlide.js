app.component("navbar-slide", {
  template: /*html*/ `
      <ul class="navbar-slide mask-5" id="#navbar-example2">
          <li 
            v-for="(slide, index) in navbarSlides" 
            class="navbar-slide-item" 
            :key="slide.id"
          >
            <a class="lh-20 font-16 weight-600 navbar-slide-item-link" :href="slide.id" v-html="slide.label"></a>
          </li>
      </ul>
      `,
  data() {
    return {
      navbarSlides: [
        {
          label: "Tình trạng<br>nệm cũ",
          id: "#influenceSection"
        },
        {
          label: "Tác hại<br>nệm cũ",
          id: "#consequenceSection"
        },
        {
          label: "Tiêu chí chọn<br>nệm mới",
          id: "#standardSection"
        },
        {
          label: "Chính sách<br>hỗ trợ",
          id: "#policySection"
        },
        {
          label: "Chọn nệm<br>ngay!",
          id: "#productSection"
        },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    handleScroll() {
      const currSlide = document.querySelector('.navbar-slide-item-link.active')

      currSlide.scrollIntoView()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
});
