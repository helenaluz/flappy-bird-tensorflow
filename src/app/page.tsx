
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import Introduction from "@/components/base/introduction"
import Methods from "@/components/base/methods"
import Glossary from "@/components/base/glossary"
import Results from "@/components/base/results"
import Discussion from "@/components/base/discussion"
import References from "@/components/base/references"
import NeuralNetwork from "@/components/base/neuralNetwork"  
import Methodology from "@/components/base/methodology"


export default function Home() {
  return (
    <div className="flex w-full justify-center mt-6">
      <Tabs defaultValue="account" className="w-full max-w-6xl px-20">
        <TabsList className="flex flex-wrap justify-center mx-auto mb-6">
          <TabsTrigger value="introduction">Introdução</TabsTrigger>
          <TabsTrigger value="methodology">Metodologia</TabsTrigger>
          <TabsTrigger value="methods">Métodos</TabsTrigger>
          <TabsTrigger value="glossary">Glossário</TabsTrigger>
          <TabsTrigger value="results">Resultados</TabsTrigger>
          <TabsTrigger value="discussion">Discussão</TabsTrigger>
          <TabsTrigger value="neuralNetwork">Redes neurais</TabsTrigger>
          <TabsTrigger value="references">Referências</TabsTrigger>
        </TabsList>

        <TabsContent value="introduction">
          <Introduction />
        </TabsContent>
        <TabsContent value="methodology">
          <Methodology />
        </TabsContent>
        <TabsContent value="methods">
          <Methods />
        </TabsContent>
        <TabsContent value="glossary">
          <Glossary />
        </TabsContent>
        <TabsContent value="results">
          <Results />
        </TabsContent>
        <TabsContent value="discussion">
          <Discussion />
        </TabsContent>
        <TabsContent value="neuralNetwork">
          <NeuralNetwork />
        </TabsContent>
        <TabsContent value="references">
          <References />
        </TabsContent>
      </Tabs>
    </div>
  )
}

