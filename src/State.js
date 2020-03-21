import { latLng } from "leaflet";

class State {
    constructor(posX, posY, confirmedCases, suspiciousCases, deaths) {
        this["lat-lng"] = latLng(posY, posX);
        this.fillOpacity = 0.5;
        this.confirmedCases = confirmedCases;
        this.suspiciousCases = suspiciousCases;
        this.deaths = deaths;
    }

    setConfirmedCases(confirmedCases) {
        this.confirmedCases = confirmedCases;
        this.setStyle();
    }

    setStyle() {
        if (this.confirmedCases > 30000) {
            this.radius = 300000;
            this.color = '#770000';
            this.fillColor = "#770000";
        } else if (this.confirmedCases > 15000) {
            this.radius = 250000;
            this.color = '#880000';
            this.fillColor = "#880000";
        } else if (this.confirmedCases > 5000) {
            this.radius = 200000;
            this.color = '#990000';
            this.fillColor = "#990000";
        } else if (this.confirmedCases > 2000) {
            this.radius = 170000;
            this.color = '#990000';
            this.fillColor = "#990000";
        } else if (this.confirmedCases > 1000) {
            this.radius = 150000;
            this.color = '#AA0000';
            this.fillColor = "#AA0000";
        } else if (this.confirmedCases > 500) {
            this.radius = 140000;
            this.color = '#BB0000';
            this.fillColor = "#BB0000";
        } else if (this.confirmedCases > 200) {
            this.radius = 120000;
            this.color = '#CC0000';
            this.fillColor = "#CC0000";
        } else if (this.confirmedCases > 100) {
            this.radius = 100000;
            this.color = '#DD0000';
            this.fillColor = "#DD0000";
        } else if (this.confirmedCases > 40) {
            this.radius = 70000;
            this.color = '#EE0000';
            this.fillColor = "#EE0000";
        } else if (this.confirmedCases > 20) {
            this.radius = 50000;
            this.color = '#FF0000';
            this.fillColor = "#FF0000";
        } else {
            this.radius = 20000;
            this.color = '#FF3333';
            this.fillColor = "#FF3333";
        }
    }
}

export default State;