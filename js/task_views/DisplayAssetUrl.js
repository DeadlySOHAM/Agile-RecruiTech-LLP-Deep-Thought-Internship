class DisplayAssetUrl extends TaskCard {
   Url = "" ;
   Description = "";
   constructor(src,desc,heading) {
      super(heading);
      this.Url = src ;
      this.Description = desc;
   }
   getView() {
      return super.getView(`\
      <section class="task_asset_other_url">
         <iframe loading="lazy" src="${this.Url}"
            frameborder="0"></iframe>
         <div class="description">${this.Description}</div>
      </section>
      `);
   }
}