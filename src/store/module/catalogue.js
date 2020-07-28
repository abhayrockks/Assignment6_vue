export default {
    state: {
        catalogue: [],
    },

    getters: {
        allData: state => state.catalogue,
    },

    mutations: {
        addData: (state, data) => {
            state.catalogue.push(data);
        },

        deleteData: (state, id) => {
            state.catalogue = state.catalogue.filter((index) => id !== index.id)
        }
    }
}