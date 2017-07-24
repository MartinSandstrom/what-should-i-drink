var application = new Vue({
    el: '#application',
    data: {
        message: 'Hello Vue!',
        drinks: [
            {
                idDrink: '12708',
                strDrink: 'Banana Cantaloupe Smoothie',
                strCategory: 'Other/Unknown',
                strAlcoholic: 'Non alcoholic',
                strGlass: 'vote',
                strInstructions: 'Juice cantaloupe, pour juice into blender, add banana, and liquify.',
                strDrinkThumb: 'http://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg',
                strIngredient1: 'Cantaloupe',
                strIngredient2: 'Banana',
                strIngredient3: '',
                strIngredient4: '',
                strIngredient5: '',
                strIngredient6: '',
                strIngredient7: '',
                strIngredient8: '',
                strIngredient9: '',
                strIngredient10: '',
                strIngredient11: '',
                strIngredient12: '',
                strIngredient13: '',
                strIngredient14: '',
                strIngredient15: '',
                strMeasure1: 'Juice of 1/2 ',
                strMeasure2: '1',
                strMeasure3: '',
                strMeasure4: '',
                strMeasure5: '',
                strMeasure6: '',
                strMeasure7: '',
                strMeasure8: '',
                strMeasure9: '',
                strMeasure10: '',
                strMeasure11: '',
                strMeasure12: '',
                strMeasure13: '',
                strMeasure14: '',
                strMeasure15: '',
                dateModified: '2016-07-18 22:18:23'
            }
        ]
    },
    methods: {
        getNewDrinks: function() {
            var that = this;
            axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(function(response){
                if(response && response.data && response.data.drinks[0]) {
                    that.drinks = response.data.drinks;
                }
            });
        }
    }
});