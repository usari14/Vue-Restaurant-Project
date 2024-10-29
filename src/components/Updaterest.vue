<template>
    <HeaderFile />
    <h1 class="text-4xl text-blue-400 text-center my-10">Update Restaurant</h1>
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
        <button type="button" @click="updaterestaurant"
            class="w-full p-3 bg-[#D74011] text-white font-semibold rounded hover:bg-[#c77157] hover:text-black hover:text-3xl transition duration-300">Update
            Restaurant</button>
    </form>
</template>


<script>
import axios from 'axios';
import HeaderFile from './Header-file.vue';
export default {
    name: 'UpdatePage',
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
        async updaterestaurant() {
            let result = await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            console.log(result)

            if (result.status === 200) {
                alert("Restaurant Updated Successfully")
                this.$router.push({ name: 'HomePage' })
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        const res = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`);
        console.log(res.data);
        this.restaurant = res.data
    }
}
</script>