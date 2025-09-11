import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Glossary() {
  return (
    <Card className="shadow-md rounded-2xl p-4">
      <CardHeader className="!p-2">
        <CardTitle className="text-2xl">Glossário</CardTitle>
      </CardHeader>
      <CardContent className="!p-2 text-sm space-y-3">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>RL (Reinforcement Learning):</strong> aprendizado por reforço,
            baseado em recompensas/punições.
          </li>
          <li>
            <strong>CNN (Convolutional Neural Network):</strong> rede para visão computacional.
          </li>
          <li>
            <strong>DQN (Deep Q-Network):</strong> integração de RL com CNN.
          </li>
          <li>
            <strong>Experience Replay:</strong> técnica de amostrar experiências passadas
            para estabilidade do aprendizado.
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
