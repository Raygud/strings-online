<template>
    <div class="Product-Grid">
        <div class="Product-card">
            <div class="ImageDown">
                <img class="RotatedImg" :src="ProductDetail.image.fullpath" alt="">
                <img v-for="image, index in ProductDetail.gallery" :key="index" :src="image.fullpath" alt="">
            </div>

            <div class="Product-Info">
                <h3>{{ ProductDetail.name }}</h3>
                <p>{{ ProductDetail.description_long }}</p>
            </div>

            <div class="Product-Card-Info__Price">
                <img class="Logo" :src="ProductDetail.brand_image" alt="">
                <p class="Product-Card-Info__Price--Price">Pris: DKK {{ ProductDetail.price }}</p>
                <p class="Product-Card-Info__Price--Button"> Læg i kurv</p>
                <p class="Product-Card-Info__Price--Stock">{{ ProductDetail.stock }} på lager</p>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductComponent',
    computed: {
        id() {
            return this.$route.params.id
        }
    },
    data() {
        return {
            ProductDetail: [],
            SelectedProduct: null
        }
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler: function () {
                this.fetchData()
            }
        }
    },
    methods: {
        fetchData() {
            fetch('https://api.mediehuset.net/stringsonline/products/' + this.$route.query.Id)
                .then(response => response.json())
                .then(data => {
                    console.log(data.item)
                    this.ProductDetail = data.item
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }
}

</script>


<style lang="scss" scoped>
.Product-Grid {
    display: grid;
    grid-template-columns: auto;
    gap: 5vw 0vw;

    .Product-card {
        display: grid;
        grid-template-columns: repeat(11, 1fr);

        .RotatedImg {
            aspect-ratio: 1/1;
            transform: rotate(270deg);
            width: 200%;
            grid-column: 1/ span 3;
        }

        .Product-Info {
            grid-column: 4/span 6;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-left: 2vw;
            padding-top: 1vw;

            h3 {
                text-align: left;
                width: 10vw;
                font-size: 1.2vw;
            }

            p {
                text-align: left;
                width: 30vw;
                font-size: 1vw;
            }
        }

    }

    img {
        margin-top: 3vw;
        width: 200%;
    }

    .Logo {
        width: 70%;
        background-color: white;
        padding: 2vw;
    }

    .Product-Card-Info__Price {
        grid-column: 10/12;

    }

    .Product-Card-Info__Price--Price {
        border: solid 1px rgba(255, 255, 255, 0.411);
        border-radius: 6px;
        line-height: 3vw;
        text-align: center;
        font-size: 1vw;
    }

    .Product-Card-Info__Price--Button {
        line-height: 3vw;
        background-color: #D10061;
        border-radius: 6px;
        font-size: 1vw;

    }

    .Product-Card-Info__Price--Stock {
        text-align: right;
        font-size: 1vw;

    }

    .ImageDown {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


}
</style>