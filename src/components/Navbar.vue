<template>
    <nav class="main-nav">
        <ul>
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'About' }">About</router-link></li>
            <li><router-link :to="{ name: 'Why' }">Why us?</router-link></li>
            <li><router-link :to="{ name: 'Contact' }">Contact Us</router-link></li>
        </ul>
        <h2>User Profiles</h2>
        <ul>
            <li v-for="(id, index) in userIds"
                :key="index">
                <router-link :to="{ name: 'ViewProfile', params: { user_id: id }}">
                    <span>View Profile {{ id }}</span>
                </router-link>
            </li>
        </ul>
        <h2>Navigation Controls</h2>
        <ul>
            <li>
                <button @click="goHome">Redirect to Home</button>
            </li>
            <li>
                <button @click="goAbout">Redirect to About</button>
            </li>
            <li>
                <button @click="goWhy">Redirect to Why?</button>
            </li>
            <li>
                <button @click="goContact">Redirect to Contact</button>
            </li>
            <li>
                <button @click="goWild">Redirect to Wild</button>
            </li>
        </ul>
    </nav>
    
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return{
            userIds: ['1', '2', '3', '4']
        }
    },
    methods: {
        goHome(){
            this.$router.push({ name: 'Home' });
        },
        goAbout(){
            this.$router.push({ name: 'About' });
        },
        goWhy(){
            this.$router.push({ name: 'Why' });
        },
        goContact(){
            this.$router.push({ name: 'Contact' });
        },
        goWild(){
            this.$router.push({ name: '*' });
        }
    }
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding: 0;
    }

    a{
        color: #42b983;
    }

</style>
