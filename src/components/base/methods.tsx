import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  CheckCircle,
  Code,
  Cpu,
  Image,
  Layers,
  Monitor,
  Package,
  Settings,
  Zap,
  Database,
  Camera
} from "lucide-react";

export default function Methods() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Métodos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Detalhes técnicos sobre os pré-requisitos e arquitetura utilizada no desenvolvimento do agente inteligente.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Prerequisites */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500/50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Package className="h-6 w-6 text-blue-500" />
              </div>
              <CardTitle className="text-2xl">Pré-requisitos</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm">Sistema Operacional</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Windows 10, Linux ou Mac com Python 3.6 64-bit
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                Dependências Necessárias
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                  <Badge variant="outline" className="text-xs">TensorFlow</Badge>
                  <span className="text-sm">Biblioteca para construir e treinar modelos</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                  <Badge variant="outline" className="text-xs">Keras</Badge>
                  <span className="text-sm">Deep Learning sobre TensorFlow</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                  <Badge variant="outline" className="text-xs">Pygame</Badge>
                  <span className="text-sm">Desenvolvimento de jogos</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                  <Badge variant="outline" className="text-xs">Scikit-image</Badge>
                  <span className="text-sm">Processamento de imagens</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                  <Badge variant="outline" className="text-xs">OpenCV-Python</Badge>
                  <span className="text-sm">Visão computacional</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500/50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Layers className="h-6 w-6 text-green-500" />
              </div>
              <CardTitle className="text-2xl">Arquitetura</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm">Processamento de Imagens</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Arquitetura da rede neural para treinar o agente Flappy Bird
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Settings className="h-4 w-4 text-primary" />
                Pipeline de Processamento
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-500/5 to-blue-500/10 rounded-lg border border-blue-500/20">
                  <Image className="h-4 w-4 text-blue-500 mt-1" />
                  <div>
                    <span className="text-sm font-medium">Conversão Grayscale</span>
                    <p className="text-xs text-muted-foreground">Redução de dimensionalidade</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/5 to-green-500/10 rounded-lg border border-green-500/20">
                  <Camera className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="text-sm font-medium">Redimensionamento</span>
                    <p className="text-xs text-muted-foreground">80x80 pixels para economia de memória</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-500/5 to-purple-500/10 rounded-lg border border-purple-500/20">
                  <Layers className="h-4 w-4 text-purple-500 mt-1" />
                  <div>
                    <span className="text-sm font-medium">Empilhamento</span>
                    <p className="text-xs text-muted-foreground">4 frames para contexto temporal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-500/5 to-orange-500/10 rounded-lg border border-orange-500/20">
                  <Zap className="h-4 w-4 text-orange-500 mt-1" />
                  <div>
                    <span className="text-sm font-medium">Entrada Bruta</span>
                    <p className="text-xs text-muted-foreground">Pixels diretos para decisão de ações</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-red-500/5 to-red-500/10 rounded-lg border border-red-500/20">
                  <Database className="h-4 w-4 text-red-500 mt-1" />
                  <div>
                    <span className="text-sm font-medium">Processamento</span>
                    <p className="text-xs text-muted-foreground">CPU e GPU para alta performance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5" />
                <p className="text-sm">
                  <span className="font-medium">Otimização:</span> O background é removido para reduzir ruído e aumentar a precisão do modelo.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}