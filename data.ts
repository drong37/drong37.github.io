import { Publication, Project, NewsItem, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Alex Chen",
  title: "Ph.D. Candidate in Computer Science",
  institution: "University of Technology",
  email: "alex.chen@example.edu",
  location: "San Francisco, CA",
  bio: "I am a Ph.D. candidate at the University of Technology, advised by Prof. Sarah Smith. My research focuses on Artificial Intelligence, specifically in the intersection of Computer Vision and Natural Language Processing. I am interested in building systems that can understand and reason about the physical world through multimodal data.",
  twitter: "https://twitter.com/example",
  github: "https://github.com/example",
  scholar: "https://scholar.google.com/example",
};

export const NEWS: NewsItem[] = [
  {
    id: '1',
    date: 'Sep 2024',
    content: 'One paper accepted to NeurIPS 2024! See you in Vancouver.',
  },
  {
    id: '2',
    date: 'Jun 2024',
    content: 'Started my research internship at Google DeepMind.',
  },
  {
    id: '3',
    date: 'May 2024',
    content: 'Successfully defended my thesis proposal.',
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: "Multimodal Reasoning in Dynamic Environments",
    authors: ["Alex Chen", "Sarah Smith", "John Doe"],
    venue: "NeurIPS 2024",
    year: 2024,
    category: "Conference",
    pdfLink: "#",
    codeLink: "#",
    abstract: "We present a novel approach for reasoning about object dynamics in video using large language models tailored for temporal understanding.",
    bibtex: `@inproceedings{chen2024multimodal,
  title={Multimodal Reasoning in Dynamic Environments},
  author={Chen, Alex and Smith, Sarah and Doe, John},
  booktitle={Advances in Neural Information Processing Systems},
  year={2024}
}`
  },
  {
    id: 'p2',
    title: "Efficient Transformers for Edge Devices",
    authors: ["Alex Chen", "Emily White"],
    venue: "CVPR 2023 (Oral)",
    year: 2023,
    category: "Conference",
    pdfLink: "#",
    codeLink: "#",
    abstract: "A study on pruning and quantization techniques specifically designed for vision transformers running on low-power edge hardware.",
    bibtex: `@inproceedings{chen2023efficient,
  title={Efficient Transformers for Edge Devices},
  author={Chen, Alex and White, Emily},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year={2023}
}`
  },
  {
    id: 'p3',
    title: "A Survey of Vision-Language Pre-training",
    authors: ["David Black", "Alex Chen", "Sarah Smith"],
    venue: "IEEE TPAMI",
    year: 2022,
    category: "Journal",
    pdfLink: "#",
    bibtex: `@article{black2022survey,
  title={A Survey of Vision-Language Pre-training},
  author={Black, David and Chen, Alex and Smith, Sarah},
  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},
  year={2022}
}`
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pr1',
    title: "VisionLib",
    description: "An open-source PyTorch library for efficient video understanding, featuring implementations of state-of-the-art models.",
    techStack: ["Python", "PyTorch", "CUDA"],
    github: "#"
  },
  {
    id: 'pr2',
    title: "AcademicTheme",
    description: "A minimal, clean React template for academic websites (this website!).",
    techStack: ["React", "Tailwind", "TypeScript"],
    github: "#"
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'e1',
    degree: "Ph.D. in Computer Science",
    institution: "University of Technology",
    year: "2021 - Present",
    thesis: "Advisors: Prof. Sarah Smith"
  },
  {
    id: 'e2',
    degree: "B.S. in Computer Science",
    institution: "State University",
    year: "2017 - 2021",
    thesis: "Summa Cum Laude"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'ex1',
    role: "Research Intern",
    institution: "Google DeepMind",
    period: "Summer 2024",
    description: "Worked on multimodal generative models."
  },
  {
    id: 'ex2',
    role: "Research Assistant",
    institution: "University of Technology",
    period: "2021 - Present",
    description: "Conducting research on vision-language models."
  }
];