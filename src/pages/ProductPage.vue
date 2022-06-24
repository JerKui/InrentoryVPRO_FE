<template>
<default-layout>
<div class="container">
    <p> {{ info }}</p>
    <a :href="url">Best website ever</a>

    <button @click="handleClick" ref="name">
        <span v-if="showBooks">Hide Panel</span>
        <span v-else>Show Panel</span>
    </button>

    <div v-if="showBooks">
    <ul>
        <li v-for="book in filteredBooks" :key="book.title" :class="{ fav: book.isFav}" @click="toggleFav(book)">
        <img :src="book.img" :alt="book.title">
        <h3>{{ book.title }}</h3>
        <p>{{ book.author }}</p>
        </li>
    </ul>
    </div>

    <br>
    <!-- Mouse Events -->
    <!-- <div class="box" @mouseover="handleEvent($event, 5)">mouseover</div>
    <div class="box" @mouseleave="handleEvent($event, 5)">mouseleave</div>
    <div class="box" @dblclick="handleEvent($event, 5)">double click</div>
    <div class="box">test</div> -->
</div>
</default-layout>
</template>

<style scoped>

.box {
    padding: 100px 0;
    width: 400px;
    text-align: center;
    background-color: #ddd;
    margin: 20px;
    display: inline-block;
}

body{
    background-color: #eee;
    max-width: 960px;
    margin: 20px auto;
}

p, h3, ul {
    margin: 0;
    padding: 0;
}

ul {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

li {
    list-style-type: none;
    background: #fff;
    margin: 20px auto;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

li.fav{
    background-color: #9999;
}

.active {
    background-color: green;
}
</style>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout'
</script>

<script>
export default {
    name: 'ProductPage',
    data() {
        return {
            info: null,
            url: 'http://google.nl',
            showBooks: true,
            books: [
                { title: 'Red Dead Redemption 2', author: 'Rockstar', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_sm_120.jpg?t=1618851907', isFav: true},
                { title: 'Fallout New Vegas', author: 'Bethesda', img: 'https://cdn.akamai.steamstatic.com/steam/apps/22380/capsule_sm_120.jpg?t=1586905021', isFav: true},
                { title: 'Tyranny', author: 'Steam', img: 'https://cdn.akamai.steamstatic.com/steam/apps/362960/capsule_sm_120.jpg?t=1615985862', isFav: true}
            ]
        }
    },
    methods: {
        hidePanel() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        handleClick() {
            this.$refs.name.classList.add('active')
            this.$refs.name.focus()
            this.info = 'test'
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.title == 'Fallout New Vegas');
        }
    }
}
</script>