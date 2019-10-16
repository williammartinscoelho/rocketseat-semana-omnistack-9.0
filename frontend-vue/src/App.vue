<template>
    <div id="app">
        <div class="container">
            <img src="./assets/logo.svg" alt="AirCnC Logo">

            <transition name="component-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #app {
        min-height: 100%;
    }

    body {
        background: #000 url("./assets/background.jpg") no-repeat;
        background-size: cover;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
    }

    .container {
        margin: 80px auto;
        max-width: 450px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        width: 100%;
        background: #FFF;
        margin-top: 50px;
        border-radius: 5px;
        padding: 30px;
    }

    .content form {
        display: flex;
        flex-direction: column;
    }

    .content form label {
        font-size: 14px;
        color: #444;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .content form label span {
        font-weight: normal;
        color: #999;
        font-size: 12px;
    }

    .content form input {
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 2px;
        height: 45px;
        padding: 0 15px;
        font-size: 16px;
    }

    .content button.btn {
        border: 0;
        border-radius: 2px;
        width: 100%;
        height: 42px;
        padding: 0 20px;
        font-size: 16px;
        font-weight: bold;
        background: #f05a5b;
        color: #FFF;
        cursor: pointer;
        transition: 0.3s;
    }

    .content button.btn:hover {
        background: #e14f50;
    }

    .component-fade-enter-active,
    .component-fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>
