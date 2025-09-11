import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default function Introduction() {

    return(
        <Card>
            <CardHeader>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Introdução
    </h3>
            </CardHeader>
            <CardContent className="grid gap-6">
              <p>O jogo Flappy Bird, apesar de sua simplicidade, apresenta um desafio interessante para a área de Inteligência Artificial (IA). A dificuldade está no fato de que o agente recebe como entrada apenas imagens em pixels e a pontuação, não havendo informações explícitas sobre o estado do jogo. Nesse contexto, o objetivo do trabalho foi desenvolver um agente autônomo capaz de jogar Flappy Bird com desempenho superior ao humano, utilizando técnicas de aprendizado por reforço (Reinforcement Learning – RL) em conjunto com redes neurais profundas (Deep Q-Network – DQN). A pesquisa se insere na linha de estudos que aplicam IA em jogos digitais como forma de validar algoritmos de aprendizado em ambientes controlados, mas complexos</p>
            </CardContent>
            <CardFooter>
              <h4>Objetivo principal</h4>
              <blockquote className="mt-6 border-l-2 pl-6 italic">
                Desenvolver uma rede neural profunda capaz de processar diretamente os pixels brutos da tela e determinar as ações a serem executadas. Sugerimos empregar técnicas de aprendizado por reforço para o treinamento do agente e sua execução no jogo.
              </blockquote>
            </CardFooter>
          </Card>
    );
}