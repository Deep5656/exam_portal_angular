import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qid:any;
  questions:any;

  constructor(private _route:ActivatedRoute,private _question:QuestionService) {}

  ngOnInit(): void {
    history.pushState({}, '', location.href);
    window.onpopstate = function () {
      history.pushState({}, '', location.href);
    };
    this.qid=this._route.snapshot.params['qid'];
    // console.log(this.qid);

    this.loadQuestions();

  }

  loadQuestions(){
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data)=>{
      // console.log(data);
      this.questions = data;
      
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !","error in loading","error");
    })
  }
}
