class DisplayAssetDocs extends TaskCard {
   DocsSource = "" ;
   constructor(dsrc, heading) {
      super(heading);
      this.DocsSource = dsrc ;
   }
   getView(){
      return super.getView(
         `\
         <section class="task_asset_other_docs">\
            <iframe loading="lazy" src="${this.DocsSource}"\
               frameborder="0"></iframe>\
         </section>\
         `
      )
   }
}