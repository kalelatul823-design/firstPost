import { Component } from '@angular/core';
import { IaiArr, IbiologyArr, IbusinessArr, IcloudArr, IcyberSecurityArr, IdatabaseArr, IeducationArr, IgeographyArr, IhealthArr, IhistoryArr, ImathArr, IpsychologyArr, IroboticsArr, ItechToolsArr, IwebDevArr } from './models/post';
import { aiArr, biologyArr, businessArr, cloudArr, cyberSecurityArr, databaseArr, educationArr, geographyArr, healthArr, historyArr, mathArr, psychologyArr, roboticsArr, techToolsArr, webDevArr } from './const/postData';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstPost';

  aiArr : Array<IaiArr> = aiArr;
  mathArrs : Array<ImathArr> = mathArr
  roboticsArrs : Array<IroboticsArr> = roboticsArr
  businessArrs : Array<IbusinessArr> = businessArr
  geographyArrs : Array<IgeographyArr> = geographyArr
  psychologyArrs : Array<IpsychologyArr> = psychologyArr
  biologyArrs : Array<IbiologyArr> = biologyArr
  techToolsArrs : Array <ItechToolsArr> = techToolsArr
  educationArrs : Array<IeducationArr> = educationArr
  cloudArrs : Array<IcloudArr> = cloudArr
  webDevArrs : Array<IwebDevArr> = webDevArr;
  databaseArrs : Array<IdatabaseArr> = databaseArr
  cyberSecurityArrs : Array<IcyberSecurityArr> = cyberSecurityArr
  healthArrs : Array<IhealthArr> = healthArr;
  historyArrs : Array<IhistoryArr> = historyArr
}
