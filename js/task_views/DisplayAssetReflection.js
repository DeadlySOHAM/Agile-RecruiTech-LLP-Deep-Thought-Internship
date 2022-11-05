class DisplayAssetReflection extends TaskCard {
   display_asset_reflection = "";
   constructor(content, heading) {
      super(heading);
      this.display_asset_reflection = content;
   }
   getView() {
      return super.getView(`\
         <section class="display_asset_reflection"> \
            ${this.display_asset_reflection} \
         </section> \
      `);
   }
}