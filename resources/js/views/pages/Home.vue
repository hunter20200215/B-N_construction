<template>
    <div>
         <section class="top-section">
            <div class="envoled"></div>
            <div class="text-container text-center">
                <vue-typed-js :strings="textfields" :loop="true" :typeSpeed="150" 	:showCursor="false" class="d-block pt-5">
                    <h1 class="typing text-center animation-text"></h1>
                </vue-typed-js>
                
                <p class="py-2" style="font-size:17px;font-size: 19px;font-weight:400;line-height: 1.8em;">{{desctext}}</p>
                <div class="text-center pb-3">
                    <b-link href="/contact" class=""> 
                        <b-button size="lg" variant="secondary" style="border:1px solid;">Contact Us</b-button>
                    </b-link>
                </div>
            </div>
        </section>
        <section>
            <b-img src="./images/curves-under-header.png" alt="Responsive image" class="w-100"></b-img>
        </section>
        <section class="sevices">
            <div class="mb-3">
                <div>
                    <h1 class="text-center primary-color1 title-font mb-5">Our Services</h1>
                </div>
                <b-row>
                    <b-col md="4" sm="12">
                        <b-img src="./images/fc-showcase1.jpg"  alt="Responsive image" class="w-100 border border-2 border-dark"></b-img>
                        <p class="mt-3 text-center font-weight-bold primary-color1 default-font1">{{services[0]}}</p>
                    </b-col>
                    <b-col md="4" sm="12">
                        <b-img src="./images/fc-showcase2.jpg"  alt="Responsive image" class="w-100 border border-2 border-dark"></b-img>
                        <p class="mt-3 text-center font-weight-bold primary-color1 default-font1">{{services[1]}}</p>
                    </b-col>
                    <b-col md="4" sm="12">
                        <b-img src="./images/fc-showcase3.jpg"  alt="Responsive image" class="w-100 border border-2 border-dark"></b-img>
                        <p class="mt-3 text-center font-weight-bold primary-color1 default-font1">{{services[2]}}</p>
                    </b-col>
                </b-row>
            </div>
            <b-container class="text-left">
                <b-row class="my-3">
                    <b-col md="6" sm="12">
                        <h2 class="">{{needtext}}</h2>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col md="6" sm="12" class="mb-5">
                        <div class="mt-3 mb-5" >
                            <p>{{ descriptions[0] }}</p>
                            <p>{{ descriptions[1]}}</p>
                            <p>{{ descriptions[2]}}</p>
                        </div>
                        <b-button size="lg" href="/about" class="primary-background1 border border-radius-1" style="color:white;">Learn More</b-button>
                    </b-col>
                    <b-col md="6" sm="12">
                        <div class="accordion" role="tablist">
                            <b-card no-body class="">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="outline-dark" class="primary-color1 font-weight-bold defauilt-font1">{{servicegroups.first.title}}</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-1"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>{{servicegroups.first.desc}}</b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-2 variant="outline-dark" class="primary-color1 font-weight-bold defauilt-font1">{{servicegroups.second.title}}</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>{{ servicegroups.second.desc }}</b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-3 variant="outline-dark" class="primary-color1 font-weight-bold defauilt-font1">{{servicegroups.third.title}}</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>{{ servicegroups.third.desc }}</b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-4 variant="outline-dark" class="primary-color1 font-weight-bold defauilt-font1">{{servicegroups.forth.title}}</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>{{ servicegroups.forth.desc }}</b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section>
            <b-img src="./images/curves-above-section.png" alt="Responsive image" class="w-100"></b-img>
        </section>
        <section class="service-confirm">
            <div class="envoled"></div>
            <b-container class="py-5">
                <b-row align-v="center">
                    <b-col md="6" sm="12" class="py-4">
                        <h1 class="mb-5" style="font-size:50px;color:white;">{{headache}}</h1>
                        <b-button size="lg" href="/about" class="primary-background1 border border-radius-1" style="color:white;">Read More</b-button>
                    </b-col> 
                    <b-col md="6" sm="12">
                        <b-img src="./images/FB_IMG_1644005970210.jpg" fluid alt="Responsive image"></b-img>
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </div>
   

</template>
<script>
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import AddTaskModal from "../../components/AddTaskModal";
export default {
    mixins: [validationMixin],
    components: { AddTaskModal },
    data() {
        return {
            form: {
                task_name: null,
                task_description: null,
            },
            textfields: [ "New Construction","Facilities Maintenance `&` Repair","Remodeling","      Tenant Finish"],
            desctext:"We understand that building owners and tenants need to focus on running their business… not managing the complexities of building maintenance. Let B&N Construction help you with your facility needs in Muizenberg, Western Cape.",
            services:['New Construction', 'Interior Design', 'Exterrior Remodel'],
            needtext:'Meeting Brighton &Nyasha Construction Needs!',
            descriptions:['B&N Construction specializes in new Construction, interior renovation and remodeling for house and businesses in Cape Town, Western Cape. Let us recreate your home and office space to fit your vision.', 'Our team of dedicated professionals has the experience and attention to detail necessary to complete your project. We provid project solutions with the backing and security of a proven construction leader.', 'Give us call so we can start on exceeding your expectations.'],
            servicegroups: {
                first:{
                    title:"New Construction",
                    desc:"Let us design and build your new Building, facility in Cape town, West Cape or the surrounding area."
                },
                second:{
                    title:"Interior and Exterior Remodeling/Tenant Finish",
                    desc:"Does your facility need a facelift? Let us remodel your home and business. We provide tenant repairs of all kinds."
                },
                third:{
                    title:"Facility Maintennance",
                    desc:"Let B&N Constuction provide the maintenance for service your require for your building or office."
                },
                forth:{
                    title:"Additions",
                    desc:"Our specialty is completing additions to our clients satisfaction. like Paving, Brickwork, Plastering, Skimming, Flooring, Painting,Landscape,Electricity,Ceiling"
                },
            },
            headache:'Talking the Headache out of your Construction Project!',
        };
    },
    validations: {
        form: {
            task_name: {
                required,
                minLength: minLength(3),
            },
            task_description: {
                required,
                minLength: minLength(3),
            },
        },
    },
    computed: {
        ...mapGetters({
            tasks: "task/tasks",
            isLoading: "task/isLoading",
        }),
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter((f) => f.sortable)
                .map((f) => {
                    return { text: f.label, value: f.key };
                });
        },
        rows() {
            return this.tasks.data.length;
        },
    },
    mounted() {
        this.$store.dispatch("task/getTasks", "");
    },
    methods: {
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        updateTask(evt, id) {
            this.$store.dispatch("task/updateTask", {
                id: id,
                data: { id: id, is_completed: evt.target.checked },
            });
        },
    },
};
</script>
