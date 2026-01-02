// Brazilian cities organized by state
export interface City {
  value: string;
  label: string;
  state: string;
}

export const brazilianStates = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
] as const;

// Major cities per state (principais cidades)
export const brazilianCities: City[] = [
  // Acre
  { value: 'rio-branco-ac', label: 'Rio Branco', state: 'AC' },
  { value: 'cruzeiro-do-sul-ac', label: 'Cruzeiro do Sul', state: 'AC' },
  
  // Alagoas
  { value: 'maceio-al', label: 'Maceió', state: 'AL' },
  { value: 'arapiraca-al', label: 'Arapiraca', state: 'AL' },
  
  // Amapá
  { value: 'macapa-ap', label: 'Macapá', state: 'AP' },
  { value: 'santana-ap', label: 'Santana', state: 'AP' },
  
  // Amazonas
  { value: 'manaus-am', label: 'Manaus', state: 'AM' },
  { value: 'parintins-am', label: 'Parintins', state: 'AM' },
  
  // Bahia
  { value: 'salvador-ba', label: 'Salvador', state: 'BA' },
  { value: 'feira-de-santana-ba', label: 'Feira de Santana', state: 'BA' },
  { value: 'vitoria-da-conquista-ba', label: 'Vitória da Conquista', state: 'BA' },
  { value: 'camaçari-ba', label: 'Camaçari', state: 'BA' },
  { value: 'itabuna-ba', label: 'Itabuna', state: 'BA' },
  
  // Ceará
  { value: 'fortaleza-ce', label: 'Fortaleza', state: 'CE' },
  { value: 'caucaia-ce', label: 'Caucaia', state: 'CE' },
  { value: 'juazeiro-do-norte-ce', label: 'Juazeiro do Norte', state: 'CE' },
  { value: 'maracanau-ce', label: 'Maracanaú', state: 'CE' },
  { value: 'sobral-ce', label: 'Sobral', state: 'CE' },
  
  // Distrito Federal
  { value: 'brasilia-df', label: 'Brasília', state: 'DF' },
  
  // Espírito Santo
  { value: 'vitoria-es', label: 'Vitória', state: 'ES' },
  { value: 'vila-velha-es', label: 'Vila Velha', state: 'ES' },
  { value: 'serra-es', label: 'Serra', state: 'ES' },
  { value: 'cariacica-es', label: 'Cariacica', state: 'ES' },
  
  // Goiás
  { value: 'goiania-go', label: 'Goiânia', state: 'GO' },
  { value: 'aparecida-de-goiania-go', label: 'Aparecida de Goiânia', state: 'GO' },
  { value: 'anapolis-go', label: 'Anápolis', state: 'GO' },
  { value: 'rio-verde-go', label: 'Rio Verde', state: 'GO' },
  
  // Maranhão
  { value: 'sao-luis-ma', label: 'São Luís', state: 'MA' },
  { value: 'imperatriz-ma', label: 'Imperatriz', state: 'MA' },
  { value: 'caxias-ma', label: 'Caxias', state: 'MA' },
  
  // Mato Grosso
  { value: 'cuiaba-mt', label: 'Cuiabá', state: 'MT' },
  { value: 'varzea-grande-mt', label: 'Várzea Grande', state: 'MT' },
  { value: 'rondonopolis-mt', label: 'Rondonópolis', state: 'MT' },
  { value: 'sinop-mt', label: 'Sinop', state: 'MT' },
  
  // Mato Grosso do Sul
  { value: 'campo-grande-ms', label: 'Campo Grande', state: 'MS' },
  { value: 'dourados-ms', label: 'Dourados', state: 'MS' },
  { value: 'tres-lagoas-ms', label: 'Três Lagoas', state: 'MS' },
  
  // Minas Gerais
  { value: 'belo-horizonte-mg', label: 'Belo Horizonte', state: 'MG' },
  { value: 'uberlandia-mg', label: 'Uberlândia', state: 'MG' },
  { value: 'contagem-mg', label: 'Contagem', state: 'MG' },
  { value: 'juiz-de-fora-mg', label: 'Juiz de Fora', state: 'MG' },
  { value: 'betim-mg', label: 'Betim', state: 'MG' },
  { value: 'montes-claros-mg', label: 'Montes Claros', state: 'MG' },
  { value: 'ribeirao-das-neves-mg', label: 'Ribeirão das Neves', state: 'MG' },
  { value: 'uberaba-mg', label: 'Uberaba', state: 'MG' },
  { value: 'governador-valadares-mg', label: 'Governador Valadares', state: 'MG' },
  { value: 'ipatinga-mg', label: 'Ipatinga', state: 'MG' },
  
  // Pará
  { value: 'belem-pa', label: 'Belém', state: 'PA' },
  { value: 'ananindeua-pa', label: 'Ananindeua', state: 'PA' },
  { value: 'santarem-pa', label: 'Santarém', state: 'PA' },
  { value: 'maraba-pa', label: 'Marabá', state: 'PA' },
  
  // Paraíba
  { value: 'joao-pessoa-pb', label: 'João Pessoa', state: 'PB' },
  { value: 'campina-grande-pb', label: 'Campina Grande', state: 'PB' },
  { value: 'santa-rita-pb', label: 'Santa Rita', state: 'PB' },
  
  // Paraná
  { value: 'curitiba-pr', label: 'Curitiba', state: 'PR' },
  { value: 'londrina-pr', label: 'Londrina', state: 'PR' },
  { value: 'maringa-pr', label: 'Maringá', state: 'PR' },
  { value: 'ponta-grossa-pr', label: 'Ponta Grossa', state: 'PR' },
  { value: 'cascavel-pr', label: 'Cascavel', state: 'PR' },
  { value: 'sao-jose-dos-pinhais-pr', label: 'São José dos Pinhais', state: 'PR' },
  { value: 'foz-do-iguacu-pr', label: 'Foz do Iguaçu', state: 'PR' },
  { value: 'colombo-pr', label: 'Colombo', state: 'PR' },
  { value: 'guarapuava-pr', label: 'Guarapuava', state: 'PR' },
  { value: 'paranagua-pr', label: 'Paranaguá', state: 'PR' },
  { value: 'pirai-do-sul-pr', label: 'Piraí do Sul', state: 'PR' },
  { value: 'castro-pr', label: 'Castro', state: 'PR' },
  { value: 'ponta-grossa-pr', label: 'Ponta Grossa', state: 'PR' },
  
  // Pernambuco
  { value: 'recife-pe', label: 'Recife', state: 'PE' },
  { value: 'jaboatao-dos-guararapes-pe', label: 'Jaboatão dos Guararapes', state: 'PE' },
  { value: 'olinda-pe', label: 'Olinda', state: 'PE' },
  { value: 'caruaru-pe', label: 'Caruaru', state: 'PE' },
  { value: 'petrolina-pe', label: 'Petrolina', state: 'PE' },
  
  // Piauí
  { value: 'teresina-pi', label: 'Teresina', state: 'PI' },
  { value: 'parnaiba-pi', label: 'Parnaíba', state: 'PI' },
  
  // Rio de Janeiro
  { value: 'rio-de-janeiro-rj', label: 'Rio de Janeiro', state: 'RJ' },
  { value: 'sao-goncalo-rj', label: 'São Gonçalo', state: 'RJ' },
  { value: 'duque-de-caxias-rj', label: 'Duque de Caxias', state: 'RJ' },
  { value: 'nova-iguacu-rj', label: 'Nova Iguaçu', state: 'RJ' },
  { value: 'niteroi-rj', label: 'Niterói', state: 'RJ' },
  { value: 'campos-dos-goytacazes-rj', label: 'Campos dos Goytacazes', state: 'RJ' },
  { value: 'petropolis-rj', label: 'Petrópolis', state: 'RJ' },
  { value: 'volta-redonda-rj', label: 'Volta Redonda', state: 'RJ' },
  
  // Rio Grande do Norte
  { value: 'natal-rn', label: 'Natal', state: 'RN' },
  { value: 'mossoro-rn', label: 'Mossoró', state: 'RN' },
  { value: 'parnamirim-rn', label: 'Parnamirim', state: 'RN' },
  
  // Rio Grande do Sul
  { value: 'porto-alegre-rs', label: 'Porto Alegre', state: 'RS' },
  { value: 'caxias-do-sul-rs', label: 'Caxias do Sul', state: 'RS' },
  { value: 'pelotas-rs', label: 'Pelotas', state: 'RS' },
  { value: 'canoas-rs', label: 'Canoas', state: 'RS' },
  { value: 'santa-maria-rs', label: 'Santa Maria', state: 'RS' },
  { value: 'gravataí-rs', label: 'Gravataí', state: 'RS' },
  { value: 'viamao-rs', label: 'Viamão', state: 'RS' },
  { value: 'novo-hamburgo-rs', label: 'Novo Hamburgo', state: 'RS' },
  
  // Rondônia
  { value: 'porto-velho-ro', label: 'Porto Velho', state: 'RO' },
  { value: 'ji-parana-ro', label: 'Ji-Paraná', state: 'RO' },
  
  // Roraima
  { value: 'boa-vista-rr', label: 'Boa Vista', state: 'RR' },
  
  // Santa Catarina
  { value: 'joinville-sc', label: 'Joinville', state: 'SC' },
  { value: 'florianopolis-sc', label: 'Florianópolis', state: 'SC' },
  { value: 'blumenau-sc', label: 'Blumenau', state: 'SC' },
  { value: 'sao-jose-sc', label: 'São José', state: 'SC' },
  { value: 'chapeco-sc', label: 'Chapecó', state: 'SC' },
  { value: 'criciuma-sc', label: 'Criciúma', state: 'SC' },
  { value: 'itajai-sc', label: 'Itajaí', state: 'SC' },
  { value: 'jaragua-do-sul-sc', label: 'Jaraguá do Sul', state: 'SC' },
  
  // São Paulo
  { value: 'sao-paulo-sp', label: 'São Paulo', state: 'SP' },
  { value: 'guarulhos-sp', label: 'Guarulhos', state: 'SP' },
  { value: 'campinas-sp', label: 'Campinas', state: 'SP' },
  { value: 'sao-bernardo-do-campo-sp', label: 'São Bernardo do Campo', state: 'SP' },
  { value: 'santo-andre-sp', label: 'Santo André', state: 'SP' },
  { value: 'ribeirao-preto-sp', label: 'Ribeirão Preto', state: 'SP' },
  { value: 'osasco-sp', label: 'Osasco', state: 'SP' },
  { value: 'sorocaba-sp', label: 'Sorocaba', state: 'SP' },
  { value: 'maua-sp', label: 'Mauá', state: 'SP' },
  { value: 'sao-jose-dos-campos-sp', label: 'São José dos Campos', state: 'SP' },
  { value: 'santos-sp', label: 'Santos', state: 'SP' },
  { value: 'mogi-das-cruzes-sp', label: 'Mogi das Cruzes', state: 'SP' },
  { value: 'diadema-sp', label: 'Diadema', state: 'SP' },
  { value: 'jundiaí-sp', label: 'Jundiaí', state: 'SP' },
  { value: 'piracicaba-sp', label: 'Piracicaba', state: 'SP' },
  { value: 'bauru-sp', label: 'Bauru', state: 'SP' },
  { value: 'sao-vicente-sp', label: 'São Vicente', state: 'SP' },
  { value: 'carapicuiba-sp', label: 'Carapicuíba', state: 'SP' },
  
  // Sergipe
  { value: 'aracaju-se', label: 'Aracaju', state: 'SE' },
  { value: 'nossa-senhora-do-socorro-se', label: 'Nossa Senhora do Socorro', state: 'SE' },
  
  // Tocantins
  { value: 'palmas-to', label: 'Palmas', state: 'TO' },
  { value: 'araguaina-to', label: 'Araguaína', state: 'TO' },
];

// Get cities by state
export const getCitiesByState = (stateCode: string): City[] => {
  return brazilianCities.filter(city => city.state === stateCode);
};

// Get all cities with state label
export const getCitiesWithStateLabel = (): { value: string; label: string }[] => {
  return brazilianCities.map(city => ({
    value: city.value,
    label: `${city.label} - ${city.state}`,
  }));
};
