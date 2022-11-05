class DisplayAssetImage extends TaskCard {
   ImageSource = "" ;
   constructor(imgsrc, heading) {
      super(heading);
      this.ImageSource = imgsrc ;
   }
   getView() {
      return super.getView(`\
         <section class="task_asset_other_image">\
            <img src="${this.ImageSource}">\
         </section>\
      `);
   }
}