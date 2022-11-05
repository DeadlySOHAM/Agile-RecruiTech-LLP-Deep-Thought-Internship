class TaskCard {
   Heading = "";
   constructor(h1) {
      this.Heading = h1;
   }
   getView(view) {
      return `<section class="task_card" id="${this.Heading}">\
         <h1 class="task_heading">${this.Heading}</h1>\
         ${view}\
         <div class="expand_icon"><span class="material-symbols-sharp">keyboard_arrow_down</span></div>\
      </section>`
   }
}