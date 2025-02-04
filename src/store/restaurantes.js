import { defineStore } from 'pinia'

export const useRestaurantesStore = defineStore('restaurantes', {
    state: () => ({
        restaurantes: [],
        pagina: 1
    }),
    actions: {
        async carregarPagina() {
            const resposta = await fetch(`http://54.233.122.212/restaurantes/${this.pagina}`)
            this.restaurantes = await resposta.json()

            return this.restaurantes
        },
        async passarPagina() {
            const pagina = this.pagina + 1;

            const proximaPagina = await fetch(`http://54.233.122.212/restaurantes-prox-pagina/${pagina}`);

            if (await proximaPagina.json()){
                this.pagina++
                return this.carregarPagina()
            }
        },
        async voltarPagina() {
            if (this.pagina > 1) {
                this.pagina--;
                return this.carregarPagina()
            }
        }
    },
    getters: {
        ordenarAvaliacao() {
            return this.restaurantes.sort((a, b) => b.avaliacao - a.avaliacao)
        },
        ordenarAlfabeto() {
            return this.restaurantes.sort((a, b) => a.titulo.localeCompare(b.titulo))
        }
    }
})