<template>
    <div @click.self="closeAddCategory" class="backdrop">
        <div class="circle"></div>
        <div class="addCategory">
            <div class="containerForm">
                <form class="form" form v-on:submit.prevent="postProductline">
                    <h2>+ Add Category</h2>
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
.circle {
    top: 465px;
    left: 1030px;
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
    background: rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
    backdrop-filter: blur(2px);
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