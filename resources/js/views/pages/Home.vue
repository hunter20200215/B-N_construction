<template>
    <section class="top-section">
        <div class="envoled"></div>
        <div class="text-container text-center">
            <vue-typed-js :strings="textfields" :loop="true" :typeSpeed="150" 	:showCursor="false" class="d-block pt-5">
                <h1 class="typing text-center animation-text"></h1>
            </vue-typed-js>
            
            <p class="py-2" style="font-size:17px;font-size: 18px;font-weight:400;line-height: 1.8em;">{{desctext}}</p>
            <div class="text-center pb-3">
                <b-link href="/contact" class=""> 
                <b-button size="lg" variant="secondary" style="border:1px solid;">Contact Us</b-button>
            </b-link>
            </div>
        </div>
        
        
    </section>
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
            textfields: [ "New construction","Facilities Maintenance `&` Repair","Remodeling","      Tenant Finish"],
            desctext:"We understand that building owners and tenants need to focus on running their business… not managing the complexities of building maintenance. Let B&N Construction help you with your facility needs in Muizenberg, Western Cape."
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
