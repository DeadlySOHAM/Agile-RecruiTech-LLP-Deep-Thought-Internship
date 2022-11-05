class Input_eb extends TaskCard{

   constructor(heading){
      super(heading);
   }

   getView(){
      return super.getView(`\
      <section class="task_input_tb task_input_eb">\
      <div class="thread_header introduction">\
         <span class="material-symbols-sharp arrow_icon"> expand_less </span>\
         Introduction\
      </div>\
      <div class="sub_thread_container enter_introduction">\
         <div class="textfield_container">\
            <textarea placeholder="Enter Introduction"></textarea>\
         </div>\
      </div>\
      <div class="thread_header">\
         <span class="material-symbols-sharp arrow_icon"> expand_less </span>\
         Thread A\
      </div>\
      <div class="sub_thread_container">\
         <div class="textfield_container">\
            <label>Example 1</label>\
            <textarea placeholder="Enter Text Here"></textarea>\
         </div>\
         <div class="add_example_button_container">\
            <button>+ Example</button>\
         </div>\
         <div class="textfield_container">\
            <label>Argument for Thread A</label>\
            <textarea placeholder="Enter Text Here"></textarea>\
         </div>\
         <div class="add_new_thread_button_container">\
            <button>+ Add new Thread</button>\
         </div>\
      </div>\
      <div class="thread_header introduction">\
         <span class="material-symbols-sharp arrow_icon"> expand_less </span>\
         Conclusion\
      </div>\
      <div class="sub_thread_container enter_introduction">\
         <div class="textfield_container">\
            <textarea placeholder="Enter Conclusion"></textarea>\
         </div>\
      </div>\
      <div class="save_icon">\
         <span class="material-symbols-sharp icons">save</span>\
      </div>\
      </section>\
      `)
   }

}
