import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Methodology() {
  return (
    <div className="grid gap-6 md:grid-cols-2 p-6">

      {/* Desafios Iniciais */}
      <Card className="shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle>Desafios Iniciais</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          - Exibir imagens corretamente <br />
          - Mover elementos do jogo <br />
          - Definir condições de game over <br />
          - Adicionar melhorias
        </CardContent>
      </Card>

      {/* Redes Neurais Aplicadas */}
      <Card className="shadow-md rounded-2xl">
        <CardHeader>
            <b><h1>Teste</h1></b>
        </CardHeader>
        <CardContent className="text-sm">
          - <b>RNN</b>: memória de estados anteriores <br />
          - <b>Redes Modulares</b>: subpartes independentes <br />
          - <b>Seq2Seq</b>: encoder-decoder para sequências <br />
          - <b>DNN</b>: múltiplas camadas ocultas <br />
          - <b>CNN/DQN</b>: processar imagens e decidir ações
        </CardContent>
      </Card>


      <Card className="shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle>Processo de Machine Learning</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          - Pré-processamento: grayscale, resize, remover ruído <br />
          - Recompensas: +1 (cano), -1 (morte), +0.1 (sobrevivência) <br />
          - Q-Learning com Adam optimizer <br />
          - Experience Replay para treino estável
        </CardContent>
      </Card>

      {/* Treinamento */}
      <Card className="shadow-md rounded-2xl">
        <CardHeader className="!pb-0">
            <CardTitle className="text- md:text-2xl">Treinamento</CardTitle>
        </CardHeader>
        <CardContent className="text-sm !pt-0">
            <ul className="my-4 ml-6 list-disc [&>li]:mt-1">
            <li>Learning rate: 1e-6</li>
            <li>Fator de desconto: 0.99</li>
            <li>Replay memory: 50.000</li>
            <li>Batch size: 32</li>
            <li>Atualização da rede alvo: 1000 iterações</li>
            <li>Framework: TensorFlow</li>
            </ul>
        </CardContent>
    </Card>

    </div>
  )
}
