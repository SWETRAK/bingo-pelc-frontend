import {BpDailyQuestion} from "./bp-daily-question";

export interface BpDailyBingo {
    id: string;
    dailyQuestions: Array<BpDailyQuestion>;
    date: number;
    win: boolean;
}
