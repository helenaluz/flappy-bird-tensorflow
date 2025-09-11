import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function NeuralNetwork() {
  return (
    <div className="grid gap-6 md:grid-cols-3 p-6">
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
         <Image
            src="/img/FFNN.png"
            alt="Feedforward Neural Network"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <CardTitle className="text-xl font-bold">Feedforward Neural Network</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            Estrutura mais simples, onde os dados fluem em uma única direção: da
            entrada até a saída.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Normalmente apenas uma camada</li>
            <li>Unidirecional (entrada → saída)</li>
            <li>Bom para dados com ruído</li>
          </ul>
          <Badge variant="secondary">Básico</Badge>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
            <Image
            src="/img/RBFN.png"
            alt="Feedforward Neural Network"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <CardTitle className="text-xl font-bold">Radial Basis Function (RBF)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            Criada em 1988, usa funções de base radial com apenas uma camada
            oculta, facilitando a otimização.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Aproximadores universais</li>
            <li>Classificação, interpolação e previsão</li>
            <li>Aplicações: detecção de fraudes, previsão de ações</li>
          </ul>
          <Badge variant="outline">Avançado</Badge>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
         <Image
            src="/img/MLP.jpg"
            alt="Feedforward Neural Network"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <CardTitle className="text-xl font-bold">Multilayer Perceptron (MLP)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            Possui três ou mais camadas totalmente conectadas e utiliza funções
            não lineares.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Totalmente conectado</li>
            <li>Usa funções logísticas ou tangente hiperbólica</li>
            <li>Aplicações: reconhecimento de fala</li>
          </ul>
          <Badge>Complexo</Badge>
        </CardContent>
      </Card>
    </div>
  )
}
