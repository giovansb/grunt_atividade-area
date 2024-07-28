document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-area').addEventListener('submit', function(evento){
        evento.preventDefault();

        let a = parseInt(document.getElementById("a").value);
    
        let b = parseInt(document.getElementById("b").value);
    
        let c = parseInt(document.getElementById("c").value);

        let s = (a + b + c) / 2;

        let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

        document.getElementById('resultado-valor').innerText = area;
        
        document.querySelector('.resultado').style.display = 'block';
    })
})