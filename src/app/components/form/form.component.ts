import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  sendEmail(
      firstName: string,
      lastName: string,
      email: string,
      phoneNumber: string,
      choice: string,
      preference: string,
      size: string,
      customize: string
  ) {
    console.warn({
      firstName,
      lastName,
      email,
      phoneNumber,
      choice,
      preference,
      size,
      customize
    });

    const saveFormData = new SaveFormData(
      firstName,
      lastName,
      email,
      phoneNumber,
      choice,
      preference,
      size,
      customize
    );
    saveFormData.saveData();
  }
}

export class SaveFormData{

  // IFTT setups
  eventName: string = "matka_yogurt";
  key: string = "LpRdvJ-I_hS8a7FtEGiGO";

  // Specific to matka yogurt 
  prefernces: string[] = [
    "Sweet",
    "UnSweet",
    "Fat",
    "Non-Fat"
  ];

  sizes: string[] = [
    "Small",
    "Medium",
    "Large",
    "Premium",
    "Gift"
  ];

  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  choice: string;
  preference: string;
  size: string;
  customize: string;

  constructor(
    firstName: string, 
    lastName: string,
    email: string,
    contactNumber: string,
    choice: string,
    preference: string,
    size: string,
    customize: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.contactNumber = contactNumber;
    this.choice = choice;
    this.preference = this.prefernces[Number(preference)];
    this.size = this.sizes[Number(size)];
    this.customize = customize;
  }

  public saveData() {
    axios({
      method: 'get',
      url: `https://maker.ifttt.com/trigger/${this.eventName}/with/key/${this.key}?value1=${this.getValue1()}&value2=${this.getValue2()}&value3=${this.getValue3()}`
    })
    .catch(error => {
      console.log(error);
    });
  }

  private getValue1(): string {
    return `${this.firstName} ${this.lastName} - ${this.contactNumber} ${this.email}`;
  }

  private getValue2(): string {
    return `${this.choice} with ${this.preference} for ${this.size}`
  }

  private getValue3(): string {
    return this.customize;
  }
  
}