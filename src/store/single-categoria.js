import {defineStore} from 'pinia'

export const useSingleCategoriaStore = defineStore('single-categoria', {
    state: () =>({
        listaPratos: []
    }),
    actions: {
        async carregarPratos(id){
            const resposta = await fetch(`http://54.233.122.212/pratos-categoria/${id}`);
            const lista = await resposta.json();
            
            this.listaPratos = lista.categoria_prato;

            return this.listaPratos
        }
    }
}) 