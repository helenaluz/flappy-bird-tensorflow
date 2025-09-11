import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Methods() {
     return (
    <div className="grid gap-6 md:grid-cols-2 p-6">
      {/* Prerequisites */}
      <Card className="shadow-md rounded-2xl">
        <CardHeader className="!p-4">
          <CardTitle className="text-2xl">Pré-requisitos</CardTitle>
        </CardHeader>
        <CardContent className="!p-4 text-sm">
          <p className="mb-3">
            Um dispositivo com Windows 10, Linux ou Mac, e Python 3.6 64-bit.  
            Dependências necessárias para o desenvolvimento do projeto:
          </p>
          <ul className="ml-6 list-disc [&>li]:mt-1">
            <li>TensorFlow</li>
            <li>Keras</li>
            <li>Pygame</li>
            <li>Scikit-image</li>
            <li>OpenCV-Python</li>
          </ul>
          <p className="mt-3 text-sm">
            TensorFlow é uma biblioteca para construir e treinar modelos.  
            Keras é uma biblioteca de Deep Learning que roda sobre TensorFlow.  
            Pygame auxilia no desenvolvimento de jogos.  
            Scikit-Image e OpenCV são bibliotecas de processamento de imagens.
          </p>
        </CardContent>
      </Card>

      {/* Architecture */}
      <Card className="shadow-md rounded-2xl">
        <CardHeader className="!p-4">
          <CardTitle className="text-2xl">Arquitetura</CardTitle>
        </CardHeader>
        <CardContent className="!p-4 text-sm">
          <p className="mb-3">
            A arquitetura da rede neural usada para treinar o agente Flappy Bird:
          </p>
          <ul className="ml-6 list-disc [&>li]:mt-1">
            <li>Conversão das imagens para grayscale.</li>
            <li>Corte para 80 x 80 pixels para economizar memória.</li>
            <li>Empilhamento de 4 frames antes de alimentar a rede neural.</li>
            <li>Entrada bruta dos pixels para a rede decidir ações com base na situação.</li>
            <li>Uso de CPU e GPU para processamento.</li>
          </ul>
          <p className="mt-3 text-sm">
            O background é removido para reduzir ruído e aumentar a precisão.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}