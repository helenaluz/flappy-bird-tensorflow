import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Results() {
    return (
    <Card className="shadow-md rounded-2xl p-4">
      <CardHeader className="!p-2">
        <CardTitle className="text-2xl">Resultados e discussão</CardTitle>
      </CardHeader>
      <CardContent className="!p-2 text-sm space-y-3 text-justify">
        <p>
          O artigo demonstra que o aprendizado de reforço profundo pode ser aplicado e é um passo na direção certa, podendo ser expandido e generalizado.
        </p>
        <p>
          O Q-learning profundo, conforme resultados do artigo, provou ser mais eficiente que humanos na tarefa proposta. 
          Redes neurais profundas desempenham papel fundamental em permitir
          que o computador compreenda o melhor resultado possível no jogo.
        </p>
        <p>
          É possível treinar o modelo para prever com precisão os dados próximos aos
          canos, usando minibatches amostradas uniformemente e atualizando o modelo
          com replay de experiência. Melhor preparação e maior convergência permitem
          testar mais interações em áreas de maior risco.
        </p>
        <p>
          Uma possível extensão deste estudo é tornar o jogo mais desafiador, criando
          diferentes larguras de gap entre os canos conforme o nível. Nosso modelo DQN
          eficiente consegue lidar com essas condições sem perda significativa de precisão.
        </p>
        <p>
          O agente treinado, quando coloca em atuação no jogo, praticamente não morre e evita os obstáculos do mesmo de forma quase perpétua. Conforme anterior dito, o algoritmo e técnica propostas podem ser aplicados em outros jogos, como Mario e Temple Run.
        </p>
      </CardContent>
      <CardFooter className="!p-2 flex justify-center">
        <Image
            src="/img/result.png"
            alt="Resultados"
            width={300}
            height={200}
            className=" object-cover rounded-lg justify-center"
          />
      </CardFooter>
    </Card>
  )
}