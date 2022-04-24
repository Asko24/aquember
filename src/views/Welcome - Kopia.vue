<template>
    <div id="Dashboard" class="vh-100">
        
        <div class="d-flex flex-column h-100">
        <div id="Dashboard-Logo"  style="background-color:red;flex:30" >
            <div>
                <top-header></top-header>
                <nav>
                    <router-link to="/oldhomeview">OldHomeView</router-link> |
                    <router-link to="/about">About</router-link> |
                    <router-link to="/login">Login</router-link> |
                    <router-link to="/register">Register</router-link> |
                    <router-link to="/home">Home</router-link> |
                    <router-link to="/reporting">Reporting</router-link> | 
                    <router-link to="/welcome">Welcome</router-link>
                </nav>
            </div>
            
  
            Lol
        </div>
        <div id="Dashboard-Info" style="background-color:green;flex:20">
            LOL2
        </div>
        <div id="Dashboard-Buttons" style="background-color:blue;flex:30">
            lol3
        </div>
        </div>
    </div>
    
  
</template>

<script>

    import TopHeader from '../components/TopHeader.vue'

    export default {
    components:{'top-header':TopHeader}
    }
</script>

<style scoped>

</style>