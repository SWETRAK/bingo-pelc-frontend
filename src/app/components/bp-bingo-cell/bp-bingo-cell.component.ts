import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BpDailyQuestion} from "../../models/bp-daily-question";

@Component({
  selector: 'app-bp-bingo-cell',
  templateUrl: './bp-bingo-cell.component.html',
  styleUrls: ['./bp-bingo-cell.component.css']
})
export class BpBingoCellComponent implements OnInit {

    @Input("dailyQuestion") public dailyQuestion: BpDailyQuestion | undefined;
    @Output("update") public updateItemEvent: EventEmitter<BpDailyQuestion> = new EventEmitter<BpDailyQuestion>();

    constructor() {
    }

    ngOnInit() {

    }

    protected onCellClick() {
        if(this.dailyQuestion){
            this.dailyQuestion.checked = !this.dailyQuestion?.checked;
            this.updateItemEvent.emit(this.dailyQuestion);
        }

    }
}
