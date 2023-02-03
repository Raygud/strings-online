<template>
    <div>
        <ol>

            <li :class="index === SelectedProduct ? 'ActiveProduct' : ''" @click="SelectGroup(index)"
                v-for="Product,index in Products" :key="index">
                {{ Product.title === 'Andre strengeinstrumenter' ? 'Andre' : Product.title }}
                <ul :class="index === SelectedProduct ? 'ShowGroup' : 'HideGroup'">

                    <li v-for="SubProduct, index in Product.subgroups" :key="index">
                        <router-link :to="{
                            path: `/product/${Product.title}/${SubProduct.title}`,
                            query: {
                                Id: SubProduct.id
                            }
                        }">{{ SubProduct.title }}</router-link>
                    </li>
                </ul>
            </li>

        </ol>

    </div>
</template>

<script>
export default {
    setup() {


        return {}
    },
    data() {
        return {
            Products: [],
            SelectedProduct: null
        }
    },
    methods: {
        SelectGroup(index) {
            console.log(index)
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
                console.log(data.productgroups.items)
                this.Products = data.productgroups.items
            })
            .catch(error => {
                console.error(error)
            })
    }
}
</script>

<style lang="scss" scoped>
ol {
    padding: 1vw 0 1vw 0.5vw;
    font-size: 1.3vw;
    margin: 0;
    background-color: #0A1D1C;
    border: 1px solid #1F5E5B;
    color: #00F9B6;

    li {
        list-style: none;
        text-align: left;
    }
}

.ShowGroup {
    display: block;

    li {
        list-style: circle;
        padding: 0;
        margin: 0;
        color: #00F9B6;

        a {
            color: #00F9B6;
            text-decoration: none;
        }
    }
}

.HideGroup {
    display: none;
}

.ActiveProduct {
    color: white;
}
</style>