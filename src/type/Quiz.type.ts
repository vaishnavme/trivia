export type ResponseData = {
    success: boolean;
    quizdata: Quiz;
};

export type Option = {
    _id: string;
    content: string;
    isAnswer: boolean;
};

export type Question = {
    _id: string;
    question: string;
    points: number;
    negativePoints: number;
    options: Option[];
    selectedOption?: string | null;
};

export type Quiz = {
    _id: string;
    name: string;
    coverImageUrl: string;
    totolScore: 50;
    questions: Question[];
};

export type ServerError = {
    message: string;
};
