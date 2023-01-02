.footer {
    background-color: rgb(3, 37, 65);
    color: white;
    font-family: 'Raleway', sans-serif;

}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.footer .container ul {
    list-style-type: none;
}

.footer .container .logo h1 {
    font-family: 'Libre Franklin', sans-serif;

    letter-spacing: 5px;
}

@media screen and (max-width:1000px) {
    .footer .container {
        display: flex;

        flex-direction: column;


    }

    .footer .container .logo {
        width: 100%;
    }

    .footer .container .basics {
        width: 100%;
    }

    .footer .container .involve {
        width: 100%;
    }

    .footer .container .community {
        width: 100%;
    }

    .footer .container .legal {
        width: 100%;
    }
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    text-decoration: none;

    color: rgb(8, 67, 245);
}
