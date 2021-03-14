import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  success(title: string, textMessage: string, textbutton: string) {
    return Swal.fire({
      title: title,
      text: textMessage,
      icon: 'success',
      confirmButtonText: textbutton
    })
  }

  error(title: string, textMessage: string, textbutton: string) {
    return Swal.fire({
      title: title,
      text: textMessage,
      icon: 'error',
      confirmButtonText: textbutton
    });
  }

  warning(title: string, textMessage: string, textbutton: string) {
    return Swal.fire({
      title: title,
      text: textMessage,
      icon: 'warning',
      confirmButtonText: textbutton
    });
  }

  info(title: string, textMessage: string, textbutton: string) {
    return Swal.fire({
      title: title,
      text: textMessage,
      icon: 'info',
      confirmButtonText: textbutton
    });
  }
}
