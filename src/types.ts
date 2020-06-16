export interface Weather {
    temp: number;
    coord: Coord;
    windspeed: Wind;
    humidity: number;
    alert: string
}

interface Wind {
    speed: number;
    deg: number;
}

interface Coord {
    lat: number;
    lon: number;
}
