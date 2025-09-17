import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Brain, Target, Zap, Gamepad2 } from "lucide-react";

export default function Introduction() {

  return (
    <div className="space-y-8">
      {/* Paper Title and Authors */}
      <Card className="w-full bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/10 shadow-lg">
        <CardHeader className="text-center pb-2">
          <h2 className="text-lg text-muted-foreground mb-2">International Conference on IoT based Control Networks and Intelligent Systems (ICICNIS 2020)</h2>
          <h3 className="text-2xl font-bold mb-1">Flappy Bird Automation using TensorFlow</h3>
          <div className="text-base font-medium mb-1">Dr. Kachapuram BasavaRaju<sup>1*</sup>, Dr. V. Kakulapati<sup>2</sup>, Vinay Manikant<sup>3</sup></div>
          <div className="text-sm text-muted-foreground mb-1">
            <span className="block">Assoc. Dept. of CSE, SreeNidhi Institute of Science & Technology, JNTUH, Hyderabad, Telangana, India</span>
            <span className="block">Professor Dept. of IT, SreeNidhi Institute of Science & Technology, JNTUH, Hyderabad, Telangana, India</span>
            <span className="block">Department of IT, SreeNidhi Institute of Science & Technology, JNTUH, Hyderabad, Telangana, India</span>
          </div>
          <div className="text-xs text-muted-foreground">
            e-mail: basavarajuk@sreenidhi.edu.in, vldms@yahoo.com, manikant.vinnu@gmail.com
          </div>
        </CardHeader>
      </Card>
      {/* Hero Section */}
      <Card className="w-full bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Brain className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="scroll-m-20 text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Introdução
          </h3>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary" className="text-xs">
              <Zap className="h-3 w-3 mr-1" />
              Deep Learning
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Gamepad2 className="h-3 w-3 mr-1" />
              Reinforcement Learning
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Brain className="h-3 w-3 mr-1" />
              Neural Networks
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            O jogo <strong className="text-primary">Flappy Bird</strong>, apesar de sua simplicidade, apresenta um desafio interessante para a área de <strong className="text-primary">Inteligência Artificial (IA)</strong>. A dificuldade está no fato de que o agente recebe como entrada apenas imagens em pixels e a pontuação, não havendo informações explícitas sobre o estado do jogo.
          </p>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Card className="w-full shadow-lg">
        <CardContent className="pt-6">
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            Nesse contexto, o objetivo do trabalho foi desenvolver um agente autônomo capaz de jogar Flappy Bird com desempenho superior ao humano, utilizando técnicas de <strong className="text-primary">aprendizado por reforço (Reinforcement Learning – RL)</strong> em conjunto com <strong className="text-primary">redes neurais profundas (Deep Q-Network – DQN)</strong>. A pesquisa se insere na linha de estudos que aplicam IA em jogos digitais como forma de validar algoritmos de aprendizado em ambientes controlados, mas complexos.
          </p>
        </CardContent>
      </Card>

      {/* Objectives Section */}
      <Card className="w-full bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Target className="h-5 w-5 text-accent" />
            </div>
            <h4 className="text-xl font-semibold">Objetivo Principal</h4>
          </div>
        </CardHeader>
        <CardContent>
          <blockquote className="text-sm sm:text-base leading-relaxed italic border-l-4 border-accent pl-6 bg-background/50 p-4 rounded-r-lg">
            Desenvolver uma rede neural profunda capaz de processar diretamente os pixels brutos da tela e determinar as ações a serem executadas. Sugerimos empregar técnicas de aprendizado por reforço para o treinamento do agente e sua execução no jogo.
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}