Vue.component('partido', {
	props: ['date', 'times', 'teams', 'location', 'url'],
	template:
	`
		<tr>
			<td>{{date}} {{times}}</td>
			<td>{{teams}}</td>	
			<td><a v-bind:href= "url">{{location}}</a></td>
		</tr>
	`,
})

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