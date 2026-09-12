// Add new projects here — ProjectCard renders whatever is in this array,
// so the Projects section never needs to change when you add a project.
import { ShoppingCart, Users } from 'lucide-react'

export const projects = [
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Website',
    icon: ShoppingCart,
    description:
      'A responsive e-commerce website with a modern interface for browsing products, managing a shopping cart, and providing a smooth user experience.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 'social-media-platform',
    title: 'Social Media Platform',
    icon: Users,
    description:
      'A modern social media platform where users can create posts, interact with content, connect with others, and enjoy a responsive and engaging user experience',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    liveUrl: '',
    githubUrl: '',
  },
]
