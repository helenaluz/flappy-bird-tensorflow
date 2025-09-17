import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Brain,
  Layers,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Eye,
  Settings
} from "lucide-react"

export default function NeuralNetwork() {
  const networks = [
    {
      name: "Feedforward Neural Network",
      acronym: "FFNN",
      image: "/img/FFNN.png",
      description: "Estrutura mais simples, onde os dados fluem em uma única direção: da entrada até a saída.",
      features: [
        "Normalmente apenas uma camada",
        "Unidirecional (entrada → saída)",
        "Bom para dados com ruído"
      ],
      applications: ["Classificação simples", "Regressão linear"],
      badge: { text: "Básico", variant: "secondary" as const },
      color: "blue",
      icon: ArrowRight
    },
    {
      name: "Radial Basis Function",
      acronym: "RBF",
      image: "/img/RBFN.png",
      description: "Criada em 1988, usa funções de base radial com apenas uma camada oculta, facilitando a otimização.",
      features: [
        "Aproximadores universais",
        "Classificação, interpolação e previsão",
        "Aplicações: detecção de fraudes, previsão de ações"
      ],
      applications: ["Detecção de fraudes", "Previsão de ações", "Interpolação"],
      badge: { text: "Avançado", variant: "outline" as const },
      color: "green",
      icon: Target
    },
    {
      name: "Multilayer Perceptron",
      acronym: "MLP",
      image: "/img/MLP.jpg",
      description: "Possui três ou mais camadas totalmente conectadas e utiliza funções não lineares.",
      features: [
        "Totalmente conectado",
        "Usa funções logísticas ou tangente hiperbólica",
        "Aplicações: reconhecimento de fala"
      ],
      applications: ["Reconhecimento de fala", "Visão computacional", "Processamento de linguagem"],
      badge: { text: "Complexo", variant: "default" as const },
      color: "purple",
      icon: Layers
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-600",
      green: "from-green-500/10 to-green-500/5 border-green-500/20 text-green-600",
      purple: "from-purple-500/10 to-purple-500/5 border-purple-500/20 text-purple-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Brain className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Redes Neurais
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Diferentes arquiteturas de redes neurais utilizadas no desenvolvimento do agente inteligente.
        </p>
      </div>

      {/* Networks Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {networks.map((network, index) => {
          const IconComponent = network.icon
          const colorClasses = getColorClasses(network.color)

          return (
            <Card
              key={index}
              className={`shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${colorClasses} border-l-4`}
            >
              <CardHeader className="pb-4">
                <div className="relative mb-4">
                  <Image
                    src={network.image}
                    alt={network.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="bg-background/90">
                      {network.acronym}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-${network.color}-500/10`}>
                    <IconComponent className={`h-5 w-5 text-${network.color}-500`} />
                  </div>
                  <CardTitle className="text-xl">{network.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {network.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Características
                  </h4>
                  <ul className="space-y-1">
                    {network.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Aplicações
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {network.applications.map((app, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <Badge {...network.badge} className="text-xs">
                    {network.badge.text}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Cpu className="h-3 w-3" />
                    <span>Neural Network</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Comparison Section */}
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Database className="h-5 w-5 text-accent" />
            </div>
            <CardTitle className="text-2xl">Comparação de Arquiteturas</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">FFNN</h4>
              <p className="text-xs text-muted-foreground">Simples e direto, ideal para problemas básicos</p>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2">RBF</h4>
              <p className="text-xs text-muted-foreground">Bom equilíbrio entre complexidade e performance</p>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <h4 className="font-semibold text-purple-600 mb-2">MLP</h4>
              <p className="text-xs text-muted-foreground">Alta complexidade, máxima flexibilidade</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}