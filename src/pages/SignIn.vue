<template>
    <div class="container">
        <div class="frame1">
            <h3>Log in</h3>
            <hr width="100%" height="50%" color="#E8E8E8" size="1px">
            <div class="framefield">
                <form id="thisform">
                <label>
                <div class="email">
                        <h5>Email</h5>
                        <input type="email" id="Email" name="Email">  
                </div>
                </label>
                <br>
                <label>
                <div class="password">
                        <h5>Password</h5>
                        <input type="password" id="Password" name="Password">
                </div>
                </label>
            </div>
            <label>
            <div class="frameremember">
                    <input type="checkbox">
                    <p>Remember me</p>
            </div>
            </label>
            <button id="button" type="button"><h5><span>Log in</span></h5></button>
            <hr width="100%" height="50%" color="#E8E8E8" size="1px">
            <div class="framesignup">
                <p>Don't have an account?</p>
                <h5>Sign up</h5>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    name : 'SigninView'
}
</script>