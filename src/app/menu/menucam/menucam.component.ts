import { Component } from '@angular/core';

@Component({
  selector: 'app-menucam',
  templateUrl: './menucam.component.html',
  styleUrl: './menucam.component.css'
})
export class MenucamComponent {
 
  toggleSubMenu(event: Event): void {
    // Detener la propagación del evento para evitar efectos no deseados
    event.stopPropagation();

    // Acceder al elemento clicado y gestionar el despliegue/ocultamiento del submenú
    const target = event.target as HTMLAnchorElement;
    const subMenu = target.nextElementSibling;

    if (subMenu && !subMenu.classList.contains('visible')) {
      // Ocultar otros submenús visibles
      this.hideVisibleSubMenus();
      
      // Mostrar el submenú actual
      subMenu.classList.add('visible');
    } else {
      // Ocultar el submenú actual
      subMenu?.classList.remove('visible');
    }
  }

  private hideVisibleSubMenus(): void {
    const visibleSubMenus = document.querySelectorAll('#leftside-navigation ul ul.visible');

    visibleSubMenus.forEach((subMenu) => {
      subMenu.classList.remove('visible');
    });
  }
}