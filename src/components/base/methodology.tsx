import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Brain,
  Cpu,
  Settings,
  Zap,
  Layers,
  Database,
  BarChart3,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export default function Methodology() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Metodologia
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nossa abordagem metodológica combina diferentes técnicas de machine learning e redes neurais para criar um agente inteligente capaz de jogar Flappy Bird.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* Desafios Iniciais */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl">Desafios Iniciais</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Exibir imagens corretamente</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Mover elementos do jogo</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Definir condições de game over</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Adicionar melhorias</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Redes Neurais Aplicadas */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Brain className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-xl">Redes Neurais Testadas</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="text-xs">RNN</Badge>
                <span className="text-sm">Memória de estados anteriores</span>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="text-xs">Modular</Badge>
                <span className="text-sm">Subpartes independentes</span>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="text-xs">Seq2Seq</Badge>
                <span className="text-sm">Encoder-decoder para sequências</span>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="text-xs">DNN</Badge>
                <span className="text-sm">Múltiplas camadas ocultas</span>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="text-xs">CNN/DQN</Badge>
                <span className="text-sm font-medium">Processar imagens e decidir ações</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Processo de Machine Learning */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Cpu className="h-5 w-5 text-blue-500" />
              </div>
              <CardTitle className="text-xl">Processo de ML</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div>
                  <span className="text-sm font-medium">Pré-processamento:</span>
                  <span className="text-sm text-muted-foreground ml-1">grayscale, resize, remover ruído</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <span className="text-sm font-medium">Recompensas:</span>
                  <span className="text-sm text-muted-foreground ml-1">+1 (cano), -1 (morte), +0.1 (sobrevivência)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Settings className="h-4 w-4 text-purple-500 mt-0.5" />
                <div>
                  <span className="text-sm font-medium">Q-Learning:</span>
                  <span className="text-sm text-muted-foreground ml-1">com Adam optimizer</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="h-4 w-4 text-orange-500 mt-0.5" />
                <div>
                  <span className="text-sm font-medium">Experience Replay:</span>
                  <span className="text-sm text-muted-foreground ml-1">para treino estável</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Treinamento */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Layers className="h-5 w-5 text-green-500" />
              </div>
              <CardTitle className="text-xl">Parâmetros de Treinamento</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Learning rate:</span>
                <Badge variant="secondary">1e-6</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Fator de desconto:</span>
                <Badge variant="secondary">0.99</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Replay memory:</span>
                <Badge variant="secondary">50.000</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Batch size:</span>
                <Badge variant="secondary">32</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Atualização rede alvo:</span>
                <Badge variant="secondary">1000 iterações</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Framework:</span>
                <Badge variant="outline">TensorFlow</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}