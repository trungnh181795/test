app.component("styled-icon", {
    props: {
        vertical: {
            type: Boolean,
            required: false,
        },
        img: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        width: {
            type: String,
            required: true,
        }
    },  
    template: /*html*/ `
        <div 
            class="d-flex justify-content-start align-items-center" 
            :class="{ 'flex-column': vertical }"
            :style="{ marginTop: '35px' }"
        >
            <div 
                class="styled-icon"
                :class="{ 'vertical': vertical }"
                :id="currWidth"
            >
                <img :src="img" :alt="label" />
            </div>
            <div 
                class="font-13 weight-400 vn-text-white"
                :class="textAlign"
                :style="minWidth"
                v-html="label" 
            >
            </div>
        </div>
        `,
    data() {
      return {

      };
    },
    computed: {
        textAlign() {
            return this.vertical ? 'text-center' : 'text-left'
        },
        minWidth() {
            return this.vertical ? { 'minWidth': '160%' } : null
        },
        currWidth() {
            return 'width' + '-' + this.width
        }
    }
  });
  