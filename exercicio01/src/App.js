import './App.css';
import styled from 'styled-components';
import Description from './components/Description';
import Products from './components/Products';
import Title from './components/Title';

const ContainerApp = styled.div`
  width: 600px;
  margin: 30px;

  #TitleApp{
    font-size: 40px;
    margin-bottom: 30px;
  }

  #DescriptionApp{
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 690px) {
    width: 450px;

    #TitleApp{
    font-size: 30px;
    margin-bottom: 30px;
    }

    #DescriptionApp{
    font-size: 18px;
    margin-bottom: 20px;
    }
  }

  @media (max-width: 580px) {
    width: 350px;

    #TitleApp{
    font-size: 25px;
    margin-bottom: 30px;
    }

    #DescriptionApp{
    font-size: 15px;
    margin-bottom: 20px;
    }
  }
`

const products = [
  {
    image: 'picanha',
    title: 'Picanha no Espeto',
    description: 'Desfrute de uma picanha suculenta assada no espeto, temperada com sal grosso e acompanhada de farofa e vinagrete. Uma verdadeira iguaria do churrasco brasileiro.'
  },
  {
    image: 'fraldinha',
    title: 'Fraldinha na Brasa',
    description: 'Fraldinha macia e saborosa, grelhada na brasa com um toque especial de alho e ervas. Servida com arroz e feijão tropeiro.'
  },
  {
    image: 'costela',
    title: 'Costela no Bafo',
    description: 'Costela de boi cozida lentamente até ficar macia, servida com molho barbecue e acompanhamentos tradicionais.'
  },
  {
    image: 'linguica',
    title: 'Linguiça Calabresa',
    description: 'Linguiça calabresa grelhada no espeto, com um sabor intenso e levemente picante. Ideal para acompanhar com pão e vinagrete.'
  },
  {
    image: 'alcatra',
    title: 'Alcatra na Grelha',
    description: 'Alcatra temperada e grelhada na perfeição, servida com arroz branco, farofa e molho de chimichurri.'
  },
  {
    image: 'churrascoFrango',
    title: 'Churrasco de Frango',
    description: 'Peitos de frango marinados e assados no espeto, servidos com molho barbecue e acompanhamentos como salada e arroz.'
  },
  {
    image: 'churrascoCoracao',
    title: 'Churrasco de Coração de Galinha',
    description: 'Corações de galinha temperados e grelhados no espeto, servidos com molho picante e vinagrete.'
  },
  {
    image: 'carneSol',
    title: 'Carne de Sol com Mandioca',
    description: 'Carne de sol desfiada e assada, servida com mandioca cozida e molho de alho. Um prato típico do nordeste brasileiro.'
  },
  {
    image: 'baiao',
    title: 'Baião de Dois',
    description: 'Prato típico do nordeste com arroz e feijão verde, carne seca, bacon, queijo coalho e temperos.'
  },
  {
    image: 'escondidinho',
    title: 'Escondidinho de Carne Seca',
    description: 'Escondidinho de carne seca desfiada com purê de mandioca, gratinado com queijo e servido quente em uma travessa.'
  },
  {
    image: 'batataFrita',
    title: 'Batata Frita',
    description: 'Batatas cortadas e fritas até ficarem crocantes e douradas, acompanhadas de molho aioli ou ketchup.'
  },
  {
    image: 'paoAlho',
    title: 'Pão de Alho',
    description: 'Nosso pão de alho é preparado com uma baguete fresca e crocante, generosamente recheado com uma mistura especial de manteiga, alho picado, ervas aromáticas e queijo.'
  },
  {
    image: 'caipirinha',
    title: 'Caipirinha',
    description: 'O clássico drink brasileiro feito com cachaça, limão, açúcar e gelo. Refrescante e perfeito para acompanhar o churrasco.'
  },
  {
    image: 'sucoLaranja',
    title: 'Suco de Laranja Natural',
    description: 'Suco de laranja 100% natural, espremido na hora. Uma opção saudável e refrescante para acompanhar sua refeição.'
  },
  {
    image: 'sucoAbacaxi',
    title: 'Suco de Abacaxi com Hortelã',
    description: 'Suco refrescante de abacaxi com um toque de hortelã, perfeito para um dia quente.'
  },
  {
    image: 'refrigerante',
    title: 'Refrigerante 350ml',
    description: 'Oferecemos uma ampla seleção de refrigerantes em lata, incluindo clássicos como Coca-Cola, Fanta e Guaraná Antarctica. Escolha seu favorito e aproveite!',
  },
  {
    image: 'vinho',
    title: 'Vinho',
    description: 'Seleção de vinhos finos para complementar sua refeição. Escolha entre tintos, brancos e rosés, cada um cuidadosamente selecionado para oferecer a melhor experiência de degustação.'
  },
  {
    image: 'chopp',
    title: 'Chopp Gelado',
    description: 'Chopp fresco e gelado, servido em um copo gelado para uma experiência ainda mais refrescante. Ideal para acompanhar qualquer prato.'
  },
  {
    image: 'pudim',
    title: 'Pudim de Leite Condensado',
    description: 'Experimente o nosso famoso pudim! Preparado com leite condensado de alta qualidade e uma receita tradicional, este pudim tem uma textura incrivelmente cremosa e suave que derrete na boca.'
  },
  {
    image: 'mousseMaracuja',
    title: 'Mousse de Maracujá',
    description: 'Delicie-se com nossa mousse de maracujá, feita com polpa de maracujá fresca e creme, resultando em um equilíbrio perfeito entre o doce e o ácido. Cada colherada é uma explosão de sabores tropicais que vai encantar seu paladar.'
  },
  {
    image: 'deliciaMorango',
    title: 'Delícia de Morango',
    description: 'Nossa delícia de morango é uma sobremesa sofisticada que celebra o sabor dos morangos frescos em cada camada. Feita com uma base de creme de morango suave e uma camada de gelatina de morango, esta sobremesa é um verdadeiro deleite para os sentidos.'
  }
];

export default function App() {
  return (
    <div className="App">
      <ContainerApp>
        <Title id="TitleApp">Bem-vindo ao Brasa Gaúcha!</Title>
        <Description id="DescriptionApp">Descubra o sabor autêntico do churrasco tradicional no coração de nossa churrascaria. No Brasa Gaúcha, oferecemos uma experiência culinária única que celebra o melhor da gastronomia gaúcha com um toque moderno.</Description>
      </ContainerApp>
      <Products products={products} />
    </div>
  );
}

