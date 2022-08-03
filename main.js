const app = Vue.createApp({
  data() {
    return {
      sections: [
        'introSection',
        'influenceSection',
        'consequenceSection',
        'standardSection',
        'policySection',
        'productSection',
        'formSection',
        'footerSection',
      ]
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      
    })
  }
});