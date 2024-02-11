import { Component } from '@angular/core';
import { faqs } from '../../interfaces/faqs';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  questionsAndAnswers: faqs[] = [
    {
      id: 0,
      question: 'What is Frontend Mentor, and how will it help me?',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      isActive: false,
    },
    {
      id: 1,
      question: 'Is Frontend Mentor free?',
      answer:
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
      isActive: false,
    },
    {
      id: 2,
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      isActive: false,
    },
    {
      id: 3,
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      isActive: false,
    },
  ];

  onClick(id: number): void {
    this.questionsAndAnswers = this.questionsAndAnswers.map((item) => {
      return {
        ...item,
        isActive: item.id === id ? !item.isActive : false,
      };
    });
  }
}
