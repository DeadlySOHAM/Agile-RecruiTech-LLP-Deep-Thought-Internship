class Input_reflection extends TaskCard {

   constructor(heading) {
      super(heading);
   }

   getView() {
      return super.getView(`\
         <section class="task_input_reflection">   \
            Reflect as per given guidelines  \
         </section>  \
      `)
   }

}
