class Input_article extends TaskCard{

   constructor(heading) {
      super(heading);
   }

   getView() {
      return super.getView(`\
         <section class="display_asset_reflection"> \
            Don't know how this : Input Article should look like.
         </section> \
      `);
   }

}