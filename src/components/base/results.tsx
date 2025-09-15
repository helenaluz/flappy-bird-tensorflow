import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  BarChart3,
  Target,
  Zap,
  Brain,
  CheckCircle,
  TrendingUp,
  Gamepad2,
  Award,
  ArrowRight,
  Star
} from "lucide-react"

export default function Results() {
  const achievements = [
    {
      icon: Target,
      title: "Precisão Superior",
      description: "Q-learning profundo mais eficiente que humanos",
      color: "green"
    },
    {
      icon: Brain,
      title: "Compreensão Visual",
      description: "Redes neurais compreendem o melhor resultado",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Previsão Precisa",
      description: "Modelo prevê dados próximos aos canos",
      color: "purple"
    },
    {
      icon: Award,
      title: "Praticamente Imortal",
      description: "Agente treinado quase não morre",
      color: "orange"
    }
  ]

  const applications = [
    "Mario",
    "Temple Run",
    "Jogos com visão computacional",
    "Ambientes controlados complexos"
  ]

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10">
            <BarChart3 className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Resultados e Discussão
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nossos achados demonstram a eficácia do aprendizado profundo por reforço e suas aplicações práticas.
        </p>
      </div>

      {/* Main Results Card */}
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/10">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Principais Descobertas</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-gradient-to-r from-green-500/5 to-green-500/10 rounded-lg border border-green-500/20">
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Eficiência Superior
              </h4>
              <p className="text-sm text-muted-foreground">
                O Q-learning profundo provou ser mais eficiente que humanos, sendo o algoritmo essencial para o sucesso do projeto.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-500/5 to-blue-500/10 rounded-lg border border-blue-500/20">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Compreensão Visual
              </h4>
              <p className="text-sm text-muted-foreground">
                Redes neurais profundas desempenham papel fundamental em permitir que o computador compreenda o melhor resultado possível no jogo.
              </p>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-500/5 to-purple-500/10 rounded-lg border border-purple-500/20">
            <h4 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Previsão Precisa
            </h4>
            <p className="text-sm text-muted-foreground">
              É possível treinar o modelo para prever com precisão os dados próximos aos canos, usando minibatches amostradas uniformemente e atualizando o modelo com replay de experiência.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Achievements Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon
          return (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="pt-6">
                <div className={`p-3 rounded-full bg-${achievement.color}-500/10 mx-auto mb-4 w-fit`}>
                  <IconComponent className={`h-6 w-6 text-${achievement.color}-500`} />
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Game Demo */}
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10">
              <Gamepad2 className="h-5 w-5 text-orange-500" />
            </div>
            <CardTitle className="text-2xl">Demonstração do Jogo</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/img/result.png"
                alt="Resultados do Flappy Bird"
                width={400}
                height={300}
                className="object-cover rounded-lg shadow-lg border border-border/50"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-green-500/90 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Agente Ativo
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Applications */}
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <ArrowRight className="h-5 w-5 text-accent" />
            </div>
            <CardTitle className="text-2xl">Aplicações Futuras</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            O conceito central pode ser aplicado em outros jogos para aumentar a precisão dos resultados:
          </p>
          <div className="flex flex-wrap gap-2">
            {applications.map((app, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {app}
              </Badge>
            ))}
          </div>
          <div className="mt-4 p-4 bg-background/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Extensão do Estudo:</strong> Uma possível extensão é tornar o jogo mais desafiador,
              criando diferentes larguras de gap entre os canos conforme o nível. Nosso modelo DQN
              eficiente consegue lidar com essas condições sem perda significativa de precisão.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}