<template>
    <main>
        <h1>users</h1>
        <ul v-for="person in persons" :key="person.id">
            <li>
                <p>Name: {{person.name}}</p>
                <p>Email: {{person.email}}</p>
                <p>Phone: {{person.phone}}</p>
                <div v-if="person.company">
                    <p>Name: {{person.company.name}}</p>
                    <p>Catch Phrase: {{person.company.catchPhrase}}</p>
                    <p>Business Structure: {{person.company.bs}}</p>
                </div>                
            </li>
        </ul>

        <footer-element :numberOfUsers="persons ? persons.length :'No users available'"></footer-element>
    </main>    
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            newUser: null
        }
    },
    computed:{
        updatedPersons(){
            return this.$store.state.Persons
        },
        persons(){
            return this.$store.state.Persons.persons
        }
    },
    async created(){
        this.$store.dispatch('getPersons')
    }

}
</script>

<style scoped>
main{
    padding: 5% 0;
}

ul{
    list-style-type: none;
}
   
li{
    margin: 3rem;
    background: #eee;
    padding: 1rem;
}


</style>