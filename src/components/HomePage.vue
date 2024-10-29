<template>
    <HeaderFile />
    <h1 class="text-4xl text-blue-400 text-center my-5">Welcome <span class="text-red-600"> {{ name }}</span> Welcome
    </h1>
    <div class="overflow-x-auto px-10">
        <table class="table-auto min-w-full max-w-3xl mx-auto border-collapse border border-gray-300 text-left">
            <thead>
                <tr>
                    <th class="border border-gray-300 px-4 py-2 bg-gray-100">ID</th>
                    <th class="border border-gray-300 px-4 py-2 bg-gray-100">Name</th>
                    <th class="border border-gray-300 px-4 py-2 bg-gray-100">Contact</th>
                    <th class="border border-gray-300 px-4 py-2 bg-gray-100">Address</th>
                    <th class="border border-gray-300 px-4 py-2 bg-gray-100">Update Restaurant</th>
                    <th class="border border-gray-300 px-4 py-2 bg-gray-100">Delete Restaurant</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in restaurants" :key="item.id" class="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">{{ item.id }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ item.name }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ item.contact }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ item.address }}</td>
                    <td class="border border-gray-300 px-4 py-2 text-blue-700 cursor-pointer"><router-link
                            :to="'/update-rest/' + item.id">Update</router-link></td>
                    <td class="border border-gray-300 px-4 py-2 text-blue-700 cursor-pointer"><button
                            @click="deleteRestaurant(item.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>


</template>


<script>
import axios from 'axios';
import HeaderFile from './Header-file.vue';
export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    methods: {
        async deleteRestaurant(id) {
            const response = await axios.delete(`http://localhost:3000/restaurants/${id}`)
            console.log(response)
            if (response.status == 200) {
                alert("Restaurant Added Successfully")
                this.loadData();
            }
        },

        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }

            let result = await axios.get("http://localhost:3000/restaurants");
            console.log(result)
            this.restaurants = result.data;
        }
    },
    components: {
        HeaderFile
    },
    async mounted() {
        this.loadData();
    }
}
</script>