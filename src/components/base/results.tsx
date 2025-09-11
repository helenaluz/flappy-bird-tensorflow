import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Results() {
    return (
    <Card className="shadow-md rounded-2xl p-4">
      <CardHeader className="!p-2">
        <CardTitle className="text-2xl">Resultados e Discussão</CardTitle>
      </CardHeader>
      <CardContent className="!p-2 text-sm space-y-3">
        <p>
          Nossos achados demonstram que
          o aprendizado profundo por reforço é um passo na direção certa e pode ser
          expandido.
        </p>
        <p>
          O Q-learning profundo provou ser mais eficiente que humanos, sendo o algoritmo
          essencial. Redes neurais profundas desempenham papel fundamental em permitir
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
          O agente treinado (Flappy Bird) agora praticamente não morre. Esse conceito
          central pode ser aplicado em outros jogos, como Mario e Temple Run, para
          aumentar a precisão dos resultados.
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