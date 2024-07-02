import './App.css';
import Raiva from './img/raiva2.jpg';
import tristeza from './img/tristeza3.jpg';
import alegria from './img/alegria2.jpg';
import ansiedade from './img/ansiedade2.jpg';
import vergonha from './img/vergonha2.jpg';
import tedio from './img/tedio2.jpg';
import inveja from './img/inveja2.jpg';
import medo from './img/medo2.jpg';
import ItemFilme from './ItemFilme';
import CatalagoItens from './CatalagoItens';
function App() {
   
  const nomesSeries = ['raiva', 'tristeza','alegria','ansiedade'];
 
  const imgsSeries = ['vergonha', 'tedio', 'inveja', 'medo',];


  const CatalagoFilmes = [
    {nome: 'raiva',imagem: Raiva, descricao: 'a raiva define-se como um sentimento de protesto, insegurança, timidez ou frustração, contra alguém ou alguma coisa, que se exterioriza quando o ego se sente ferido ou ameaçado.' },              
    { nome:'tristeza', imagem: tristeza, descricao: 'Tristeza é um sentimento e condição típica dos seres humanos, caracterizado pela falta da alegria, ânimo, disposição e outras emoções de insatisfação.'  },
    {nome:'alegria', imagem: alegria, descricao: 'A alegria é caracterizada por ser um estado emocional agradável no qual há sensação de prazer, satisfação, gratificação e bem-estar. Por ser uma emoção bastante agradável, acaba sendo a principal emoção que as pessoas buscam em suas vidas.' },  
    { nome:'ansiedade', imagem: ansiedade, descricao: 'Ansiedade é um termo usado para definir um sentimento de apreensão, angústia, incerteza ou desconforto diante de algo desconhecido, estranho ou de uma situação que pode constituir uma ameaça.'}
   ];

   const CatalagoSeries = [
    {nome: 'vergonha',imagem:vergonha, descricao: 'A vergonha é um sentimento associado à inadequação ou, pelo menos, à visão individual do que é ou não inadequado. Logo, o indivíduo que sente vergonha com frequência acredita que não se porta adequadamente em situações sociais.' },              
    { nome:'tedio', imagem: tedio, descricao: 'O tédio é um estado de humor formado por um conjunto de sentimentos pouco agradáveis, como desgosto e aborrecimento. Ele aparece quando não encontramos nada interessante para preencher o nosso tempo. A ausência prolongada de estímulos intelectuais e de prazer é capaz de aborrecer qualquer um' },
    {nome:'inveja', imagem: inveja, descricao: 'A inveja, como explicado, é um sentimento de ódio ou pesar provocado pelo bem-estar ou prosperidade de outrem, além de um desejo muito forte de desfrutar algum bem possuído ou desfrutado por outra pessoa. Esses três sentimentos são comuns a todos nós.'  },  
    { nome:'medo', imagem: medo, descricao: 'Para o ser humano, o medo pode ser considerado como um sentimento de receio em relação a uma pessoa, a uma situação ou mesmo a um objeto. É inerente à própria pessoa, o que atemoriza um individuo, pode ser indiferente para outro'}
   ];


  return (
    <>
      <CatalagoItens 
        titulo="Como voce esta se sentindo?"
        catalogos={CatalagoFilmes}
      />
      <CatalagoItens 
        titulo=""
        catalogos={CatalagoSeries}
      />
    </>
  )
}

export default App
