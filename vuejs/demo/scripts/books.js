const books = Vue.createApp({
    data(){
    return {
        showBooks: true,
         btitle: 'The Joker',
        bauthor: 'Karlo Mirasol',
         year: 2008
        }
    },
    methods: {
    toggleShowBooks(){
    this.showBooks = !this.showBooks
        }
     }
    });

    books.mount('#books')