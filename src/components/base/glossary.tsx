import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Brain,
  Eye,
  Zap,
  Database,
  Target,
  Layers,
  Cpu,
  ArrowRight
} from "lucide-react"

export default function Glossary() {
  const terms = [
    {
      acronym: "RL",
      fullName: "Reinforcement Learning",
      description: "Aprendizado por reforço, baseado em recompensas/punições",
      icon: Target,
      color: "blue",
      category: "Aprendizado"
    },
    {
      acronym: "CNN",
      fullName: "Convolutional Neural Network",
      description: "Rede para visão computacional",
      icon: Eye,
      color: "green",
      category: "Arquitetura"
    },
    {
      acronym: "DQN",
      fullName: "Deep Q-Network",
      description: "Integração de RL com CNN",
      icon: Brain,
      color: "purple",
      category: "Híbrido"
    },
    {
      acronym: "Experience Replay",
      fullName: "Experience Replay",
      description: "Técnica de amostrar experiências passadas para estabilidade do aprendizado",
      icon: Database,
      color: "orange",
      category: "Técnica"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-600",
      green: "from-green-500/10 to-green-500/5 border-green-500/20 text-green-600",
      purple: "from-purple-500/10 to-purple-500/5 border-purple-500/20 text-purple-600",
      orange: "from-orange-500/10 to-orange-500/5 border-orange-500/20 text-orange-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Glossário
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Termos técnicos e conceitos fundamentais utilizados no desenvolvimento do agente inteligente.
        </p>
      </div>

      {/* Terms Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {terms.map((term, index) => {
          const IconComponent = term.icon
          const colorClasses = getColorClasses(term.color)

          return (
            <Card
              key={index}
              className={`shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${colorClasses} border-l-4`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-${term.color}-500/10`}>
                    <IconComponent className={`h-5 w-5 text-${term.color}-500`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs font-mono">
                        {term.acronym}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {term.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {term.fullName}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {term.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Additional Info */}
      <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20 shadow-lg">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <ArrowRight className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Sobre os Termos</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Estes conceitos formam a base teórica e prática do nosso projeto.
                Cada termo representa uma peça fundamental na construção de um agente
                inteligente capaz de aprender e evoluir através da experiência.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}