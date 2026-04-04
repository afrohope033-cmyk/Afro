export type UserRole = 'admin' | 'instructor' | 'student';

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: UserRole;
  createdAt: string;
}

export interface Class {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  students: string[];
  createdAt: string;
}

export interface Assessment {
  id: string;
  classId: string;
  title: string;
  questions: Question[];
  dueDate: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Submission {
  id: string;
  assessmentId: string;
  studentId: string;
  answers: number[];
  submittedAt: string;
  grade?: number;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  method: 'MTN' | 'Orange' | 'Sendwave';
  timestamp: string;
}
