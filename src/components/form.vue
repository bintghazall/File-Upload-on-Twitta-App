<template>
    <main>
        <form>
            <div>
                <input type="text" placeholder="Name | " v-model="name">
            </div>
            <div>
                <input type="email" placeholder="Email |" v-model="email">
            </div>
            <div>
                <input type="text" placeholder="Phone No |" v-model="phone">
            </div>
        </form>
        <button @click="submitForm">Submit</button>
    
        <footer-element></footer-element>
    </main>
    
</template>

<script>
//import Footer from './Footer'
import axios from 'axios'
export default {
    data(){
        return {
            name: null,
            email: null,
            phone: null
        }
    },
    methods:{
        async submitForm(){
            const data = {
                name: this.name,
                email: this.email,
                phone: this.phone
            }

            const url = 'https://jsonplaceholder.typicode.com/users'

            const response = await axios.post(url, data)

            if(response.status ===201){
                this.newUser = response.data
                this.$store.dispatch('updatePersons', response.data)
                this.$router.push({name: 'landingPage'})
            }
        }
    }
}
</script>

<style>
main{
     text-align: center;
     margin-top: 5%;
 }
input{
    width: 40%;
    margin-bottom: 3%;
    border: none;
    border-bottom: 1px solid black;
}
input:focus{
    outline: none;
}
button{
    background: aquamarine;
    padding: 1%;
    font-size: 1.5rem;
    border-radius: 7px;
    border: 1px solid aqua;
    cursor: pointer;
}
button:hover{
    background: rgb(15, 165, 115);
}
</style>