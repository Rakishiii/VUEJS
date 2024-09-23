const ListRendering = {
    data() {
        return {
         todos: [
         { text: 'Clean the House' },
         { text: 'Prepare Breakfast' },
         { text: 'Listening to our professor' }
        ]
       }
      }
    }
    
    Vue.createApp(ListRendering).mount('#list-rendering')