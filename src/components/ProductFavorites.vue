<template>
    <div class="Product-Favorites-grid">
        <div v-for="Product, index in FavoriteProducts.splice(0, 4)" :key="index" class="Product-card">
            <img src="@/assets/images/LesPaulStudio.png" alt="">
            <div class="Product-Card-Info">
                <h3>{{ Product.name }}</h3>
                <p class="Product-Card-Description">{{ Product.description_long.substr(0, 250) }}</p>
                <div class="Product-Card-Info__Price">
                    <p class="Product-Card-Info__Price--Price">Pris: DKK {{ Product.price }}</p>
                    <p class="Product-Card-Info__Price--Button"> Læg i kurv</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    },
    data() {
        return {
            FavoriteProducts: [],
            SelectedProduct: null
        }
    },
    methods: {
        SelectGroup(index) {
            if (index === this.SelectedProduct) {
                this.SelectedProduct = null
            }
            else {
                this.SelectedProduct = index
            }
        }
    },
    mounted() {
        fetch('https://api.mediehuset.net/stringsonline/')
            .then(response => response.json())
            .then(data => {
                console.log(data.productgroups.items[0].subgroups[0].products)
                this.FavoriteProducts = data.productgroups.items[0].subgroups[0].products
            })
            .catch(error => {
                console.error(error)
            })
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.Product-Favorites-grid {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1vw 5vw;

}

.Product-card {
    display: grid;
    gap: 0vw 2vw;
    grid-template-columns: repeat(5, 1fr);
    border: 1px solid rgba(255, 255, 255, 0.144);
    font-size: 30px;
    text-align: center;

    img {
        width: 100%;
        height: 100%;
        grid-column: 1/span 2;
        background-color: white;
    }

    .Product-Card-Info {
        grid-column: 3/span 3;
        display: grid;
        grid-template-rows: auto 1fr auto;
        padding-right: 2vw;

        h3 {
            font-size: 1.2vw;
            padding: 2vw 0vw 1vw 0vw;
            text-align: left;
        }

        .Product-Card-Description {
            font-size: 0.8vw;
            text-align: left;

        }

        .Product-Card-Info__Price {
            display: flex;
            justify-content: center;
            font-size: 1vw;
            margin-bottom: 1vw;

            .Product-Card-Info__Price--Price {
                width: 70%;
                line-height: 3vw;
                border: 1px solid white;
                border-right: #D10061;
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
            }

            .Product-Card-Info__Price--Button {
                width: 30%;
                line-height: 3vw;
                background-color: #D10061;
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
            }
        }
    }

}

.Product-Favorites-grid__Info {
    background-color: rebeccapurple;
}
</style>