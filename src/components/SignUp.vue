<template>
    <div class="container ">
        <div class="text-center">
            <img class="w-60 inline-block mt-6 md:mt-20" src="../assets/1600w-9Gfim1S8fHg.webp" alt="">
        </div>
        <h1 class="text-3xl md:ext-5xl font-semibold leading-8 mb-10">Create An account</h1>
        <div class="flex flex-col items-center justify-center gap-6">
            <input type="text" name="name" v-model="name" id="name" placeholder="Enter Your Name"
                class="px-4 py-3 w-10/12 md:w-1/3 shadow-lg border border-[#D74011] rounded-lg">
            <input type="text" name="email" v-model="email" id="email" placeholder="Enter Your E-Mail ID"
                class="px-4 py-3 w-10/12 md:w-1/3 shadow-lg border border-[#D74011] rounded-lg">
            <input type="password" name="password" v-model="password" id="password" placeholder="Enter Your Password"
                class="px-4 py-3 w-10/12 md:w-1/3 shadow-lg border border-[#D74011] rounded-lg">
            <button @click="signup"
                class="px-4 py-2 w-10/84 md:w-1/4 bg-[#D74011] rounded-lg text-white font-medium text-xl mt-5 ">Sign Up</button>
                <p>Already have an account! <router-link to="/login" class="underline text-blue-500">Login</router-link> <span> here</span></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signup() {
            let results = await axios.post("http://localhost:3000/user", {
                email: this.email,
                name:this.name,
                password:this.password
            })

            if(results.status === 201) {
                alert("Signed Up Successfully")
                localStorage.setItem('user', JSON.stringify(results.data));
                this.$router.push({name: 'HomePage'})
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: 'HomePage'})
        }
    }
}
</script>