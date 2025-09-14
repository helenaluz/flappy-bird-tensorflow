import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Methodology() {
  return (
    <div className="grid gap-6 md:grid-cols-2 p-6">
      <Card className="shadow-md rounded-2xl">
        <CardHeader className="!p-4">
          <CardTitle>Pré-requisitos</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-justify">
          <p className="mb-3">
            Para a execução do projeto, é necessário um dispositivo com Windows 10, Linux ou Mac, e, neste, Python 3.6 (64-bit).  
            Além disso, para o desenvolvimento, são requeridas as seguintes dependências:
          </p>
          <ul className="ml-6 list-disc [&>li]:mt-1">
            <li>TensorFlow</li>
            <li>Keras</li>
            <li>Pygame</li>
            <li>Scikit-image</li>
            <li>OpenCV-Python</li>
          </ul>
          <p className="mt-3 text-sm">
            Observa-se que o TensorFlow é uma biblioteca para construir e treinar modelos, enquanto o Keras, rodando sobre o TensorFlow, é uma biblioteca de Deep Learning. O Pygame é utilizado na criação de interfaces gráficas voltadas ao desenvolvimento de jogos. O Scikit-Image e o OpenCV, por sua vez, são bibliotecas de processamento de imagens. 
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-2xl">
        <CardHeader className="!p-4">
          <CardTitle>Arquitetura</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="mb-3">
            A rede neural usada para treinar o agente se utiliza de uma arquitetura baseade em:
          </p>
          <ul className="ml-6 list-disc [&>li]:mt-1">
            <li>Conversão das imagens para grayscale.</li>
            <li>Corte para 80 x 80 pixels com a finalidade de economizar memória.</li>
            <li>Empilhamento de 4 frames antes de alimentar a rede neural.</li>
            <li>Entrada bruta dos pixels para a rede decidir ações com base na situação.</li>
            <li>Uso de CPU e GPU para processamento.</li>
          </ul>
          <p className="mt-3 text-sm">
            Para a remoção de ruídos e, consequentemente, melhorar a precisão, o fundo/background é removido.
          </p>
        </CardContent>
      </Card>

      {/* Desafios Iniciais */}
      <Card className="shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle>Desafios iniciais</CardTitle>
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
            <CardTitle>Treinamento</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
            <ul className="my-4 mt-0 ml-6 list-disc [&>li]:mt-1">
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
