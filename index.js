'use-strict'
let tab = function () {
   let tabBtn = document.querySelectorAll('.tab__btn'),
      tabBlock = document.querySelectorAll('.block-information'),
      tabName;
   tabBtn.forEach(item => {
      item.addEventListener('click', selectTabBtn)
   });

   function selectTabBtn() {
      tabBtn.forEach(item => {
         item.classList.remove('active');
      });
      this.classList.add('active');
      tabName = this.getAttribute('data-tab-name');
      selectTabBlock(tabName);
   }

   function selectTabBlock(tabName) {
      tabBlock.forEach(item => {
         if (item.classList.contains(tabName)) {
            item.classList.add('active')
         } else item.classList.remove('active');
      })
   }

};

tab();