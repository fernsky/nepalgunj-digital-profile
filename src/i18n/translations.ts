export type Lang = "ne" | "en";
export const defaultLang: Lang = "ne";

export interface ChapterSection {
  id: string;
  slug: string;
  title: Record<Lang, string>;
  children?: ChapterSection[];
}

export interface Chapter {
  num: number;
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  sections: ChapterSection[];
}

export interface AnnexItem {
  id: string;
  slug: string;
  title: Record<Lang, string>;
}

export const ui: Record<Lang, Record<string, string>> = {
  ne: {
    "site.title": "नेपालगंज उप-महानगरपालिका",
    "site.name": "नेपालगंज",
    "site.subtitle": "उप-महानगरपालिका",
    "nav.home": "गृहपृष्ठ",
    "nav.chapters": "परिच्छेदहरू",
    "nav.viewFullChapter": "पूरा परिच्छेद हेर्नुहोस्",
    "nav.annexes": "अनुसूचीहरू",
    "hero.title": "नेपालगंज उप-महानगरपालिकाको वस्तुस्थिति विवरण",
    "hero.subtitle": "डिजिटल प्रोफाइल",
    "hero.description": "नेपालगंज उप-महानगरपालिकाको विस्तृत वस्तुस्थिति विवरण - भौगोलिक, जनसांख्यिक, आर्थिक, सामाजिक, र भौतिक पूर्वाधार सम्बन्धी तथ्याङ्क र विश्लेषण।",
    "hero.exploreChapters": "परिच्छेदहरू हेर्नुहोस्",
    "chapter.label": "परिच्छेद",
  },
  en: {
    "site.title": "Nepalgunj Sub-Metropolitan City",
    "site.name": "Nepalgunj",
    "site.subtitle": "Sub-Metropolitan City",
    "nav.home": "Home",
    "nav.chapters": "Chapters",
    "nav.viewFullChapter": "View Full Chapter",
    "nav.annexes": "Annexes",
    "hero.title": "Digital Profile of Nepalgunj Sub-Metropolitan City",
    "hero.subtitle": "Digital Profile",
    "hero.description": "Comprehensive situational analysis of Nepalgunj Sub-Metropolitan City — geographical, demographic, economic, social, and physical infrastructure data and analysis.",
    "hero.exploreChapters": "Explore Chapters",
    "chapter.label": "Chapter",
  },
};

export const chapters: Chapter[] = [
  {
    num: 1, slug: "chapter-1",
    title: { ne: "परिचय", en: "Introduction" },
    description: { ne: "पृष्ठभूमि, उद्देश्य, र कानूनी तथा नीतिगत आधारहरू", en: "Background, objectives, and legal framework of the municipality" },
    sections: [
      { id: "1-1", slug: "background", title: { ne: "पृष्ठभूमि", en: "Background" } },
      { id: "1-2", slug: "objectives", title: { ne: "उद्देश्य", en: "Objectives" } },
      { id: "1-3", slug: "legal-framework", title: { ne: "कानूनी तथा नीतिगत आधारहरू", en: "Legal and Policy Framework" } },
      { id: "1-4", slug: "preparation-stages", title: { ne: "तयारीका चरणहरू", en: "Preparation Stages" }, children: [
        { id: "1-4-1", slug: "template-preparation", title: { ne: "वस्तुस्थिति विवरण ढाँचा, औजार तथा कार्यविधि तयारी", en: "Profile Format, Tools and Procedure Preparation" } },
        { id: "1-4-2", slug: "preparation-workshop", title: { ne: "वस्तुस्थिति विवरण तयारी कार्यशाला", en: "Profile Preparation Workshop" } },
        { id: "1-4-3", slug: "data-collection", title: { ne: "तथ्याङ्ग संकलन", en: "Data Collection" } },
        { id: "1-4-4", slug: "data-analysis", title: { ne: "तथ्याङ्ग प्रशोधन तथा विश्लेषण र स्रोत नक्शा तयारी", en: "Data Processing, Analysis and Resource Mapping" } },
        { id: "1-4-5", slug: "draft-preparation", title: { ne: "वस्तुस्थिति विवरणको मस्यौदा तयारी", en: "Draft Profile Preparation" } },
        { id: "1-4-6", slug: "feedback-collection", title: { ne: "वस्तुस्थिति विवरण सुभाव संकलन", en: "Feedback Collection" } },
        { id: "1-4-7", slug: "final-report", title: { ne: "उप-महानगरपालिकाको वस्तुस्थिति विवरणको अन्तिम प्रतिवेदन तयारी", en: "Final Report Preparation" } },
      ]},
      { id: "1-5", slug: "scope", title: { ne: "वस्तुस्थिति विवरणको सीमा", en: "Scope of Profile" } },
    ],
  },
  {
    num: 2, slug: "chapter-2",
    title: { ne: "उप-महानगरपालिकाको चिनारी", en: "Municipal Identity" },
    description: { ne: "भौगोलिक अवस्थिति, ऐतिहासिक पृष्ठभूमि, र प्राकृतिक सम्पदा", en: "Geographical location, historical background, and natural resources" },
    sections: [
      { id: "2-1", slug: "geographical-location", title: { ne: "भौगोलिक अवस्थिति", en: "Geographical Location" } },
      { id: "2-2", slug: "historical-background", title: { ne: "ऐतिहासिक पृष्ठभूमि तथा नामाकरण", en: "Historical Background and Naming" } },
      { id: "2-3", slug: "political-administrative", title: { ne: "राजनीतिक र प्रशासनिक संरचना", en: "Political and Administrative Structure" } },
      { id: "2-4", slug: "terrain", title: { ne: "धरातलीय अवस्था", en: "Terrain" } },
      { id: "2-5", slug: "natural-resources", title: { ne: "प्राकृतिक सम्पदा", en: "Natural Resources" } },
      { id: "2-6", slug: "cultural-excellence", title: { ne: "साँस्कृतिक उत्कृष्टता", en: "Cultural Excellence" } },
      { id: "2-7", slug: "development-possibilities", title: { ne: "विकासका मुख्य सम्भावनाहरू", en: "Key Development Possibilities" } },
      { id: "2-8", slug: "household-production", title: { ne: "गार्हस्थ उत्पादन", en: "Household Production" } },
      { id: "2-9", slug: "human-development-index", title: { ne: "मानव विकास सुचकाङ्क", en: "Human Development Index" } },
    ],
  },
  {
    num: 3, slug: "chapter-3",
    title: { ne: "पारिवारिक तथा जनसांख्यिक विवरण", en: "Family and Demographic Profile" },
    description: { ne: "जनसंख्या वितरण, जातजाति, पेशा, र सामाजिक सुरक्षा", en: "Population distribution, ethnicity, occupation, and social security" },
    sections: [
      { id: "3-1", slug: "settlement-household", title: { ne: "मुख्य बस्ती र घरपरिवारको विवरण", en: "Main Settlement and Household Description" }, children: [
        { id: "3-1-1", slug: "main-settlement", title: { ne: "मुख्य बस्ती", en: "Main Settlement" } },
        { id: "3-1-2", slug: "household-description", title: { ne: "घरपरिवारको विवरण", en: "Household Description" } },
      ]},
      { id: "3-2", slug: "population-distribution", title: { ne: "जनसंख्या वितरणको अवस्था", en: "Population Distribution Status" } },
      { id: "3-3", slug: "population-age-gender", title: { ne: "उमेर समूह तथा लिङ्ग अनुसार जनसंख्याको विवरण", en: "Population by Age Group and Gender" } },
      { id: "3-4", slug: "population-mother-tongue", title: { ne: "मातृभाषाको आधारमा जनसंख्याको विवरण", en: "Population by Mother Tongue" } },
      { id: "3-5", slug: "population-religion", title: { ne: "धर्म अनुसार जनसंख्याको विवरण", en: "Population by Religion" } },
      { id: "3-6", slug: "population-caste-ethnicity", title: { ne: "जातजातीको आधारमा जनसंख्याको विवरण", en: "Population by Caste/Ethnicity" } },
      { id: "3-7", slug: "household-head", title: { ne: "घरमुलीको विवरण", en: "Household Head Description" } },
      { id: "3-8", slug: "population-occupation", title: { ne: "पेशाको आधारमा जनसंख्याको विवरण", en: "Population by Occupation" } },
      { id: "3-9", slug: "economically-active", title: { ne: "आर्थिक रुपले सक्रिय जनसंख्याको विवरण", en: "Economically Active Population" } },
      { id: "3-10", slug: "population-profession", title: { ne: "पेशाको आधारमा जनसंख्याको विवरण", en: "Population by Profession" } },
      { id: "3-11", slug: "population-disability", title: { ne: "अपाङ्गताका आधारमा जनसंख्याको विवरण", en: "Population by Disability" } },
      { id: "3-12", slug: "migration", title: { ne: "बसाइँसराई सम्बन्धी विवरण", en: "Migration Related Description" } },
      { id: "3-13", slug: "personal-incidents", title: { ne: "व्यक्तिगत घटना सम्बन्धी विवरण", en: "Personal Incident Related Description" } },
      { id: "3-14", slug: "social-security", title: { ne: "सामाजिक सुरक्षा", en: "Social Security" } },
    ],
  },
  {
    num: 4, slug: "chapter-4",
    title: { ne: "आर्थिक अवस्था", en: "Economic Status" },
    description: { ne: "आर्थिक विवरण, भू-उपयोग, कृषि, पर्यटन, र उद्योग व्यापार", en: "Economic description, land use, agriculture, tourism, and industry" },
    sections: [
      { id: "4-1", slug: "major-economic", title: { ne: "प्रमुख आर्थिक विवरण", en: "Major Economic Description" }, children: [
        { id: "4-1-1", slug: "industrial-sector-population", title: { ne: "आर्थिक कामको औद्योगिक क्षेत्र वर्गीकरण अनुसारको जनसंख्या", en: "Population by Economic and Industrial Sector" } },
        { id: "4-1-2", slug: "housing-structure", title: { ne: "आवास संरचना विवरण", en: "Housing Structure Description" } },
        { id: "4-1-3", slug: "import-export", title: { ne: "आयात तथा निर्यातको अवस्था", en: "Import Export Status" } },
        { id: "4-1-4", slug: "raw-material-production", title: { ne: "औद्योगिक कच्चा पदार्थ उत्पादनको अवस्था", en: "Industrial Raw Material Production" } },
        { id: "4-1-5", slug: "foreign-employment", title: { ne: "वैदेशिक रोजगारीमा गएकाहरूको विवरण", en: "Foreign Employment Description" } },
        { id: "4-1-6", slug: "sukumbasi", title: { ne: "सुकुम्बासी सम्बन्धी विवरण", en: "Sukumbasi Related Description" } },
      ]},
      { id: "4-2", slug: "land-use-ownership", title: { ne: "भू-उपयोग तथा स्वामित्व", en: "Land Use and Ownership" }, children: [
        { id: "4-2-1", slug: "land-use-distribution", title: { ne: "भू-उपयोगको वितरण", en: "Land Use Distribution" } },
        { id: "4-2-2", slug: "cultivable-land", title: { ne: "खेतीयोग्य जमिन सम्बन्धी विवरण", en: "Cultivable Land Description" } },
        { id: "4-2-3", slug: "barren-land", title: { ne: "बाँझो जमिन सम्बन्धी विवरण", en: "Barren Land Description" } },
      ]},
      { id: "4-3", slug: "agriculture-animal-development", title: { ne: "कृषि तथा पशु विकास", en: "Agriculture and Animal Development" } },
      { id: "4-4", slug: "agricultural-family", title: { ne: "कृषिक परिवार संख्या, क्षेत्रफल, कित्ता संख्या तथा सिंचित क्षेत्रफल", en: "Agricultural Family, Area, Parcel and Irrigated Area" } },
      { id: "4-5", slug: "land-consumption", title: { ne: "जग्गाको उपभोग सम्बन्धी विवरण", en: "Land Consumption Description" } },
      { id: "4-6", slug: "agricultural-land-use", title: { ne: "कृषि जग्गाको उपयोग सम्बन्धी विवरण", en: "Agricultural Land Use Description" }, children: [
        { id: "4-6-1", slug: "food-crop-diseases", title: { ne: "खाद्यान्न बालीमा लाग्ने रोग तथा किरा", en: "Diseases and Pests in Food Crops" } },
        { id: "4-6-2", slug: "vegetable-fruit-diseases", title: { ne: "तरकारी तथा फलफूलमा लाग्ने रोग तथा किरा", en: "Diseases and Pests in Vegetables and Fruits" } },
        { id: "4-6-3", slug: "livestock-diseases", title: { ne: "पशुपक्षीमा लाग्ने रोग तथा किरा", en: "Diseases in Livestock" } },
        { id: "4-6-4", slug: "commercial-agriculture", title: { ne: "व्यवसायिक कृषि तथा पशुपालन कमहरूको विवरण", en: "Commercial Agriculture and Animal Husbandry" } },
        { id: "4-6-5", slug: "agriculture-groups", title: { ne: "कृषि तथा पशुपालनसँग सम्बन्धित समूह तथा सामुदायिक संस्थाको विवरण", en: "Agriculture and Animal Husbandry Groups" } },
        { id: "4-6-6", slug: "collection-chilling-center", title: { ne: "संकलन केन्द्र तथा चिस्यान केन्द्र", en: "Collection and Chilling Center" } },
      ]},
      { id: "4-7", slug: "tourism-development", title: { ne: "पर्यटन विकास", en: "Tourism Development" }, children: [
        { id: "4-7-1", slug: "religious-tourist-places", title: { ne: "धार्मिकस्थल तथा पर्यटकीय स्थलहरूको विवरण", en: "Religious and Tourist Places" } },
        { id: "4-7-2", slug: "hotel-resort-restaurant", title: { ne: "होटल, रिसोर्ट तथा रेष्ट्रुरेन्ट सम्बन्धी विवरण", en: "Hotel, Resort and Restaurant Description" } },
      ]},
      { id: "4-8", slug: "industry-trade-banking", title: { ne: "उद्योग व्यापार तथा बैंकिङ", en: "Industry, Trade and Banking" }, children: [
        { id: "4-8-1", slug: "industrial-development", title: { ne: "औद्योगिक विकास", en: "Industrial Development" } },
        { id: "4-8-2", slug: "trade-business", title: { ne: "व्यापार/व्यवसाय सम्बन्धी विवरण", en: "Trade/Business Description" } },
        { id: "4-8-3", slug: "local-market", title: { ne: "स्थानीय बजार तथा व्यापारिक केन्द्रहरूको विवरण", en: "Local Market and Commercial Centers" } },
        { id: "4-8-4", slug: "bank-financial", title: { ne: "बैंक तथा वित्तीय संस्था सम्बन्धी विवरण", en: "Bank and Financial Institution" } },
        { id: "4-8-5", slug: "cooperative-organizations", title: { ne: "सहकारी संस्थाहरूको विवरण", en: "Cooperative Organizations" } },
      ]},
    ],
  },
  {
    num: 5, slug: "chapter-5",
    title: { ne: "सामाजिक अवस्था", en: "Social Status" },
    description: { ne: "शैक्षिक, स्वास्थ्य, खानेपानी, कला संस्कृति, र शान्ति सुरक्षा", en: "Education, health, drinking water, art & culture, and peace & security" },
    sections: [
      { id: "5-1", slug: "educational-human-resource", title: { ne: "शैक्षिक तथा मानव संसाधन विकास", en: "Educational and Human Resource Development" }, children: [
        { id: "5-1-1", slug: "literacy", title: { ne: "पाँच वर्ष माथिको जनसंख्याको साक्षरता", en: "Literacy of Population Above Five Years" } },
        { id: "5-1-2", slug: "educational-institutions", title: { ne: "तहगत रुपमा शैक्षिक संस्था/विद्यालय र विद्यार्थी विवरण", en: "Educational Institutions and Students by Level" } },
        { id: "5-1-3", slug: "teachers-manpower", title: { ne: "शिक्षक तथा शैक्षिक जनशक्ति विवरण", en: "Teachers and Educational Manpower" } },
        { id: "5-1-4", slug: "ict-lab-schools", title: { ne: "उप-महानगरपालिकाको ICT Lab उपलब्ध भएका विद्यालयको विवरण", en: "Schools with ICT Lab" } },
        { id: "5-1-5", slug: "library-schools", title: { ne: "नमूना तथा पुस्तकालय सुविधा उपलब्ध भएका विद्यालयको विवरण", en: "Schools with Library Facilities" } },
        { id: "5-1-6", slug: "educational-quality", title: { ne: "शैक्षिक गुणस्तर सम्बन्धी विवरण", en: "Educational Quality" } },
        { id: "5-1-7", slug: "child-friendly-education", title: { ne: "वातमैत्री शिक्षा सम्बन्धी विवरण", en: "Child-Friendly Education" } },
      ]},
      { id: "5-2", slug: "health-nutrition", title: { ne: "स्वास्थ्य तथा पोषण", en: "Health and Nutrition" }, children: [
        { id: "5-2-1", slug: "health-institutions", title: { ne: "स्वास्थ्य संस्थाको विवरण", en: "Health Institutions" } },
        { id: "5-2-2", slug: "immunization-motherhood", title: { ne: "खोप सेवा तथा सुरक्षित मातृत्व सम्बन्धी विवरण", en: "Immunization and Safe Motherhood" } },
        { id: "5-2-3", slug: "child-health-malnutrition", title: { ne: "बालस्वास्थ्य तथा कुपोषणको अवस्था", en: "Child Health and Malnutrition" } },
        { id: "5-2-4", slug: "major-diseases-treatment", title: { ne: "प्रमुख रोग र उपचार सम्बन्धी विवरण", en: "Major Diseases and Treatment" } },
        { id: "5-2-5", slug: "safe-motherhood", title: { ne: "सुरक्षित मातृत्व", en: "Safe Motherhood" } },
        { id: "5-2-6", slug: "married-unmarried", title: { ne: "विवाहित तथा अविवाहित महिला तथा पुरुषको विवरण", en: "Married and Unmarried Description" } },
      ]},
      { id: "5-3", slug: "drinking-water-sanitation", title: { ne: "खानेपानी तथा सरसफाई", en: "Drinking Water and Sanitation" }, children: [
        { id: "5-3-1", slug: "water-source", title: { ne: "खानेपानीको श्रोतको विवरण", en: "Drinking Water Source" } },
        { id: "5-3-2", slug: "toilet-usage", title: { ne: "शौचालयको प्रयोगको अवस्था", en: "Toilet Usage Status" } },
        { id: "5-3-3", slug: "public-toilet", title: { ne: "सार्वजनिक शौचालयको विवरण", en: "Public Toilet" } },
        { id: "5-3-4", slug: "waste-management", title: { ne: "फोहोर व्यवस्थापन सम्बन्धी घरपरिवारको विवरण", en: "Waste Management Household" } },
        { id: "5-3-5", slug: "drainage-landfill", title: { ne: "ढल निकास तथा ल्याण्डफिल साइटको अवस्था", en: "Drainage and Landfill" } },
        { id: "5-3-6", slug: "houseless-environment", title: { ne: "घरपरिवारविहिन वातावलिकाको विवरण", en: "Houseless Environment" } },
      ]},
      { id: "5-4", slug: "art-language-culture", title: { ne: "कला, भाषा तथा संस्कृति", en: "Art, Language and Culture" }, children: [
        { id: "5-4-1", slug: "local-festivals", title: { ne: "स्थानीय चाडपर्व तथा जात्रा र मेलाहरूको विवरण", en: "Local Festivals and Fairs" } },
      ]},
      { id: "5-5", slug: "peace-security", title: { ne: "शान्ति तथा सुरक्षाको विवरण", en: "Peace and Security" } },
    ],
  },
  {
    num: 6, slug: "chapter-6",
    title: { ne: "वन तथा वातावरणीय स्थिति", en: "Forest and Environmental Status" },
    description: { ne: "वन क्षेत्र, जलश्रोत, जैविक विविधता, र विपद जोखिम व्यवस्थापन", en: "Forest area, water resources, biodiversity, and disaster risk management" },
    sections: [
      { id: "6-1", slug: "forest-area", title: { ne: "वन क्षेत्रको अवस्था", en: "Forest Area Status" }, children: [
        { id: "6-1-1", slug: "forest-management", title: { ne: "वन व्यवस्थापन सम्बन्धी विवरण", en: "Forest Management Description" } },
        { id: "6-1-2", slug: "plantation-space", title: { ne: "वृक्षारोपणका लागि खाली स्थान सम्बन्धी विवरण", en: "Plantation Open Space" } },
        { id: "6-1-3", slug: "herbal-production", title: { ne: "जडिबुटी उत्पादन, संकलन तथा निकासी सम्बन्धी विवरण", en: "Herbal Production and Export" } },
      ]},
      { id: "6-2", slug: "water-resources", title: { ne: "जलश्रोत तथा जलाधार क्षेत्र", en: "Water Resources and Watershed" }, children: [
        { id: "6-2-1", slug: "rivers-streams", title: { ne: "प्रमुख नदी तथा खोलाहरू", en: "Major Rivers and Streams" } },
      ]},
      { id: "6-3", slug: "biodiversity", title: { ne: "जैविक विविधता र वातावरणीय सेवा", en: "Biodiversity and Environmental Service" }, children: [
        { id: "6-3-1", slug: "animals-birds", title: { ne: "वासस्थानका आधारमा महत्वपूर्ण जनावर र चराचुरुङ्गीको विवरण", en: "Important Animals and Birds" } },
        { id: "6-3-2", slug: "important-plants", title: { ne: "महत्वपूर्ण वनस्पती विवरण", en: "Important Plants" } },
      ]},
      { id: "6-4", slug: "disaster-risk", title: { ne: "विपद जोखिम व्यवस्थापन", en: "Disaster Risk Management" }, children: [
        { id: "6-4-1", slug: "disaster-damage", title: { ne: "विपद प्रकोपबाट भएको मानवीय र भौतिक क्षतिको विवरण", en: "Human and Physical Damage from Disasters" } },
        { id: "6-4-2", slug: "risk-time", title: { ne: "विपदको किसिम अनुसार जोखिमको समय", en: "Risk Time by Disaster Type" } },
        { id: "6-4-3", slug: "disaster-preparedness", title: { ne: "विपद व्यवस्थापनको पूर्वतयारी", en: "Disaster Preparedness" } },
        { id: "6-4-4", slug: "emergency-transportation", title: { ne: "आपतकालिन यातायात साधन सम्बन्धी विवरण", en: "Emergency Transportation" } },
      ]},
    ],
  },
  {
    num: 7, slug: "chapter-7",
    title: { ne: "भौतिक विकासको अवस्था", en: "Physical Infrastructure Development" },
    description: { ne: "यातायात, विद्युत्, सञ्चार प्रविधि, र आवास तथा भवन", en: "Transportation, electricity, communication, and housing" },
    sections: [
      { id: "7-1", slug: "transportation-infrastructure", title: { ne: "यातायात पूर्वाधार", en: "Transportation Infrastructure" }, children: [
        { id: "7-1-1", slug: "road-network", title: { ne: "सडक सञ्जालको विद्यमान अवस्था", en: "Current Road Network" } },
        { id: "7-1-2", slug: "vehicles", title: { ne: "उप-महानगरपालिका क्षेत्रभित्र चल्ने सवारी साधन", en: "Vehicles in Sub-Metropolitan City" } },
        { id: "7-1-3", slug: "bus-park", title: { ne: "बसपार्क तथा बस बिसौनी सम्बन्धी विवरण", en: "Bus Park and Bus Stop" } },
        { id: "7-1-4", slug: "suspension-bridge", title: { ne: "झोलुङ्गे पुल तथा पुलपुलेसा", en: "Suspension Bridge and Culverts" } },
      ]},
      { id: "7-2", slug: "electricity-energy", title: { ne: "विद्युत् तथा वैकल्पिक ऊर्जा", en: "Electricity and Alternative Energy" }, children: [
        { id: "7-2-1", slug: "cooking-fuel", title: { ne: "इन्धन उपयोग विवरण", en: "Cooking Fuel Usage" } },
        { id: "7-2-2", slug: "lighting-fuel", title: { ne: "बत्ती बाल्ने इन्धनको प्रयोगको आधारमा घरपरिवार", en: "Lighting Fuel by Household" } },
        { id: "7-2-3", slug: "alternative-energy", title: { ne: "वैकल्पिक ऊर्जा प्रयोग गर्ने परिवार", en: "Alternative Energy Usage" } },
      ]},
      { id: "7-3", slug: "communication-technology", title: { ne: "सञ्चार तथा प्रविधि", en: "Communication and Technology" }, children: [
        { id: "7-3-1", slug: "radio-fm-media", title: { ne: "रेडियो, एफ.एम तथा सञ्चारका माध्यमहरूको विवरण", en: "Radio, FM and Media" } },
        { id: "7-3-2", slug: "modern-facilities", title: { ne: "आधुनिक सुविधामा पहुँच सम्बन्धी विवरण", en: "Access to Modern Facilities" } },
      ]},
      { id: "7-4", slug: "housing-buildings", title: { ne: "आवास तथा भवन", en: "Housing and Buildings" }, children: [
        { id: "7-4-1", slug: "roof-type", title: { ne: "छानोको प्रकारका आधारमा घरधुरी", en: "Households by Roof Type" } },
        { id: "7-4-2", slug: "government-buildings", title: { ne: "उप-महानगरपालिका अन्तर्गतका सरकारी भवन सम्बन्धी विवरण", en: "Government Buildings" } },
        { id: "7-4-3", slug: "slaughterhouse", title: { ne: "पशु वधशालाको विवरण", en: "Slaughterhouse" } },
        { id: "7-4-4", slug: "cremation-ground", title: { ne: "शवदाहस्थल सम्बन्धी विवरण", en: "Cremation Ground" } },
      ]},
    ],
  },
  {
    num: 8, slug: "chapter-8",
    title: { ne: "संस्थागत तथा सुशासनको स्थिति", en: "Institutional and Governance Status" },
    description: { ne: "संगठनात्मक संरचना, सेवा सुविधा, र ऐन नीति नियम", en: "Organizational structure, services, and laws & policies" },
    sections: [
      { id: "8-1", slug: "organizational-human-resource", title: { ne: "संगठनात्मक तथा मानव संसाधनको अवस्था", en: "Organizational and Human Resource Status" }, children: [
        { id: "8-1-1", slug: "organizational-structure", title: { ne: "उप-महानगरपालिकाको संगठनात्मक ढाँचा", en: "Organizational Structure" } },
      ]},
      { id: "8-2", slug: "service-operation", title: { ne: "सेवा सुविधा सञ्चालन र व्यवस्थापन", en: "Service Operation and Management" }, children: [
        { id: "8-2-1", slug: "available-services", title: { ne: "उपलब्ध सेवा सुविधाको प्रकार", en: "Types of Available Services" } },
        { id: "8-2-2", slug: "service-flow", title: { ne: "सेवा प्रवाह प्रकिया र पृष्ठपोषण", en: "Service Flow and Feedback" } },
      ]},
      { id: "8-3", slug: "laws-policies", title: { ne: "ऐन, नीति नियम र कार्यप्रणाली", en: "Laws, Policies and Procedures" }, children: [
        { id: "8-3-1", slug: "approved-laws", title: { ne: "उप-महानगरपालिकाका स्वीकृत ऐन, नीति, नियम, निर्देशिका तथा मापदण्डहरू", en: "Approved Laws and Guidelines" } },
        { id: "8-3-2", slug: "municipal-manpower", title: { ne: "नगरकार्यपालिकाको जनशक्ति सम्बन्धी विवरण", en: "Municipal Executive Manpower" } },
      ]},
    ],
  },
];

export const annexes: AnnexItem[] = [
  { id: "annex-1", slug: "elected-officials", title: { ne: "अनुसूची - १: उप-महानगरपालिकाका निर्वाचित पदाधिकारीको विवरण", en: "Annex 1: Elected Officials" } },
  { id: "annex-2", slug: "staff", title: { ne: "अनुसूची - २: उप-महानगरपालिका अन्तर्गतका कर्मचारीहरूको विवरण", en: "Annex 2: Staff Description" } },
  { id: "annex-3", slug: "ambulance-equipment", title: { ne: "अनुसूची - ३: एम्बुलेन्स तथा वारुणयन्त्र लगायतका साधनहरूको विवरण", en: "Annex 3: Ambulances and Equipment" } },
  { id: "annex-4", slug: "hotel-resort", title: { ne: "अनुसूची - ४: होटल, रिसोर्ट तथा रेष्ट्रुरेन्ट सम्बन्धी विवरण", en: "Annex 4: Hotels, Resorts and Restaurants" } },
  { id: "annex-5", slug: "childcare-centers", title: { ne: "अनुसूची - ५: बालकलवहरूको सञ्चाल", en: "Annex 5: Childcare Centers" } },
  { id: "annex-6", slug: "agriculture-firms", title: { ne: "अनुसूची - ६: व्यवसायिक कृषि तथा पशुपालन फर्महरूको विवरण", en: "Annex 6: Agriculture and Animal Husbandry Firms" } },
  { id: "annex-7", slug: "resource-map", title: { ne: "अनुसूची - ७: स्रोत नक्सा", en: "Annex 7: Resource Map" } },
  { id: "annex-8", slug: "participants-photos", title: { ne: "अनुसूची - ८: छलफलमा उपस्थित सहभागीहरू तथा तस्वीरहरू", en: "Annex 8: Participants and Photos" } },
];
