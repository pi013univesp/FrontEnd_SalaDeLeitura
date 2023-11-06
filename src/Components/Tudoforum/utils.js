export function obterCorPelaLetra(letra) {
    const letrasColoridas = [
        { letra: 'A', cor: 'red' },
        { letra: 'B', cor: 'orange' },
        { letra: 'C', cor: 'yellow' },
        { letra: 'D', cor: 'green' },
        { letra: 'E', cor: 'blue' },
        { letra: 'F', cor: 'purple' },
        { letra: 'G', cor: 'pink' },
        { letra: 'H', cor: 'brown' },
        { letra: 'I', cor: 'cyan' },
        { letra: 'J', cor: 'magenta' },
        { letra: 'K', cor: 'teal' },
        { letra: 'L', cor: 'lime' },
        { letra: 'M', cor: 'indigo' },
        { letra: 'N', cor: 'violet' },
        { letra: 'O', cor: 'olive' },
        { letra: 'P', cor: 'coral' },
        { letra: 'Q', cor: 'gold' },
        { letra: 'R', cor: 'salmon' },
        { letra: 'S', cor: 'lightgreen' },
        { letra: 'T', cor: 'lightblue' },
        { letra: 'U', cor: 'navy' },
        { letra: 'V', cor: 'orchid' },
        { letra: 'W', cor: 'sienna' },
        { letra: 'X', cor: 'peru' },
        { letra: 'Y', cor: 'tomato' },
        { letra: 'Z', cor: 'steelblue' }
    ];

    const letraUpperCase = letra.toUpperCase(); // Converte a letra para maiúscula

    const correspondencia = letrasColoridas.find(item => item.letra === letraUpperCase);

    if (correspondencia) {
        return correspondencia.cor;
    } else {
        return 'black'; // Cor padrão se a letra não for encontrada no array
    }
}

export function removerPrimeiraLetra(str) {
    return str.charAt(0);
}
