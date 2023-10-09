import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: (error) => this.toastr.error(error.error),
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
