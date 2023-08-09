import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  option1 = true;
  option2 = true;
  option3 = true;

  log(value) {
    return ' [' + value + ', ' + typeof value + ']';
  }

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  });
}
