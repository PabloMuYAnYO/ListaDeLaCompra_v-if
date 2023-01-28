const mi_app = Vue.createApp({
    data(){
        return{
            titulo:'Lista de la compra avanzada',
            texto:'',
            edit: false,
            lista:[
                {cosa:'Patata', tachado:true}
            ]
        }
    },
    computed:{ // Propiedad computada, modifica una variable mantenindo la original, haces una copia
        listaOrdenada(){
            return [...this.lista].reverse() // Con esto proteges la variable
        }
    },
    methods:{ // Metodos, cambios si o si
        guardarElemento(){
            this.lista.push({cosa:this.texto, tachado:false})
            this.texto = ''
        },
        eliminarUltElemento(){
            this.lista.pop(this.texto)
        },
        editando(edit){
            this.edit = edit
            this.texto = ''
        },
        tachado(elemento){
            elemento.tachado = !(elemento.tachado)
        }
    }
})
.mount('#mi_app')
console.log(mi_app.lista)