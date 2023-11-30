const mes = 'fevereiro';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        console.log('verão');
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        console.log('outono');
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        console.log('inverno');
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        console.log('primavera');
        break;
    default:
        console.log('Nada encontrado');
}