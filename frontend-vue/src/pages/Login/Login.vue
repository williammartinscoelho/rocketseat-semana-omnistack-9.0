<template>
    <div class="content">
        <p>
            Ofereça <strong>spots</strong> para programadores e
            encontre <strong>talentos</strong> para sua empresa
        </p>

        <form @submit.prevent="handleSubmit">
            <label for="email">E-MAIL *</label>
            <input id="email" type="email" placeholder="Seu melhor e-mail" required v-model="email"/>
            <button class="btn">Entrar</button>
        </form>
    </div>
</template>

<script>
    import api from '@/api';

    export default {
        name: 'Login',
        data() {
            return {
                email: ""
            }
        },
        methods: {
            handleSubmit() {
                api.post("/sessions", {
                    email: this.email
                }).then((r) => {
                    const _id = r.data._id;
                    localStorage.setItem("user", _id);
                    this.$router.push('/dashboard');

                }).catch((e) => {
                    alert(e.message);

                });
            }
        }
    }
</script>

<style scoped>
    .content p {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 30px;
    }


</style>
