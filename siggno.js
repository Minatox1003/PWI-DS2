var dia_semana = new Array("um domingo","uma segunda-feira","uma terça-feira","uma quarta-feira","uma quinta-feira","uma sexta-feira","um sábado");
var nome_mes = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

function Exibir()
{
    var dia = document.getElementById("txtdia").value;
    var mes = document.getElementById("txtmes").value;
    var ano = document.getElementById("txtano").value;

    if (isNaN(dia))
    {
        window.alert("Não pode ter caracter");
        location.reload();
    }
    else if (dia=="")
    {
        window.alert("Não pode ficar vazio");
        location.reload();
    }
    else
    {
        dia = parseInt(dia);

        if (isNaN(mes))
        {
            window.alert("Não pode ter caracter");
            location.reload();
        }
        else if (mes=="")
        {
            window.alert("Não pode ficar vazioo");
            location.reload();
        }
        else if ((mes<1)||(mes>12))
        {
            window.alert("Deve ser entre 1 and 2");
            location.reload();
        }
        else
        {
            mes = parseInt(mes);

            if (isNaN(ano))
            {
                window.alert("Deve ser entre 1 e 12");
                location.reload();
            }
            else if (ano=="")
            {
                window.alert("Deve ser entre 1 e 12");
                location.reload();
            }
            else if (ano.length != 4)
            {
                window.alert("Deve ser entre 1 e 12");
                location.reload();
            }
            else
            {
                var parte = ano.slice(2,4);
                ano = parseInt(ano);

                if (((parte=="00")&&(ano%4==0) && (ano%400==0) && (mes==2)) && ((dia<1)||(dia>29)))
                {
                    window.alert("E ano bissesto");
                    location.reload();
                }
                else if (((parte=="00")&&(ano%4==0) && (ano%400!=0) && (mes==2)) && ((dia<1)||(dia>28)))
                {
                    window.alert(" não é ano bissexto! O dia deve ser entre 1 e 28!");
                    location.reload();
                }
                else if ((parte!="00") && (ano%4==0) && (mes==2) && ((dia<1)||(dia>29)))
                {
                    window.alert(" é ano bissexto! O dia deve ser entre 1 e 29!");
                    location.reload();
                }
                else if ((ano%4!=0) && (mes==2) && ((dia<1)||(dia>28)))
                {
                    window.alert(" o dia deve ser entre 1 e 28!");
                    location.reload();
                }
                else if (((dia<1)||(dia>31)) && ((mes==1)||(mes==3)||(mes==5)||(mes==7)||(mes==8)||(mes==10)||(mes==12)))
                {
                    window.alert(" o dia deve ser entre 1 e 31!");
                    location.reload();
                }
                else if (((dia<1)||(dia>30)) && ((mes==4)||(mes==6)||(mes==9)||(mes==11)))
                {
                    window.alert("o dia deve ser entre 1 e 30!");
                    location.reload();
                }
                else
                {
                    document.getElementById("txtmesnome").value = nome_mes[mes-1];

                    var hoje = new Date();

                    var diahoje = hoje.getDate();
                    var meshoje = hoje.getMonth()+1;
                    var anohoje = hoje.getFullYear();

                    var idade = anohoje - ano;

                    if (mes > meshoje)
                        idade = idade - 1;
                    else if ((mes == meshoje) && (dia > diahoje))
                        idade = idade - 1;

                    document.getElementById("txtidade").value=idade;

                    if (((dia>= 21) && (mes== 1)) || ((dia<= 19) && (mes== 2)))
                        document.images["signo"].src="aquario.jpeg";
                    else if (((dia>= 20) && (mes== 2)) || ((dia<= 20) && (mes== 3)))
                        document.images["signo"].src="peixes.jpeg";
                    else if (((dia>= 21) && (mes== 3)) || ((dia<= 20) && (mes== 4)))
                        document.images["signo"].src="aries.jpeg";
                    else if (((dia>= 21) && (mes== 4)) || ((dia<= 20) && (mes== 5)))
                        document.images["signo"].src="touro.jpeg";
                    else if (((dia>= 21) && (mes== 5)) || ((dia<= 20) && (mes== 6)))
                        document.images["signo"].src="gemeos.jpeg";
                    else if (((dia>= 21) && (mes== 6)) || ((dia<= 22) && (mes== 7)))
                        document.images["signo"].src="cancer.jpeg";
                    else if (((dia>= 23) && (mes== 7)) || ((dia<= 22) && (mes== 8)))
                        document.images["signo"].src="leao.jpeg";
                    else if (((dia>= 23) && (mes== 8)) || ((dia<= 22) && (mes== 9)))
                        document.images["signo"].src="virgem.jpeg";
                    else if (((dia>= 23) && (mes== 9)) || ((dia<= 22) && (mes== 10)))
                        document.images["signo"].src="libra.jpeg";
                    else if (((dia>= 23) && (mes== 10)) || ((dia<= 21) && (mes== 11)))
                        document.images["signo"].src="escorpiao.jpeg";
                    else if (((dia>= 22) && (mes== 11)) || ((dia<= 21) && (mes== 12)))
                        document.images["signo"].src="sagitario.jpeg";
                    else
                        document.images["signo"].src="capricornio.jpeg";

                    mes = mes-1;

                    var nascimento = new Date(ano, mes, dia);

                    document.getElementById("txtdiasemana").value = dia_semana[nascimento.getDay()];
                }
            }
        }
    }
}