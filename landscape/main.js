Vue.component('partido', {
    props: ['nombre', 'mes', 'dia', 'horario', 'lugar', 'url'],
    template: `
    <li class="list-group-item border-dark d-flex text-center align-items-center">
        <span class="flex-shrink text-center">{{  dia + '/' + mes + ' ' + horario }}</span><span class="w-50">{{ nombre }}
        </span>
        <span>  <a id="llevarme a maps" v-bind:href="url">{{ lugar }}</a>
                <a id="mostrar mapa" v-on:click="seleccionarEstadio(url)"></a>
        </span>
    
    </li>
    `,
})


var app = new Vue({
    el: '#app',
    data: {
        partidos :[],
        meses: [
            {
                nombre: "June",
                numero: 6
            },
            {
                nombre: "July",
                numero: 7
            },
            {
                nombre: "August",
                numero: 8
            }
        ]
        },
    methods: {
        cambiarMes(numeroDeMes) {
            this.partidos = partidos.filter(x => x.mes == numeroDeMes)
        },
        seleccionarEstadio(url, index) {
            //alert(url);
            $("#map-seleccionado").attr("src", url);
            $(".btn-estadio-class").removeClass("unaClase");
            $("#btn-estadio" + index).addClass("unaClase");
        }
    }
})

var today = new Date();
var mesActual = today.getMonth()+1;

app.cambiarMes(mesActual)


$(".fixed-action-btn").click(function () {
    $('.fixed-action-btn').floatingActionButton();
    var data = "<p>   Please email us at: <a href='mailto:nysl@chisoccer.org'>nysl@chisoccer.org</a></p>  We will reply to your email as soon as we can."
    Swal.fire({
        title: " <i class='small material-icons'>drafts</i> Contact ",
        html: data

    })

});

