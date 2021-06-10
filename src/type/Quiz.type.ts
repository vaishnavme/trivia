export type ResponseData = {
    success: boolean;
    allQuizzes: Quiz;
}

export type Option = {
    id: string;
    content: string;
    isAnswer: boolean
}

export type Question = {
    id: string;
    question: string;
    points: number;
    negativePoints: number;
    options: Option[]
    selectedOption?: string | null;
}

export type Quiz = {
    id: string;
    name: string;
    coverImageUrl: string;
    totolScore: 50;
    questions: Question[]
}

export type ServerError = {
    message: string;
};