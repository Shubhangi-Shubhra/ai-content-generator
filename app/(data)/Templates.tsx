export default [
  {
    name: 'Resume Builder',
    desc: 'Create compelling resumes with the help of AI, tailored to your job title',
    category: 'productivity',
    icon: 'https://cdn-icons-png.flaticon.com/128/942/942748.png',
    aiPrompt: 'Based on this job description, identify 10 relevant skills I should highlight in my resume. Write 4 resume achievements with metrics based on the following job responsibilities. Also tell me the famous certifications that I should do for this job role.',
    slug: 'resume-description-generator',
    form: [
      {
        label: 'What job role are you applying for?',
        field: 'input',
        name: 'jobTitle',
        required: true
      },
      {
        label: 'Job Description',
        field: 'textarea',
        name: 'jobDescription',
        required: true
      }
    ]
  },
  {
    name: 'Blog Title',
    desc: 'An AI tool that suggests the best blog title depending on your blog content',
    category: 'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4693/4693265.png',
    aiPrompt: 'Give me 5 blog topic ideas in bullet points based on given niche topic and give me the result in rich text editor format',
    slug: 'blog-title',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true
      },
      {
        label: 'Enter your blog outline',
        field: 'textarea',
        name: 'outline',
      },
    ]
  },
  {
    name: 'Blog Content Creator',
    desc: 'AI-powered tool to generate blog content based on a given outline',
    category: 'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/15189/15189421.png',
    aiPrompt: 'Generate a blog post of 500 words on the topic "{niche}" with the following outline: {outline}',
    slug: 'blog-content-creator',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true
      },
      {
        label: 'Enter your blog outline',
        field: 'textarea',
        name: 'outline',
        required: true
      },
    ]
  },
  {
    name: 'Blog Topic Ideas',
    desc: 'AI tool that generates creative blog topic ideas based on a specified niche',
    category: 'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/9431/9431885.png',
    aiPrompt: 'Provide 5 blog topic ideas for a {niche} blog',
    slug: 'blog-topic-ideas-generator',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true
      },
    ]
  },
  {
    name: 'YouTube SEO Title',
    desc: 'AI tool that suggests SEO-optimized titles for YouTube videos',
    category: 'youtube',
    icon: 'https://cdn-icons-png.flaticon.com/128/1383/1383260.png',
    aiPrompt: 'Generate 5 SEO title for a YouTube video about {niche}',
    slug: 'youtube-seo-title-generator',
    form: [
      {
        label: 'Enter your video niche',
        field: 'input',
        name: 'niche',
        required: true
      },
    ]
  },
  {
    name: 'Code Helper',
    desc: 'AI tool that assists with coding problems and provides code suggestions',
    category: 'programming',
    icon: 'https://cdn-icons-png.flaticon.com/128/2889/2889562.png',
    aiPrompt: 'Provide code suggestions and solutions for the following programming problem: {problem}',
    slug: 'code-helper',
    form: [
      {
        label: 'Describe your programming problem',
        field: 'textarea',
        name: 'problem',
        required: true
      },
    ]
  },
  {
    name: 'Code Debugger',
    desc: 'AI tool that helps in debugging code by identifying and suggesting fixes for errors',
    category: 'programming',
    icon: 'https://cdn-icons-png.flaticon.com/128/1800/1800954.png',
    aiPrompt: 'Debug the following code and suggest fixes for errors: {code}',
    slug: 'code-debugger',
    form: [
      {
        label: 'Paste your code here',
        field: 'textarea',
        name: 'code',
        required: true
      },
    ]
  },
  {
    name: 'Math Solver',
    desc: 'AI-powered tool to solve math problems and provide step-by-step solutions',
    category: 'education',
    icon: 'https://cdn-icons-png.flaticon.com/128/2103/2103833.png',
    aiPrompt: 'Solve the following math problem and provide a step-by-step solution: {problem}',
    slug: 'math-solver',
    form: [
      {
        label: 'Enter your math problem',
        field: 'textarea',
        name: 'problem',
        required: true
      },
    ]
  },
  {
    name: 'Travel Planner',
    desc: 'AI tool that helps you plan your travel itinerary with suggestions on destinations, activities, and more',
    category: 'travel',
    icon: 'https://cdn-icons-png.flaticon.com/128/201/201623.png',
    aiPrompt: 'Create a travel itinerary for a trip to {destination} including top attractions, activities, and restaurants.',
    slug: 'travel-planner',
    form: [
      {
        label: 'Enter your travel destination',
        field: 'input',
        name: 'destination',
        required: true
      },
      {
        label: 'Enter your travel preferences and interests',
        field: 'textarea',
        name: 'preferences',
        required: true
      },
    ]
  },
  {
    name: 'Email Generator',
    desc: 'AI tool to generate professional emails based on given context',
    category: 'communication',
    icon: 'https://cdn-icons-png.flaticon.com/128/2991/2991148.png',
    aiPrompt: 'Generate a professional email based on the following context: {context}',
    slug: 'email-generator',
    form: [
      {
        label: 'Enter the context for your email',
        field: 'textarea',
        name: 'context',
        required: true
      },
    ]
  },
  {
    name: 'Song Maker',
    desc: 'AI tool to create songs based on given themes or lyrics',
    category: 'entertainment',
    icon: 'https://cdn-icons-png.flaticon.com/128/3790/3790733.png',
    aiPrompt: 'Create a song based on the following theme or lyrics: {theme}',
    slug: 'song-maker',
    form: [
      {
        label: 'Enter the theme or lyrics for your song',
        field: 'textarea',
        name: 'theme',
        required: true
      },
    ]
  },
  {
    name: 'SQL Expert',
    desc: 'AI tool to assist with writing and optimizing SQL queries',
    category: 'programming',
    icon: 'https://cdn-icons-png.flaticon.com/128/3064/3064097.png',
    aiPrompt: 'Write and optimize SQL queries for the following database problem: {problem}',
    slug: 'sql-expert',
    form: [
      {
        label: 'Describe your database problem',
        field: 'textarea',
        name: 'problem',
        required: true
      },
    ]
  },
  {
    name: 'Paragraph Summarizer',
    desc: 'AI tool that summarizes long paragraphs into concise summaries',
    category: 'productivity',
    icon: 'https://cdn-icons-png.flaticon.com/128/4135/4135866.png',
    aiPrompt: 'Summarize the following paragraph into a concise summary: {paragraph}',
    slug: 'paragraph-summarizer',
    form: [
      {
        label: 'Enter the paragraph to summarize',
        field: 'textarea',
        name: 'paragraph',
        required: true
      },
    ]
  },
  {
    name: 'Plagiarism Remover',
    desc: 'AI tool to detect and remove plagiarism from text',
    category: 'writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/2910/2910791.png',
    aiPrompt: 'Detect and remove plagiarism from the following text: {text}',
    slug: 'plagiarism-remover',
    form: [
      {
        label: 'Enter the text to check for plagiarism',
        field: 'textarea',
        name: 'text',
        required: true
      },
    ]
  },
  {
    name: 'Spell Checker',
    desc: 'AI tool to check and correct spelling errors in text',
    category: 'writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/888/888843.png',
    aiPrompt: 'Check and correct spelling errors in the following text: {text}',
    slug: 'spell-checker',
    form: [
      {
        label: 'Enter the text to check for spelling errors',
        field: 'textarea',
        name: 'text',
        required: true
      },
    ]
  },
  {
    name: 'Remove Grammatical Errors',
    desc: 'AI tool to detect and correct grammatical errors in text',
    category: 'writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921222.png',
    aiPrompt: 'Detect and correct grammatical errors in the following text: {text}',
    slug: 'remove-grammatical-errors',
    form: [
      {
        label: 'Enter the text to check for grammatical errors',
        field: 'textarea',
        name: 'text',
        required: true
      },
    ]
  }
];
