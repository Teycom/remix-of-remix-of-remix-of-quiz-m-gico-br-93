import { QuizStep } from '@/types/quiz';

// URLs das imagens do site original
export const images = {
  // Dogs
  dogPuppy: 'https://images.paw-champ.com/pc/images/common/age-puppy.png',
  dogAdolescent: 'https://images.paw-champ.com/pc/images/common/age-adolescent.png',
  dogAdult: 'https://images.paw-champ.com/pc/images/common/age-adult.png',
  dogSenior: 'https://images.paw-champ.com/pc/images/common/age-senior.png',
  
  // Gender
  maleSign: 'https://images.paw-champ.com/pc/emoji/male-sign-blue.png',
  femaleSign: 'https://images.paw-champ.com/pc/emoji/female-sign-pink.png',
  
  // Emojis
  loveLetterEmoji: 'https://storage.googleapis.com/cdn-paw-champ-images/pc/emoji/love-letter.png',
  smilingFaceWithHearts: 'https://storage.googleapis.com/cdn-paw-champ-images/pc/emoji/smiling-face-with-hearts.png',
  relievedFace: 'https://storage.googleapis.com/cdn-paw-champ-images/pc/emoji/relieved-face.png',
  plusEmoji: 'https://storage.googleapis.com/cdn-paw-champ-images/pc/emoji/plus.png',
  thumbsDown: 'https://images.paw-champ.com/pc/emoji/thumbs-down.png',
  neutralFace: 'https://images.paw-champ.com/pc/emoji/neutral-face.png',
  thumbsUp: 'https://images.paw-champ.com/pc/emoji/thumbs-up.png',
  flushedFace: 'https://images.paw-champ.com/pc/emoji/flushed-face.png',
  facePeekingEye: 'https://images.paw-champ.com/pc/emoji/face-with-peeking-eye.png',
  smilingFaceOpenHands: 'https://images.paw-champ.com/pc/emoji/smiling-face-with-open-hands.png',
  grimacingFace: 'https://images.paw-champ.com/pc/emoji/grimacing-face.png',
  thinkingFace: 'https://images.paw-champ.com/pc/emoji/thinking-face.png',
  smilingFaceSunglasses: 'https://images.paw-champ.com/pc/emoji/smiling-face-with-sunglasses.png',
  lollipop: 'https://images.paw-champ.com/pc/emoji/lollipop.png',
  tennis: 'https://images.paw-champ.com/pc/emoji/tennis.png',
  chartIncreasing: 'https://images.paw-champ.com/pc/emoji/chart-increasing-emoji.png',
  peopleHugging: 'https://images.paw-champ.com/pc/emoji/people-hugging-emoji.png',
  linkEmoji: 'https://images.paw-champ.com/pc/emoji/link-emoji.png',
  dogEmoji: 'https://images.paw-champ.com/pc/emoji/dog-emoji.png',
  sunEmoji: 'https://images.paw-champ.com/pc/emoji/sun-emoji.png',
  sunFaceEmoji: 'https://images.paw-champ.com/pc/emoji/sun-face-emoji.png',
  moonFaceEmoji: 'https://images.paw-champ.com/pc/emoji/moon-face-emoji.png',
  alarmClockEmoji: 'https://images.paw-champ.com/pc/emoji/alarm-clock-emoji.png',
  firstQuarterMoonFace: 'https://images.paw-champ.com/pc/emoji/first-quarter-moon-face-emoji.png',
  serviceDogEmoji: 'https://images.paw-champ.com/pc/emoji/service-dog-emoji.png',
  
  // Icons
  meltingFace: 'https://images.paw-champ.com/pc/icons/melting-face.png',
  faceWithMonocle: 'https://images.paw-champ.com/pc/icons/face-with-monocle.png',
  nerdFace: 'https://images.paw-champ.com/pc/icons/nerd-face.png',
  checkMarkButton: 'https://images.paw-champ.com/pc/icons/check-mark-button.png',
  crossMark: 'https://images.paw-champ.com/pc/icons/cross-mark.png',
  
  // Main images
  goldenRetrieverGivePaw: 'https://images.paw-champ.com/pc/images/common/golden-retreiver-give-hand.png',
  academicShield: 'https://storage.googleapis.com/cdn-paw-champ-images/pc/images/common/academic-shield.svg',
  logo: 'https://storage.googleapis.com/cdn-paw-champ-images/pc/logo/logo-default.svg',
  dogHeadWithTexts: 'https://images.paw-champ.com/pc/images/common/pt-head-dog-with-texts.png',
  behavioralProblems: 'https://images.paw-champ.com/landings/behavioral_problems.png',
  calendarPt: 'https://images.paw-champ.com/pc/images/common/localization/pt/pt-calendar.png',
  
  // Cloudinary images
  dogTrainingIcon0: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1716366440/dog-training/icons/quiz/main/0.png',
  dogTrainingIcon11: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1716366430/dog-training/icons/quiz/main/11.png',
  dogTrainingIcon12: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1716366426/dog-training/icons/quiz/main/12.png',
  dogTrainingIcon48: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1716370924/dog-training/icons/quiz/main/48.png',
  dogTrainingIcon41: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1716368088/dog-training/icons/quiz/main/41.png',
  ignoringDog: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684858820/dog-training/img/quiz/refuse-grey.png',
  ignoredDog: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684861041/dog-training/img/quiz/ignored-grey.png',
  dogFood: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1671613222/dog-training/img/quiz-puppy-adult/dog-food.png',
  schedule: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1671613224/dog-training/img/quiz-puppy-adult/schedule.png',
  home: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1671613223/dog-training/img/quiz-puppy-adult/home.png',
  puppyCrate: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1671613223/dog-training/img/quiz-puppy-adult/puppy-crate.png',
  runningDog: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog10.png',
  growlingDog: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog11.png',
  jumpingDog: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog12.png',
  sadDog: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog13.png',
  barkingDog: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog14.png',
  dogEatingShoe: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog15.png',
  dirtyDog: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog16.png',
  puppyStress: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684858377/dog-training/img/quiz/puppy-stress-grey.png',
  catDog: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684913836/dog-training/icons/cat-dog.png',
  dogWithLaptop: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1671188783/dog-training/img/quiz-painfull/handler-online.png',
  disciplineIcon: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1713431268/dog-training/icons/discipline/Image.png',
  disciplineIcon1: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1713431268/dog-training/icons/discipline/Image-1.png',
  disciplineIcon3: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1713431268/dog-training/icons/discipline/Image-3.png',
  disciplineIcon4: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1713431268/dog-training/icons/discipline/Image-4.png',
  disciplineIcon5: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1713431268/dog-training/icons/discipline/Image-5.png',
  quizIcon4: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156112/dog-training/icons/quiz/Image-4.png',
  quizIcon20: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156114/dog-training/icons/quiz/Image-20.png',
  quizIcon2: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156112/dog-training/icons/quiz/Image-2.png',
  quizIcon1: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156112/dog-training/icons/quiz/Image-1.png',
  quizIcon3: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156112/dog-training/icons/quiz/Image-3.png',
  quizIcon16: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156114/dog-training/icons/quiz/Image-16.png',
  quizIcon21: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156114/dog-training/icons/quiz/Image-21.png',
  quizIcon26: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156115/dog-training/icons/quiz/Image-26.png',
  quizIcon27: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156115/dog-training/icons/quiz/Image-27.png',
  quizIcon29: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684156116/dog-training/icons/quiz/Image-29.png',
  betterIcon77: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941074/dog-training/icons/better/77.png',
  betterIcon78: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941074/dog-training/icons/better/78.png',
  betterIcon79: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941074/dog-training/icons/better/79.png',
  betterIcon80: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941074/dog-training/icons/better/80.png',
  betterIcon111: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1686214728/dog-training/icons/better/111.png',
  resIcon1: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1671198919/dog-training/icons/res-1.png',
  girlWithPuppies: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1685013727/dog-training/img/better/girl.png',
  
  // Testimonials
  testimonial1: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog10.png',
  testimonial2: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog11.png',
  testimonial3: 'https://res.cloudinary.com/dr0cx27xo/image/upload/v1684941556/dog-training/img/better/dog12.png',
};

// Seguindo a ordem EXATA do HTML original (block1 a block30+)
export const quizSteps: QuizStep[] = [
  // BLOCK 1: Idade
  {
    id: 'age',
    type: 'age-selection',
    title: 'OBTENHA UM DESAFIO DE OBEDIÊNCIA CANINA PERSONALIZADO',
    subtitle: 'BASEADO NA IDADE, RAÇA E TENDÊNCIAS COMPORTAMENTAIS DO CÃO',
    progressSegment: 1,
  },
  // BLOCK 2: Gênero
  {
    id: 'gender',
    type: 'gender-selection',
    title: 'Seu {ageLabel} é...',
    progressSegment: 1,
  },
  // BLOCK 3: Raça
  {
    id: 'breed',
    type: 'breed-selection',
    title: 'Selecione a raça do seu {ageLabel}',
    subtitle: 'Desafio de obediência de acordo com a raça do seu {ageLabel}',
    progressSegment: 1,
  },
  // BLOCK 4: Social Proof - Donos de Cães (quote screen)
  {
    id: 'dogs-owners',
    type: 'info-screen',
    title: 'Mais de 500.000 tutores de cães',
    subtitle: 'escolheram o Desafio de obediência canina da Conexão Pet para substituir métodos de adestramento ultrapassados!',
    buttonText: 'Continuar',
    progressSegment: 1,
  },
  // BLOCK 5: Motivação para começar
  {
    id: 'motivation',
    type: 'multi-choice',
    title: 'Qual é a sua motivação para começar o Desafio de obediência?',
    subtitle: 'Selecione todas as opções aplicáveis:',
    options: [
      { id: 'love', label: 'O meu amor pelo meu cão', image: images.loveLetterEmoji },
      { id: 'life', label: 'Desejo de tornar a vida do meu cão mais longa e feliz', image: images.smilingFaceWithHearts },
      { id: 'easy', label: 'Desejo de ter uma vida mais fácil com o meu cão', image: images.relievedFace },
      { id: 'other', label: 'Outro', image: images.plusEmoji },
    ],
    buttonText: 'Próxima Etapa',
    progressSegment: 1,
  },
  // BLOCK 6: Objetivo principal
  {
    id: 'main-goal',
    type: 'single-choice',
    title: 'Qual é o seu objetivo principal?',
    subtitle: 'Escolha o que mais te interessa:',
    options: [
      { id: 'obedience', label: 'Melhorar obediência', image: images.dogTrainingIcon0 },
      { id: 'commands', label: 'Aprender comandos úteis', image: images.dogTrainingIcon11 },
      { id: 'bond', label: 'Construir um vínculo forte com meu cão', image: images.dogTrainingIcon12 },
    ],
    progressSegment: 1,
  },
  // BLOCK 7: Training Hero Screen
  {
    id: 'training-hero',
    type: 'info-screen',
    title: 'Foque em ensinar ao seu cão comandos essenciais',
    subtitle: 'com um Desafio de obediência canina',
    buttonText: 'Continuar',
    image: images.goldenRetrieverGivePaw,
    progressSegment: 1,
  },
  // BLOCK 8: Já tentou adestrar antes? (rating)
  {
    id: 'failed-training',
    type: 'rating-scale',
    title: 'Já tentei adestrar meu cão antes, mas não consegui',
    subtitle: 'Você concorda com essa afirmação?',
    progressSegment: 2,
  },
  // BLOCK 9: Consistência no treinamento (rating)
  {
    id: 'consistency',
    type: 'rating-scale',
    title: 'Consigo manter a consistência no treinamento do meu cão',
    subtitle: 'Você concorda com essa afirmação?',
    progressSegment: 2,
  },
  // BLOCK 10: Treinamento divertido (rating)
  {
    id: 'fun-training',
    type: 'rating-scale',
    title: 'Quero que o treinamento seja divertido para mim e meu cão',
    subtitle: 'Você concorda com essa afirmação?',
    progressSegment: 2,
  },
  // BLOCK 11: Você não está sozinho (quote screen)
  {
    id: 'not-alone',
    type: 'info-screen',
    title: 'Você não está sozinho!',
    subtitle: 'Muitos tutores enfrentam as mesmas dificuldades que você. Nosso método já ajudou milhares de pessoas a transformar o comportamento de seus cães.',
    buttonText: 'Continuar',
    progressSegment: 2,
  },
  // BLOCK 12: Seu cão ignora você?
  {
    id: 'refuse-attention',
    type: 'single-choice-image',
    title: 'Seu cão ignora você quando você chama a atenção dele?',
    image: images.ignoringDog,
    options: [
      { id: 'yes', label: 'Sim, frequentemente me ignora' },
      { id: 'sometimes', label: 'Às vezes' },
      { id: 'no', label: 'Não, sempre presta atenção' },
    ],
    progressSegment: 2,
  },
  // BLOCK 13: Última vez que ignorou comando
  {
    id: 'last-ignored',
    type: 'single-choice-image',
    title: 'Quando foi a última vez que seu cão ignorou seu comando?',
    image: images.ignoredDog,
    options: [
      { id: 'today', label: 'Hoje' },
      { id: 'yesterday', label: 'Ontem' },
      { id: 'this-week', label: 'Esta semana' },
      { id: 'this-month', label: 'Este mês' },
    ],
    progressSegment: 2,
  },
  // BLOCK 14: Pede comida/petiscos
  {
    id: 'beg-treats',
    type: 'single-choice-image',
    title: 'Seu cão implora por comida ou petiscos?',
    image: images.dogFood,
    options: [
      { id: 'yes', label: 'Sim', image: images.quizIcon26 },
      { id: 'no', label: 'Não', image: images.quizIcon27 },
    ],
    progressSegment: 2,
  },
  // BLOCK 15: Comportamentos a melhorar
  {
    id: 'behaviors-improve',
    type: 'multi-choice-images',
    title: 'Quais comportamentos você gostaria de melhorar no seu cão?',
    subtitle: 'Selecione todos que se aplicam:',
    options: [
      { id: 'running', label: 'Corre e puxa muito', image: images.runningDog },
      { id: 'growling', label: 'Rosna ou mostra agressividade', image: images.growlingDog },
      { id: 'jumping', label: 'Pula nas pessoas', image: images.jumpingDog },
      { id: 'anxiety', label: 'Ansiedade de separação', image: images.sadDog },
      { id: 'barking', label: 'Late excessivamente', image: images.barkingDog },
      { id: 'chewing', label: 'Morde/destrói objetos', image: images.dogEatingShoe },
      { id: 'dirty', label: 'Faz xixi/cocô no lugar errado', image: images.dirtyDog },
    ],
    buttonText: 'Próxima Etapa',
    progressSegment: 2,
  },
  // BLOCK 16: Comandos que já conhece
  {
    id: 'cues',
    type: 'multi-choice',
    title: 'Quais comandos seu cão já conhece?',
    subtitle: 'Selecione todos que se aplicam:',
    options: [
      { id: 'name', label: 'Nome' },
      { id: 'sit', label: 'Sentar' },
      { id: 'down', label: 'Deitar' },
      { id: 'touch', label: 'Toque' },
      { id: 'paw', label: 'Dar a pata' },
      { id: 'leave', label: 'Deixa' },
      { id: 'stop', label: 'Para' },
      { id: 'come', label: 'Vem' },
      { id: 'place', label: 'Vai pro lugar' },
      { id: 'stay', label: 'Fica' },
      { id: 'heel', label: 'Junto' },
    ],
    buttonText: 'Próxima Etapa',
    progressSegment: 2,
  },
  // BLOCK 17: O que quer ensinar (disciplina)
  {
    id: 'discipline',
    type: 'multi-choice-icons',
    title: 'O que você quer que seu cão aprenda?',
    subtitle: 'Selecione suas principais metas:',
    options: [
      { id: 'auto-sit', label: 'Sentar automaticamente', image: images.disciplineIcon },
      { id: 'focus-walks', label: 'Foco durante passeios', image: images.disciplineIcon1 },
      { id: 'come-called', label: 'Vir quando chamado', image: images.serviceDogEmoji },
      { id: 'not-run', label: 'Não correr para a rua', image: images.disciplineIcon3 },
      { id: 'no-impulse', label: 'Controlar impulsos', image: images.disciplineIcon4 },
      { id: 'socialized', label: 'Ser bem socializado', image: images.disciplineIcon5 },
    ],
    buttonText: 'Próxima Etapa',
    progressSegment: 2,
  },
  // BLOCK 18: Calendário de compromisso
  {
    id: 'calendar',
    type: 'info-screen',
    title: 'Seu desafio personalizado está quase pronto!',
    subtitle: 'Baseado nas suas respostas, criamos um plano de treinamento de 21 dias especialmente para você e seu cão.',
    buttonText: 'Continuar',
    image: images.calendarPt,
    progressSegment: 2,
  },
  // BLOCK 19: Medo de ambientes novos
  {
    id: 'fear-env',
    type: 'single-choice',
    title: 'Seu cão fica estressado em ambientes novos?',
    options: [
      { id: 'often', label: 'Sim, fica muito estressado', image: images.flushedFace },
      { id: 'sometimes', label: 'Às vezes fica inseguro no início', image: images.facePeekingEye },
      { id: 'never', label: 'Não, é bem tranquilo', image: images.smilingFaceOpenHands },
    ],
    progressSegment: 2,
  },
  // BLOCK 20: Causas de estresse
  {
    id: 'stress-causes',
    type: 'multi-choice-icons',
    title: 'O que causa estresse no seu cão?',
    subtitle: 'Selecione todos que se aplicam:',
    image: images.puppyStress,
    options: [
      { id: 'animals', label: 'Outros animais', image: images.catDog },
      { id: 'strangers', label: 'Conhecer estranhos', image: images.quizIcon4 },
      { id: 'alone', label: 'Ficar sozinho em casa', image: images.quizIcon20 },
      { id: 'noises', label: 'Barulhos altos', image: images.quizIcon2 },
      { id: 'travel', label: 'Viajar', image: images.quizIcon1 },
      { id: 'vet', label: 'Ir ao veterinário', image: images.quizIcon3 },
      { id: 'other', label: 'Outro', image: images.dogTrainingIcon0 },
      { id: 'none', label: 'Nenhum estresse', image: images.dogTrainingIcon41 },
    ],
    buttonText: 'Próxima Etapa',
    progressSegment: 2,
  },
  // BLOCK 21: Recompensa por bom comportamento
  {
    id: 'reward-behavior',
    type: 'single-choice',
    title: 'Você recompensa seu cão quando ele se comporta bem?',
    options: [
      { id: 'no', label: 'Não, esqueço disso', image: images.grimacingFace },
      { id: 'sometimes', label: 'Às vezes', image: images.thinkingFace },
      { id: 'yes', label: 'Sim, sempre!', image: images.smilingFaceSunglasses },
    ],
    progressSegment: 3,
  },
  // BLOCK 22: Motivação durante o treino
  {
    id: 'motivation-training',
    type: 'multi-choice',
    title: 'O que mais motiva seu cão durante o treinamento?',
    subtitle: 'Selecione todos que se aplicam:',
    options: [
      { id: 'treats', label: 'Petiscos', image: images.lollipop },
      { id: 'toys', label: 'Brinquedos', image: images.tennis },
      { id: 'praise', label: 'Carinho e elogios', image: images.smilingFaceWithHearts },
      { id: 'other', label: 'Outro', image: images.plusEmoji },
      { id: 'unsure', label: 'Não tenho certeza', image: images.thinkingFace },
    ],
    buttonText: 'Próxima Etapa',
    progressSegment: 3,
  },
  // BLOCK 23: Baseado em evidências (universidades)
  {
    id: 'evidence-based',
    type: 'info-screen',
    title: 'Nosso método é baseado em ciência',
    subtitle: 'Desenvolvido com base em pesquisas das Universidades de Cambridge, Oxford e Harvard sobre comportamento animal.',
    buttonText: 'Continuar',
    progressSegment: 3,
  },
  // BLOCK 24: Nível de experiência
  {
    id: 'experience',
    type: 'single-choice',
    title: 'Quanto você sabe sobre adestramento de cães confiável?',
    options: [
      { id: 'nothing', label: 'Nada', image: images.meltingFace },
      { id: 'little', label: 'Não muito', image: images.faceWithMonocle },
      { id: 'lot', label: 'Bastante', image: images.nerdFace },
    ],
    progressSegment: 3,
  },
  // BLOCK 25: Já ouviu falar sobre adestramento positivo?
  {
    id: 'heard-positive',
    type: 'single-choice',
    title: 'Você já ouviu falar sobre adestramento com reforço positivo?',
    options: [
      { id: 'yes', label: 'Sim', image: images.checkMarkButton },
      { id: 'no', label: 'Não', image: images.crossMark },
    ],
    progressSegment: 3,
  },
  // BLOCK 26: Especialista comportamental
  {
    id: 'behaviorist',
    type: 'info-screen',
    title: 'Nossos especialistas em comportamento animal',
    subtitle: 'Nossa equipe é formada por especialistas certificados em comportamento canino, com anos de experiência ajudando tutores como você.',
    buttonText: 'Continuar',
    image: images.dogHeadWithTexts,
    progressSegment: 3,
  },
  // BLOCK 27: Gostaria de consultar um especialista online?
  {
    id: 'online-handler',
    type: 'single-choice-image',
    title: 'Gostaria de fazer perguntas a um especialista qualificado online?',
    image: images.dogWithLaptop,
    options: [
      { id: 'yes', label: 'Sim', image: images.quizIcon29 },
      { id: 'no', label: 'Não', image: images.quizIcon21 },
    ],
    progressSegment: 3,
  },
  // BLOCK 28: Motivação durante desafios
  {
    id: 'motivation-challenges',
    type: 'multi-choice',
    title: 'O que te mantém motivado durante desafios?',
    subtitle: 'O que mais te ajuda a continuar quando fica difícil:',
    options: [
      { id: 'progress', label: 'Ver progresso, mesmo que pequeno', image: images.chartIncreasing },
      { id: 'support', label: 'Apoio de treinadores ou comunidades', image: images.peopleHugging },
      { id: 'bond', label: 'Ver como o treinamento impacta nosso vínculo', image: images.linkEmoji },
      { id: 'dog_excited', label: 'A empolgação do meu cão em treinar', image: images.dogEmoji },
    ],
    buttonText: 'Próxima Etapa',
    progressSegment: 3,
  },
  // BLOCK 29: Melhor horário para treinar
  {
    id: 'best-time',
    type: 'multi-choice',
    title: 'Qual o melhor horário para você treinar?',
    subtitle: 'Vamos adaptar o desafio à sua rotina:',
    options: [
      { id: 'morning', label: 'Manhã cedo', image: images.sunEmoji },
      { id: 'afternoon', label: 'Final da tarde', image: images.sunFaceEmoji },
      { id: 'evening', label: 'À noite', image: images.moonFaceEmoji },
      { id: 'whenever', label: 'Quando der', image: images.alarmClockEmoji },
    ],
    buttonText: 'Próxima Etapa',
    progressSegment: 3,
  },
  // BLOCK 30: Nome do cão
  {
    id: 'name',
    type: 'name-input',
    title: 'Qual é o nome do seu cão?',
    subtitle: 'Vamos personalizar o desafio para o seu amigo',
    progressSegment: 3,
  },
  // BLOCK 31: Tempo disponível
  {
    id: 'time-available',
    type: 'time-available',
    title: 'Quanto tempo você está disposto a gastar?',
    progressSegment: 3,
  },
  // BLOCK 32: Gráfico de progresso
  {
    id: 'progress-chart',
    type: 'progress-chart',
    title: 'Este desafio foi desenvolvido para apoiar sua jornada',
    progressSegment: 3,
  },
  // BLOCK 33: Loading com reviews
  {
    id: 'loading-reviews',
    type: 'loading-reviews',
    title: 'Criando seu plano...',
    progressSegment: 3,
  },
  // BLOCK 34: Nível de obediência
  {
    id: 'obedience-level',
    type: 'obedience-level',
    title: 'Seu cão já pode iniciar!',
    progressSegment: 3,
  },
  // BLOCK 35: Progresso semanal
  {
    id: 'weekly-progress',
    type: 'weekly-progress',
    title: 'Nível de obediência',
    progressSegment: 3,
  },
  // BLOCK 36: Captura de email
  {
    id: 'email-capture',
    type: 'email-capture',
    title: 'Insira seu email',
    progressSegment: 3,
  },
];

export const dogBreeds = [
  'Sem raça definida',
  'Labrador',
  'Golden Retriever',
  'American Pit Bull Terrier',
  'Pastor Alemão',
  'Cocker Spaniel',
  'Bulldog Francês',
  'Chihuahua',
  'Cockapoo',
  'Border Collie',
  'Staffordshire Bull Terrier',
  'Poodle',
  'Rottweiler',
  'Beagle',
  'Shih Tzu',
  'Yorkshire Terrier',
  'Dachshund',
  'Husky Siberiano',
  'Buldogue Inglês',
  'Maltês',
  'Schnauzer',
  'Boxer',
  'Akita',
  'Pug',
  'Lhasa Apso',
  'Doberman',
  'Cavalier King Charles',
  'Weimaraner',
  'Spitz Alemão',
  'Shiba Inu',
  'Outra raça',
];
