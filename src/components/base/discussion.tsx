import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  Brain,
  Gamepad2,
  ArrowRight,
  Zap,
  Eye
} from "lucide-react"

export default function Discussion() {
  const strengths = [
    {
      icon: CheckCircle,
      title: "Validação da Técnica",
      description: "Deep Reinforcement Learning é adequado para jogos baseados em entrada visual",
      color: "green"
    },
    {
      icon: Brain,
      title: "Potencial Amplo",
      description: "Técnica validada para cenários mais amplos de aplicação",
      color: "blue"
    }
  ]

  const limitations = [
    {
      icon: Eye,
      title: "Dependência Visual",
      description: "Modelo depende estritamente dos dados visuais do jogo",
      color: "yellow"
    },
    {
      icon: AlertTriangle,
      title: "Comportamentos Arriscados",
      description: "Tende a manter comportamentos arriscados sem ajustes adequados",
      color: "orange"
    }
  ]

  const futureWork = [
    {
      icon: Gamepad2,
      title: "Jogos Complexos",
      description: "Aplicar em Mario e Temple Run",
      color: "purple"
    },
    {
      icon: Target,
      title: "Variações de Cenário",
      description: "Modificar largura dos canos para testar robustez",
      color: "blue"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Discussão
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Análise crítica dos resultados, limitações identificadas e perspectivas futuras do projeto.
        </p>
      </div>

      {/* Main Discussion Card */}
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/10">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Principais Conclusões</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Os resultados confirmam que o uso de <strong className="text-primary">Deep Reinforcement Learning</strong> é adequado para treinar agentes em jogos baseados apenas em entrada visual, validando o potencial da técnica em cenários mais amplos.
          </p>
        </CardContent>
      </Card>

      {/* Strengths Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Zap className="h-5 w-5 text-green-500" />
          Pontos Fortes
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <IconComponent className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{strength.title}</h4>
                      <p className="text-sm text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Limitations Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          Limitações Identificadas
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {limitations.map((limitation, index) => {
            const IconComponent = limitation.icon
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10">
                      <IconComponent className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{limitation.title}</h4>
                      <p className="text-sm text-muted-foreground">{limitation.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Future Work Section */}
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Lightbulb className="h-5 w-5 text-accent" />
            </div>
            <CardTitle className="text-2xl">Perspectivas Futuras</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Como perspectivas futuras, os autores sugerem aplicar o mesmo método em jogos com maior complexidade e incluir variações nos cenários para testar a robustez do agente.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {futureWork.map((work, index) => {
              const IconComponent = work.icon
              return (
                <div key={index} className="flex items-start gap-3 p-4 bg-background/50 rounded-lg">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <IconComponent className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{work.title}</h4>
                    <p className="text-sm text-muted-foreground">{work.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg border border-blue-500/20">
            <div className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-blue-500 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong>Objetivo:</strong> Testar a robustez do agente em ambientes mais dinâmicos,
                expandindo as capacidades do modelo para jogos com maior complexidade e variações de cenário.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}