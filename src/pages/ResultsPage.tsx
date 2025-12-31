import { images } from '@/data/quizData';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const ResultsPage = () => {
  const [showFaq, setShowFaq] = useState<number | null>(null);

  const features = [
    { icon: '📚', text: 'Plano de 21 dias personalizado para seu cão' },
    { icon: '🎯', text: 'Técnicas baseadas em reforço positivo' },
    { icon: '🎬', text: 'Vídeos passo a passo de cada exercício' },
    { icon: '💬', text: 'Suporte por WhatsApp com especialistas' },
    { icon: '♾️', text: 'Acesso vitalício ao conteúdo' },
    { icon: '✅', text: 'Garantia de 7 dias ou seu dinheiro de volta' },
  ];

  const testimonials = [
    { name: 'Carla M.', location: 'São Paulo', text: 'Meu cachorro parou de puxar a guia em apenas 5 dias! Incrível!', rating: 5, image: images.betterIcon78 },
    { name: 'Roberto S.', location: 'Rio de Janeiro', text: 'Já tinha tentado de tudo, mas só com o desafio consegui resultados reais.', rating: 5, image: images.betterIcon79 },
    { name: 'Ana Paula', location: 'Belo Horizonte', text: 'Meu Golden agora obedece todos os comandos. Super recomendo!', rating: 5, image: images.betterIcon80 },
  ];

  const faqs = [
    { question: 'O desafio funciona para qualquer raça?', answer: 'Sim! O desafio é personalizado de acordo com a raça, idade e comportamento do seu cão.' },
    { question: 'Quanto tempo por dia preciso dedicar?', answer: 'Apenas 10-15 minutos por dia são suficientes para ver resultados.' },
    { question: 'E se não funcionar para o meu cão?', answer: 'Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.' },
    { question: 'Como recebo o acesso?', answer: 'Imediatamente após a compra, você recebe acesso à plataforma com todos os vídeos.' },
  ];

  const handleBuy = () => {
    window.open('https://pay.cakto.com.br/oa2hasm_705763', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
            <span className="text-lg">🐾</span>
          </div>
          <span className="font-bold text-primary-foreground text-lg">Conexão Pet</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            ✨ Seu plano está pronto!
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Desafio de Obediência Canina de 21 Dias
          </h1>
          <p className="text-muted-foreground mb-6">
            Transforme o comportamento do seu cão com nosso método comprovado por mais de 500.000 tutores.
          </p>
          <img src={images.girlWithPuppies} alt="Tutora feliz" className="w-full max-w-sm mx-auto rounded-2xl shadow-xl mb-4" />
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-10 bg-secondary">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">O que você vai receber:</h2>
          <div className="space-y-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 bg-background p-4 rounded-xl">
                <span className="text-2xl">{f.icon}</span>
                <span className="text-foreground">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-10">
        <div className="max-w-md mx-auto">
          <div className="bg-card border-2 border-primary rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-primary text-primary-foreground py-3 text-center font-semibold">
              🔥 OFERTA ESPECIAL POR TEMPO LIMITADO
            </div>
            <div className="p-6 text-center">
              <p className="text-muted-foreground line-through">De R$ 97,00</p>
              <p className="text-4xl font-bold text-foreground">R$ <span className="text-primary">29</span>,90</p>
              <p className="text-muted-foreground text-sm mb-6">Pagamento único • Acesso vitalício</p>
              <button 
                onClick={handleBuy}
                className="w-full py-4 rounded-xl font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
              >
                QUERO MEU DESAFIO AGORA
              </button>
              <p className="text-xs text-muted-foreground mt-4">🔒 Pagamento 100% seguro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-10 bg-secondary">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">O que dizem nossos alunos</h2>
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background p-5 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-foreground">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-secondary rounded-xl overflow-hidden">
                <button onClick={() => setShowFaq(showFaq === i ? null : i)} className="w-full p-4 flex items-center justify-between text-left">
                  <span className="font-medium text-foreground">{faq.question}</span>
                  {showFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {showFaq === i && <div className="px-4 pb-4 text-muted-foreground">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-10 bg-primary">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">Não perca essa oportunidade!</h2>
          <p className="text-primary-foreground/80 mb-6">Garanta agora por apenas R$ 29,90</p>
          <button onClick={handleBuy} className="w-full py-4 rounded-xl font-bold text-lg bg-background text-primary hover:bg-background/90 transition-colors">
            GARANTIR MINHA VAGA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center"><span>🐾</span></div>
          <span className="font-bold">Conexão Pet</span>
        </div>
        <p className="text-background/60 text-sm">© 2025 Conexão Pet. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default ResultsPage;
