import {Component, OnDestroy, OnInit} from '@angular/core';
import {BpHttpService} from "../../services/bp-http.service";
import {BpDailyBingo} from "../../models/bp-daily-bingo";
import {Subscription} from "rxjs";
import {BpDailyQuestion} from "../../models/bp-daily-question";

@Component({
  selector: 'app-bp-bingo-root',
  templateUrl: './bp-bingo-root.component.html',
  styleUrls: ['./bp-bingo-root.component.css']
})
export class BpBingoRootComponent implements OnInit, OnDestroy {

    public dailyBingo: BpDailyBingo | undefined;
    public subscriptions: Subscription[] = [];

    constructor(private httpService: BpHttpService) {
    }

    ngOnInit() {
        this.getDailyBingo();
    }

    protected onClickGenerateDailyBingo() {
        this.generateDailyBingo();
    }

    protected updateDailyQuestionStatus(value: BpDailyQuestion) {
        let sub = this.httpService.checkDailyQuestion(value).subscribe({
            next: (data: BpDailyQuestion) => {
                if (data.id == value.id) {
                    this.getDailyBingo();
                    this.checkDailyBingoWin();
                }
            },
            error: (error: any) => {
                console.log(error);
            },
        })
        this.subscriptions.push(sub);
    }

    private checkDailyBingoWin() {
        let sub = this.httpService.checkDailyBingo().subscribe({
            next: (data: BpDailyBingo) => {
                this.dailyBingo = data;
            },
            error: (error: any) => {
                console.log(error);
            }
        });
        this.subscriptions.push(sub);
    }

    private generateDailyBingo(){
        const sub =this.httpService
            .generateDailyBingo()
            .subscribe({
                next: (data: BpDailyBingo) => {
                    this.dailyBingo = data;
                },
                error: (error: any) => {
                    console.log(error);
                }
            });
        this.subscriptions.push(sub);
    }

    private getDailyBingo() {
        const sub = this.httpService
            .getDailyBingo()
            .subscribe({
                next: (data: BpDailyBingo) => {
                    this.dailyBingo = data;
                },
                error: (error: any) => {
                    console.log(error);
                }
            });
        this.subscriptions.push(sub);
    }

    ngOnDestroy() {
        this.subscriptions
            .forEach(subscription => {
                subscription.unsubscribe();
            });
    }
}
