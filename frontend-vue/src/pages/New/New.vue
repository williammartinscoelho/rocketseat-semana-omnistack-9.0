<template>
    <div class="content">
        <form @submit.prevent="handleSubmit">
            <label
                id="thumbnail"
                :style="{ backgroundImage: `url( ${preview} )` }"
                :class="{ 'has-thumbnail' : thumbnail }"
            >

                <input type="file" @change="handleFileInput" required/>
                <img src="../../assets/camera.svg" alt="Select image"/>
            </label>

            <label for="company">EMPRESA *</label>
            <input id="company" placeholder="Sue empresa incrível" required v-model="company" />

            <label for="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
            <input id="techs" placeholder="Quais tecnologias usam?" required v-model="techs"/>

            <label for="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
            <input id="price" placeholder="Valor cobrado por dia" v-model="price"/>

            <button class="btn">Cadastrar</button>
        </form>
    </div>
</template>

<script>
    import api from '@/api';

    export default {
        name: 'New',
        data() {
            return {
                thumbnail: null,
                preview: null,
                company: '',
                techs: '',
                price: ''
            }
        },
        methods: {
            handleFileInput(event) {
                this.thumbnail = event.target.files[0];

                this.thumbnail
                    ? this.preview = URL.createObjectURL(this.thumbnail)
                    : this.preview = null;
            },
            handleSubmit() {
                const user_id = localStorage.getItem("user");

                const data = new FormData();
                data.append("thumbnail", this.thumbnail);
                data.append("company", this.company);
                data.append("techs", this.techs);
                data.append("price", this.price);

                api.post("/spots", data, {
                    headers: {user_id: user_id}
                })
                    .then((r) => {
                        this.$router.push('/dashboard');
                    })
                    .catch((e) => {
                        alert(e.message)
                    });


            }
        }
    }
</script>

<style scoped>
    label#thumbnail {
        margin-bottom: 20px;
        border: 1px dashed #DDD;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    label#thumbnail input {
        display: none;
    }

    label#thumbnail.has-thumbnail {
        border: 0;
        border-radius: 5px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
    }

    label#thumbnail.has-thumbnail img {
        display: none;
    }
</style>
