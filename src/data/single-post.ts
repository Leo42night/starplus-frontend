// src/data/single-post.ts
interface Post {
  id: number;
  title: string;
  text: string;
  cover: string;
  date: string;
  author: {
    name: string;
    image: string;
    description: string;
  };
  tags: string[];
  comments: {
    name: string;
    image: string;
    text: string;
    date: string;
  }[];
}

const posts: Post[] = [
  {
    id: 1,
    title: "Building Efficient React Apps",
    text: `<p>In this post, we'll explore how to build performant React applications using <strong>memoization</strong>, lazy loading, and other techniques.</p><p>By reducing unnecessary re-renders, you can significantly improve app speed.</p>`,
    cover: "https://picsum.photos/seed/react/800/400",
    date: "2025-05-01",
    author: {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      description: "Senior React Developer",
    },
    tags: ["React", "Performance", "Web Development", "Frontend"],
    comments: [
      {
        name: "Alice",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        text: "Great tips! Helped me optimize my project.",
        date: "2025-05-02",
      },
      {
        name: "Bob",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "I love using lazy loading, thanks for sharing!",
        date: "2025-05-03",
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript ES2025 Features",
    text: `<p>JavaScript continues to evolve. In ES2025, we expect to see improvements in <em>async functions</em>, pattern matching, and more.</p><p>It’s a great time to level up your JS skills!</p>`,
    cover: "https://picsum.photos/seed/es2025/800/400",
    date: "2025-04-28",
    author: {
      name: "Sarah Lee",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      description: "Tech Writer & JS Enthusiast",
    },
    tags: ["JavaScript", "ES2025", "Programming", "Web Development"],
    comments: [
      {
        name: "Charlie",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Can’t wait to try these new features!",
        date: "2025-04-29",
      },
    ],
  },
  {
    id: 3,
    title: "Understanding CSS Grid",
    text: `<p>CSS Grid Layout is a powerful system for building responsive designs.</p><p>Master the fundamentals and transform your layout workflow.</p>`,
    cover: "https://picsum.photos/seed/cssgrid/800/400",
    date: "2025-04-25",
    author: {
      name: "Linda Smith",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      description: "Frontend Designer",
    },
    tags: ["CSS", "Responsive Design", "Web Layout", "Frontend"],
    comments: [
      {
        name: "Derek",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        text: "Finally understood grid! Thanks 🙌",
        date: "2025-04-26",
      },
    ],
  },
  {
    id: 4,
    title: "Top 10 VSCode Extensions",
    text: `<p>Speed up your development with these essential VSCode extensions.</p><p>From code formatting to Git integration, we’ve got you covered.</p>`,
    cover: "https://picsum.photos/seed/vscode/800/400",
    date: "2025-04-22",
    author: {
      name: "Michael Chan",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      description: "Tooling Expert",
    },
    tags: ["VSCode", "Development Tools", "Productivity", "Programming"],
    comments: [
      {
        name: "Emily",
        image: "https://randomuser.me/api/portraits/women/15.jpg",
        text: "I use Prettier and ESLint constantly, they’re life-savers!",
        date: "2025-04-23",
      },
    ],
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    text: `<p>Good design is good business. Discover the core principles of user-centered design.</p><p>Enhance your app’s usability and user retention.</p>`,
    cover: "https://picsum.photos/seed/uiux/800/400",
    date: "2025-04-18",
    author: {
      name: "Nina Hart",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      description: "Product Designer",
    },
    tags: ["UI/UX", "Design", "User Experience", "Product Design"],
    comments: [
      {
        name: "Jason",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
        text: "Great insights! Will definitely use these principles in my next design.",
        date: "2025-04-19",
      },
    ],
  },
  {
    id: 6,
    title: "How to Use TypeScript",
    text: `<p>TypeScript adds strong typing to JavaScript. It helps prevent bugs and makes code more readable.</p><p>This post walks you through setup and best practices.</p>`,
    cover: "https://picsum.photos/seed/ts/800/400",
    date: "2025-04-15",
    author: {
      name: "Ravi Singh",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
      description: "TypeScript Trainer",
    },
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
    comments: [
      {
        name: "Linda",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "I’ve been hesitant about adopting TS, but this guide makes it easier.",
        date: "2025-04-16",
      },
    ],
  },
  {
    id: 7,
    title: "Git Best Practices",
    text: `<p>Keep your Git history clean and meaningful. This post covers commit conventions, branching strategies, and more.</p>`,
    cover: "https://picsum.photos/seed/git/800/400",
    date: "2025-04-12",
    author: {
      name: "Grace Young",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
      description: "DevOps Engineer",
    },
    tags: ["Git", "Version Control", "DevOps", "Programming"],
    comments: [
      {
        name: "David",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        text: "Love these tips! I’ll be using them for my next project.",
        date: "2025-04-13",
      },
    ],
  },
  {
    id: 8,
    title: "Deploying to Vercel",
    text: `<p>Deploy your frontend in seconds using Vercel.</p><p>We’ll cover custom domains, environment variables, and CI/CD integration.</p>`,
    cover: "https://picsum.photos/seed/vercel/800/400",
    date: "2025-04-10",
    author: {
      name: "Tom Becker",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      description: "Fullstack Developer",
    },
    tags: ["Vercel", "Deployment", "CI/CD", "Web Development"],
    comments: [
      {
        name: "Nina",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
        text: "Great guide! Vercel makes deployment so easy.",
        date: "2025-04-11",
      },
    ],
  },
  {
    id: 9,
    title: "Responsive Design Techniques",
    text: `<p>Learn the latest responsive design techniques to make your site mobile-friendly and beautiful on all screens.</p>`,
    cover: "https://picsum.photos/seed/responsive/800/400",
    date: "2025-04-07",
    author: {
      name: "Lara Kim",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      description: "Mobile Web Specialist",
    },
    tags: ["Responsive Design", "CSS", "Web Layout", "Frontend"],
    comments: [
      {
        name: "Jake",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        text: "The media queries examples were really helpful!",
        date: "2025-04-08",
      },
    ],
  },
  {
    id: 10,
    title: "React Hooks in Depth",
    text: `<p>Hooks changed the way we write React. Get an in-depth look at <code>useState</code>, <code>useEffect</code>, and custom hooks.</p>`,
    cover: "https://picsum.photos/seed/hooks/800/400",
    date: "2025-04-04",
    author: {
      name: "Victor Lee",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      description: "React Specialist",
    },
    tags: ["React", "Hooks", "Frontend", "Web Development"],
    comments: [
      {
        name: "Anna",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "The explanation of custom hooks was fantastic!",
        date: "2025-04-05",
      },
    ],
  },
  {
    id: 11,
    title: "Next.js vs. Astro",
    text: `<p>Comparing two modern frameworks for building fast, content-driven websites.</p><p>Which one fits your project better? Let’s dive in.</p>`,
    cover: "https://picsum.photos/seed/nextastro/800/400",
    date: "2025-04-02",
    author: {
      name: "Olivia Zhang",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      description: "Frontend Architect",
    },
    tags: ["Next.js", "Astro", "Frontend", "Web Development"],
    comments: [
      {
        name: "Chris",
        image: "https://randomuser.me/api/portraits/men/37.jpg",
        text: "I’ve been using Next.js for years. Astro looks interesting though!",
        date: "2025-04-03",
      },
    ],
  },
  {
    id: 12,
    title: "Accessibility in Web Development",
    text: `<p>Inclusive design helps everyone. Learn practical ways to make your website accessible for users with disabilities.</p>`,
    cover: "https://picsum.photos/seed/a11y/800/400",
    date: "2025-04-01",
    author: {
      name: "Samuel Rivers",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      description: "Accessibility Advocate",
    },
    tags: ["Accessibility", "Web Development", "Inclusive Design", "User Experience"],
    comments: [],
  },
];

export default posts;