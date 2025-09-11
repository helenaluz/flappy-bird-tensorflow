import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function References() {
  const refs = [
    "Matheus G. Cordeiro, Paulo Bruno S. Serafim, Yuri Lenon B. Nogueira, Creto A. Vidal, Joaquim B. Cavalcante Neto. “A Minimal Training Strategy to Play Flappy Bird Indefinitely with NEAT”. SBGames, 2019. ISBN:978-1-7281-4638-6",
    "Anton Nijholt. “More Playful User Interfaces”. https://link.springer.com/book/0.1007%2F978-981-287-546-4",
    "Volodymyr Mnih, Koray Kavukcuoglu, David Silver. “Playing Atari with Deep Reinforcement Learning”. https://arxiv.org/pdf/1312.5602.pdf",
    "Johanna T. Dwyer, Kathryn L. Wiemer. “Fortification and Health: Challenges and Opportunities”. ResearchGate, 2015. Advances in Nutrition, ASN EB 2014 SYMPOSIA.",
    "Jianqiu Kong, Naman Shukla, Shubham Bansal. “Flappy Bird Hack using Deep Reinforcement Learning with Double Q-learning”.",
    "Chichiro Ikuta, Yoshifumi. “Multilayer Perceptron with Pulse Glian Chain”. IEICE Transaction, 3 March 2016. http://nlab.ee.tokushima-u.ac.jp/nishio/Pub-Data/PAPER/P102_Ikuta.pdf",
    "Jiri Stastny, Vladislav Skorpil. “Analysis of Algorithms for Radial Basis Function Neural Network”. Brno University of Technology. http://www.cs.stir.ac.uk/courses/CSC9YF/lectures/ANN/4-MLP.pdf",
    "Oron Anschel, Nir Baram, Nahum Shimkin. “Averaged Target DQN variance reduction for Deep Reinforcement Learning”. ResearchGate, 10 March 2017.",
    "Tony Xu. “Use reinforcement learning to train a Flappy Bird NEVER to die”. https://towardsdatascience.com/use-reinforcement-learning-to-train-a-flappy-bird-never-to-die-35b9625aaecc",
    "Naveen Appiah, Sagar Vare. “Playing FlappyBird with Deep Reinforcement Learning”. Stanford ICME. http://cs231n.stanford.edu/reports/2016/pdfs/111_Report.pdf",
    "http://cs229.stanford.edu/proj2015/362_report.pdf",
    "http://web.mit.edu/6.111/www/f2015/projects/weilow_Project_Final_Report.pdf",
    "https://ieeexplore.ieee.org/abstract/document/8924807",
    "Yunshu Du. “Introduction to Deep Q-network”. Washington State University, 10 Oct 2016.",
    "https://people.ece.cornell.edu/land/courses/ece5760/FinalProjects/s2014/alt53_akt52_sm2354/alt53_akt52_sm2354/index.html",
    "https://www.amusementrc.com/dev/Flappy%20Bird.pdf"
  ]

  return (
    <Card className="shadow-md rounded-2xl p-4">
      <CardHeader className="!p-2">
        <CardTitle className="text-2xl">Referências</CardTitle>
      </CardHeader>
      <CardContent className="!p-2 text-sm">
        <ul className="list-disc list-inside space-y-1">
          {refs.map((ref, index) => (
            <li key={index}>{ref}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
