<template>
    <div class="header">
        <div class="bg-secondary p-1">
            <b-row class="mx-4">
                <b-col md="2" sm="12">
                    <b-icon icon="telephone-fill" style="width: 16px; height: 16px;" class="primary-color1"></b-icon>
                    <span class="ml-1 text-light">+27 81 547 4711</span>
                </b-col>
                <b-col md="4" sm="12">
                    <b-icon icon="envelope" style="width: 16px; height: 16px;" class="primary-color1"></b-icon>
                    <span class="ml-1 text-light">nyashamurasiranwa17@gmail.com</span>
                </b-col>
            </b-row>
        </div>
        
        <b-navbar toggleable="lg" type="light" variant="white">
            <b-container>
                <b-navbar-brand to="/home">
                    <img class="logo-image-style" width="" src="/images/brighton.png"/>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav style="font-size:20px;">
                    <b-navbar-nav class="text-dark ml-auto">
                        <b-nav-item
                            to="/home"
                            :class="{ active: $route.path === '/home' ,'p-2':true}"
                        >
                            Home</b-nav-item
                        >
                        <b-nav-item
                            to="/about"
                            :class="{ active: $route.path === '/about' ,'p-2':true}"
                            >About Us</b-nav-item
                        >
                        <b-nav-item
                            to="/works"
                            :class="{ active: $route.path === '/works' ,'p-2':true}"
                            >Our Work</b-nav-item
                        >
                        <b-nav-item
                            to="/contact"
                            :class="{ active: $route.path === '/contact','p-2':true }"
                            >Contact Us</b-nav-item
                        >
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    
                </b-collapse>
            </b-container>
            
        </b-navbar>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "Header",
    components: {},
    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    },
    methods: {
        logout() {
            this.$store.dispatch("auth/logout").then((res) => {
                this.$router.push("/login");
            });
        },
    },
};
</script>
