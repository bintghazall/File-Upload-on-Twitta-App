import axios from 'axios'

const state =  {
    persons: null
};

const getters = {

}

const actions = {
    updatePersons(context, data){
        context.commit("setPersons", data);
    },
    async getPersons(context){
        const url =  'https://jsonplaceholder.typicode.com/users'

            const result =  await axios.get(url)

            if(result.status === 200){
                context.commit('updatePersons', result.data)
            }
    }
}

const mutations = {
    setPersons: (state, data) => {
        state.persons.push(data)
    },
    updatePersons: (state, data) => {
        state.persons = data
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}