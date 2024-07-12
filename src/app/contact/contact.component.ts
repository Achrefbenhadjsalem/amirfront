import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
setSubjects(arg0: string) {
throw new Error('Method not implemented.');
}
  
  contactForm: FormGroup;
  showOptions: boolean = false;
subjects: any;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  selectSubject(subject: string): void {
    this.contactForm.get('subject')!.setValue(subject);
    this.showOptions = false;
  }

  onInputBlur(): void {
    this.showOptions = false;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Ici, tu peux soumettre les données du formulaire à ton backend ou effectuer d'autres actions nécessaires
    } else {
      alert('Veuillez remplir correctement le formulaire avant de soumettre.');
    }
  }
  

  // Méthodes pour accéder facilement aux contrôles du formulaire dans le template HTML
  public get nameControl() {
    return this.contactForm.get('name')!;
  }

  public get emailControl() {
    return this.contactForm.get('email')!;
  }

  public get subjectControl() {
    return this.contactForm.get('subject')!;
  }

  public get messageControl() {
    return this.contactForm.get('message')!;
  }
}
