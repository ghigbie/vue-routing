<template>
    <nav class="main-nav">
        <ul>
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'About' }">About</router-link></li>
            <li><router-link :to="{ name: 'Why' }">Why us?</router-link></li>
            <li><router-link :to="{ name: 'Contact' }">Contact Us</router-link></li>
            <li><router-link :to="{ name: 'Other' }">Other Stuff</router-link></li>
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
        <h2>Comments</h2>
        <ul>
            <li v-for="(id, index) in commentIds"
                :key="index">
                <router-link :to="{ name: 'Comments', params: { comment_id: id }}">
                    <span>Comment {{ id }}</span>
                </router-link>
            </li>
        </ul>
        <h2>User Stories</h2>
        <ul>
            <li v-for="(id, index) in storyIds"
                :key="index">
                <router-link :to="{ name: 'UserStories', params: { story_id: id }}">
                    <span>Story {{ id }}</span>
                </router-link>
            </li>
        </ul>
        <h2>Navigation Controls</h2>
        <ul>
            <li>
                <button @click="goBack">Go Back</button>
                <button @click="goForward">Go Forward</button>
            </li>
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
                <button @click="goOtherStuff">Redirect to Other</button>
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
            userIds: ['1', '2', '3', '4'],
            commentIds: ['1', '2', '3', '4'],
            storyIds: ['1', '2', '3', '4']
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        goForward(){
            this.$router.go(+1);
        },
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
        goOtherStuff(){
            this.$router.push({ name: 'OtherStuff' })
        },
        goWild(){
            this.$router.push({ name: 'NotFound' });
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

    li{
        display: inline-block;
        margin: 10px;
    }
    a.router-link-exact-active{
        color: purple;
    }
</style>
