<template>
    <HeaderFile />
    <h1 class="text-4xl text-blue-400 text-center my-10">Add New Restaurant</h1>
    <form action="" class="restaurant-form p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Restaurant Name"
            class="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required>
        <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Restaurant Address"
            class="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required>
        <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Restaurant Contact"
            class="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required>
        <button type="button" @click="addrestaurant"
            class="w-full p-3 bg-[#D74011] text-white font-semibold rounded hover:bg-[#c77157] hover:text-black hover:text-3xl transition duration-300">Add
            Restaurant</button>
    </form>

</template>


<script>
import axios from 'axios';
import HeaderFile from './Header-file.vue';
export default {
    name: 'AddPage',
    components: {
        HeaderFile
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            } 
        }
    },
    methods: {
        async addrestaurant() {
           let result = await axios.post("http://localhost:3000/restaurants", {
            name:this.restaurant.name,
            address: this.restaurant.address,
            contact: this.restaurant.contact
           });
           console.log(result)

           if(result.status === 201) {
                alert("Restaurant added Successfully")
                this.$router.push({name: 'HomePage'})
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>