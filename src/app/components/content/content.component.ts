import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectsComponent } from "../projects/projects.component";
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-content',
  imports: [ProfileComponent, ExperienceComponent, ProjectsComponent, EducationComponent, SkillsComponent],
  templateUrl: './content.component.html'
})
export class ContentComponent {

}
