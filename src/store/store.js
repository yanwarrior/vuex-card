import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    productCards: [
      {
        id: 1,
        title: 'Learn Django',
        image: 'https://picsum.photos/600/300/?image=11',
        taging: 'learn',
        pricing: 80,
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      },
      {
        id: 2,
        title: 'Learn ES 6',
        image: 'https://picsum.photos/600/300/?image=12',
        taging: 'learn',
        pricing: 90,
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      },
      {
        id: 3,
        title: 'Learn Flask',
        image: 'https://picsum.photos/600/300/?image=13',
        taging: 'learn',
        pricing: 80,
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      },
      {
        id: 4,
        title: 'Learn Vue 2',
        image: 'https://picsum.photos/600/300/?image=14',
        taging: 'learning',
        pricing: 97,
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      }
    ]
  },
  getters: {
    saleProductCards: (state) => {
      var saleProductCards = state.productCards.map(product => {
        return {
          id: product.id,
          title: product.title + " ::.",
          pricing: product.pricing / 2,
          image: product.image,
          tag: product.tag,
          description: product.description
        }
      });
      return saleProductCards;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.productCards.forEach(product => {
        product.pricing -= payload.amount;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload);
      }, 2000);
    }
  }
})