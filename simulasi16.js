aturCanvas();
setJudul("Konversi Suhu");
hapusLayar("#b3cfe5");

//listener untuk membaca event mouse
canvas.onmousedown = mouseDown; 
canvas.onmouseup = mouseUp;

var suhuK = 300;
var suhuC = 27;
var suhuF = 80.6;
var suhuR = 21.6;


var slider1 = {tipe:"H", nama:"suhu", x:240,y:525, p:300, minS:0, maxS:600, valS:300, desimal:0, label:" K"} 

var termo1 = {x:150, y:100, l:20, t:250, min:0, max:600, val:300, offset: 15, warnaGaris: "#f8f8f8", warnaIsi: "red",label:["0", "300", "600"]} 
  var termo2 = {x:300, y:100, l:20, t:250, min:-400, max:400, val:27, offset: 15, warnaGaris: "#f8f8f8", warnaIsi: "red",label:["-400", "0", "400"]}
  var termo3 = {x:450, y:100, l:20, t:250, min:-700, max:700, val:80.6, offset: 15, warnaGaris: "#f8f8f8", warnaIsi: "red",label:["-700", "0", "700"]} 
  var termo4 = {x:600, y:100, l:20, t:250, min:-400, max:400, val:21.6, offset: 15, warnaGaris: "#f8f8f8", warnaIsi: "red",label:["-400", "0", "400"]} 
  
  function setSimulasi() {
hapusLayar();
 //menampilkan teks  
  teks("PROGRAM KONVERSI SUHU", 0.5*(canvas.width), 40, 'bold 18pt    Calibri', 'blue', 'center'); 
 teks("Konversikanlah suhu pada derajat Kelvin, Farenheit, Reamur dan Celcius", 0.5*(canvas.width), 60, "12pt Calibri",    "#000", "center");
 
 //slider
  teks("Temperatur = "+suhuK+" K", slider1.x-15,      slider1.y-20, "bold 13pt Calibri", "black", "left"); 
  slider(slider1); 
  
  //termometer
  termo1.val = suhuK;
  suhuC = suhuK-273; 
  termo2.val = suhuC;
   suhuF = (suhuK-273)*1.8+32; 
termo3.val = suhuF; 
suhuR = (suhuK-273)*0.8
termo4.val = suhuR; 
 termometer(termo1); 
termometer(termo2); 
termometer(termo3);
termometer(termo4);

 //teks
teks(suhuK.toFixed(2)+" K", termo1.x+20, 430); 
teks(suhuC.toFixed(2)+" C", termo2.x+20, 430); 
teks(suhuF.toFixed(2)+" F", termo3.x+20, 430); 
teks(suhuR.toFixed(2)+" R", termo4.x+20, 430);
}

 function mouseDown(event){ 
 canvas.onmousemove = mouseDrag; 
}

function mouseDrag(event){ 
 //prosedur mengecek slider 
 var sliderAktif = cekSlider(event); 
 if (sliderAktif != null){ 
 if (sliderAktif.nama == "suhu") { 
suhuK = Number(sliderAktif.valS); 
setSimulasi();
}
}
}

function mouseUp(event){
canvas.onmousemove=null;
}

setSimulasi();
