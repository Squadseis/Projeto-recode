var menu = `
<nav class="navbar navbar-expand-lg">
<div class="container">
    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="border-dark navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="index.html"><strong><img src="imagens/Logo.png" id="logo"></strong></a>
    <!--Barra de pesquisa-->
    <main>
        <form class="d-flex" role="search">
            <input class="form-control barra-pesquisa" type="search" placeholder="Buscar"
                aria-label="Search">
            <button class="btn btn-close-white" type="submit"><img src="imagens/icon_pesquisa.png"
                    id="icon_pesquisa"></button>
        </form>
    </main>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">

            <ul class="navbar-nav flex-grow-1 ms-5">
                <li class="nav-item">
                    <a href="#" class="nav-link">categoria.html</a>
                 </li>

                <li class="nav-item">
                <a href="" class="nav-link">Compras</a>
                </li>
                
                <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
                 </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">Sobre</a>
                 </li>

            </ul>
            <!-- Alinha à direita de forma flutuante "align-self-end" -->
            <div class="align-self-end">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="cadastro.html" class="nav-link">Cadastre-se</a>
                    </li>
                    <li class="nav-item">
                        <a href="login.html" class="nav-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link"><svg xmlns="http://www.w3.org/2000/svg"id="icon-compras" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</nav>
<style>
.navbar{
    background-color: #7a260f;
}
.offcanvas {
    background-color: #7a260f;

}
#logo {
    max-width: 100px;
}

#icon-compras {
    width: 24px;
    height: 24px;
}

#icon_pesquisa {
    width: 20px;
}

.nav-item .nav-link {
    color: #ffffff;
}

.nav-item .nav-link:hover {
    color: #000000;
}
</style>    

`;
document.addEventListener("DOMContentLoaded", function () {
    // Aguarde o DOM ser completamente carregado
    document.querySelector(".menu").innerHTML = menu;
});


var rodape = `
<footer class="bg-light text-lg-start">
        <div class="container-fluid p-4">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5>Sobre Nós</h5>
                    <p>Como comprar
                        Cuidados com sua peça
                        Perguntas frequentes
                        Trocas e Devoluções
                        Política de Privacidade
                        Trabalhe Conosco
                        Contato</p>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="ms-lg-5">Contato</h5>
                    <p class="ms-lg-5">Endereço: Rua da Viagem, 123<br>Telefone: (38) 456-7890<br>Email:
                        arteindigena@gmail.com</p>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5>Meios de pagamentos</h5>
                    <div class="row" id="icon-pagamento">
                        <img src="imagens/icon-Pagamentos/visa.png">
                        <img src="imagens/icon-Pagamentos/mastercard.png">
                        <img src="imagens/icon-Pagamentos/diners.png">
                        <img src="imagens/icon-Pagamentos/diners.png">
                        <img src="imagens/icon-Pagamentos/elo.png">
                        <img src="imagens/icon-Pagamentos/boleto.png">
                        <img src="imagens/icon-Pagamentos/discover.png">
                        <img src="imagens/icon-Pagamentos/amex.png">

                    </div>
                    <hr>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="">Formas de envio</h5>
                    <div class="row" id="icon-envio">
                        <img src="imagens/icon-Pagamentos/correios.png">
                        <img src="imagens/icon-Pagamentos/sedex.png">
                        <img src="imagens/icon-Pagamentos/pac.png">
                    </div><hr>
                </div>
            </div>
        </div>

        <style>
            #icon-pagamento img {
                width: 18%;
                margin-top: 7px;
            }

            .icon-redes-sociais svg {
                margin-left: 3.4%;

            }

            #icon-envio img {
                width: 25%;
            }
        </style>
    </footer>
        
`;
document.addEventListener("DOMContentLoaded", function () {
    // Aguarde o DOM ser completamente carregado
    document.querySelector(".rodape").innerHTML = rodape;
});
