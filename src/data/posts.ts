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

const longText = `<h2>Lorem ipsum dolor sit amet</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie,
    lorem eu eleifend bibendum, augue purus mollis sapien, non rhoncus eros leo
    in nunc. Donec a nulla vel turpis consectetur tempor ac vel justo. In hac
    habitasse platea dictumst. Cras nec sollicitudin eros. Nunc eu enim non
    turpis sagittis rhoncus consectetur id augue. Mauris dignissim neque felis.
    Phasellus mollis mi a pharetra cursus. Maecenas vulputate augue placerat
    lacus mattis, nec ornare risus sollicitudin.
  </p>
  <p>
    Mauris eu pulvinar tellus, eu luctus nisl. Pellentesque suscipit mi eu
    varius pulvinar. Aenean vulputate, massa eget elementum finibus, ipsum arcu
    commodo est, ut mattis eros orci ac risus. Suspendisse ornare, massa in
    feugiat facilisis, eros nisl auctor lacus, laoreet tempus elit dolor eu
    lorem. Nunc a arcu suscipit, suscipit quam quis, semper augue.
  </p>
  <p>
    Quisque arcu nulla, convallis nec orci vel, suscipit elementum odio.
    Curabitur volutpat velit non diam tincidunt sodales. Nullam sapien libero,
    bibendum nec viverra in, iaculis ut eros.
  </p>
  <h3>Lorem ipsum dolor sit amet</h3>
  <p>
    Vestibulum sit amet ullamcorper sem. Integer hendrerit elit eget purus
    sodales maximus. Quisque ac nulla arcu. Morbi venenatis arcu ac arcu cursus
    pharetra. Morbi sit amet viverra augue, ac ultricies libero. Praesent
    elementum lectus mi, eu elementum urna venenatis sed. Donec auctor purus ut
    mattis feugiat. Integer mi erat, consectetur sed tincidunt vitae, sagittis
    elementum libero. Vivamus a mauris consequat, hendrerit lectus in, fermentum
    libero. Integer mattis bibendum neque et porttitor.
  </p>
  <p>
    Mauris quis arcu finibus, posuere dolor eu, viverra felis. Orci varius
    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    In porta, ex vitae accumsan facilisis, nisi tellus dictum metus, quis
    fringilla dui tellus in tellus. Praesent pharetra orci at vehicula posuere.
    Sed molestie fringilla lorem, vel imperdiet tortor blandit at. Quisque non
    ultrices lorem, eget rhoncus orci. Fusce porttitor placerat diam et mattis.
    Nam laoreet, ex eu posuere sollicitudin, sem tortor pellentesque ipsum, quis
    mattis purus lectus ut lacus. Integer eu risus ac est interdum scelerisque.
  </p>
  <h4>Lorem ipsum dolor sit amet</h4>
  <p>
    Praesent ultricies, mauris eget vestibulum viverra, neque lorem malesuada
    mauris, eget rhoncus lectus enim a lorem. Vivamus at vehicula risus, eget
    facilisis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras et posuere sapien. Fusce bibendum lorem sem, quis tincidunt felis
    mattis nec.
  </p>
  <p>
    Proin vel nulla purus. Nunc nec eros in nisi efficitur rutrum quis sed eros.
    Mauris felis dolor, rhoncus eget gravida vitae, pretium vel arcu. Cras
    blandit tellus eget tellus dictum venenatis. Sed ultricies bibendum dictum.
    Etiam facilisis erat id turpis tincidunt malesuada. Duis bibendum sapien eu
    condimentum sagittis. Proin nunc lorem, ullamcorper vel tortor sodales,
    imperdiet lacinia dui. Sed congue, felis id rhoncus varius, urna lacus
    imperdiet nunc, ut porttitor mauris mi quis mi. Integer rutrum est finibus
    metus eleifend scelerisque. Morbi auctor dignissim purus in interdum.
    Vestibulum eu dictum enim. Suspendisse et sem vitae velit feugiat facilisis.
  </p>
  <p>
    Nam sodales scelerisque nunc sed convallis. Vestibulum facilisis porta erat,
    sit amet pharetra tortor blandit id. Nunc velit tellus, consectetur sed
    convallis in, tincidunt finibus nulla. Integer vel ex in mauris tincidunt
    tincidunt nec sed elit. Etiam pretium lectus lectus, sed aliquet erat
    tristique euismod. Praesent faucibus nisl augue, ac tempus libero
    pellentesque malesuada. Vivamus iaculis imperdiet laoreet. Aliquam vel felis
    felis. Proin sed sapien erat. Etiam a quam et metus tempor rutrum. Curabitur
    in faucibus justo. Etiam imperdiet iaculis urna.
  </p>`;

export const posts: Post[] = [
  {
    id: 1,
    title: "Building Efficient React Apps",
    text: longText,
    cover: "img/blog-1.jpg",
    date: "2025-05-01",
    author: {
      name: "John Doe",
      image: "img/team-1.jpg",
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
    cover: "img/blog-2.jpg",
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
    cover: "img/blog-3.jpg",
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
    cover: "img/post-1.jpg",
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
    cover: "img/post-2.jpg",
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
    cover: "img/post-3.jpg",
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
    cover: "img/post-4.jpg",
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
    cover: "img/post-5.jpg",
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