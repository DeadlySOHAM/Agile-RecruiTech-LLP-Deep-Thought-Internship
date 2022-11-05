class JourneyBoard {
   TaskTitle = "";
   SubTask = [];
   constructor(task_title, tasks) {
      this.TaskTitle = task_title;
      this.SubTask = tasks;
   }

   getView() {

      // each indivisula task heading of the side bar (Journey Board)
      const subTaskHeading = (h) => `\
            <li>\
               <h3><a href="#${h}">${h}</a></h3>\
            </li>\
            `

      let allAssets = "" ;

      // appending all the sub heading to a single view
      this.SubTask.forEach((element)=>allAssets+=subTaskHeading(element.asset_title))


      return `\
         <li>\
         <h2>${this.TaskTitle}</h2>\
         <ul type="disc">\
         ${allAssets}\
         </ul>\
         </li>\
      `
   }

}

