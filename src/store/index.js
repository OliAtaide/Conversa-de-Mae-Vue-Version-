import { createStore } from "vuex";

export default createStore({
  state: {
    games: [
      {
        id: "1",
        title:
          "Teste seus Conhecimentos - Modificações físicas e emocionais da gravidez",
        type: 1,
        video: "Ribe9QtpHck",
        list: [
          {
            title:
              "Durante a gravidez ficamos mais emotivas, mas também irritadas com mais facilidade. Isso é causado:",
            options: [
              "Devido a sintomas da Tensão Pré-Menstrual (TPM);",
              "Pela variação hormonal no corpo da mulher no primeiro trimestre;",
              "Devido ao aumento do apetite.",
            ],
            answer: 1,
            feedbacks: [
              "As oscilações de humor características da Tensão Pré Menstrual (TPM) ocorrem em um período anterior a ocorrência da menstruação (fase do ciclo menstrual da mulher que indica ausência de gravidez após ela ter ovulado). Nesse caso, os sintomas em questão são decorrentes de alterações na corrente sanguínea dos hormônios estrógeno e progesterona.",
              "A oscilação de humor que ocorre na gestante, geralmente no primeiro trimestre, se deve a elevação dos níveis hormonais de progesterona e o estrogênio, fazendo com que a gestante reaja mais pela emoção do que pela razão.",
              "A sensação de fome pode causar mal humor, mas na gestante a oscilação de humor característica que ocorre geralmente no primeiro trimestre, se deve principalmente em função da variação hormonal nos níveis de progesterona e o estrogênio no corpo da gestante.",
            ],
          },
          {
            title:
              "Os sintomas de náuseas e vômitos, comuns no início da gestação, são provocados pelo aumento na corrente sanguínea do hormônio:",
            options: ["Insulina", "Melatonina", "Gonadotrofina Coriônica"],
            answer: 2,
            feedbacks: [
              "A insulina é responsável por controlar os níveis de açúcar no sangue ingerido através dos alimentos.",
              "A melatonina é um hormônio produzido pela glândula pineal (que fica no cérebro) e quando liberada no sangue induz o indivíduo ao sono.",
              "Os sintomas de náuseas e vômitos na gravidez estão relacionados a um aumento nos níveis de dois hormônios durante a gestação: a gonadotrofina coriônica humana (hCG), que é produzida pela placenta no início da gestação, e o estrogênio, que ajuda a manter a gravidez.",
            ],
          },
          {
            title:
              "A mulher no início da gravidez sente mais vontade de urinar devido:",
            options: [
              "Ao aumento da quantidade de líquido no corpo da mulher e aumento do trabalho dos rins;",
              "Ao aumento do consumo de líquidos pela mulher;",
              "Ao crescimento do bebê, que distende o útero e esse por sua vez comprime a bexiga.",
            ],
            answer: 0,
            feedbacks: [
              "Durante a gravidez existe um aumento considerável de fluxo sanguíneo para os rins. Com todo esse fluxo maior de sangue os rins costumam produzir mais urina.",
              "O aumento da vontade de urinar na gestante pode estar relacionado a uma maior ingestão de líquidos, mas independente do consumo de água, esse sintoma na gravidez está mais relacionado aumento considerável de fluxo sanguíneo para os rins no início da gravidez e a compressão da bexiga pelo crescimento uterino, principalmente no terceiro trimestre com o crescimento do bebê.",
              "A compressão na bexiga causada pela distensão uterina em função do crescimento do bebê é a razão pela qual a gestante sente mais vontade de urinar no terceiro trimestre (período de maior aumento de peso e tamanho do bebê) e não no início da gravidez.",
            ],
          },
          {
            title:
              "Qual sintoma abaixo ocorre no início da gestação na gestante e é resultante do esforço extra que o corpo da mulher faz para a formação e desenvolvimento do embrião no seu ventre?",
            options: [
              "Aumento da sensibilidade das mamas;",
              "Sono excessivo, sensação de cansaço, indisposição;",
              "Cólicas.",
            ],
            answer: 1,
            feedbacks: [
              "O aumento da sensibilidade das mamas é um sintoma comum no início da gestação, mas não está diretamente relacionado ao esforço extra do corpo para formar e desenvolver o embrião.",
              "O sono excessivo, sensação de cansaço e indisposição são sintomas comuns no início da gestação, pois o corpo da mulher está trabalhando arduamente para formar e nutrir o embrião, o que demanda muita energia.",
              "As cólicas podem ocorrer no início da gestação devido à nidação do embrião, mas não são um sintoma geral do esforço extra do corpo durante a formação do embrião.",
            ],
          },
          {
            title: "O que é a assistência Pré-Natal?",
            options: [
              "O período que antecede a gravidez da mulher;",
              "Acompanhamento médico feito ao longo da gravidez, para monitorar a saúde do bebê e da gestante, para garantir uma gestação saudável;",
              "Acompanhamento médico feito pela mulher antes de engravidar.",
            ],
            answer: 1,
            feedbacks: [
              "O período que antecede a gravidez da mulher é denominado Pré-concepcional.",
              "A Assistência Pré-natal é um conjunto de cuidados destinados a mulher e ao feto durante a gravidez, que tem por objetivo oferecer o desenvolvimento saudável da gestação e boa evolução do parto.",
              "O acompanhamento médico feito pela mulher antes de engravidar para planejamento da gravidez é denominado Assistência Pré-concepcional.",
            ],
          },
          {
            title:
              "Com que frequência devem ser realizadas as consultas de Pré-Natal?",
            options: [
              "As consultas de pré-natal devem ser realizadas 1 vez a cada 4 semanas. A partir das 28 semanas de gestação até 36 semanas a cada 2 semanas e a partir das 37 semanas 1 vez por semana;",
              "As consultas de pré-natal devem ser realizadas 1 vez a cada 3 meses;",
              "As consultas de pré-natal devem ser realizadas 1 vez a cada  2 meses; a partir das 36 semanas, a cada 2 semanas e a partir das 38 semanas, 1 vez por semana;",
            ],
            answer: 0,
            feedbacks: [
              "As consultas de pré-natal devem ser realizadas 1 vez a cada 4 semanas. A partir das 28 semanas de gestação até 36 semanas a cada 2 semanas e a partir das 37 semanas 1 vez por semana.",
              "Conforme recomendação do Ministério da Saúde, as consultas de pré-natal devem ocorrer mensalmente, até a 28ª semana; quinzenalmente, da 28ª até a 36ª semana e semanalmente, no termo.",
              "AConforme recomendação do Ministério da Saúde, as consultas de pré-natal devem ocorrer mensalmente, até a 28ª semana; quinzenalmente, da 28ª até a 36ª semana e semanalmente, no termo.",
            ],
          },
        ],
      },
      {
        id: "2",
        title: "Teste seus Conhecimentos - ISTs, Prevenção e Sífilis",
        video: "w76N2H9PFuU",
        type: 1,
        list: [
          {
            title: "O que são Infecções Sexualmente Transmissíveis (ISTs)?",
            options: [
              "Infecções causadas pela água contaminada;",
              "Infecções transmitidas por meio da relação sexual desprotegida com uma pessoa infectada sem o uso da camisinha masculina ou feminina;",
              "Infecções transmitidas pela fala, tosse ou espirro.",
            ],
            answer: 1,
            feedbacks: [
              "Infecções transmitidas por meio da água contaminada são Infecções de veiculação hídrica, como por exemplo: Cólera, Amebíase, Hepatites A e E.",
              "As Infecções Sexualmente Transmissíveis são transmitidas, principalmente, por meio do contato sexual (oral, vaginal, anal) sem o uso de camisinha masculina ou feminina, com uma pessoa que esteja infectada.",
              "Infecções transmitidas pela fala, tosse ou espirro são Infecções de Transmissão por gotículas, como por exemplo: Gripe, Coqueluche, Rubéola.",
            ],
          },
          {
            title:
              "As ISTs são classificadas em 3 grupos. Marque a alternativa que contém a classificação correta de ISTs:",
            options: [
              "Primária, secundária e terciária;",
              "Precoce e Tardia;",
              "As causadoras de feridas em região anal e genital, as que provocam corrimento vaginal e as que causam lesões do tipo verrugas na região genital.",
            ],
            answer: 2,
            feedbacks: [
              "Essas são classificações dos diferentes estágios da Sífilis que é uma dentre tantas outras Infecções Sexualmente Transmissíveis que existem.",
              "Essas classificações são estágios da sífilis congênita, sendo a Precoce o estágio em que os sinais e sintomas se manifestam até o 2º ano de vida da criança e a Tardia, após o 2º ano de vida da criança.",
              "As Infecções Sexualmente Transmissíveis são classificadas em: Ulcerosas, causadoras de feridas em região anal e genital (Ex.: Sífilis, Herpes); Verrugosas, as que causam lesões do tipo verrugas na região genital (Ex.: HPV) e as que provocam corrimento vaginal (Ex.: Tricomoníase, Gonorreia) ou uretral (Ex.: Gonorreia, Infecção por Clamídia).",
            ],
          },
          {
            title:
              "O uso de preservativo é crucial para evitar ISTs. Marque a alternativa que apresenta uma recomendação incorreta para o uso dos preservativos:",
            options: [
              "A camisinha pode ser reutilizada;",
              "Não utilize preservativos rasgados ou furados;",
              "Guarde o preservativo em local seco e fresco.",
            ],
            answer: 0,
            feedbacks: [
              "Essa alternativa é incorreta, pois se reutilizado é muito provável que o preservativo seja rasgado, anulando então sua segurança e eficácia.",
              "Essa alternativa é correta, pois preservativos rasgados e furados anulam sua segurança e eficácia.",
              "Essa alternativa é correta, pois calor, humidade, fricção e luz podem danificar os preservativos e torná-los menos efetivos.",
            ],
          },
          {
            title: "Qual das alternativas abaixo são exemplos de IST?",
            options: [
              "Gonorreia, Sífilis, HIV;",
              "Tétano, Sarampo e Rubéola;",
              "Pneumonia, Tuberculose e Bronquite.",
            ],
            answer: 0,
            feedbacks: [
              "Gonorreia, Sífilis, HIV são exemplos de IST, causadas por meio da relação sexual desprotegida com uma pessoa infectada sem o uso da camisinha masculina ou feminina.",
              "Essas doenças são exemplos de doenças Infecto-contagiosas.",
              "Essas doenças são exemplos de infecções Pulmonares.",
            ],
          },
          {
            title:
              "Como a sífilis é transmitida e qual o nome da bactéria causadora dessa infecção?",
            options: [
              "A sífilis é causada por uma bactéria chamada Trichomonas Vaginalis e é transmitida através da relação sexual desprotegida (sem o uso de preservativo);",
              "A sífilis é causada por uma bactéria chamada Treponema Pallidum e é transmitida através da relação sexual desprotegida (sem o uso de preservativo) com uma pessoa infectada ou da gestante infectada para o feto através da placenta ou, ocasionalmente, por contato direto com a lesão no momento do parto;",
              "A sífilis é causada por uma bactéria chamada Treponema Pallidum e é transmitida através das vias aéreas de uma pessoa contaminada para outra sadia, através da fala, tosse ou espirro.",
            ],
            answer: 1,
            feedbacks: [
              "A Trichomonas Vaginalis é bactéria causadora da Infecção Sexualmente Transmissível chamada Tricomoníase.",
              "A sífilis é transmitida é causada por uma bactéria chamada Treponema Pallidum por meio das relações sexuais desprotegidas, da mãe para o filho em qualquer fase da gestação ou no momento do parto (sífilis congênita).",
              "A Sífilis é uma IST e não é transmitida por via aérea de uma pessoa contaminada para outra sadia, através da fala, tosse ou espirro.",
            ],
          },
          {
            title:
              "Quais os sinais e sintomas da sífilis em seu estágio inicial, conhecido como estágio primário da doença e que pode ocorrer entre 10 a 90 dias após o contágio?",
            options: [
              "Manchas vermelhas pelo corpo, palma das mãos e planta dos pés, pode surgir febre, dor de cabeça, mal-estar e falta de apetite;",
              "Comprometimento cerebral, sistema cardiovascular, lesões na pele e ossos;",
              "Feridas que não doem, não coçam e nem ardem, localizadas no pênis, vagina, ânus ou na pele, língua ou lábios.",
            ],
            answer: 2,
            feedbacks: [
              "Esse estágio é conhecido como estágio secundário da doença que pode ocorrer de ocorre em média entre seis semanas e seis meses após a cicatrização das úlceras/feridas.",
              "Esse estágio é conhecido como estágio terciário da doença que pode ocorrer, entre um e 40 anos depois do início da infecção.",
              "Esse estágio é conhecido como estágio primário da doença que pode ocorrer de 10 a 90 dias após contágio.",
            ],
          },
        ],
      },
      {
        id: "3",
        title:
          "Teste seus Conhecimentos - Bem-estar: alimentação, atividade física e vacinação",
        type: 1,
        video: "zsqVSl07TsI",
        list: [
          {
            title:
              "Qual a vitamina abaixo devemos tomar pelo menos 400 mcg por dia todos os dias, até as 12 primeiras semanas de gravidez, para ajudar a prevenir malformações na medula espinhal do bebê?",
            options: ["Ácido Fólico;", "Vitamina C;", "Ferro."],
            answer: 0,
            feedbacks: [
              "O ácido fólico na gravidez é indicado para prevenir defeitos do fechamento do tubo neural do feto, que é responsável pelo desenvolvimento de todo o sistema nervoso, cérebro e medula espinhal do bebê, e assim diminuir o risco de malformações.",
              "A Vitamina C é importante para produção de colágeno, uma proteína necessária para a formação de cartilagem, tendões, ossos e pele e é importante também para o desenvolvimento do sistema imunológico saudável, tanto para a mamãe quanto para o bebê.",
              "O Ferro é o nutriente responsável, principalmente, pelo auxílio na formação das células vermelhas do sangue e transporte de oxigênio para as células do corpo, apoiando todo o metabolismo energético e funcionamento do sistema imune.",
            ],
          },
          {
            title:
              "A anemia, falta de ferro no sangue é muito comum na gravidez e por esse motivo a gestantes deve consumir alimentos mais ricos em ferro. Marque a alternativa que contém exemplos de alimentos ricos em ferro:",
            options: [
              "Grãos, frutas, especialmente mamão, ameixa e verduras;",
              "Carnes vermelhas, as aves e os peixes, verduras escuras, leguminosas (como lentilha, grão-de-bico, ervilha e feijões);",
              "Frutas cítricas como: laranja, limão, morango, acerola.",
            ],
            answer: 1,
            feedbacks: [
              "Esses alimentos são fontes de fibras, muito indicados para casos de constipação na gravidez.",
              "Todos os alimentos mencionados são ricas fontes de ferro, nutriente muito importante para evitar anemia na gestação.",
              "Esses alimentos são ricos em Vitamina C.",
            ],
          },
          {
            title:
              "Qual das alternativas abaixo contém as vacinas que a gestante deve tomar durante a gestação?",
            options: [
              "Tétano, gripe (Influenza), Hepatite B, Tríplice viral;",
              "Tétano, gripe (Influenza), Hepatite B e DTPa (Difteria, Tétano e Pertussis acelular);",
              "Tétano, Febre amarela, Hepatite B e DTPa.",
            ],
            answer: 1,
            feedbacks: [
              "Apesar das vacinas contra Tétano, gripe (Influenza) e Hepatite B fazerem parte do calendário vacinal da gestante, a vacina Tríplice viral é recomendada no Calendário Vacinal da Criança aos 12 meses (1ª dose) e aos 15 meses (dose de Reforço), conforme Ministério da Saúde.",
              "As vacinas contra Tétano, gripe (Influenza), Hepatite B e DTPa fazem parte do calendário vacinal da gestante, conforme recomendação do Ministério da Saúde.",
              "Apesar das vacinas contra Tétano, gripe (Influenza) e Hepatite B fazerem parte do calendário vacinal da gestante, a vacina contra a Febre Amarela é recomendada no Calendário Vacinal da Criança aos 9 meses de vida (1ª dose) e aos 4 anos de idade (dose de Reforço), de acordo com o Ministério da Saúde.",
            ],
          },
          {
            title:
              "Qual intervalo de tempo para o reforço da vacina contra o Tétano?",
            options: [
              "Os reforços são aplicados a cada dez anos após a última dose, mas em caso de gravidez ou ferimentos graves deve-se antecipar a dose de reforço para 5 anos após a última dose administrada.",
              "Os reforços são aplicados a cada 5 anos após a última dose, mas em caso de gravidez ou ferimentos graves deve-se antecipar a dose de reforço para 3 anos após a última dose administrada.",
              "Os reforços são aplicados a cada dez anos após a última dose, mas em caso de gravidez ou ferimentos graves deve-se antecipar a dose de reforço para 3 anos após a última dose administrada.",
            ],
            answer: 0,
            feedbacks: [
              "Conforme calendário vacinal da gestante estabelecido pelo Ministério da Saúde, a vacina contra Difteria e Tétano (DT) deve ser realizada em 3 doses com intervalo de 30 a 60 dias entre elas e o reforço a cada 10 anos. Em caso de ferimentos graves o reforço é a cada 5 anos.",
              "Conforme calendário vacinal da gestante estabelecido pelo Ministério da Saúde, o reforço da vacina contra Difteria e Tétano (DT) deve ser realizado a cada 10 anos. Em caso de ferimentos graves o reforço é a cada 5 anos.",
              "Conforme calendário vacinal da gestante estabelecido pelo Ministério da Saúde, o reforço da vacina contra Difteria e Tétano (DT) deve ser realizado a cada 10 anos. Em caso de ferimentos graves o reforço é a cada 5 anos.",
            ],
          },
          {
            title:
              "Qual das alternativas abaixo apresentam atividades físicas seguras durante a gravidez?",
            options: [
              "Caminhada, Hidroginástica, Ioga;",
              "Hidroginástica, natação, Musculação pesada;",
              "Hidroginástica, Pilates, agachamento.",
            ],
            answer: 0,
            feedbacks: [
              "Essas atividades são exemplos de exercícios de baixo impacto, sendo, portanto, mais seguros para serem realizados durante a gravidez.",
              "Dentre as opções de atividades dessa alternativa, a Musculação Pesada não seria um exercício seguro, pois de um modo geral a gestante deve evitar excesso de carga, principalmente quando não realizava atividades físicas vigorosas antes da gravidez.",
              "Dentre as opções de atividades dessa alternativa, o agachamento não seria um exercício seguro, pois apesar de ser recomendado, não pode ser feito indiscriminadamente e em qualquer momento sem orientação de um profissional, em especial nos casos de gestação de risco.",
            ],
          },
          {
            title:
              "Qual opção à seguir não representa um dos benefícios da atividade física durante a gestação?",
            options: [
              "Diminui os enjôos e ocorrência de náuseas e vômitos;",
              "Diminui desconfortos físicos, ajuda a manter a autoestima, melhora o sono;",
              "Promove tônus muscular, força e resistência.",
            ],
            answer: 0,
            feedbacks: [
              "A atividade física não está relacionada diretamente com esses sintomas. Algumas medidas que podem diminuir tais desconfortos são: https://clinicamedicaclimed.com.br/dicas-para-reduzir-os-enjoos-na-gravidez/",
              "Essa alternativa consiste sim em um dos benefícios da realização de atividade física durante a gestação.",
              "Essa alternativa consiste sim em um dos benefícios da realização de atividade física durante a gestação.",
            ],
          },
        ],
      },
      {
        id: "4",
        title:
          "Teste seus Conhecimentos - Exames do Pré-Natal e Sífilis Congênita",
        type: 1,
        video: "fERueh3cVJM",
        list: [
          {
            title:
              "Durante o Pré-Natal são solicitados exames de sorologia para determinadas doenças que quando ocorrem na gestação podem afetar seriamente o bebê. Para que serve esse tipo de exame?",
            options: [
              "Essas sorologias servem para detectar microorganismos (bactérias, vírus, fungos) no sangue da gestante para saber se ela está com determinado tipo de doença;",
              "Essas sorologias servem para detectar anticorpos no sangue da gestante para saber se ela está com a doença atualmente ou se já tem imunidade contra essas doenças que geram risco materno e fetal;",
              "Essas sorologias servem para detectar Diabetes gestacional e Hipertensão na gravidez.",
            ],
            answer: 1,
            feedbacks: [
              "O exame que realiza um estudo da circulação sanguínea materna e fetal é o exame de imagem Ultrassonografia obstétrica com Doppler indicado para ser realizado a partir da 28° semana de gestação.",
              "Os exames sorológicos são usados para identificar a presença de anticorpos que são desenvolvidos como resposta no nosso sistema imunológico a substâncias estranhas ao organismo, como vírus e bactérias, dentre ou microrganismos.",
              "Exames de sorologias não detectam Diabetes gestacional e Hipertensão na gravidez. A Diabetes gestacional é diagnosticada por meio de exames de sangue de dosagem de glicemia de jejum e hemoglobina Glicada, enquanto que a Hipertensão na gravidez é identificada por meio da medida da pressão arterial (maior ou igual a 140/90 mmHg), depois de ser medida em duas ocasiões com pelo menos 4 horas de intervalo.",
            ],
          },
          {
            title:
              "Já no momento da primeira consulta do Pré-natal, no posto de saúde são feitos os testes rápidos de HIV e Sífilis. Em relação aos testes rápidos, marque a alternativa correta:",
            options: [
              "Os testes de triagem possibilitam o diagnóstico precoce e contribui para que o tratamento seja iniciado de forma imediata em caso de teste reagente, tanto na gestante quanto em sua parceria sexual;",
              "Os testes rápidos de HIV e Sífilis devem ser realizados em todas as consultas de pré-natal;",
              "Se o resultado do teste rápido na gestante der reagente o parceiro sexual dela não precisa ser testado.",
            ],
            answer: 0,
            feedbacks: [
              "Devido ao cenário epidemiológico atual, recomenda-se tratamento imediato da gestante, com benzilpenicilina benzatina, após apenas um teste rápido reagente para sífilis.",
              "Conforme recomendação do Ministério da Saúde, as gestantes devem ser testadas para sífilis na primeira consulta, no início do terceiro trimestre e na internação para o parto, em caso de aborto/natimorto ou história de exposição de risco/violência sexual.",
              "Todas as parcerias da gestante que teve seu teste rápido reagente devem ser testadas. Quando o teste de sífilis for reagente, recomenda-se tratamento de sífilis adquirida de acordo com o estágio da doença. A avaliação e tratamento das parcerias sexuais é crucial para interromper a cadeia de transmissão da infecção.",
            ],
          },
          {
            title:
              "Na infecção por sífilis, o resultado da transmissão da bactéria causadora dessa infecção a corrente sanguínea da gestante infectada para o feto através da placenta ou, ocasionalmente, por contato direto com a lesão no momento do parto (transmissão vertical) é chamada de:",
            options: [
              "Transmissão Adquirida;",
              "Transmissão Horizontal;",
              "Transmissão Vertical.",
            ],
            answer: 2,
            feedbacks: [
              "Esse tipo de transmissão da doença ocorre principalmente por contato sexual desprotegido (sem uso de preservativo).",
              "Não existe essa denominação dentre as formas de transmissão da Sífilis.",
              "A Transmissão vertical ocorre quando a infecção é transmitida de uma mulher com sífilis não tratada ou tratada de forma não adequada para o feto durante a gestação.",
            ],
          },
          {
            title:
              "Pequenos pontos elevados e inicialmente vermelhos ou rosados, febre, fígado aumentado de tamanho, pele amarelada, alterações ósseas que podem estar associadas a fraturas e intensa dor, são características de que fase da infecção por sífilis congênita na criança?",
            options: [
              "Sífilis Congênita precoce;",
              "Sífilis Congênita tardia;",
              "Sífilis latente.",
            ],
            answer: 0,
            feedbacks: [
              "Os sintomas apontados no enunciado são característicos da Sífilis Congênita precoce, a qual ocorre após o nascimento da criança até os dois anos de idade.",
              "A sífilis congênita tardia é caracterizada por: Protuberância na região frontal (“fronte olímpica”), nariz em sela e mandíbula protuberante; Deficiência visual; perda auditiva; Deficiência intelectual, hidrocefalia; Mal formação óssea: tíbia em “lâmina de sabre”, mal formação da clavícula.",
              "A Sífilis latente é o período da infecção em que não se observa nenhum sinal ou sintoma. Esse estágio da Sífilis é dividido em latente recente (até dois anos de infecção) e latente tardia (mais de dois anos de infecção).",
            ],
          },
          {
            title:
              "Protuberância na região frontal (“fronte olímpica”), nariz em sela, maxilar curto (“face de buldogue”), mandíbula protuberante, deficiência visual, perda auditiva são sintomas de:",
            options: [
              "Sífilis Congênita precoce;",
              "Sífilis Congênita tardia;",
              "Sífilis Terciária.",
            ],
            answer: 1,
            feedbacks: [
              "Diferentes dos sintomas citados, os sinais e sintomas da Sífilis Congênita precoce são: Febre; Fígado aumentado de tamanho; Pele amarelada; Alterações ósseas.",
              "Os sintomas mencionados no enunciado correspondem aos da Sífilis Congênita Tardia e estão relacionadas à inflamação persistente da infecção precoce.",
              "A Sífilis Terciária é um dos estágios da sífilis adquirida e não Sífilis Congênita. Nesse estágio a inflamação causa destruição de tecidos ocasionando comprometimento do sistema nervoso e do sistema cardiovascular.",
            ],
          },
          {
            title:
              "Exame realizado no pré-natal ao longo da gravidez, importante para acompanhamento da evolução da gestação, formação e desenvolvimento do feto, seus órgãos e sistemas, bem como verificar a quantidade de líquido amniótico, posição da placenta e condições de vitalidade do bebê:",
            options: [
              "Ressonância Magnética;",
              "Ultrassonografia Obstétrica;",
              "Tomografia Computadorizada.",
            ],
            answer: 1,
            feedbacks: [
              "Ressonância Magnética não faz parte dos exames de imagem de rotina a serem realizados ao longo da assistência pré-natal.",
              "As ultrassonografias obstétricas fazem parte dos exames de rotina realizados ao longo da assistência pré-natal no primeiro, segundo e terceiro trimestre.",
              "Tomografia Computadorizada não faz parte dos exames de imagem de rotina a serem realizados ao longo da assistência pré-natal.",
            ],
          },
        ],
      },
      {
        id: "5",
        title:
          "Teste seus Conhecimentos - Participação do Parceiro no Pré-Natal, Tratamento da Sífilis e Acompanhamento",
        type: 1,
        video: "J_vul1ohHG8",
        list: [
          {
            title:
              "Qual das alternativas abaixo é a correta em relação a participação do pai/parceiro durante todo o processo de pré-natal?",
            options: [
              "A presença do pai/parceiro da gestante no pré-natal não contribui para o bem-estar físico, psicológico, social da mãe, do bebê e dele próprio;",
              "O pré-natal do parceiro é uma oportunidade para o pai realizar exames de rotina e testes rápidos, vacinação, além de ser uma oportunidade para participarem das atividades educativas para uma paternidade consciente;",
              "Não é permitida a presença do pai/parceiro da gestante nas consultas de pré-natal.",
            ],
            answer: 1,
            feedbacks: [
              "Diferente do que afirma o enunciado a presença do pai/parceiro da gestante no pré-natal contribui sim para o bem-estar físico, psicológico, social da mãe, do bebê e do próprio pai.",
              "O Pré-natal do parceiro é uma estratégia do Ministério da Saúde que propõe ações voltadas para o fortalecimento do seu acesso à prevenção, à promoção, autocuidado e à adoção de estilos de vida mais saudáveis, bem como participação na gestação, no parto e no cuidado e na educação das crianças.",
              "É permitido sim a presença do parceiro da gestante nas consultas de pré-natal. Está cada vez mais frequente a participação do pai no pré-natal, devendo sua presença ser estimulada durante as atividades de consulta e de grupo, para o preparo do casal para o parto, como parte do planejamento familiar.",
            ],
          },
          {
            title:
              "Qual a importância do parceiro da gestante fazer os exames de triagem para HIV e Sífilis realizados no pré-natal e, em caso de resultado positivo já iniciar o tratamento assim que possível?",
            options: [
              "Interromper a evolução da infecção, evitando uma nova infecção na gestante e a possibilidade de transmissão dessa para o bebê.",
              "Apenas manter sua saúde em dia;",
              "Não há necessidade do parceiro da gestante realizar exames de triagem para HIV e Sífilis durante o pré-natal.",
            ],
            answer: 0,
            feedbacks: [
              "Realizando os testes de triagem para HIV e Sífilis no pré-natal o parceiro pode identificar precocemente uma possível infecção e iniciar o tratamento em tempo oportuno, bloqueando assim a cadeia de transmissão.",
              "O parceiro ao realizar os exames de triagem para HIV e Sífilis no pré-natal contribui não só para sua saúde e de sua família, como contribui para as estratégias de prevenção, monitormanto e redução do impacto das doenças transmissíveis na população.",
              "O Guia do Pré-natal do Parceiro recomendado pelo Ministério da Saúde sugere que o parceiro realize exames de triagem para HIV e Sífilis, além de exames de triagem para Hepatite B e C.",
            ],
          },
          {
            title: "A sífilis tem cura? Se Sim, como o tratamento é realizado?",
            options: [
              "A sífilis tem cura e o tratamento é realizado com injeção de benzetacil, de maneira que a dosagem do medicamento depende da fase da infecção;",
              "A sífilis tem cura e o tratamento da sífilis é realizado com benzetacil, antibiótico via oral (comprimido), o qual deve ser tomado 2 vezes ao dia durante 7 dias;",
              "Não existe tratamento para a sífilis.",
            ],
            answer: 0,
            feedbacks: [
              "O tratamento da sífilis é realizado com injeção intramuscular de Benzetacil e a quantidade de doses do medicamento depende do estágio da infecção.",
              "O tratamento da sífilis é realizado com injeção intramuscular de benzetacil e não via oral (comprimido).",
              "A sífilis tem cura e existe tratamento para resolvê-la com antibiótico.",
            ],
          },
          {
            title:
              "Após o tratamento da sífilis, como é feito o acompanhamento da melhora e cura da paciente?",
            options: [
              "Recomenda-se realizar exames de sangue para pesquisa de anticorpos contra o Treponema pallidum a cada 3 meses até o parto. Após o parto, o seguimento do tratamento continua trimestral até o 12º mês de acompanhamento;",
              "Recomenda-se realizar exames de sangue para pesquisa de anticorpos contra o Treponema pallidum mensalmente até o parto. Após o parto, o seguimento do tratamento é trimestral até o 12º mês de acompanhamento;",
              "Recomenda-se realizar exames de sangue para pesquisa de anticorpos contra o Treponema pallidum mensalmente até o parto. Após o parto não é necessário o seguimento do tratamento.",
            ],
            answer: 1,
            feedbacks: [
              "Para acompanhamento da melhora e cura do paciente recomenda-se realizar exames de sangue para pesquisa de anticorpos contra o Treponema pallidum (acompanhamento sorológico com teste VDRL) mensalmente até o parto. Após o parto, o seguimento do tratamento é trimestral até o 12º mês de acompanhamento (3, 6, 9, 12 meses). Se título baixo e estável em duas oportunidades, após um ano, o paciente pode receber alta.",
              "Recomenda-se realizar exames de sangue para pesquisa de anticorpos contra o Treponema pallidum a cada 1 meses até o parto. Após o parto, o seguimento do tratamento continua trimestral até o 12º mês de acompanhamento (3, 6, 9, 12 meses).",
              "Recomenda-se realizar exames de sangue para pesquisa de anticorpos contra o Treponema pallidum a cada 1 meses até o parto. Após o parto, o seguimento do tratamento continua trimestral até o 12º mês de acompanhamento (3, 6, 9, 12 meses).",
            ],
          },
          {
            title:
              "Alguns pacientes podem apresentar testes persistentemente reagentes, em baixas dosagens de anticorpos, após o tratamento, é o que chamamos de:",
            options: [
              "Memória sorológica;",
              "Cicatriz sorológica;",
              "Rastro sorológico.",
            ],
            answer: 1,
            feedbacks: [
              "O termo correto para casos mencionados no enunciado é Cicatriz Sorológica.",
              "Esse é o termo correto para situação em que o paciente apresenta testes reagentes persistentemente, em baixas dosagens de anticorpos, após realizarem o tratamento contra sífilis.",
              "O termo correto para casos mencionados no enunciado é Cicatriz Sorológica.",
            ],
          },
          {
            title:
              "O indivíduo pode adquirir sífilis sempre que se expor ao Treponema pallidum (bactéria causadora da sífilis). Essa afirmação é:",
            options: ["Verdadeira;", "Falsa."],
            answer: 0,
            feedbacks: [
              "Apesar de ser uma doença tratável e curável, a Sífilis não gera imunidade. Portanto, a pessoa pode se reinfectar caso tenha novamente relações sexuais desprotegidas com pessoa infectada.",
              "A afirmação do enunciado é verdadeira. Como a doença não gera imunidade, a pessoa pode se reinfectar caso tenha relações sexuais desprotegidas com pessoa infectada.",
            ],
          },
        ],
      },
      {
        id: "6",
        title:
          "Teste seus Conhecimentos - Amamentação, Trabalho de Parto e Parto",
        type: 1,
        video: "U3ZB_TZtR5I",
        list: [
          {
            title:
              "Qual das alternativas abaixo apresenta uma informação incorreta em relação aos benefícios da amamentação para o bebê?",
            options: [
              "O leite materno tem a vantagem de ser um alimento completo, que contém todos os nutrientes de que o bebê precisa, além de anticorpos que combatem doenças, funcionando como uma vacina natural;",
              "A amamentação não contribui  para o desenvolvimento motor oral e da arcada dentária do bebê;",
              "A amamentação além de ser um ato de nutrir é também uma forma de se construir vínculo entre você e seu filho através do contato com sua pele, seu cheiro e seu aconchego.",
            ],
            answer: 1,
            feedbacks: [
              "O leite materno é sim um alimento completo para o bebê e através dele a mãe transfere anticorpos do seu sistema imunológico para a criança, o que contribui para a prevenção de várias doenças contagiosas.",
              "A amamentação colabora sim para o desenvolvimento dos músculos necessários para o bebê sugar e estimula e fortalece a arcada dentária.",
              "A amamentação além de nutrir o bebê contribui para estreitar os laços entre a mãe e o bebê e fortalecer o vínculo dos dois.",
            ],
          },
          {
            title: "Por que o aleitamento materno é importante para a mulher?",
            options: [
              "Dar o peito não ajuda a mãe emagrecer;",
              "Protege a mulher contra alguns tipos de câncer, como o de mama e o de ovário;",
              "A amamentação não protege a mulher contra a osteoporose.",
            ],
            answer: 1,
            feedbacks: [
              "A amamentação acelera a perda de peso da mulher.",
              "A amamentação reduz a incidência de câncer de mama, ovário e endométrio na mulher.",
              "O ato de amamentar evita a osteoporose.",
            ],
          },
          {
            title:
              "De acordo com a organização Mundial da Saúde (OMS) e o Ministério da Saúde é recomendado:",
            options: [
              "Amamentação exclusiva até os 6 meses de vida e a manutenção do leite materno na alimentação da criança até 2 anos de idade ou mais;",
              "Amamentação exclusiva até os 4 meses de vida e a manutenção do leite materno na alimentação da criança até 2 anos de idade ou mais;",
              "Amamentação exclusiva até os 3 meses de vida.",
            ],
            answer: 0,
            feedbacks: [
              "A Organização Mundial da Saúde (OMS) e Ministério da Saúde recomendam que os bebês sejam alimentados exclusivamente com leite materno até os 6 meses de idade e que, mesmo após a introdução dos primeiros alimentos sólidos, sigam sendo amamentados até, pelo menos, os 2 anos de idade.",
              "A Organização Mundial da Saúde (OMS) e Ministério da Saúde recomendam que os bebês sejam alimentados exclusivamente com leite materno até os 6 meses de idade e que, mesmo após a introdução dos primeiros alimentos sólidos, sigam sendo amamentados até, pelo menos, os 2 anos de idade.",
              "A Organização Mundial da Saúde (OMS) e Ministério da Saúde recomendam que os bebês sejam alimentados exclusivamente com leite materno até os 6 meses de idade e que, mesmo após a introdução dos primeiros alimentos sólidos, sigam sendo amamentados até, pelo menos, os 2 anos de idade.",
            ],
          },
          {
            title:
              "Qual das alternativas abaixo  é incorreta em relação às recomendações da boa pega do recém-nascido ao seio materno?",
            options: [
              "Quando o bebê pega corretamente a mama fica com boca  bem aberta ( boca de peixinho), com os lábios virados para fora, bochechas arredondadas, queixo encostando no peito e nariz livre;",
              "Quando o bebê pega o peito direitinho, o bebê não emite ruído ao mamar e a mãe não sente dor;",
              "Os bicos artificiais como chupetas, mamadeira não atrapalham o processo de amamentação",
            ],
            answer: 2,
            feedbacks: [
              "Essa afirmação está correta.",
              "Essa afirmação está correta.",
              "Essa afirmação está incorreta, pois o uso de bicos artificiais gera confusão na forma de sugar e pode dificultar a pega no mamilo, diminuindo a busca pelo seio materno, a estimulação do mamilo e consequentemente a produção de leite.",
            ],
          },
          {
            title:
              "Julgue a afirmação à seguir em verdadeiro ou falso: “ O trabalho de parto é caracterizado por contrações de um minuto, a cada cinco minutos; perda de líquido amniótico e eliminação do tampão mucoso.”",
            options: ["Verdadeira;", "Falsa."],
            answer: 0,
            feedbacks: [
              "Essa afirmação é verdadeira. Conforme o trabalho de parto avança, as contrações ficam mais frequentes (2 a 3 contrações em 10 minutos) e duram em torno de 60 segundos. Além disso, ocorre a perda de água pela vagina que indica a perda de líquido amniótico e a perda de um tampão mucoso (substância mucosa com alguns filetes de sangue) pela vagina.",
              "Essa afirmação é verdadeira.",
            ],
          },
          {
            title:
              "Julgue a afirmação à seguir em verdadeiro ou falso: “Mesmo tendo realizado testes rápidos para HIV e Sífilis durante o pré-natal,  a gestante deve realizar novamente os testes rápidos na maternidade”.",
            options: ["Verdadeira;", "Falsa."],
            answer: 0,
            feedbacks: [
              "Essa afirmação é verdadeira. Toda mulher admitida para parto ou curetagem por abortamento, bem como toda gestante hospitalizada por qualquer intercorrência durante a gravidez, deve realizar Teste de triagem para diagnóstico precoce da Sífilis e iniciar imediatamente o tratamento da puérpera e seu parceiro.",
              "Essa afirmação é verdadeira.",
            ],
          },
        ],
      },
      {
        id: "7",
        title: "Teste seus Conhecimentos - Jogo Imagem Palavra",
        type: 2,
        list: [
          {
            title: "Qual palavra abaixo corresponde a essa imagem?",
            image: "image_7.png",
            options: ["Pré-natal", "Preventivo", "Trabalho de parto"],
            answer: 0,
          },
          {
            title: "Qual palavra abaixo corresponde a essa imagem?",
            image: "image_8.png",
            options: ["Teste rápido", "Vacinação", "Coleta de sangue"],
            answer: 1,
          },
          {
            title: "Qual palavra abaixo corresponde a essa imagem?",
            image: "image_9.png",
            options: [
              "Alimento rico em vitamina D",
              "Alimento rico em vitamina C",
              "Alimento rico em Ferro",
            ],
            answer: 2,
          },
          {
            title: "Qual palavra abaixo corresponde a essa imagem?",
            image: "image_10.png",
            options: ["Raio X", "Ultrassom", "Ressonância"],
            answer: 1,
          },
          {
            title: "Qual palavra abaixo corresponde a essa imagem?",
            image: "image_11.png",
            options: [
              "Anticoncepcional",
              "Dispositivo Intra- Uterino (DIU)",
              "Preservativo",
            ],
            answer: 2,
          },
          {
            title: "Qual palavra abaixo corresponde a essa imagem?",
            image: "image_12.png",
            options: ["Teste rápido", "Pré-natal", "Vacinação"],
            answer: 0,
          },
        ],
      },
      {
        id: "8",
        title: "Teste seus Conhecimentos - Verdadeiro ou Falso",
        type: 3,
        list: [
          {
            title:
              "Os testes rápidos de HIV e Sífilis são exames de triagem realizado durante o pré-natal e na maternidade, no momento da admissão para o parto. Consiste em uma furadinha leve no dedo, para a coleta de uma gotinha de sangue e dentro de cerca de no máximo 30 minutos já adianta para o profissional e para a gestante a possibilidade dela ser ou não portadora de HIV ou sífilis.",
            options: ["Verdadeiro", "Falso"],
            answer: 0,
          },
          {
            title:
              "A vitamina C é um nutriente que evita anemia na gravidez e está presente em alimentos como: carnes vermelhas,  aves e peixes, verduras escuras, leguminosas (como lentilha, grão-de-bico, ervilha e feijões).",
            options: ["Verdadeiro", "Falso"],
            answer: 1,
          },
          {
            title:
              "A sífilis é uma Infecção Sexualmente Transmissível causada por uma bactéria chamada Treponema pallidum e caracterizada inicialmente por feridas que não doem, não coçam e não ardem, localizadas no pênis, vagina, ânus, ou na pele, língua ou lábio.",
            options: ["Verdadeiro", "Falso"],
            answer: 0,
          },
          {
            title:
              "O tampão mucoso é um corrimento eliminado pela gestante nos dias que antecedem o parto, anunciando trabalho de parto.",
            options: ["Verdadeiro", "Falso"],
            answer: 0,
          },
          {
            title:
              "Qual das alternativas abaixo  é incorreta em relação às recomendações da boa pega do recém-nascido ao seio materno?",
            options: ["Verdadeiro", "Falso"],
            answer: 0,
          },
          {
            title:
              "As contrações ocorrem durante o trabalho de parto, inicialmente a cada 5 minutos e se tornam menos fortes e regulares.",
            options: ["Verdadeiro", "Falso"],
            answer: 1,
          },
          {
            title:
              "Amamentação é o ato de nutrir o bebê com seu próprio leite e também uma forma de se construir vínculo entre você e seu filho através do contato com sua pele, seu cheiro e seu aconchego.",
            options: ["Verdadeiro", "Falso"],
            answer: 0,
          },
        ],
      },
    ],
  },
  getters: {
    getGames: (state) => {
      return state.games;
    },
    getGameById: (state) => (id) => {
      return state.games.find((game) => game.id === id);
    },
    getGameByTitle: (state) => (title) => {
      return state.games.find((game) => game.title === title);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
