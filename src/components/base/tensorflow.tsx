'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import {
  Brain,
  Cpu,
  Database,
  Network,
  Zap,
  Camera,
  Smartphone,
  Monitor,
  Code,
  Settings,
  Globe,
  Shield,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function TensorFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 6;

  const steps = [
    {
      title: "Stack Tecnológico do TensorFlow",
      description: "Core implementation e arquiteturas suportadas",
      badges: [
        { text: "C++", variant: "default" as const },
        { text: "Cross-Platform", variant: "secondary" as const }
      ]
    },
    {
      title: "Bibliotecas e Dependencies Fundamentais",
      description: "Bibliotecas matemáticas e deep learning especializadas",
      badges: [
        { text: "Eigen::Tensor", variant: "default" as const },
        { text: "cuDNN", variant: "secondary" as const },
        { text: "BLAS", variant: "outline" as const }
      ]
    },
    {
      title: "Estratégias Específicas para Computer Vision",
      description: "Operações convolucionais e arquiteturas de referência",
      badges: [
        { text: "Conv2D", variant: "default" as const },
        { text: "Inception-v3", variant: "secondary" as const },
        { text: "Otimizações", variant: "outline" as const }
      ]
    },
    {
      title: "Deployment Específico para CV",
      description: "Otimizações para mobile e inferência em tempo real",
      badges: [
        { text: "Mobile", variant: "default" as const },
        { text: "Real-time", variant: "secondary" as const },
        { text: "Quantization", variant: "outline" as const }
      ]
    },
    {
      title: "Casos de Uso Reais de CV no Google",
      description: "Aplicações práticas em produtos do Google",
      badges: [
        { text: "Google Photos", variant: "default" as const },
        { text: "Street View", variant: "secondary" as const },
        { text: "Translate Camera", variant: "outline" as const }
      ]
    },
    {
      title: "Evolução Tecnológica e Futuro",
      description: "Desenvolvimentos futuros e limitações atuais",
      badges: [
        { text: "TPU", variant: "default" as const },
        { text: "JIT Compilation", variant: "secondary" as const },
        { text: "Dynamic Graphs", variant: "outline" as const }
      ]
    }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code className="h-5 w-5 text-blue-600" />
                    Core Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Linguagem Principal:</p>
                    <p className="text-sm text-muted-foreground">C++ para portabilidade e performance</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Sistemas Operacionais:</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Linux</Badge>
                      <Badge variant="outline" className="text-xs">Mac OS X</Badge>
                      <Badge variant="outline" className="text-xs">Android</Badge>
                      <Badge variant="outline" className="text-xs">iOS</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Cpu className="h-5 w-5 text-green-600" />
                    Arquiteturas Suportadas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-green-800 dark:text-green-300">CPU:</p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">x86</Badge>
                      <Badge variant="outline" className="text-xs">ARM</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-green-800 dark:text-green-300">GPU:</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">NVIDIA Kepler</Badge>
                      <Badge variant="outline" className="text-xs">Maxwell</Badge>
                      <Badge variant="outline" className="text-xs">Pascal</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  Bibliotecas Matemáticas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Eigen::Tensor</h4>
                    <p className="text-xs text-muted-foreground">Framework principal para operações tensoriais com templates C++</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">BLAS</h4>
                    <p className="text-xs text-muted-foreground">Basic Linear Algebra Subprograms</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">cuBLAS</h4>
                    <p className="text-xs text-muted-foreground">GPU-accelerated BLAS da NVIDIA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-amber-600" />
                  Bibliotecas de Deep Learning Especializadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-400 pl-4">
                    <h4 className="font-semibold text-sm mb-2">cuDNN</h4>
                    <p className="text-xs text-muted-foreground mb-2">Primitives otimizadas para deep learning em GPU:</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Convolução 2D/3D</Badge>
                      <Badge variant="outline" className="text-xs">Pooling operations</Badge>
                      <Badge variant="outline" className="text-xs">Activation functions</Badge>
                      <Badge variant="outline" className="text-xs">Normalization layers</Badge>
                    </div>
                  </div>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <h4 className="font-semibold text-sm">gemmlowp & cuda-convnet</h4>
                    <p className="text-xs text-muted-foreground">Bibliotecas para multiplicação de matrizes de baixa precisão e convoluções otimizadas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200 dark:border-cyan-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-cyan-600" />
                  Operações Convolucionais Otimizadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                    <h4 className="font-semibold text-sm mb-2">Conv2D Operations:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Múltiplas implementações por tipo de device</li>
                      <li>• Kernels hand-optimized para operações críticas</li>
                      <li>• Uso extensivo de cuDNN para GPU acceleration</li>
                      <li>• Suporte a diferentes algoritmos (direto, FFT, Winograd)</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <h5 className="font-semibold text-sm">MaxPool</h5>
                      <p className="text-xs text-muted-foreground">Implementações otimizadas</p>
                    </div>
                    <div className="text-center p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <h5 className="font-semibold text-sm">AveragePool</h5>
                      <p className="text-xs text-muted-foreground">Padding e stride configuráveis</p>
                    </div>
                    <div className="text-center p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <h5 className="font-semibold text-sm">Global Pooling</h5>
                      <p className="text-xs text-muted-foreground">Redução dimensional eficiente</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 dark:border-indigo-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-indigo-600" />
                  Arquitetura Inception-v3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Operações:</span>
                      <Badge variant="default">36.000</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Parâmetros:</span>
                      <Badge variant="secondary">13.6M</Badge>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Operações/Inferência:</span>
                      <Badge variant="outline">2B multiply-add</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Paralelização:</span>
                      <Badge variant="destructive">Distribuída</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Smartphone className="h-5 w-5 text-green-600" />
                    Mobile Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Google Translate Visual:</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Model Compression</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">8-bit Quantization</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Graph Optimization</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Zap className="h-5 w-5 text-orange-600" />
                    Real-time Inference
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-orange-400 pl-3">
                      <h5 className="font-semibold text-sm">Batching Automático</h5>
                      <p className="text-xs text-muted-foreground">Maximizar throughput</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-3">
                      <h5 className="font-semibold text-sm">Memory Reuse</h5>
                      <p className="text-xs text-muted-foreground">Reutilização de buffers</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-3">
                      <h5 className="font-semibold text-sm">Pipeline Parallelism</h5>
                      <p className="text-xs text-muted-foreground">Sobreposição de preprocessing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Camera className="h-5 w-5 text-blue-600" />
                    Google Photos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Classificação automática
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Detecção de objetos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Organização visual
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Globe className="h-5 w-5 text-green-600" />
                    Street View
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Reconhecimento de texto
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Detecção de endereços
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Imagens panorâmicas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Monitor className="h-5 w-5 text-purple-600" />
                    Translate Camera
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Pipeline Completo:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">1</Badge>
                        <span>Detecção de texto</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">2</Badge>
                        <span>OCR</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">3</Badge>
                        <span>Tradução neural</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">4</Badge>
                        <span>Renderização</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-200 dark:border-violet-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-violet-600" />
                  Desenvolvimentos Futuros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-violet-400 pl-4">
                      <h4 className="font-semibold text-sm">TPU Integration</h4>
                      <p className="text-xs text-muted-foreground">Tensor Processing Units para aceleração específica</p>
                    </div>
                    <div className="border-l-4 border-violet-400 pl-4">
                      <h4 className="font-semibold text-sm">Automatic Kernel Fusion</h4>
                      <p className="text-xs text-muted-foreground">Otimização automática de operações sequenciais</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-violet-400 pl-4">
                      <h4 className="font-semibold text-sm">Advanced Memory Management</h4>
                      <p className="text-xs text-muted-foreground">Melhor handling de modelos grandes</p>
                    </div>
                    <div className="border-l-4 border-violet-400 pl-4">
                      <h4 className="font-semibold text-sm">Dynamic Graph Support</h4>
                      <p className="text-xs text-muted-foreground">Para arquiteturas mais flexíveis</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  Limitações e Considerações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-sm mb-2 text-red-800 dark:text-red-300">Performance Considerations</h4>
                    <ul className="text-xs text-red-700 dark:text-red-400 space-y-1">
                      <li>• Modelos de CV são memory-intensive</li>
                      <li>• Requerem otimizações específicas para GPUs</li>
                      <li>• Comunicação de dados pode ser gargalo</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold text-sm mb-2 text-amber-800 dark:text-amber-300">Comparação com Frameworks</h4>
                    <div className="text-xs text-amber-700 dark:text-amber-400 space-y-1">
                      <p><strong>vs. Caffe:</strong> TensorFlow mais genérico, Caffe mais otimizado</p>
                      <p><strong>vs. OpenCV:</strong> TensorFlow focado em learning, OpenCV em processamento</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="w-full bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/20 shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-orange-500/10">
              <Brain className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <h3 className="scroll-m-20 text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Tecnologias do TensorFlow e Estratégias para Computer Vision
          </h3>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary" className="text-xs">
              <Cpu className="h-3 w-3 mr-1" />
              C++ Core
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Camera className="h-3 w-3 mr-1" />
              Computer Vision
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Network className="h-3 w-3 mr-1" />
              Distribuído
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Multi-step Progress Indicator */}
      <div className="flex items-center justify-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={cn(
                "w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
                index <= currentStep ? "bg-primary" : "bg-primary/30",
                index < currentStep && "bg-primary"
              )}
            />
            {index < totalSteps - 1 && (
              <div
                className={cn(
                  "w-8 h-0.5",
                  index < currentStep ? "bg-primary" : "bg-primary/30"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content Card */}
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold">
                {steps[currentStep].title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {steps[currentStep].description} • Passo {currentStep + 1} de {totalSteps}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-1">
              {steps[currentStep].badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant={badge.variant}
                  className="text-xs"
                >
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              className="font-medium"
              size="sm"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Anterior
            </Button>
            <Button
              type="button"
              size="sm"
              className="font-medium"
              onClick={handleNext}
              disabled={currentStep === totalSteps - 1}
            >
              {currentStep === totalSteps - 1 ? 'Concluído' : 'Próximo'}
              {currentStep !== totalSteps - 1 && <ChevronRight className="h-4 w-4 ml-1" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}