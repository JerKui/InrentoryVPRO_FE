<template>
<div class="menu">
        <div class="menu__box">
            <div class="menu__sectionone">
                <div class="menu__item" style="cursor: pointer;" onclick="window.location='dashboard.html';">
                    <i class="material-icons">home</i>
                    <p>Home</p>
                </div>
            </div>
            <div class="menu__sectiontwo">
                <div class="menu__item">
                    <i class="material-icons">account_balance_wallet</i>
                    <p>Payments</p>
                </div>
                <div class="menu__item__active">
                    <i class="material-icons">account_box</i>
                    <p>Accounts</p>
                    <div class="menu__account">
                        <span>43</span>
                    </div>
                </div>
                <div class="menu__item">
                    <i class="material-icons">menu</i>
                    <p>Products</p>
                </div>
                <div class="menu__item">
                    <i class="material-icons">settings</i>
                    <p>Settings</p>
                </div>
            </div>
            <div class="menu__sectionthree">
                <div class="menu__item" style="cursor: pointer;" onclick="window.location='login.html';">
                    <i class="material-icons">logout</i>
                    <p>Log out</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'MenuView'
}
</script>