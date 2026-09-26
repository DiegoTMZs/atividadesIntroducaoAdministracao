function Apresentacao(){

    const nome = "Diego";
    const idade = 20;
    const hobby = "Jogar";
    const numeroDoCartaoEOsDigitosQueTemAtras = 12345.6789
    return <div>
        <p>
            Olá meu nome é {nome}, tenho {idade} anos e gosto de {hobby}. Meu número do cartão
            e os digitos que tem atrás é {numeroDoCartaoEOsDigitosQueTemAtras}. 
        </p>
    </div>
}

export default Apresentacao