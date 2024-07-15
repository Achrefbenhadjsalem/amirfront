import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../Les Services/contact-us.service';
import { ContactUs } from '../les classes/ContactUs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  successMessage: string = '';
  isFormSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private contactUsService: ContactUsService) {
    this.contactForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactUsData: ContactUs = this.contactForm.value;
      this.contactUsService.addContactUs(contactUsData).subscribe(
        (response) => {
          console.log('Contact Us request added successfully', response);
          this.successMessage = 'Your contact request has been successfully submitted.';
          this.isFormSubmitted = true;
          this.contactForm.reset();
        },
        (error) => {
          console.error('Error adding contact us request', error);
        }
      );
    } else {
      console.error('Invalid form');
    }
  }

  // Méthodes pour accéder facilement aux contrôles du formulaire dans le template HTML
  public get fullnameControl() {
    return this.contactForm.get('fullname')!;
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
