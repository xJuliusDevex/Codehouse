let text="Bienvenido aqui esta todos los productos:";
let prod1="Fundamentos de Programacion",prod2="Metodologia de la Programacion",prod3="Clean Code";
oracion=text+"\n1.\t"+prod1+"\n2.\t"+prod2+"\n3.\t"+prod3;
alert(oracion);
precio="\n1.\t"+prod1+"\t 15$ \n2.\t"+prod2+"\t 30$\n3.\t"+prod3+"\t 20$";
alert(precio)
let i=0;
let n=parseInt(prompt("¿Cuantos producto vas a comprar?"));
resultado=0;
let lista="";
do{
    numero1=parseInt(prompt("\n1.\t"+prod1+"\t 15$ \n2.\t"+prod2+"\t 30$\n3.\t"+prod3+"\t 20$"));
    switch(numero1)
    {
        case 1:
            if(i==0){
                resultado+=15;
                lista+=""+prod1;
            }
            else{
                resultado+=15;
                lista+="\n"+prod1;
            }
            
            break;
        case 2:
            if(i==0){
                resultado+=15;
                lista+=""+prod2;
            }
            else{
                resultado+=15;
                lista+="\n"+prod2;
            }
            break;
        case 3:
            if(i==0){
                resultado+=15;
                lista+=""+prod3;
            }
            else{
                resultado+=15;
                lista+="\n"+prod3;
            }
            break
        default:
            alert("no seleccion ningun dato");
            break
    }
    i++;
}while(i!==n);
alert("El precio de tu compra es todo esto:"+ String(resultado)+"\nlista:"+"\n"+lista);