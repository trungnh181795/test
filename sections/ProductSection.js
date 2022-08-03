app.component("product-section", {
  template: /*html*/ `
      <div class="product section vn-bg-primary-light" id="productSection">
        <div class="container">
          <div class="product-title font-24 weight-500 vn-text-white text-center text-uppercase">
          đệm mới dành cho bạn
          </div>
        </div>
            <ul class="product-list">
                <div class="product-wrapper">
                    <li 
                        v-for="(product,index) in products.slice(0, 3)" 
                        :key="index"
                        class="product-list-item"
                    >
                        <img :src="product.img" alt="" />
                    </li>
                </div>
                <div class="product-wrapper">
                    <li 
                        v-for="(product,index) in products.slice(3, 6)"
                        :key="index"
                        class="product-list-item"
                    >
                        <img :src="product.img" alt="" />
                    </li>
                </div>
            </ul>
            <styled-button :msg="'xem thêm'" :bottom="'34px'"></styled-button>
      </div>
          `,
  data() {
    return {
      products: [
        {
          img: "./assets/images/product-1.jpg",
        },
        {
          img: "./assets/images/product-2.jpg",
        },
        {
          img: "./assets/images/product-3.jpg",
        },
        {
          img: "./assets/images/product-4.jpg",
        },
        {
          img: "./assets/images/product-5.jpg",
        },
        {
          img: "./assets/images/product-6.jpg",
        },
      ],
    };
  },
});
