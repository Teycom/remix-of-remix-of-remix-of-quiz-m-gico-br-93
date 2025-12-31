import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Star, Check, ChevronDown, ChevronUp, Target, AlertTriangle, Users } from 'lucide-react';

const SalesPage = () => {
  const location = useLocation();
  const quizData = location.state || {};
  const dogName = quizData.dogName || 'Seu cão';
  
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [showFaq, setShowFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState(1);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const plans = [
    { weeks: 4, pricePerDay: 0.51, originalPrice: 1.30, total: 15.19 },
    { weeks: 12, pricePerDay: 0.29, originalPrice: 0.74, total: 24.49, popular: true },
    { weeks: 24, pricePerDay: 0.21, originalPrice: 0.53, total: 35.99 },
  ];

  const features = [
    'Melhorar a obediência rápido',
    'Esqueça Energia excessiva',
    'Aprenda novas técnicas de adestramento canino',
    'Lide com Agressão',
    'Mantenha um alto nível de obediência',
    `Mais de 50 jogos para melhorar a saúde mental de ${dogName} como bônus`,
    'Desfrute do bem-estar com um cão feliz e obediente',
  ];

  const faqs = [
    {
      question: 'Já tentei outros adestramentos antes. O que faz esse ser diferente?',
      answer: 'A PawChamp não é um treinamento comum. Oferecemos uma abordagem única e cientificamente embasada para o adestramento canino, focando nos métodos mais eficazes. Dizemos não a enforcadores, punições, gritos e adestramento baseado em dominância.',
    },
    {
      question: 'Meu cão não é motivado por comida',
      answer: 'É possível que seu cachorro ache brinquedos ou elogios mais interessantes do que petiscos. Para todas essas situações, temos um módulo específico que foca na motivação do cachorro.',
    },
    {
      question: 'Não tenho tempo para treinar o meu cão',
      answer: 'Nossas aulas são curtas (até 15 minutos) e fáceis! Investindo apenas um pouco de tempo, você economiza muito mais tempo e dores de cabeça no futuro.',
    },
  ];

  const testimonials = [
    {
      title: 'Excelentes técnicas de reforço positivo',
      author: 'Dawg Daddy',
      text: 'Este é um ótimo programa de treinamento que começa desde a base. Eu vi ótimos resultados com meus 2 cães.',
    },
    {
      title: 'A estrutura é perfeita',
      author: 'Lynette',
      text: 'A maneira como este curso foi estruturado permite um aprendizado muito mais eficaz.',
    },
  ];

  const recentUsers = [
    { name: 'dimin***', insights: 8, time: 5 },
    { name: 'jesssic***', insights: 6, time: 12 },
    { name: 'ali.k***', insights: 12, time: 16 },
    { name: 'a.kara***', insights: 24, time: 15 },
  ];

  const handleBuy = () => {
    window.open('https://pay.cakto.com.br/oa2hasm_705763', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background py-4 px-4 border-b border-border">
        <div className="max-w-md mx-auto flex items-center justify-center gap-2">
          <img 
            src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1720101060/paw-champ/logo/pawChamp.png" 
            alt="PawChamp" 
            className="h-8"
          />
        </div>
      </header>

      {/* Timer Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        Preço reservado por: <span className="font-bold">{formatTime(timeLeft)}</span>
      </div>

      {/* Hero Comparison */}
      <section className="bg-info py-8 px-4">
        <div className="max-w-md mx-auto">
          {/* Before/After Labels */}
          <div className="flex justify-around mb-4">
            <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">
              Agora
            </span>
            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Depois do desafio
            </span>
          </div>

          {/* Comparison Images */}
          <div className="flex justify-center gap-4 mb-6">
            <img 
              src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1689601188/dog-training/img/girl-problem.png" 
              alt="Antes" 
              className="w-40 h-auto"
            />
            <img 
              src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1689582634/dog-training/img/girl-resolved.png" 
              alt="Depois" 
              className="w-40 h-auto"
            />
          </div>

          {/* Stats Comparison */}
          <div className="grid grid-cols-2 gap-4 bg-background rounded-2xl p-4">
            <div>
              <h4 className="font-semibold text-sm text-foreground">Obediência de {dogName}</h4>
              <p className="text-muted-foreground text-sm">Baixo</p>
              <div className="flex gap-1 mt-2">
                <div className="h-1.5 w-8 rounded bg-primary" />
                <div className="h-1.5 w-8 rounded bg-progress-bg" />
                <div className="h-1.5 w-8 rounded bg-progress-bg" />
              </div>
              <h4 className="font-semibold text-sm text-foreground mt-4">Nível de adestramento</h4>
              <p className="text-muted-foreground text-sm">Intermediário</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground">Obediência de {dogName}</h4>
              <p className="text-muted-foreground text-sm">Elevado</p>
              <div className="flex gap-1 mt-2">
                <div className="h-1.5 w-8 rounded bg-cyan-400" />
                <div className="h-1.5 w-8 rounded bg-cyan-400" />
                <div className="h-1.5 w-8 rounded bg-cyan-400" />
              </div>
              <h4 className="font-semibold text-sm text-foreground mt-4">Nível de adestramento</h4>
              <p className="text-muted-foreground text-sm">Avançado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Ready */}
      <section className="py-8 px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-foreground mb-6">
            O Desafio de obediência personalizado de {dogName} está pronto!
          </h1>
          
          <div className="flex justify-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Meta</p>
                <p className="font-semibold text-foreground text-sm">Melhorar a obediência</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Problemas comportamentais</p>
                <p className="font-semibold text-foreground text-sm">Agressão</p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            Junte-se a mais de 557.039 pessoas na comunidade PawChamp
          </p>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-xl font-bold">
            60% DESCONTO RESERVADO POR {formatTime(timeLeft)}
          </div>
          <div className="rounded-b-xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1700826017/dog-training/img/usersBought.jpg" 
              alt="Comunidade" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Social Proof - Recent Users */}
      <section className="py-8 px-4">
        <div className="max-w-md mx-auto">
          <p className="text-center text-muted-foreground text-sm mb-4">
            Mais de 1812 pessoas aprenderam insights de obediência canina hoje
          </p>
          <div className="space-y-2">
            {recentUsers.map((user, i) => (
              <div key={i} className="flex items-center justify-between bg-secondary rounded-lg p-3 text-sm">
                <span className="text-foreground">{user.name}</span>
                <span className="text-muted-foreground">{user.insights} insights</span>
                <span className="text-muted-foreground">{user.time} minutos</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-8 px-4 bg-secondary">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-center mb-2">Escolha a sua opção</h2>
          <p className="text-center text-green-600 text-sm mb-4">O seu código promocional foi aplicado!</p>
          
          <div className="text-center mb-6">
            <span className="bg-foreground text-background px-3 py-1 rounded text-sm font-mono">
              {dogName.toLowerCase().replace(' ', '')}_dezde25
            </span>
            <p className="text-primary font-bold mt-2">{formatTime(timeLeft)}</p>
          </div>

          <div className="space-y-3">
            {plans.map((plan, index) => (
              <button
                key={index}
                onClick={() => setSelectedPlan(index)}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  selectedPlan === index
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">PLANO DE {plan.weeks} SEMANAS</p>
                    {plan.popular && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">
                        MAIS POPULAR
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground line-through text-sm">${plan.originalPrice}</p>
                    <p className="text-2xl font-bold text-foreground">
                      $<span className="text-primary">{plan.pricePerDay.toFixed(2).split('.')[0]}</span>
                      <span className="text-lg">.{plan.pricePerDay.toFixed(2).split('.')[1]}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">por dia</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4 mb-6">
            Ao clicar em «Obter o meu plano», você aceita a renovação automática da assinatura.
          </p>

          <button
            onClick={handleBuy}
            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Obter o meu plano
          </button>

          <p className="text-center text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <span>🛡️</span> GARANTIA DE REEMBOLSO DE 30 DIAS
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-8 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">O que você recebe</h2>
          <div className="space-y-3">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 px-4 bg-secondary">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Perguntas frequentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-background rounded-xl overflow-hidden">
                <button
                  onClick={() => setShowFaq(showFaq === i ? null : i)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  {showFaq === i ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                {showFaq === i && (
                  <div className="px-4 pb-4 text-muted-foreground">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Os tutores de cães adoram a PawChamp</h2>
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border p-4 rounded-xl">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="w-5 h-5 bg-green-500 flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{t.title}</h4>
                  <span className="text-muted-foreground text-sm">{t.author}</span>
                </div>
                <p className="text-foreground text-sm">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 px-4 bg-primary">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-bold text-primary-foreground mb-4">
            Não perca essa oportunidade!
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Garanta agora com 60% de desconto
          </p>
          <button
            onClick={handleBuy}
            className="w-full py-4 bg-background text-primary rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
          >
            GARANTIR MINHA VAGA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img 
            src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1720101060/paw-champ/logo/pawChamp.png" 
            alt="PawChamp" 
            className="h-6 brightness-0 invert"
          />
        </div>
        <p className="text-background/60 text-sm">© 2025 PawChamp. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default SalesPage;
