<template>
    <div class="container ">
        <div class="text-center">
            <img class="w-60 inline-block mt-6 md:mt-20" src="../assets/1600w-9Gfim1S8fHg.webp" alt="">
        </div>
        <h1 class="text-3xl md:ext-5xl font-semibold leading-8 mb-10">Login to Your account</h1>
        <div class="flex flex-col items-center justify-center gap-6">
            <input type="text" name="email" v-model="email" id="email" placeholder="Enter Your E-Mail ID"
                class="px-4 py-3 w-10/12 md:w-1/3 shadow-lg border border-[#D74011] rounded-lg">
            <input type="password" name="password" v-model="password" id="password" placeholder="Enter Your Password"
                class="px-4 py-3 w-10/12 md:w-1/3 shadow-lg border border-[#D74011] rounded-lg">
            <button @click="login"
                class="px-4 py-2 w-10/84 md:w-1/4 bg-[#D74011] rounded-lg text-white font-medium text-xl mt-5 ">Login</button>
            <p>Don't have an account! <router-link to="/sign-up" class="underline text-blue-500">Sign-Up</router-link>
                <span> here</span>
            </p>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
            console.log(result)
            if (result.status === 200 && result.data.length > 0) {
                alert("Login Successfully")
                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                this.$router.push({ name: 'HomePage' })
            } else {
                alert("Wrong Credentials")
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }
}
</script>