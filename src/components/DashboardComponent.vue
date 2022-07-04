<template>
    <div class="flex--1">
        <div class="header">
            <h1>Dashboard</h1>
            <button>Go to orders</button>
        </div>
    </div>
</template>

<script>
</script>

<style>
button p {
    color: white;
}


p, label {
    color: black;
}

input::placeholder {
    color: #A5A8AB;
}


button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid #F0F0F0;
    padding: 28px;
    font-size: 14px;
    font-weight: 400;
    color: black;
    border-radius: 0px;
    cursor: pointer;
}
.flex--1 {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-x: hidden;
    padding: 48px;
}

select{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom-color: #a5a8ab5e;
    font-size: 16px;
    line-height: 24px;
    padding-left: 12px;
    color: black;
    overflow: hidden;
    border-radius: 0px;
    background-color: #fff;
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 52px;

}

h3 {
    font-weight: 300;
    color: #A5A8AB;
}

p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: black;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    gap: 60px;
}
</style>