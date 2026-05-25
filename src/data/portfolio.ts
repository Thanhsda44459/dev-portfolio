export const personalInfo = {
  name: 'Võ Duy Thanh',
  role: 'Kĩ thuật phần mềm',
  email: 'thanhsda44459@gmail.com',
  phone: '0345491247',
  address: '368/3 Lê Hồng Phong, Vườn Lài, Hồ Chí Minh',
  github: 'https://github.com/Thanhsda44459',
  website: 'https://github.com/Thanhsda44459',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const education = {
  school: 'Đại học Sài Gòn',
  major: 'Kĩ thuật phần mềm',
  status: 'Sinh viên năm 3',
  period: '2023 - 2028',
}

export interface SkillGroup {
  name: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Front-end',
    icon: 'data_object',
    skills: ['HTML', 'CSS (SCSS)', 'JavaScript', 'Bootstrap', 'ReactJS', 'NextJS', 'Vue'],
  },
  {
    name: 'Back-end',
    icon: 'dns',
    skills: ['NodeJS (Express, NestJS)', 'REST API', 'Spring Boot'],
  },
  {
    name: 'Other',
    icon: 'terminal',
    skills: ['Java', 'Git/GitHub', 'Có khả năng đọc hiểu và giao tiếp tiếng Anh'],
  },
]

export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  category: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'SmartDoc AI',
    description:
      'Hệ thống AI hỏi đáp tài liệu hỗ trợ tiếng Việt và tiếng Anh sử dụng mô hình RAG. Cho phép tài liệu được upload PDF tìm kiếm và trả lời câu hỏi thông qua giao diện web.',
    techStack: ['Streamlit', 'LangChain', 'FAISS', 'Ollama', 'Python'],
    category: 'AI / ML',
  },
  {
    id: 2,
    title: 'eCommerce-Mobile',
    description:
      'Phát triển website thương mại điện tử bán thiết bị công nghệ và phụ kiện bằng Next.js, React, Redux Toolkit và Tailwind CSS.',
    techStack: ['Next.js', 'ReactJS', 'Redux Toolkit', 'Tailwind CSS', 'JavaScript'],
    category: 'Web App',
  },
  {
    id: 3,
    title: 'LibraryManagement',
    description:
      'Phát triển hệ thống quản lý thư viện bằng Java Swing và MySQL, hỗ trợ quản lý mượn/trả sách, thống kê và xuất/import Excel PDF với Apache POI, iText.',
    techStack: ['Java Swing', 'MySQL', 'Apache POI', 'iText'],
    category: 'Desktop App',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Thanhsda44459' },
]
