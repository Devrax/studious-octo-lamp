import { Component, Host, h, Prop, State } from "@stencil/core";
import { countryTimezone } from "./countriesTimezone";

@Component({
    tag: 'clock-time',
})
export class ClockTime {

// 1- Ajustamos las propiedades estaticas, y luego decoramos las propiedades de atributos y estados reactivos
    clockIntervalId: NodeJS.Timeout;
    @Prop() timeZoneOffset: number = 0;
    @State() clockTime = '';

    // 3- En el método componentWillLoad() iniciamos el reloj con el timezoneOffset
    componentWillLoad() {
        if(typeof this.timeZoneOffset !== 'number') return;
        this.clockIntervalId = this.startClock(Number(this.timeZoneOffset));
    }

// 4- En el método render() mostramos el tiempo dentro de un elemento <p>
    render() {
        return (
           <Host>
                <p>
                    {this.clockTime}
                </p>
           </Host>
        );
    }

// 5- Creamos el método startClock() y updateTime() que se encargará de iniciar el reloj y actualizar el tiempo cada segundo
    startClock(timeZoneOffset) {
        const offsetInMilliseconds = timeZoneOffset * 60 * 1000;
    
        this.updateTime(timeZoneOffset, offsetInMilliseconds); // Llamar una vez inmediatamente
        return setInterval(() => this.updateTime(timeZoneOffset, offsetInMilliseconds), 1000); // Actualizar cada segundo
    }

    updateTime(timeZoneOffset: number, offsetInMilliseconds: number) {
        if(!(countryTimezone?.[timeZoneOffset])) {
            this.clockTime = 'Ingrese un timezone aceptable: 0, 60, 120, 180, 240, 300, 330, 360, 420, 480, 540, 600, 660, 720, -60';
            return;
        }
        const now = new Date();
        const localTime = new Date(now.getTime() + offsetInMilliseconds);
        
        const hours = String(localTime.getUTCHours()).padStart(2, '0');
        const minutes = String(localTime.getUTCMinutes()).padStart(2, '0');
        const seconds = String(localTime.getUTCSeconds()).padStart(2, '0');

        const formattedTime = `${hours}:${minutes}:${seconds} ${countryTimezone[timeZoneOffset].country} ${countryTimezone[timeZoneOffset].UTC}`;
        this.clockTime = formattedTime; // Aquí puedes actualizar el DOM o cualquier otro elemento
    }

// 6- En el método disconnectedCallback() limpiamos el intervalo cuando el componente sea removido del DOM
    disconnectedCallback() {
        clearInterval(this.clockIntervalId);
    }

}