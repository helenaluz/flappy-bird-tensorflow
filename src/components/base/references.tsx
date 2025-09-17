'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useMemo } from "react"
import {
  BookOpen,
  Globe,
  FileText,
  GraduationCap,
  ExternalLink,
  Users,
  Calendar,
  Building
} from "lucide-react"

interface Reference {
  id: number
  type: 'paper' | 'book' | 'thesis' | 'website' | 'conference'
  title: string
  authors?: string[]
  venue?: string
  year?: string
  url?: string
  isbn?: string
  institution?: string
  description?: string
}

export default function References() {
  const references = useMemo(() => {
    const refs: Reference[] = [
      {
        id: 1,
        type: 'conference',
        title: "A Minimal Training Strategy to Play Flappy Bird Indefinitely with NEAT",
        authors: ["Matheus G. Cordeiro", "Paulo Bruno S. Serafim", "Yuri Lenon B. Nogueira", "Creto A. Vidal", "Joaquim B. Cavalcante Neto"],
        venue: "SBGames",
        year: "2019",
        isbn: "978-1-7281-4638-6",
        description: "Estratégia de treinamento mínimo para jogar Flappy Bird indefinidamente usando NEAT"
      },
      {
        id: 2,
        type: 'book',
        title: "More Playful User Interfaces",
        authors: ["Anton Nijholt"],
        url: "https://link.springer.com/book/0.1007%2F978-981-287-546-4",
        description: "Interfaces de usuário mais lúdicas e interativas"
      },
      {
        id: 3,
        type: 'paper',
        title: "Playing Atari with Deep Reinforcement Learning",
        authors: ["Volodymyr Mnih", "Koray Kavukcuoglu", "David Silver"],
        url: "https://arxiv.org/pdf/1312.5602.pdf",
        description: "Artigo seminal sobre DQN para jogos Atari"
      },
      {
        id: 4,
        type: 'paper',
        title: "Fortification and Health: Challenges and Opportunities",
        authors: ["Johanna T. Dwyer", "Kathryn L. Wiemer"],
        venue: "ResearchGate, Advances in Nutrition",
        year: "2015",
        description: "ASN EB 2014 SYMPOSIA"
      },
      {
        id: 5,
        type: 'thesis',
        title: "Flappy Bird Hack using Deep Reinforcement Learning with Double Q-learning",
        authors: ["Jianqiu Kong", "Naman Shukla", "Shubham Bansal"],
        description: "Implementação de Double Q-learning para Flappy Bird"
      },
      {
        id: 6,
        type: 'paper',
        title: "Multilayer Perceptron with Pulse Glian Chain",
        authors: ["Chichiro Ikuta", "Yoshifumi"],
        venue: "IEICE Transaction",
        year: "2016",
        url: "http://nlab.ee.tokushima-u.ac.jp/nishio/Pub-Data/PAPER/P102_Ikuta.pdf",
        description: "Perceptron multicamadas com cadeia de pulso glial"
      },
      {
        id: 7,
        type: 'paper',
        title: "Analysis of Algorithms for Radial Basis Function Neural Network",
        authors: ["Jiri Stastny", "Vladislav Skorpil"],
        institution: "Brno University of Technology",
        url: "http://www.cs.stir.ac.uk/courses/CSC9YF/lectures/ANN/4-MLP.pdf",
        description: "Análise de algoritmos para redes neurais RBF"
      },
      {
        id: 8,
        type: 'paper',
        title: "Averaged Target DQN variance reduction for Deep Reinforcement Learning",
        authors: ["Oron Anschel", "Nir Baram", "Nahum Shimkin"],
        venue: "ResearchGate",
        year: "2017",
        description: "Redução de variância em DQN usando targets médios"
      },
      {
        id: 9,
        type: 'website',
        title: "Use reinforcement learning to train a Flappy Bird NEVER to die",
        authors: ["Tony Xu"],
        url: "https://towardsdatascience.com/use-reinforcement-learning-to-train-a-flappy-bird-never-to-die-35b9625aaecc",
        description: "Tutorial prático sobre RL para Flappy Bird"
      },
      {
        id: 10,
        type: 'conference',
        title: "Playing FlappyBird with Deep Reinforcement Learning",
        authors: ["Naveen Appiah", "Sagar Vare"],
        venue: "Stanford ICME",
        url: "http://cs231n.stanford.edu/reports/2016/pdfs/111_Report.pdf",
        description: "Relatório Stanford sobre DRL para Flappy Bird"
      },
      {
        id: 11,
        type: 'thesis',
        title: "Introduction to Deep Q-network",
        authors: ["Yunshu Du"],
        institution: "Washington State University",
        year: "2016",
        description: "Introdução às redes Deep Q-Network"
      }
    ]

    return refs
  }, [])

  const getTypeIcon = (type: Reference['type']) => {
    switch (type) {
      case 'paper':
        return <FileText className="h-4 w-4" />
      case 'book':
        return <BookOpen className="h-4 w-4" />
      case 'thesis':
        return <GraduationCap className="h-4 w-4" />
      case 'website':
        return <Globe className="h-4 w-4" />
      case 'conference':
        return <Users className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeBadgeVariant = (type: Reference['type']) => {
    switch (type) {
      case 'paper':
        return 'default' as const
      case 'book':
        return 'secondary' as const
      case 'thesis':
        return 'outline' as const
      case 'website':
        return 'destructive' as const
      case 'conference':
        return 'default' as const
      default:
        return 'secondary' as const
    }
  }

  const groupedReferences = useMemo(() => {
    const groups = {
      paper: references.filter(ref => ref.type === 'paper'),
      conference: references.filter(ref => ref.type === 'conference'),
      book: references.filter(ref => ref.type === 'book'),
      thesis: references.filter(ref => ref.type === 'thesis'),
      website: references.filter(ref => ref.type === 'website'),
    }
    return groups
  }, [references])

  const renderReference = (ref: Reference) => (
    <Card key={ref.id} className="p-4 hover:shadow-md transition-all duration-200 border-l-4 border-l-primary/30">
      <div className="space-y-3">
        {/* Header with title and type */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h4 className="font-semibold text-base leading-tight mb-2">
              {ref.title}
            </h4>
            <div className="flex items-center gap-2 mb-2">
              {getTypeIcon(ref.type)}
              <Badge variant={getTypeBadgeVariant(ref.type)} className="text-xs">
                {ref.type.charAt(0).toUpperCase() + ref.type.slice(1)}
              </Badge>
              {ref.year && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {ref.year}
                </div>
              )}
            </div>
          </div>
          {ref.url && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 shrink-0"
              onClick={() => window.open(ref.url, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Authors */}
        {ref.authors && ref.authors.length > 0 && (
          <div className="flex items-start gap-2">
            <Users className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
            <div className="text-sm text-muted-foreground">
              {ref.authors.join(', ')}
            </div>
          </div>
        )}

        {/* Venue/Institution */}
        {(ref.venue || ref.institution) && (
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {ref.venue || ref.institution}
              {ref.isbn && ` • ISBN: ${ref.isbn}`}
            </span>
          </div>
        )}

        {/* Description */}
        {ref.description && (
          <p className="text-sm text-muted-foreground bg-muted/30 p-2 rounded italic">
            {ref.description}
          </p>
        )}
      </div>
    </Card>
  )

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="w-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/20 shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-blue-500/10">
              <BookOpen className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <h3 className="scroll-m-20 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Referências
          </h3>
          <p className="text-muted-foreground mt-2">
            Bibliografia e fontes utilizadas na pesquisa sobre Flappy Bird com Deep Reinforcement Learning
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary" className="text-xs">
              <FileText className="h-3 w-3 mr-1" />
              {groupedReferences.paper.length} Artigos
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Users className="h-3 w-3 mr-1" />
              {groupedReferences.conference.length} Conferências
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <BookOpen className="h-3 w-3 mr-1" />
              {groupedReferences.book.length} Livros
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <GraduationCap className="h-3 w-3 mr-1" />
              {groupedReferences.thesis.length} Teses
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Globe className="h-3 w-3 mr-1" />
              {groupedReferences.website.length} Web
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Main Sections */}
      {Object.entries(groupedReferences).map(([type, refs]) => {
        if (refs.length === 0) return null

        const sectionTitles = {
          paper: 'Artigos Científicos',
          conference: 'Conferências e Proceedings',
          book: 'Livros e Capítulos',
          thesis: 'Teses e Dissertações',
          website: 'Recursos Online'
        }

        return (
          <div key={type} className="space-y-4">
            <div className="flex items-center gap-3">
              {getTypeIcon(type as Reference['type'])}
              <h2 className="text-2xl font-bold tracking-tight">
                {sectionTitles[type as keyof typeof sectionTitles]}
              </h2>
              <Badge variant="outline" className="ml-auto">
                {refs.length} {refs.length === 1 ? 'item' : 'itens'}
              </Badge>
            </div>
            <Separator />
            <div className="grid gap-4">
              {refs.map(renderReference)}
            </div>
          </div>
        )
      })}

      {/* Additional Resources */}
      <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Recursos Adicionais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Datasets e Repositórios</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• OpenAI Gym - Flappy Bird Environment</li>
                <li>• PyGame Learning Environment</li>
                <li>• Stable Baselines3 Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ferramentas e Frameworks</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• TensorFlow Deep Learning Framework</li>
                <li>• PyTorch Reinforcement Learning</li>
                <li>• NEAT-Python Library</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
