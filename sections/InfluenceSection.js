app.component("influence-section", {
    template: /*html*/ `
    <div class="influence section vn-bg-primary" id="influenceSection">
        <div class="container">
            <div
                class="influence-title y-8 font-28 vn-text-white weight-700 text-center"
            >
                Chuyện gì xảy ra với<br />
                tấm đệm 4-8 năm tuổi?
            </div>
            <div class="influence-card-media p-relative">
                <div class="influence-card-media-img">
                <img src="assets/images/influence-1.jpg" alt="" />
                </div>
                <div
                class="influence-card-media-note p-absolute font-12 weight-300 vn-text-white text-center"
                >
                *Theo số liệu của Sit 'n Sleep, 2019
                </div>
                <div class="influence-card-media-label">
                <div class="font-14 weight-400 vn-text-white text-justify">
                    Cứ mỗi 8 năm sử dụng, đệm nhà bạn lại NẶNG GẤP ĐÔI* bởi trọng
                    lượng của da chết, bụi mịn và rệp giường ?
                </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(influence, index) in influencesIn8Y" class="col-6">
                    <styled-icon
                        :img="influence.icon"
                        :label="influence.label"
                        :width="'48px'"
                    ></styled-icon>
                </div>
            </div>
            <div
                class="influence-title y-10 font-28 vn-text-white weight-700 text-center"
            >
                Chuyện gì xảy ra với<br />
                tấm đệm 8-10 năm tuổi?
            </div>
            <div class="influence-card-media-no-img p-relative">
                <div class="influence-card-media-no-img-note font-12 weight-300 vn-text-white text-center p-absolute mask-5">
                    *Theo số liệu của Bella Flex, 2019
                </div>
                <div class="influence-card-media-no-img-section vn-bg-white">
                    <div class="influence-card-media-no-img-section-title font-16 weight-700 vn-text-primary text-center text-uppercase">
                        nệm 10 năm ẩn<br> chưa tới
                    </div>
                    <div class="influence-card-media-no-img-section-img">
                        <img src="assets/images/influence-2.png" alt="" />
                    </div>
                </div>  
                <div class="influence-card-media-no-img-section vn-bg-grey d-flex justify-content-center align-items-center px-2">
                    <ul class="influences-list">
                        <li 
                            v-for="(item, index) in influenceList"
                            class="influences-list-item"
                            :key="index"
                        >
                            <div class="influences-list-item-icon">
                                <img :src="item.icon" alt="" />
                            </div>
                            <div class="font-13 weight-400 vn-text-primary-bold">{{ item.label }}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div v-for="(influence, index) in influencesIn10Y" class="col-4">
                    <styled-icon
                        :vertical="true"
                        :img="influence.icon"
                        :label="influence.label"
                        :width="'80px'"
                    ></styled-icon>
                </div>
            </div>
        </div>
    </div>
        `,
    data() {
        return {
            influencesIn8Y: [
              {
                icon: './assets/icons/scabrous.svg',
                label: 'Sần sùi,<br> xẹp lún'
              },
              {
                icon: './assets/icons/elastic.svg',
                label: 'Mất đàn hồi'
              },
              {
                icon: './assets/icons/latex.svg',
                label: 'Mùn cao su'
              },
              {
                icon: './assets/icons/noise.svg',
                label: 'Âm thanh<br> cót két'
              },
            ],
            influencesIn10Y: [
              {
                icon: './assets/icons/ruts.svg',
                label: 'Hằn lún theo<br>cơ thể'
              },
              {
                icon: './assets/icons/hard-soft.svg',
                label: 'Thay đổi độ cứng,<br>độ mềm'
              },
              {
                icon: './assets/icons/stink.svg',
                label: 'Mùi hôi và<br>ẩm mốc'
              },
            ],
            influenceList: [
                {
                    icon: './assets/icons/bug.svg',
                    label: '7.282.728 con rếp giường*'
                },
                {
                    icon: './assets/icons/water-drop.svg',
                    label: '1006.920 lít mồ hôi*'
                },
                {
                    icon: './assets/icons/skin.svg',
                    label: '~ 14,1 kg da chết*'
                },
            ]  
          };
    },
  });
  