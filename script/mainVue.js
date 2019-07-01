var app = new Vue({
    el: '#app',
    data: {
        section: "home",
				partidos : [],
    }
})

app.partidos = data.partidos;
	
function cambiarSection(nuevaSeccion){
  app.section = nuevaSeccion;
}