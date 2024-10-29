<template>
    <div class="navbar">
        <ul class="flex flex-col lg:flex-row justify-center gap-5 lg:gap-20 py-10 bg-gray-500 text-white mb-5 text-3xl">
            <li><router-link to="/" class="hover:underline">Home</router-link></li>
            <li><router-link to="/add-rest" class="hover:underline">Add Restaurant</router-link></li>
            <!-- <li><router-link to="/update-rest" class="hover:underline">Update Restaurant</router-link></li> -->
            <li><a href="#" @click="logout" class="hover:underline">Logout</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header-file',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name: 'LoginPage'})
        }
    }
}
</script>