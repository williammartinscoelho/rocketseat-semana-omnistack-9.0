<template>
    <div class="content">
        <ul class="spot-list">
            <li v-for="item in spots" :key="item.id">
                <header :style="{backgroundImage: `url(${item.thumbnail_url})`}"></header>
                <strong>{{item.company}}</strong>
                <span>{{item.price | toCurrency}}</span>
            </li>
        </ul>

        <router-link to="/new" tag="button" class="btn">Cadastrar novo spot</router-link>
    </div>
</template>

<script>
    import api from '@/api';

    export default {
        name: 'Dashboard',
        filters: {
            toCurrency(val) {
                if (val) {
                    return val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + "/dia";
                } else {
                    return 'Gratuito';
                }
            }
        },
        data() {
            return {
                spots: []
            }
        },
        created() {
            this.loadSpots();
        },
        methods: {
            loadSpots() {
                const user_id = localStorage.getItem("user");

                api.get('/dashboard', {headers: {user_id: user_id}})
                    .then((r) => {
                        this.spots = r.data;

                    })
                    .catch((e) => {
                        alert(e.message);

                    });
            }
        }
    }
</script>

<style scoped>
    ul.spot-list {
        width: 100%;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin-bottom: 30px;
    }

    ul.spot-list li {
        display: flex;
        flex-direction: column;
    }

    ul.spot-list li header {
        width: 100%;
        height: 120px;
        background-size: cover;
        border-radius: 5px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
    }

    ul.spot-list li strong {
        margin-top: 10px;
        font-size: 24px;
        color: #444;
    }

    ul.spot-list li span {
        margin-top: 15px;
        color: #999;
    }
</style>
