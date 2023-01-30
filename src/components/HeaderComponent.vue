<template>
    <header>
        <nav>
            <ul>
                <router-link to="/">Forside</router-link> 
            <router-link to="/sales&conditions">Salgs- og handelbetingelser</router-link> 
            <router-link class="Nav__Login-Button" to="/login">Login</router-link>
            </ul>
            
        </nav>
        <div class="Search-Bar">
            <address class="Search-Bar__Address">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                <a href="mailto:SALE@STRINGSONLINE.com">SALES@STRINGONLINE.com</a>
                <font-awesome-icon icon="fa-solid fa-phone" />
                <a href="tel:+45 98 12 22 68">+45 98 12 22 68</a>
                <font-awesome-icon icon="fa-solid fa-basket-shopping" />
            </address>
            <form action="">
                <input placeholder="Indtast søgeord" type="text">
                <button type="submit"><font-awesome-icon class="Search-Bar__Button__Arrow" icon="fa-solid fa-arrow-right" /></button>
            </form>
        </div>

    </header>
    <div class="Burger-Menu">
        <div class="Burger-Menu__Button">

        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

.Burger-Menu{
    height: 1vw;
    display: none;
    .Burger-Menu__Button{
        width: 3vw;
        height: 3vw;
        background-color: #00F9B6;
    }
}


header{
    display: flex;
    justify-content: center;
    gap: 2vw;
    margin-top: 4vw;
    margin-bottom: 3vw;
}

nav{
    background-image: url(@/assets/images/header-bg.png);
    background-size: contain;
    width: 60%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul{
        display: flex;
        justify-content: space-between;
        width: 60%;
        margin: 0;
        a{
            align-self: center;
            font-size: 1.3vw;
        }
    }

    .Nav__Login-Button{
        background-color: #00F9B6;
        padding: 0vw 0.5vw 0vw 0.5vw;
        border-radius: 3px;
    }
}


.Search-Bar{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Search-Bar__Address{
        position: absolute;
        display: flex;
        justify-content: space-between;
        font-size: 0.9vw;
        top: 0;
        height: 1vw;
        width: 100%;
        a{
            text-decoration: none;
            color: white;
        }
    }

    input{
        background-color: #0A1D1C;
        border: none;
        font-size: 1.3vw;
        height: 2.8vw;
        width: 20vw;
        padding-left: 1vw;
        border-radius: 6px;
        margin-right: 0.5vw;
        color: #00F9B6;
        border: 1px solid #1F5E5B;
        box-sizing: border-box;
        &::placeholder{
            color: #00F9B6;
        }
    }
    button{
        background-color: #00F9B6;
        border: none;
        font-size: 1.3vw;
        height: 2.8vw;
        padding-left: 1vw;
        border-radius: 6px;
        margin-right: 0.5vw;
        color: #1F5E5B;
        border: 1px solid #1F5E5B;
        box-sizing: border-box;
        width: 4vw;
    }

}

@media only screen and (max-width: 600px) {
  header {
    display: none;
  }
  .Burger-Menu{
    
    display: flex;
    justify-content: flex-end;
  }
}



</style>