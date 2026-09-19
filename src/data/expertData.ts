export interface ResultImage {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
}

export interface ExpertPhoto {
  id: string;
  url: string;
  caption: string;
  tag: string;
}

export interface TrustPillar {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  highlight?: string;
}

export const EXPERT_DATA = {
  name: "Anny Caroline",
  titlePrefix: "Dra.",
  fullName: "Dra. Anny Caroline",
  specialties: "Dentista • Invisalign Doctor • Ortodontia • Clínica Geral",
  cro: "CRO/PR",
  location: {
    address: "Rua Alcídio Viana, 916",
    floor: "4º andar - Sala 403",
    city: "São José dos Pinhais",
    state: "PR",
    cep: "83005-560",
    fullAddress: "Rua Alcídio Viana, 916 - 4º andar - Sala 403, São José dos Pinhais - PR, CEP 83005-560",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Alc%C3%ADdio+Viana+916+S%C3%A3o+Jos%C3%A9+dos+Pinhais"
  },
  whatsapp: {
    number: "5541991283538",
    url: "https://api.whatsapp.com/send/?phone=5541991283538&text=Ol%C3%A1%2C%20Dra.%20Anny!%20Vi%20sua%20p%C3%A1gina%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.&type=phone_number&app_absent=0",
    buttonText: "Agendar avaliação no WhatsApp",
    microText: "Resposta rápida • Atendimento exclusivo • São José dos Pinhais"
  },
  instagram: {
    handle: "@dra.annycardoso",
    url: "https://www.instagram.com/dra.annycardoso/"
  },
  heroImage: "https://i.imgur.com/P9MsY6s.jpeg",
  secondaryExpertImage: "https://i.imgur.com/aYahRs0.jpeg",
  
  // Results / Provas Sociais - Antes e Depois (pronta para adicionar novos links facilmente)
  resultsGallery: [
    {
      id: "res-1",
      url: "https://i.imgur.com/6DF3TD4.jpeg",
      title: "Transformação do Sorriso",
      category: "Alinhamento & Estética",
      description: "Harmonia oclusal e estética dental com tecnologia avançada."
    },
    {
      id: "res-2",
      url: "https://i.imgur.com/f3mYbsz.png",
      title: "Correção Ortodôntica Precisa",
      category: "Invisalign & Ortodontia",
      description: "Alinhamento dental milimétrico preservando a naturalidade."
    },
    {
      id: "res-3",
      url: "https://i.imgur.com/XbZP6Bo.png",
      title: "Evolução do Caso Clínico",
      category: "Casos Reais",
      description: "Planejamento individualizado focado em conforto e função."
    },
    {
      id: "res-4",
      url: "https://i.imgur.com/Y7OkSOD.jpeg",
      title: "Resultado Estético & Funcional",
      category: "Estética do Sorriso",
      description: "Sorriso renovado com segurança e acompanhamento direto."
    }
  ] as ResultImage[],

  // Bastidores e fotos do expert
  expertPhotos: [
    {
      id: "exp-1",
      url: "https://i.imgur.com/P9MsY6s.jpeg",
      caption: "Atendimento humanizado e individual em cada consulta",
      tag: "Cuidado Pessoal"
    },
    {
      id: "exp-2",
      url: "https://i.imgur.com/aYahRs0.jpeg",
      caption: "Planejamento de excelência focado na sua saúde e estética",
      tag: "Invisalign Doctor"
    }
  ] as ExpertPhoto[],

  // Pilares de confiança (Por que confiar em mim)
  trustPillars: [
    {
      id: "trust-1",
      iconName: "UserCheck",
      title: "Atendimento 100% Comigo",
      description: "Você não é repassado(a) para estagiários ou assistentes. Cada detalhe do seu tratamento é planejado e realizado pessoalmente por mim."
    },
    {
      id: "trust-2",
      iconName: "ShieldCheck",
      title: "Avaliação Honesta e Sem Pressão",
      description: "Indico apenas o que seu sorriso realmente necessita. Sem procedimentos desnecessários ou falsas promessas de tratamento."
    },
    {
      id: "trust-3",
      iconName: "Sparkles",
      title: "Tecnologia Invisalign & Ortodontia",
      description: "Tratamento discreto, sem fios metálicos machucando a boca e com previsibilidade digital antes mesmo de começar."
    },
    {
      id: "trust-4",
      iconName: "Clock",
      title: "Respeito Pontual ao Seu Tempo",
      description: "Consultas com horários reservados exclusivamente para você, sem salas de espera cheias ou atrasos recorrentes."
    },
    {
      id: "trust-5",
      iconName: "FileCheck",
      title: "Clareza Total de Valores",
      description: "Explicação transparente de prazos, etapas e condições facilitadas para viabilizar o seu tratamento com tranquilidade."
    },
    {
      id: "trust-6",
      iconName: "MapPin",
      title: "Localização Privilegiada e Discreta",
      description: "Consultório moderno, seguro e acolhedor na Rua Alcídio Viana, no coração médico de São José dos Pinhais."
    }
  ] as TrustPillar[],

  // Como funciona a primeira consulta
  steps: [
    {
      number: "01",
      title: "Toque no WhatsApp",
      description: "Clique no botão da página para abrir uma conversa direta conosco.",
      highlight: "Leva menos de 1 minuto"
    },
    {
      number: "02",
      title: "Escolha seu Melhor Horário",
      description: "Definimos juntos o dia e horário que melhor se encaixam na sua rotina em São José dos Pinhais.",
      highlight: "Flexibilidade total"
    },
    {
      number: "03",
      title: "Avaliação Completa Comigo",
      description: "No consultório, avalio seu sorriso, tiro todas as suas dúvidas e você descobre as melhores opções para o seu caso.",
      highlight: "Atendimento 100% individual"
    }
  ] as StepItem[]
};
