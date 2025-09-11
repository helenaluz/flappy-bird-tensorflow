import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Discussion() {
  return (
    <Card className="shadow-md rounded-2xl p-4">
      <CardHeader className="!p-2">
        <CardTitle className="text-2xl">Discussão</CardTitle>
      </CardHeader>
      <CardContent className="!p-2 text-sm space-y-3">
        <p>
          Os resultados confirmam que o uso de <strong>Deep Reinforcement Learning</strong> 
          é adequado para treinar agentes em jogos baseados apenas em entrada visual, 
          validando o potencial da técnica em cenários mais amplos.
        </p>
        <p>
          Entretanto, algumas limitações foram identificadas: o modelo depende estritamente 
          dos dados visuais do jogo, sem compreensão de contexto mais profundo, e tende a 
          manter certos comportamentos arriscados se não houver ajustes adequados na taxa 
          de exploração.
        </p>
        <p>
          Como perspectivas futuras, os autores sugerem aplicar o mesmo método em jogos 
          com maior complexidade, como <em>Mario</em> ou <em>Temple Run</em>, além de 
          incluir variações nos cenários do Flappy Bird, como a modificação da largura dos 
          canos, para testar a robustez do agente em ambientes mais dinâmicos.
        </p>
      </CardContent>
    </Card>
  )
}
