<script setup>
    import { ref, computed, onMounted } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    import Title from '../components/Title.vue';
    import Banner from '../components/Banner.vue';
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';

    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';

    import { Autoplay } from 'swiper/modules';

    import { useSingleRestauranteStore } from '../store/single-restaurante'

    const modulo = [Autoplay];

    const route = useRoute()
/*import Promocao from '../components/Sales.vue'
import Cardapio from '../components/Menu.vue'*/

/*const pratos = [
{
  "nome": "Feijoada",
  "valor": 25.99,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Feijão Preto", "Carne de Porco", "Arroz"],
  "restaurante": 6,
  "categoria_prato": 0, 
  "desconto": false,
  "valor_desconto": 0,
  "descricao": "A feijoada é um prato brasileiro clássico, preparado com feijão preto e diversas carnes de porco, como linguiça e bacon. É um prato rico em sabor, acompanhado de arroz, couve e laranja."
},
{
  "nome": "Sushi de Salmão",
  "valor": 18.50,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Salmão Fresco", "Arroz de Sushi", "Alga Nori"],
  "restaurante": 5, // Associando com o restaurante de índice 5
  "categoria_prato": 1, // Associando com a categoria de índice 1 (Comida Japonesa)
  "desconto": false,
  "valor_desconto": 0,
  "descricao": "Um prato japonês refinado composto por rolos de arroz de sushi, pedaços de salmão fresco e alga nori, oferecendo um sabor fresco e textura suave."
},
{
  "nome": "Couscous Marroquino",
  "valor": 12.99,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Couscous", "Vegetais", "Temperos"],
  "restaurante": 4, // Associando com o restaurante de índice 4
  "categoria_prato": 2, // Associando com a categoria de índice 2 (Comida Africana)
  "desconto": false,
  "valor_desconto": 0,
  "descricao": "Uma iguaria da culinária marroquina, o couscous é preparado com sêmola de trigo, vegetais e uma mistura de temperos, resultando em um prato leve e aromático"
},
{
  "nome": "Pizza Margherita",
  "valor": 15.99,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Molho de Tomate", "Mozzarella", "Manjericão"],
  "restaurante": 3, // Associando com o restaurante de índice 3
  "categoria_prato": 0, // Associando com a categoria de índice 0 (Comida Brasileira)
  "desconto": true,
  "valor_desconto": 2.00,
  "descricao": "A pizza clássica italiana apresenta uma base de massa coberta com molho de tomate, mozarela e folhas de manjericão, proporcionando uma explosão de sabores simples e deliciosos."
},
{
  "nome": "Bobotie Sul-Africano",
  "valor": 17.50,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Carne Moída", "Ovo", "Leite"],
  "restaurante": 7, // Associando com o restaurante de índice 7
  "categoria_prato": 2, // Associando com a categoria de índice 2 (Comida Africana)
  "desconto": true,
  "valor_desconto": 1.50,
  "descricao": "Um prato autêntico da África do Sul, o bobotie é feito com carne moída temperada, ovos e leite, assado até dourar, oferecendo uma mistura única de sabores agridoces."
},
{
  "nome": "Taco de Carne",
  "valor": 8.99,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Carne de Bovino", "Tortilha", "Vegetais"],
  "restaurante": 8, // Associando com o restaurante de índice 8
  "categoria_prato": 2, // Associando com a categoria de índice 2 (Comida Africana)
  "desconto": false,
  "valor_desconto": 0,
  "descricao": " Um prato da culinária mexicana, o taco de carne apresenta carne de bovino temperada, servida em uma tortilha macia e recheada com vegetais frescos, criando uma explosão de sabores."
},
{
  "nome": "Tempurá de Camarão",
  "valor": 21.99,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Camarão", "Vegetais", "Molho de Tempurá"],
  "restaurante": 1, // Associando com o restaurante de índice 1
  "categoria_prato": 1, // Associando com a categoria de índice 1 (Comida Japonesa)
  "desconto": false,
  "valor_desconto": 0,
  "descricao": "Uma iguaria da culinária japonesa, o tempurá de camarão é preparado com camarões frescos, vegetais e molho de tempurá, proporcionando uma textura crocante e sabor requintado."
},
{
  "nome": "Acarajé",
  "valor": 7.50,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Feijão Fradinho", "Camarão Seco", "Dendê"],
  "restaurante": 0, // Associando com o restaurante de índice 0
  "categoria_prato": 0, // Associando com a categoria de índice 0 (Comida Brasileira)
  "desconto": true,
  "valor_desconto": 1.00,
  "descricao": "Uma iguaria da culinária brasileira, o acarajé é uma bola frita feita de massa de feijão fradinho recheada com camarão seco e dendê. É um petisco tradicionalmente servido nas ruas da Bahia, com sabor único e uma textura crocante por fora e macia por dentro."
},
{
  "nome": "Sobá Japonês",
  "valor": 14.99,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Macarrão", "Caldo Dashi", "Vegetais"],
  "restaurante": 2, // Associando com o restaurante de índice 2
  "categoria_prato": 1, // Associando com a categoria de índice 1 (Comida Japonesa)
  "desconto": true,
  "valor_desconto": 1.50,
  "descricao": "Um prato da culinária japonesa, o sobá é uma sopa de macarrão servida em um caldo à base de dashi, acompanhada de vegetais e outros ingredientes, proporcionando um sabor leve e refrescante."
},
{
  "nome": "Baião de Dois",
  "valor": 11.99,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Arroz", "Feijão Verde", "Queijo Coalho"],
  "restaurante": 6, // Associando com o restaurante de índice 6
  "categoria_prato": 0, // Associando com a categoria de índice 0 (Comida Brasileira)
  "desconto": false,
  "valor_desconto": 0,
  "descricao": "Um prato típico da culinária nordestina do Brasil, o baião de dois é preparado com arroz e feijão verde cozidos juntos, misturados com queijo coalho e temperos. É uma refeição saborosa e reconfortante, com influências da cultura nordestina."
}
];
*/

    const singleRestaurante = useSingleRestauranteStore();

    onMounted(() => singleRestaurante.listarDescontos(route.params.id))


    const singleRestauranteStore = useSingleRestauranteStore();
    const cardapio = computed(() => singleRestauranteStore.cardapio);
    const pagina = computed(() => singleRestauranteStore.pagina)

    onMounted(() => {
        singleRestauranteStore.listarCardapio(route.params.id)
        singleRestauranteStore.qtdPratos
    })
</script>

<template>
    <Navbar logo="../assets/logo.svg" alt="Logo"></Navbar>
    <Banner />
    <!--<Promocao />
   <Cardapio /> -->
    <section id="sales" v-if="!singleRestaurante.filtroDesconto.length == false">
        <el-row justify="center">
            <el-col :span="20">
                <Title text="Promoções"></Title>

            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col class="col" :span="20">
                <el-row :gutter=10>
                    <el-col :span="24">
                        <Swiper 
                            loop=true 
                            :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,
                            }" 
                            :pagination="{
                                clickable: true,
                            }" 
                            :navigation="true" 
                            :slides-per-view="3.3"
                            :modules="modulo" 
                            space-between="30"
                            >
                            <SwiperSlide v-for="prato in singleRestaurante.filtroDesconto">
                                <div class="grid-content" @click="exibePratoClicado(prato)">
                                    <div class="image" :style="{ background: 'url(' + prato.imagem + ')' }">
                                    </div>
                                    <div class="details">
                                        <h6>{{ prato.nome }}</h6>
                                        <!-- <p>{{ prato.ingredientes }}</p> -->
                                        <div class="prices">
                                            <span v-if=prato.desconto class="original">De: R${{ prato.valor }}</span>
                                            <span v-else> R${{ prato.valor }}</span>
                                            <span v-if=prato.desconto class="sale">Por: R${{ prato.valor_desconto }}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </section>
    <section class="menu">
        <el-row justify="center">
            <el-col class="title-and-filter" :span=20>
                <Title text="Cardápio"></Title>
                <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                    <el-option label="Mais Caro" value="Mais Caro" @click="singleRestauranteStore.ordenarMaisCaro()" />
                    <el-option label="Mais Barato" value="Mais Barato"
                        @click="singleRestauranteStore.ordenarMaisBarato()" />
                    <el-option label="Ordem Alfabética" value="Ordem Alfabética"
                        @click="singleRestauranteStore.ordenarAlfbeto()" />
                </el-select>
            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col :span="20">
                <el-row :gutter=10 justify="start">
                    <el-col v-for="dish in cardapio" :xs="24" :sm="12" :md="12" :lg=12 :span="12"
                        @click="exibePratoClicado(dish)">
                        <div class="grid-content dish">
                            <img :src="dish.imagem" alt="">
                            <div class="info">
                                <div>
                                    <h3>{{ dish.nome }}</h3>
                                    <span v-if="dish.desconto">R$ {{ dish.valor_desconto }}</span>
                                    <span>R${{ dish.valor }}</span>
                                </div>
                                <p>{{ dish.descricao }}</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row justify="center">
            <button @click="singleRestauranteStore.voltarPagina()">Anterior</button>
            <span>{{ pagina }}</span>
            <button @click="singleRestauranteStore.passarPagina()">Próximo</button>
        </el-row>
    </section>

    <el-dialog v-model="selecionouPrato" class="dish-detail">
        <img :src=pratoSelecionado.imagem alt="">
        <div class="data-dish">
            <div class="title-and-price">
                <h2>{{ pratoSelecionado.nome }}</h2>
                <div v-if="pratoSelecionado.desconto" class="sale-pricing">
                    <span class="real-price">R$ {{ pratoSelecionado.valor_desconto }}</span>
                    <span class="price">R$ {{ pratoSelecionado.valor }}</span>
                </div>
                <span v-else class="real-price">{{ pratoSelecionado.valor }}</span>
            </div>
            <p>{{ pratoSelecionado.descricao }}</p>
            <form action="">
                <textarea name="obs" id="obs" cols="30" rows="10" placeholder="Observações"></textarea>
                <div style="display: flex; justify-content: space-between; align-content: center; align-items: center;">
                    <div class="quantity">
                        <button @click.prevent="somar()">+</button>
                        <input type="number" v-model="quantidade" />
                        <button @click.prevent="subtrair()" class="subtract">-</button>
                    </div>
                    <button class="add-carrinho">
                        <img class="cart" src="../assets/cart-shopping-solid.svg" alt=""> Total: R${{ valorTotal }}
                    </button>
                </div>
            </form>
        </div>
    </el-dialog>
    <Footer></Footer>
</template>

<style>
    #sales .el-row,
    #sales .grid-content {
        text-align: unset !important;
    }
    #sales a{text-decoration: none;}
    #sales .details p {
        margin: 0;
    }

    #sales .prices {
        display: grid;
        text-align: end;
    }

    #sales .prices .original {
        text-decoration: line-through
    }

    #sales .grid-content {
        text-align: center;
        background-color: var(--white100);
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        border: 1px solid var(--white300);
        color: var(--gray800);
        text-decoration: none !important;
        height: 332px;
    }

    #sales .image {
        height: 180px !important;
        background-size: cover !important;
        background-repeat: no-repeat;
        display: grid;
        align-content: end;
    }

    #sales .details {
        padding: 4px 20px 32px 20px;
    }

    #restaurants .details div {
        display: flex;
        justify-content: space-between;
    }

    #sales .details h6 {
        font-size: 16px;
        font-weight: 700;
    }

    #sales .details span {
        font-size: 13px;
    }

    .menu .el-col {
        margin: 6px 0;
        /* height: 360px; */
    }

    .menu .el-row,
    .menu .grid-content {
        text-align: unset !important;
    }

    .menu a {
        text-decoration: none;
    }

    .menu .title-and-filter {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .menu .grid-content {
        display: flex;
        padding: 12px;
    }

    .menu .dish .info {
        width: 100%;
        padding-left: 8px;
    }

    .menu .dish img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 4px;
    }

    .menu .dish .info div {
        display: flex;
        justify-content: space-between;
    }

    .menu .grid-content {
        text-align: center;
        background-color: var(--white100);
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        border: 1px solid var(--white300);
        color: var(--gray800);
        text-decoration: none !important;
    }
</style>