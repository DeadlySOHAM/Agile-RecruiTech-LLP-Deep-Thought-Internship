class Input_tb extends TaskCard{

   constructor(heading){
      super(heading);
   }

   getView(){
      return super.getView(`\
      <section class="task_input_tb">\
         <div class="thread_header">\
            <span class="material-symbols-sharp arrow_icon"> expand_less </span>\
            Thread A\
         </div>\
         <div class="sub_thread_container">\
            <div class="textfield_container">\
               <label>Sub Thread 1</label>\
               <textarea placeholder="Enter Text Here"></textarea>\
            </div>\
            <div class="textfield_container">\
               <label>Sub Interpretation 1</label>\
               <textarea placeholder="Enter Text Here"></textarea>\
            </div>\
         </div>\
         <div class="select_options_container">\
            <span class="material-symbols-sharp icons">lightbulb</span>\
            <span class="material-symbols-sharp icons">comment</span>\
            <select>\
               <option value="" selected>Select Category</option>\
               <option value="Category 1">Category 1</option>\
               <option value="Category 1">Category 1</option>\
               <option value="Category 1">Category 1</option>\
               <option value="Category 1">Category 1</option>\
            </select>\
            <select>\
               <option value="" selected>Select Process</option>\
               <option value="Process 1">Process 1</option>\
               <option value="Process 1">Process 1</option>\
               <option value="Process 1">Process 1</option>\
               <option value="Process 1">Process 1</option>\
            </select>\
         </div>\
         <button>+ Sub Thread</button>\
         <div class="sub_thread_container">\
            <div class="textfield_container sub_thread_summary">\
               <label>Sub Thread 1</label>\
               <textarea placeholder="Enter Text Here"></textarea>\
            </div>\
         </div>\
         <div class="select_options_container select_emotion_container">\
            <div>\
               <span class="material-symbols-sharp icons">link</span>\
               <span>Thread Credit</span>\
               <span class="material-symbols-sharp icons link_icon">drive_file_rename_outline</span>\
            </div>\
            <select>\
               <option value="" selected>Select Emotion</option>\
               <option value="Emotion 1">Emotion 1</option>\
               <option value="Emotion 1">Emotion 1</option>\
               <option value="Emotion 1">Emotion 1</option>\
               <option value="Emotion 1">Emotion 1</option>\
            </select>\
         </div>\
         <div class="save_icon">\
            <span class="material-symbols-sharp icons">save</span>\
         </div>\
      </section>\
      `)
   }

}
