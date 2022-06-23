<template>
<default-layout>
<div class="container">
    <h3>hello</h3>
    <table class="tableDesign">
        <thead>
            <tr>
                <th v-for="(column, index) in columns" v-bind:key="index" class="tableHead">{{column}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in rows" v-bind:key="index">
                <td v-for="(rowItem, itemIndex) in row" v-bind:key="itemIndex" class="tableItem">{{rowItem}}</td>   
            </tr>
        </tbody>
    </table>
</div>
</default-layout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout'
</script>

<script>
// import axios from '../axios-common'

export default {
    name: 'TableData',
    data() { 
        return {
            rows: [
                [
                    "Manoj", "25", "Software Developer", "1997"
                ],
                [
                    "John", "25", "Lawyer", "1997"
                ],
                [
                    "Lily", "23", "Saleswoman", "1999"
                ],
                [
                    "Manoj", "25", "Software Developer", "1997"
                ],
                [
                    "John", "25", "Lawyer", "1997"
                ],
                [
                    "Lily", "23", "Saleswoman", "1999"
                ],
                [
                    "Manoj", "25", "Software Developer", "1997"
                ],
                [
                    "John", "25", "Lawyer", "1997"
                ],
                [
                    "Lily", "23", "Saleswoman", "1999"
                ],
                [
                    "Manoj", "25", "Software Developer", "1997"
                ],
                [
                    "John", "25", "Lawyer", "1997"
                ],
                [
                    "Lily", "23", "Saleswoman", "1999"
                ]
            ],
            columns: [
                'Name',
                'Age',
                'Job',
                'Year of Birth'
            ]
        }
    }
}
</script>

<style>
</style>