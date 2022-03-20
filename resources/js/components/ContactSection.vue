<template>
    
</template>

<script>
export default {
    data() {
        return {
            form: {
                task_name: null,
                task_description: null,
            },
        };
    },
    
    computed: {
        ...mapGetters({
            isLoading: "task/isLoading",
        }),
    },
    mounted() {},
    methods: {
        onSubmit() {
            this.$v.form.$touch();

            if (this.$v.form.$anyError) {
                return;
            }

            var _this = this;

            this.$store
                .dispatch("task/saveTask", { data: this.form })
                .then((res) => {
                    _this.form.task_name = null;
                    _this.form.task_description = null;
                    _this.$bvModal.hide("create_task_modal");
                });
        },
    },
};
</script>
