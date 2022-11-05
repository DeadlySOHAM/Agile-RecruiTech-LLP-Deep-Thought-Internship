const menu = {
   'input_asset': {
      'tb': (element) => new Input_tb(element.asset_title),
      'eb': (element) => new Input_eb(element.asset_title),
      'reflection': (element) => new Input_reflection(element.asset_title),
      'article': (element) => new Input_article(element.asset_title)
   },
   'display_asset': {
      'other': (element) => {

         if (element.display_asset_url != "")
            return new DisplayAssetUrl(
               element.display_asset_url,
               element.asset_description,
               element.asset_title
            )

         else if (element.display_asset_docs != "")
            return new DisplayAssetDocs(
               element.display_asset_docs,
               element.asset_title
            )

         else if (element.display_asset_video != "")
            return new DisplayAssetVideo(
               element.display_asset_video,
               element.asset_title
            )

         else if (element.display_asset_image != "")
            return new DisplayAssetImage(
               element.display_asset_image,
               element.asset_title
            )
      },
      'reflection': (element) =>
         new DisplayAssetReflection(
            element.display_asset_reflection,
            element.asset_title
         ),
   }

}



fetch("https://deadlysoham.github.io/Agile-RecruiTech-LLP-Deep-Thought-Internship/project.json")
   .then(response => response.json())
   .then(result => render(result))
   .catch(error => console.log('error', error));


const task_card_container = document.getElementById('task_cards');
const loader = document.getElementById('loader');
const journey_Board = document.getElementById('journey_board');


function render(result) {
   loader.style.display = "none";
   document.getElementById('task_title').textContent = result.tasks[0].task_title;

   // generating journey board
   result.tasks.forEach((element) => {
      journey_Board.insertAdjacentHTML('beforeend',
         new JourneyBoard(element.task_title,element.assets).getView()
      )
   })

   // rendering tasks
   result.tasks[0].assets.forEach(element => {
      try {
         const x = menu[element.asset_type][element.asset_content](element);
         task_card_container.insertAdjacentHTML('beforeend', x.getView());
         // console.log();
      } catch (error) {
         console.error(error);
         console.error(element.asset_type, element.asset_content, menu[element.asset_type][element.asset_content]);
      }
   });
}