<template>
    <div @click.self="closeAddCategory" class="backdrop">
        <div class="addCategory">
            <button @click="closeAddCategory" class="close"><p>x</p></button>
            <div class="containerForm">
                <form class="form" form v-on:submit.prevent="postProductline">
                    <h3>Add category</h3>
                    <hr>
                    <div class="labelContainer">
                        <label><p>Add category name</p><input type="text" v-model="data.description" placeholder="Enter a genre name" required/></label>
                        <label><p>Add image</p><input type="text" v-model="data.image" placeholder="Enter a image" required/></label>
                    </div>
                    <div class="buttonContainer">
                        <button id="buttonSignIn"><p>Add category</p></button>  
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.addCategory {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    gap: 24px;
}
.addCategory button {
    justify-content: flex-end;
    width: 50px;
}
.backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.labelContainer {
    display: flex;
    gap: 24px;
}

.labelContainer label {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.buttonContainer button {
    width: 100%;
}
</style>

<script setup>
import axios from '../axios-common'
</script>

<script>
export default {
    data() {
        return {
            info: null,
            showAddCategory: false,
            data: {
                description: '',
                image: '',
            }
        }
    },
    methods: {
        closeAddCategory() {
            this.$emit('close')
        },
        postProductline() {
            axios.post('/productline', this.data, {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error.response.data))
            this.closeAddCategory()
        }
    }
}
</script>