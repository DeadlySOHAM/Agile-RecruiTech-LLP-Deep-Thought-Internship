class DisplayAssetVideo extends TaskCard {
   VideoSource = "";
   constructor(vdsrc, heading) {
      super(heading);
      this.VideoSource = vdsrc;
   }
   getView() {
      return super.getView(`\
         <section class="task_asset_other_video">\
            <iframe loading="lazy" src="${this.VideoSource}"\
               frameborder="0"></iframe>\
         </section>\
         `
      );
   }
}